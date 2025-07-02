import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import React from 'react';
import { Product, ProductCard } from './product-card';

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
    name: 'Lockout Tagout',
    category: 'Padlock',
    imageSrc: '/home/top-products/cctv.png',
    imageAlt: 'cctv',
  },
  {
    id: 'combi',
    name: 'Lockout Tagout',
    category: 'Padlock',
    imageSrc: '/home/top-products/combi.png',
    imageAlt: 'combination lock',
  },
];

function TopProducts() {
  return (
    <section className="mt-32">
      <Container>
        <SectionHeader
          highlightedWord="Top Products"
          className="leading-snug hidden lg:block"
          size="base">
          Our Top Products
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TopProducts;
