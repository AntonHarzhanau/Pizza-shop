import { cn } from '@/shared/lib/utils';
import React from 'react';

import * as CartItem from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details-types';
import { CountButton } from './count-button';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-2xl bg-white p-5 sm:flex-row sm:gap-6',
        { 'opacity-50 pointer-events-none': disabled },
        className
      )}
    >
      <div className="flex items-center gap-4">
        <CartItem.Image src={imageUrl} />
        <CartItem.Info name={name} details={details} />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <hr className="border-gray-100" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <CartItem.Price value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
