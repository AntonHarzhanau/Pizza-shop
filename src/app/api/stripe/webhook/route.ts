import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export const runtime = 'nodejs'; // важно: нужен Node runtime для чтения сырого тела

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const sig = req.headers.get('stripe-signature')!;

  // Внимание: нужно сырое тело. В App Router можно читать через req.text()
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Главное событие для Checkout:
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    if (orderId) {
      // 1) помечаем заказ оплаченным
      await prisma.order.update({
        where: { id: Number(orderId) },
        data: { status: 'SUCCEEDED' },
      });

      // 2) (опционально) чистим корзину, если хранишь token у заказа
      const order = await prisma.order.findUnique({
        where: { id: Number(orderId) },
      });
      if (order?.token) {
        const cart = await prisma.cart.findFirst({
          where: { token: order.token },
        });
        if (cart) {
          await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
          await prisma.cart.update({
            where: { id: cart.id },
            data: { totalAmount: 0 },
          });
        }
      }

      // 3) (опционально) отправь письмо «Оплата получена»
    }
  }

  return NextResponse.json({ received: true });
}
