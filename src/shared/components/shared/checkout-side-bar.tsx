import React from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Title } from './title';
import { Button } from '../ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  totalAmount: number;
  className?: string;
}

const VAT = 2;
const DELIVERY_PRICE = 2;

export const CheckoutSideBar: React.FC<Props> = ({
  totalAmount,
  className,
}) => {
  const vatPrice = (totalAmount + VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1 border-b border-gray-200">
        <Title text="Total" size="lg" />
        <span className="text-3xl font-extrabold">
          {totalPrice} €
        </span>
      </div>
      <CheckoutItemDetails
        title={
          <>
            <Package className="mr-2 text-gray-300" />
            'Cost of food:'
          </>
        }
        value={`${totalAmount}`}
      />
      <CheckoutItemDetails
        title={
          <>
            <Percent className="mr-2 text-gray-300" />
            'Taxes:'
          </>
        }
        value={`${vatPrice} €`}
      />
      <CheckoutItemDetails
        title={
          <>
            <Truck className="mr-2 text-gray-300" />
            'Delivery:'
          </>
        }
        value={`${DELIVERY_PRICE} €`}
      />

      <Button
        type="submit"
        disabled={false}
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Proceed to payment
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
