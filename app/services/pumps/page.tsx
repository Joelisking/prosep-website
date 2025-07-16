import TopProducts from '@/components/shared/top-products';
import ServiceCategories from '@/components/shared/service-categories';
import PageHero from '@/components/shared/hero';
import OfferedServices from '@/components/shared/offered-services';
import { getTopProducts } from '@/lib/topProducts';
import React from 'react';

export default async function Pumps() {
  const topProductsData = await getTopProducts('pumps');

  return (
    <main>
      <PageHero title="Pumps." />
      <ServiceCategories
        equipment={[
          {
            id: 1,
            title: <>Surface Pumps</>,
            imageUrl: '/services/pumps/surface.jpg',
            categorySlug: 'surface-pumps',
          },
          {
            id: 2,
            title: <>Submersible Pumps</>,
            imageUrl: '/services/pumps/submersible.jpg',
            categorySlug: 'submersible-pumps',
          },
          {
            id: 3,
            title: <>Borehole Pumps</>,
            imageUrl: '/services/pumps/borehole.jpg',
            categorySlug: 'borehole-pumps',
          },
        ]}
      />
      <OfferedServices
        services={['Sales', 'Support', 'Maintenance']}
        image={{
          src: '/services/pumps/pumps.png',
          alt: 'Pumps',
        }}
        title="Services We Offer"
        highlightedWord="We Offer"
        description="We offer a wide range of mining and general industry services to meet your needs."
      />

      <TopProducts data={topProductsData} className="mt-32" />
    </main>
  );
}
