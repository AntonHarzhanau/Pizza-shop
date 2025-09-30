"use client";

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { SlidersHorizontal } from 'lucide-react';
import { Filters } from './filters';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const MobileFilters: React.FC<Props> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className={cn(
            'inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:h-[52px] md:w-auto md:px-5',
            className
          )}
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="h-full w-full max-w-sm gap-0 border-r p-0 sm:max-w-md"
        aria-describedby={undefined}
      >
        <SheetHeader className="border-b p-6 pb-4">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 pt-4">
          <Filters idPrefix="mobile-" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

