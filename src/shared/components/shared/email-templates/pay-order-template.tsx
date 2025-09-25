import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>The order #{orderId}</h1>

    <p>
      Pay for your order in the amount of <b>{totalAmount} €</b>. Follow this{' '}
      <a href={paymentUrl}>link</a> to pay.
    </p>
  </div>
);
