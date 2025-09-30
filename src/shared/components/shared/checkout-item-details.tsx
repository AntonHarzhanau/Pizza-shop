import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  title?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({
  title,
  value,
  className,
}) => {
  return (
    <div
      className={cn(
        'my-4 flex flex-wrap items-center justify-between gap-2 text-base text-neutral-500',
        className
      )}
    >
      <span className="flex items-center gap-2">{title}</span>

      <span className="text-lg font-bold text-foreground">{value}</span>
    </div>
  );
};
