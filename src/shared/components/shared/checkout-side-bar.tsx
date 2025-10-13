import React from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Title } from './title';
import { Button, Skeleton } from '../ui';
import { cn, formatPrice } from '@/shared/lib/utils';

interface Props {
  totalAmount: number;
  loading: boolean;
  className?: string;
}

const VAT = 2;
const DELIVERY_PRICE = 2;

export const CheckoutSideBar: React.FC<Props> = ({
  totalAmount,
  loading,
  className,
}) => {
  const vatPrice = (totalAmount + VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock
      className={cn(
        'p-6 shadow-sm xl:sticky xl:top-6',
        className
      )}
    >
      <div className="flex flex-col gap-1 border-b border-gray-200 pb-4">
        <Title text="Total" size="lg" />
        {loading ? (
          <Skeleton className="w-48 h-11" />
        ) : (
          <span className="h-11 text-3xl font-extrabold">
            {formatPrice(totalPrice)} €
          </span>
        )}
      </div>
      <CheckoutItemDetails
        title={
          <>
            <Package className="mr-2 text-gray-300" />
            Cost of food:
          </>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-24" />
          ) : (
            `${formatPrice(totalAmount)} €`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <>
            <Percent className="mr-2 text-gray-300" />
            Taxes:
          </>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-24" />
          ) : (
            `${formatPrice(vatPrice)} €`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <>
            <Truck className="mr-2 text-gray-300" />
            Delivery:
          </>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-24" />
          ) : (
            `${formatPrice(DELIVERY_PRICE)} €`
          )
        }
      />

      <Button
        loading={loading}
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
