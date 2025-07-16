'use client';

import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import CategoryProductsDialog from '@/components/shared/category-products-dialog';
import { getCategoryProducts } from '@/lib/categoryProducts';
import { CategoryProductsData } from '@/lib/categoryProducts';
import React, { useState } from 'react';

interface EquipmentItem {
  id: number;
  title: string | React.ReactNode;
  imageUrl: string;
  categorySlug?: string;
  columnSpan?: string;
}

interface AvailableEquipmentProps {
  title?: string;
  highlightedWord?: string;
  equipment: EquipmentItem[];
  className?: string;
}

function ServiceCategories({
  title = 'Available Equipment',
  highlightedWord = 'Equipment',
  equipment,
  className = '',
}: AvailableEquipmentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategoryData, setSelectedCategoryData] =
    useState<CategoryProductsData | null>(null);
  const [selectedCategoryTitle, setSelectedCategoryTitle] =
    useState('');
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = async (item: EquipmentItem) => {
    if (!item.categorySlug) {
      // If no category slug, just show a message or do nothing
      return;
    }

    setIsDialogOpen(true);
    setSelectedCategoryTitle(
      typeof item.title === 'string'
        ? item.title
        : 'Category Products'
    );
    setLoading(true);
    try {
      const data = await getCategoryProducts(item.categorySlug);
      setSelectedCategoryData(data);
    } catch (error) {
      console.error('Error fetching category products:', error);
      setSelectedCategoryData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCategoryData(null);
    setSelectedCategoryTitle('');
    setLoading(false);
  };

  return (
    <section className={`mt-16 md:mt-24 ${className}`}>
      <Container>
        <div>
          <SectionHeader
            highlightedWord={highlightedWord}
            className="leading-snug hidden lg:block"
            size="base">
            {title}
          </SectionHeader>
          <SectionHeader
            highlightedWord={highlightedWord}
            className="leading-snug lg:hidden"
            size="md">
            {title}
          </SectionHeader>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {equipment.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => handleCategoryClick(item)}
                className={`h-72 md:h-80 lg:h-96 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden ${item.columnSpan}`}>
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="z-20 flex flex-col justify-between w-full">
                  <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                    {item.id.toString().padStart(2, '0')}
                  </span>

                  <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                    <span className="text-lg md:text-2xl lg:text-3xl text-white uppercase leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <CategoryProductsDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        data={selectedCategoryData}
        categoryTitle={selectedCategoryTitle}
        loading={loading}
      />
    </section>
  );
}

export default ServiceCategories;
