import { stripe } from '@/shared/lib/stripe';
import crypto from 'crypto';

export type LineItem = { name: string; unitAmount: number; quantity: number };

type CreateCheckoutSessionParams = {
  orderId: number;
  amountTotal: number;
  currency?: string;
  successUrl: string;
  cancelUrl: string;
  lineItems?: LineItem[];
  description?: string;
};

export async function createCheckoutSession({
  orderId,
  amountTotal,
  currency = 'eur',
  successUrl,
  cancelUrl,
  lineItems,
  description = `Order #${orderId}`,
}: CreateCheckoutSessionParams) {
  const idempotencyKey = crypto
    .createHash('sha256')
    .update(`checkout-session:${orderId + amountTotal}`)
    .digest('hex');

  const paymentLineItems = lineItems?.length
    ? lineItems.map((item) => ({
        price_data: {
          currency,
          product_data: { name: item.name },
          unit_amount: Math.round(item.unitAmount * 100),
        },
        quantity: item.quantity,
      }))
    : [
        {
          price_data: {
            currency,
            product_data: { name: description },
            unit_amount: Math.round(amountTotal * 100),
          },
          quantity: 1,
        },
      ];

  const session = await stripe.checkout.sessions.create(
    {
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: paymentLineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      payment_intent_data: {
        metadata: {
          orderId: String(orderId),
          amountTotal: amountTotal.toFixed(2),
        },
      },
    },
    {
      idempotencyKey,
    }
  );

  return session;
}
