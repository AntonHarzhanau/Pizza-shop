import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import stripe, { Stripe } from 'stripe';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import { sendEmail } from '@/shared/lib';
import { OrderSeccessTemplate } from '@/shared/components/shared';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
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

  if (event.type.startsWith('payment_intent.')) {
    const pi = event.data.object as Stripe.PaymentIntent;
    const orderId = pi.metadata?.orderId ? Number(pi.metadata.orderId) : null;

    if (!orderId) return NextResponse.json({ received: true });

    try {
      if (event.type === 'payment_intent.succeeded') {
        await prisma.order.update({
          where: { id: orderId },
          data: { status: 'SUCCEEDED', paymentId: pi.id },
        });

        const order = await prisma.order.findUnique({ where: { id: orderId } });

        if (!order) {
          return NextResponse.json({ received: true });
        }

        const items = order?.items as unknown as CartItemDTO[];

        await sendEmail(
          order.email,
          'Pizza Shop / Your order has been successfully placed. 🎉',
          OrderSeccessTemplate({
            orderId: order.id,
            items,
          }) as React.ReactElement
        );

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
      } else if (
        event.type === 'payment_intent.payment_failed' ||
        event.type === 'payment_intent.canceled'
      ) {
        await prisma.order.update({
          where: { id: orderId },
          data: { status: 'CANCELLED', paymentId: pi.id },
        });

        // TODO: send the user an email about an unsuccessful payment
      }
    } catch (e) {
      console.error('[Stripe PI webhook error]', event.type, e);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
