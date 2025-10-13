'use client';

import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/shared/store';
import React from 'react';
import toast from 'react-hot-toast';
import { useShallow } from 'zustand/react/shallow';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';

interface Props {
  product: ProductWithRelations;
  _onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, _onSubmit }) => {
  const [addCartItem, loading] = useCartStore(
    useShallow((state) => [state.addCartItem, state.loading])
  );
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    const itemId = productItemId ?? firstItem.id;
    try {
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(`${product.name} added to cart`);
      _onSubmit?.();
    } catch (error) {
      console.error(error);
      toast.error(`Failed to add ${product.name} to cart`);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        description={product.description ?? undefined}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }
  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      description={product.description ?? undefined}
      price={firstItem.price}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
