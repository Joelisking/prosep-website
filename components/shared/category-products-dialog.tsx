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
        <DialogContent
          showCloseButton={false}
          className="w-[90vw] sm:w-[95vw] max-w-7xl min-h-[40vh] max-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#033E86] to-[#04274C] mx-auto">
          <div className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4">
            <DialogHeader>
              <DialogTitle>
                <span className="relative flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 border-2 sm:border-3 lg:border-4 border-white border-t-transparent animate-spin"></span>
                </span>
              </DialogTitle>
            </DialogHeader>
            <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center px-4">
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
        <DialogContent className="w-[90vw] sm:w-[95vw] max-w-7xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[#033E86] to-[#04274C] mx-auto">
          <DialogHeader className="pb-4 sm:pb-6 lg:pb-8 border-b border-blue-100/30">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-0.5 sm:w-1 h-6 sm:h-8 bg-blue-600 rounded-full"></div>
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {categoryTitle}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="py-6 sm:py-8 md:py-12 lg:py-16 text-center px-2 sm:px-4 lg:px-6">
            <div className="mb-3 sm:mb-4 md:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              No products available
            </h3>
            <p className="text-blue-100 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg max-w-md mx-auto">
              This category doesn&apos;t have any products yet.
            </p>

            <div className="bg-white/95 backdrop-blur-sm border border-blue-100/50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md md:max-w-lg mx-auto shadow-lg">
              <p className="text-gray-700 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg font-medium">
                We&apos;re constantly updating our inventory.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
                Please check back later or contact us for more
                information about products.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] sm:w-[95vw] max-w-7xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[#033E86] to-[#04274C] mx-auto">
        <DialogHeader className="pb-4 sm:pb-6 lg:pb-8 border-b border-white/30">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-0.5 sm:w-1 h-6 sm:h-8 bg-[#CE0C24] rounded-full"></div>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {categoryTitle}
            </DialogTitle>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[#CE0C24] rounded-full animate-pulse"></div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-white">
                {data.products.length} product
                {data.products.length !== 1 ? 's' : ''} available
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="pt-4 sm:pt-6 lg:pt-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {data.products.map((product, index) => (
              <div
                key={product.id}
                className="relative group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}>
                <CategoryProductCard product={product} />

                {/* Hover overlay for desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none hidden sm:block"></div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CategoryProductsDialog;
