import { ProductItem, Ingredient } from '@prisma/client';
import { PizzaType, PizzaSize, mapPizzaType } from '../constants/pizza';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number> = new Set<number>()
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} cm, ${mapPizzaType[type]} dough`;

  return { totalPrice, textDetails };
};
