import Container from '@/components/shared/container';
import { ProductCard } from '@/components/shared/product-card';
import SectionHeader from '@/components/shared/section-header';
import { TopProductsData } from '@/lib/topProducts';
import React from 'react';

interface TopProductsProps {
  data: TopProductsData | null;
  className?: string;
}

function TopProducts({
  data,
  className = 'mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32',
}: TopProductsProps) {
  // If no data is provided, don't render anything
  if (!data || !data.products || data.products.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <Container>
        <SectionHeader
          highlightedWord={data.highlightedWord}
          className="leading-snug hidden lg:block"
          size="base">
          {data.title}
        </SectionHeader>
        <SectionHeader
          highlightedWord={data.highlightedWord}
          className="leading-snug lg:hidden"
          size="md">
          {data.title}
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TopProducts;
