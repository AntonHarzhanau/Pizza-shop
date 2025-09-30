'use client';

import React from 'react';
import { CartItemProps } from './cart-item-details/cart-item-details-types';
import { cn } from '@/shared/lib/utils';
import * as CartItemDetails from './cart-item-details';
import { X } from 'lucide-react';

interface Props extends CartItemProps {
  className?: string;
  onClickRemove?: () => void;
  onClickCountButton?: (type: 'plus' | 'minus') => void;
}

export const CheckoutItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  disabled,
  className,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:border-0 sm:p-0',
        { 'opacity-50 pointer-events-none': disabled },
        className
      )}
    >
      <div className="flex flex-1 items-center gap-4 sm:gap-5">
        <CartItemDetails.Image src={imageUrl} />
        <CartItemDetails.Info name={name} details={details} />
      </div>

      <CartItemDetails.Price
        value={price}
        className="text-lg sm:text-xl"
      />

      <div className="flex items-center justify-between gap-4 sm:ml-20 sm:gap-5">
        <CartItemDetails.CountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button onClick={onClickRemove} className="text-gray-400">
          <X
            className="h-5 w-5 cursor-pointer transition-colors hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};
