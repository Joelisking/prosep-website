import TopProducts from '@/components/services/security/top-products';
import AvailableEquipment from '@/components/shared/available-equipment';
import PageHero from '@/components/shared/hero';
import OfferedServices from '@/components/shared/offered-services';
import React from 'react';

function LaboratoryInstruments() {
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
      <TopProducts />
    </main>
  );
}

export default LaboratoryInstruments;
