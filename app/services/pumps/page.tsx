import TopProducts from '@/components/shared/top-products';
import AvailableEquipment from '@/components/shared/available-equipment';
import PageHero from '@/components/shared/hero';
import OfferedServices from '@/components/shared/offered-services';
import { getTopProducts } from '@/lib/topProducts';
import React from 'react';

export default async function Pumps() {
  const topProductsData = await getTopProducts('pumps');

  return (
    <main>
      <PageHero title="Pumps." />
      <AvailableEquipment
        equipment={[
          {
            id: 1,
            title: <>Surface Pumps</>,
            imageUrl: '/services/pumps/surface.jpg',
          },
          {
            id: 2,
            title: <>Submersible Pumps</>,
            imageUrl: '/services/pumps/submersible.jpg',
          },
          {
            id: 3,
            title: <>Borehole Pumps</>,
            imageUrl: '/services/pumps/borehole.jpg',
          },
          {
            id: 4,
            title: <>Booster Sets</>,
            imageUrl: '/services/pumps/booster.jpg',
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
