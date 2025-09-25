import { stripe } from '@/shared/lib/stripe';

type LineItem = { name: string; unitAmount: number; quantity: number };

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
  const items =
    lineItems?.length
      ? lineItems.map((i) => ({
          price_data: {
            currency,
            product_data: { name: i.name },
            unit_amount: Math.round(i.unitAmount * 100),
          },
          quantity: i.quantity,
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
      line_items: items,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        orderId: String(orderId),
      },
    },
    {
      // защита от повторов
      idempotencyKey: `checkout-session:${orderId}`,
    }
  );

  return session; // session.id, session.url
}
