import { cn, formatPrice } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return (
    <h3 className={cn('font-bold', className)}>
      {formatPrice(value)}€
    </h3>
  );
};
