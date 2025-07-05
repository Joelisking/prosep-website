import TopProducts from '@/components/services/mining/mining-top-products';
import AvailableEquipment from '@/components/shared/available-equipment';
import PageHero from '@/components/shared/hero';
import OfferedServices from '@/components/shared/offered-services';
import React from 'react';

function MiningGeneralIndustry() {
  return (
    <main>
      <PageHero title="Mining & General Industry." />
      <AvailableEquipment
        equipment={[
          {
            id: 1,
            title: <>Sampling Tools & Core Boxes</>,
            imageUrl: '/services/mining/sampling-kit.jpg',
          },
          {
            id: 2,
            title: <>Personal Protective Equipment</>,
            imageUrl: '/services/mining/ppe.jpg',
          },
          {
            id: 3,
            title: <>Screen Panels</>,
            imageUrl: '/services/mining/screens.png',
          },
          {
            id: 4,
            title: <>Leach</>,
            imageUrl: '/services/mining/leach.jpg',
          },
        ]}
      />
      <OfferedServices
        services={[
          'Sales & Maintenance',
          'Installation & Commissioning',
          'Gravity Testing: Lab and Pilot Testing',
          'Gravity Audit',
        ]}
        image={{
          src: '/services/mining/mining.png',
          alt: 'Mining & General Industry',
        }}
        title="Services We Offer"
        highlightedWord="We Offer"
        description="We offer a wide range of mining and general industry services to meet your needs."
      />

      <TopProducts />
    </main>
  );
}

export default MiningGeneralIndustry;
