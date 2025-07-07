import TopProducts from '@/components/shared/top-products';
import AvailableEquipment from '@/components/shared/available-equipment';
import PageHero from '@/components/shared/hero';
import OfferedServices from '@/components/shared/offered-services';
import { getTopProducts } from '@/lib/topProducts';
import React from 'react';

export default async function LaboratoryInstruments() {
  const topProductsData = await getTopProducts(
    'laboratory-instruments'
  );

  return (
    <main>
      <PageHero title="Laboratory Instruments & Consumables." />
      <AvailableEquipment
        title="Available Laboratory Instruments"
        highlightedWord="Laboratory Instruments"
        equipment={[
          {
            id: 1,
            title: (
              <>
                Glassware, Microscopes,
                <br /> & Balances
              </>
            ),
            imageUrl: '/services/laboratory/glassware.png',
          },
          {
            id: 2,
            title: (
              <>
                Lab Chemicals <br /> & Consumables
              </>
            ),
            imageUrl: '/services/laboratory/chemicals.png',
          },
          {
            id: 3,
            title: <>Testing Equipment</>,
            imageUrl: '/services/laboratory/testing.png',
          },
          {
            id: 4,
            title: <>Lab Furniture & Safety Gear</>,
            imageUrl: '/services/laboratory/furniture.png',
          },
        ]}
      />
      <OfferedServices
        services={['Sales', 'Support']}
        image={{
          src: '/services/laboratory/lab.png',
          alt: 'Laboratory Instruments & Consumables',
        }}
      />
      <TopProducts data={topProductsData} className="mt-32" />
    </main>
  );
}
