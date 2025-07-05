import Container from '@/components/shared/container';
import { ProductCard } from '@/components/shared/product-card';
import SectionHeader from '@/components/shared/section-header';
import { Product } from '@/lib/types';
import React from 'react';

const products: Product[] = [
  {
    id: 'lockout',
    name: 'Lockout Tagout',
    category: 'Padlock',
    imageSrc: '/home/top-products/lockout.png',
    imageAlt: 'lockout',
  },
  {
    id: 'cctv',
    name: 'CCTV Systems',
    category: 'Security',
    imageSrc: '/home/top-products/cctv.png',
    imageAlt: 'cctv',
  },
  {
    id: 'combi',
    name: 'Combination Locks',
    category: 'Padlock',
    imageSrc: '/home/top-products/combi.png',
    imageAlt: 'combination lock',
  },
];

function TopProducts() {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32">
      <Container>
        <SectionHeader
          highlightedWord="Top Products"
          className="leading-snug hidden lg:block"
          size="base">
          Our Top Products
        </SectionHeader>
        <SectionHeader
          highlightedWord="Top Products"
          className="leading-snug lg:hidden"
          size="md">
          Our Top Products
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TopProducts;
