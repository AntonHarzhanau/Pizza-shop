import { cn } from '@/shared/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-50 px-4 py-3 text-sm cursor-pointer md:h-[52px] md:w-auto md:justify-between md:px-5',
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Sort</b>
      <b className="text-primary">Popular</b>
    </div>
  );
};
