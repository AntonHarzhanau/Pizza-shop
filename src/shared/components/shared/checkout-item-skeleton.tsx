import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Skeleton } from '../ui';

interface Props {
  className?: string;
}

export const CheckoutItemSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('w-full flex items-center justify-between gap-5', className)}>
        <Skeleton className="w-[50px] h-[50px] rounded-full " />
      
        <Skeleton className="w-40 h-5 rounded" />
        
        <Skeleton className="h-5 w-10 rounded" />
        
        <Skeleton className="h-8 w-[133px] rounded" />
      </div>
  );
};
