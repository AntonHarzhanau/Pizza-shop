import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '@/shared/components/ui';
import { Plus } from 'lucide-react';
import { formatPrice } from '@/shared/lib/utils';
// import { Ingredient } from '@prisma/client';

interface Props {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageUrl: string;
  // ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  description,
  imageUrl,
  // ingredients,
  className,
}) => {

  return (
    <div className={className}>
      <Link href={`/product/${id}`} scroll={false}>
        <div className="flex h-48 items-center justify-center rounded-lg bg-secondary p-4 transition-transform duration-200 sm:h-60">
          <img
            className="h-full w-full max-h-48 max-w-[220px] object-contain sm:max-h-60"
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title
          text={name}
          size="sm"
          className="mb-1 mt-3 line-clamp-2 font-bold"
        />

        <p className="text-sm text-gray-400">
          {/* {ingredients.map((ingredient) => ingredient.name).join(', ')} */}
          {description}
        </p>

        <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg sm:text-[20px]">
            from <b>{formatPrice(price)} €</b>
          </span>

          <Button
            variant="secondary"
            className="w-full text-base font-bold sm:w-auto"
          >
            <Plus size={20} className=" mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
