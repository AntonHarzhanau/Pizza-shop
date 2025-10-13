'use server';

import { CheckoutFormValues } from '@/shared/constants';
import { prisma } from '@/prisma/prisma-client';
import { cookies } from 'next/headers';
import { calcCartItemTotalPrice, sendEmail } from '@/shared/lib';
import {
  PayOrderTemplate,
  VerificationUserTemplate,
} from '@/shared/components';
import React from 'react';
import {
  createCheckoutSession,
  LineItem,
} from '@/server/payments/stripe-service';
import { OrderStatus, Prisma } from '@prisma/client';
import { getUserSession } from '@/shared/lib/get-user-session';
import { hashSync } from 'bcrypt';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = await cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Cart token not found');
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error('Cart not found');
    }

    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: userCart.items,
      },
    });
    // TODO : implement payment service
    const lineItems: LineItem[] = userCart.items.map((item) => {
      const unitWithAddons =
        (calcCartItemTotalPrice(item) || 0) / item.quantity || 0;

      return {
        name: item.productItem.product.name,
        unitAmount: unitWithAddons,
        quantity: item.quantity,
      };
    });

    // Take it out to a separate place
    const VAT = 2;
    const DELIVERY_PRICE = 2;

    const vatPrice = (userCart.totalAmount + VAT) / 100;
    const totalPrice = userCart.totalAmount + DELIVERY_PRICE + vatPrice;

    if (vatPrice > 0) {
      lineItems.push({
        name: 'Taxes',
        unitAmount: vatPrice,
        quantity: 1,
      });
    }

    if (DELIVERY_PRICE > 0) {
      lineItems.push({
        name: 'Delivery',
        unitAmount: DELIVERY_PRICE,
        quantity: 1,
      });
    }

    const session = await createCheckoutSession({
      orderId: order.id,
      amountTotal: totalPrice,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}?paid`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
      description: `Pizza order #${order.id}`,
      lineItems: lineItems,
    });

    // await sendEmail(
    //   data.email,
    //   'Pizza Shop / Pay for order #' + order.id,
    //   PayOrderTemplate({
    //     orderId: order.id,
    //     totalAmount: order.totalAmount,
    //     paymentUrl: 'https://nextjs.org/',
    //   }) as React.ReactElement
    // );
    return session.url!;
  } catch (error) {
    console.error('[CreateOrder]', error);
    return '/';
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const curretUser = await getUserSession();

    if (!curretUser) {
      throw new Error('User not found');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(curretUser.id),
      },
    });

    if (!findUser) {
      throw new Error('The user is not registered');
    }

    await prisma.user.update({
      where: {
        id: Number(curretUser.id),
      },
      data: {
        fullname: body.fullname,
        email: body.email,
        password: body.password
          ? hashSync(body.password as string, 10)
          : findUser.password,
      },
    });
  } catch (error) {
    console.error('Error [UPDATE_USER', error);
    throw error;
  }
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error('Email not confirmed');
      }

      throw new Error('The user already exists');
    }

    const createdUser = await prisma.user.create({
      data: {
        fullname: body.fullname,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      'Pizza Shop / 📝 Registration confirmation',
      VerificationUserTemplate({
        code,
      }) as React.ReactNode
    );
  } catch (error) {
    console.error('Error [CREATE_USER]', error);
  }
}
