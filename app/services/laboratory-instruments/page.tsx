import TopProducts from '@/components/shared/top-products';
import ServiceCategories from '@/components/shared/service-categories';
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
      <ServiceCategories
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
            categorySlug: 'glassware-microscopes-balances',
          },
          {
            id: 2,
            title: (
              <>
                Lab Chemicals <br /> & Consumables
              </>
            ),
            imageUrl: '/services/laboratory/chemicals.png',
            categorySlug: 'lab-chemicals-consumables',
          },
          {
            id: 3,
            title: <>Testing Equipment</>,
            imageUrl: '/services/laboratory/testing.png',
            categorySlug: 'testing-equipment',
          },
          {
            id: 4,
            title: <>Lab Furniture & Safety Gear</>,
            imageUrl: '/services/laboratory/furniture.png',
            categorySlug: 'lab-furniture-safety-gear',
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
