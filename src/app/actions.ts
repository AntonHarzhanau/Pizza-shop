'use server';

import { CheckoutFormValues } from '@/shared/constants';
import { prisma } from '@/prisma/prisma-client';
import { cookies } from 'next/headers';
import { sendEmail } from '@/shared/lib';
import { PayOrderTemplate } from '@/shared/components';
import React from 'react';
import {
  createCheckoutSession,
  LineItem,
} from '@/server/payments/stripe-service';
import { OrderStatus } from '@prisma/client';

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
        items: JSON.stringify(userCart.items),
      },
    });
    // TODO : implement payment service
    const lineItems: LineItem[] = userCart.items.map((item) => ({
      name: item.productItem.product.name,
      unitAmount: item.productItem.price,
      quantity: item.quantity,
    }));
    const session = await createCheckoutSession({
      orderId: order.id,
      amountTotal: userCart.totalAmount,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}?session_id={CHECKOUT_SESSION_ID}`,
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
