import { cn, formatPrice } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex w-full min-w-0 flex-col items-center rounded-md bg-white p-2 text-center shadow-md cursor-pointer',
        { 'border border-primary': active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <Image src={imageUrl} width={80} height={80} alt={name} />
      <span className="mb-1 text-xs line-clamp-2">{name}</span>
      <span className="text-sm font-bold">{formatPrice(price)} €</span>
    </div>
  );
};
