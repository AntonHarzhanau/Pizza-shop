'use client';

import React from 'react';
import { Title } from '@/shared/components/shared';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks';

interface Props {
  className?: string;
  idPrefix?: string;
}

export const Filters: React.FC<Props> = ({ className, idPrefix = '' }) => {
  const MAX_PRICE = 50;
  const MIN_PRICE = 0;
  const STEP_PRICE = 1;

  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrises = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        name={`${idPrefix}pizzaTypes`}
        title="Type of dough"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Thin', value: '1' },
          { text: 'Traditional', value: '2' },
        ]}
        className="mb-5"
      />

      <CheckboxFiltersGroup
        title="Sizes"
        name={`${idPrefix}sizes`}
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 Cm', value: '20' },
          { text: '30 Cm', value: '30' },
          { text: '40 Cm', value: '40' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 pt-6 pb-7">
        <p className="font-bold mb-3">Price from ... to: </p>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <Input
            type="number"
            placeholder="0"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={filters.prices.priceFrom ?? ''}
            onChange={(e) =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={filters.prices.priceTo ?? ''}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP_PRICE}
          value={[
            filters.prices.priceFrom || MIN_PRICE,
            filters.prices.priceTo || MAX_PRICE,
          ]}
          onValueChange={updatePrises}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ingridients"
        name={`${idPrefix}ingredients`}
        className="mt-5"
        limit={6}
        loading={loading}
        defaultItems={items.slice(0, 6)}
        items={items}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};

