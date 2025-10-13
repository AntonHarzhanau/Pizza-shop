import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  description?: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  name,
  description,
  price,
  loading,
  onSubmit,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        'flex h-full min-h-0 flex-col gap-6 overflow-y-auto lg:flex-row lg:gap-8 lg:overflow-hidden'
      )}
    >
      <div className="flex w-full flex-1 items-center justify-center bg-white p-6 sm:p-8 lg:min-h-0">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 z-10 h-60 w-60 transition-all duration-300 object-contain sm:h-72 sm:w-72"
        />
      </div>

      <div className="flex w-full flex-1 flex-col bg-[#f7f6f5] p-6 sm:p-8 lg:min-h-0">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-sm text-gray-500 sm:text-base">{description}</p>


        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="mt-auto h-[55px] w-full rounded-[18px] px-6 text-base"
        >
          Add to cart for {price} €
        </Button>
      </div>
    </div>
  );
};
