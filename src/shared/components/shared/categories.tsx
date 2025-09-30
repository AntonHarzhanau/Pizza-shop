'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';
import React from 'react';

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('w-full', className)}>
      <nav className="flex gap-1 overflow-x-auto rounded-2xl bg-gray-50 p-1 text-sm sm:text-base">
        {items.map(({ name, id }, index) => (
          <a
            className={cn(
              'flex min-w-max items-center rounded-2xl px-4 py-2 font-semibold transition-colors duration-200 sm:h-11 sm:px-5',
              categoryActiveId === id
                ? 'bg-white text-primary shadow-md shadow-gray-200'
                : 'text-gray-600 hover:bg-white/70'
            )}
            href={`#${name}`}
            key={index}
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
};
