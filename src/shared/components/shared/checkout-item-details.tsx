import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  title?: React.ReactNode;
  value?: string;
  className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({
  title,
  value,
  className,
}) => {
  return (
    <div className={cn('flex my-4', className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        {title}
        <div className=" font-bold text-lg" />
      </span>

      <span className="font-bold text-lg">{value}</span>
    </div>
  );
};
