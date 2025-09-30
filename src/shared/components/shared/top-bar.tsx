import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container, MobileFilters, SortPopup } from '@/shared/components/shared';
import { Categories } from '@/shared/components/shared';
import { Category } from '@prisma/client';

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Categories items={categories} />
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <MobileFilters className="lg:hidden" />
          <SortPopup className="w-full sm:w-auto" />
        </div>
      </Container>
    </div>
  );
};

