import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  const sizeClasses: Record<Props['size'], string> = {
    20: 'h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px]',
    30: 'h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]',
    40: 'h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px]',
  };

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center',
        className
      )}
    >
      <img
        src={imageUrl}
        alt=""
        className={cn(
          'relative left-2 top-2 z-10 transition-all duration-300',
          sizeClasses[size]
        )}
      />

      <div className="absolute left-1/2 top-1/2 hidden h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-100 sm:block lg:h-[450px] lg:w-[450px]" />
      <div className="absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 lg:block" />
    </div>
  );
};
