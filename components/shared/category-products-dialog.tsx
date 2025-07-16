'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CategoryProductCard } from '@/components/shared/category-product-card';
import { CategoryProductsData } from '@/lib/categoryProducts';
import React from 'react';

interface CategoryProductsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: CategoryProductsData | null;
  categoryTitle: string;
  loading?: boolean;
}

function CategoryProductsDialog({
  isOpen,
  onClose,
  data,
  categoryTitle,
  loading = false,
}: CategoryProductsDialogProps) {
  if (loading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="min-w-6xl max-h-[80vh] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center py-16">
            <span className="relative flex h-12 w-12 mb-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></span>
            </span>
            <span className="text-gray-600 text-lg">
              Loading products...
            </span>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!data || !data.products || data.products.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="min-w-6xl max-h-[80vh] overflow-y-auto">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
              {categoryTitle}
            </DialogTitle>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-lg">No products available</p>
            </div>
          </DialogHeader>
          <div className="py-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products available
            </h3>
            <p className="text-gray-600 mb-4">
              This category doesn&apos;t have any products yet.
            </p>
            <p className="text-sm text-gray-500">
              Please check back later or contact us for more
              information.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-6xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
            {categoryTitle}
          </DialogTitle>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-lg">
              {data.products.length} product
              {data.products.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {data.products.map((product) => (
            <CategoryProductCard key={product.id} product={product} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CategoryProductsDialog;
