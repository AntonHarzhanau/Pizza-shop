'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientItem } from '@/shared/components/shared';
import { usePizzaOptions } from '@/shared/hooks';
import { getPizzaDetails } from '@/shared/lib';

interface Props {
  imageUrl: string;
  name: string;
  description?: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  description,
  ingredients,
  loading,
  onSubmit,
  items,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div
      className={cn(
        className,
        'flex h-full min-h-0 flex-col gap-6 overflow-y-auto lg:flex-row lg:gap-8 lg:overflow-hidden'
      )}
    >
      <div className="flex w-full flex-1 items-center justify-center bg-white p-6 sm:p-8 lg:min-h-0">
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>
      <div className="flex w-full flex-1 flex-col bg-[#f7f6f5] p-6 sm:p-8 lg:min-h-0">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-sm text-gray-500 sm:text-base">{textDetails}</p>
        <p className="text-sm text-gray-500 sm:text-base">{description}</p>

        <div className="mt-5 flex flex-col gap-4">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="mt-5 flex-1 overflow-hidden lg:min-h-0">
          <div className="scrollbar h-full overflow-auto rounded-md bg-gray-50 p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  name={ingredient.name}
                  price={ingredient.price}
                  imageUrl={ingredient.imageUrl}
                  onClick={() => addIngredient(ingredient.id)}
                  active={selectedIngredients.has(ingredient.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="mt-6 h-[55px] w-full rounded-[18px] px-6 text-base"
        >
          Add to cart {totalPrice} €
        </Button>
      </div>
    </div>
  );
};
