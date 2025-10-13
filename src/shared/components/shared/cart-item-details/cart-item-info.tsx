import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  name: string;
  details: string;
  className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ name, details, className }) => {
  return (
    <div>
      <div className={cn('flex items-center justify-between', className)}>
        <h2 className="text-shadow-md font-bold flex-1 leading-5">{name}</h2>
      </div>
      {details && (
        <p className="text-xs text-gray-400 max-w-[80%]">{details}</p>
      )}
    </div>
  );
};
