'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '@/@types/prisma';
import { ProductForm } from '../product-form';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[min(100vw-2rem,1040px)] max-h-[90vh] overflow-hidden bg-white sm:w-[min(100vw-4rem,1040px)]',
          className
        )}
      >
        <DialogTitle />
        <div className="flex max-h-[90vh] flex-1 flex-col overflow-hidden min-h-0">
          <ProductForm product={product} _onSubmit={() => router.back()} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
