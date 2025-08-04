import TopProducts from '@/components/shared/top-products';
import ServiceCategories from '@/components/shared/service-categories';
import PageHero from '@/components/shared/hero';
import OfferedServices from '@/components/shared/offered-services';
import { getTopProducts } from '@/lib/topProducts';
import React from 'react';
export const revalidate = 0;
export default async function MiningGeneralIndustry() {
  const topProductsData = await getTopProducts(
    'mining-general-industry'
  );

  return (
    <main>
      <PageHero title="Mining & Mineral Processing." />
      <ServiceCategories
        equipment={[
          {
            id: 1,
            title: <>Mineral Processing</>,
            imageUrl: '/services/mining/processing.png',
            categorySlug: 'mineral-processing',
          },
          {
            id: 2,
            title: <>Crushing</>,
            imageUrl: '/services/mining/crushing.png',
            categorySlug: 'crushing',
          },
          {
            id: 3,
            title: <>Milling</>,
            imageUrl: '/services/mining/milling.png',
            categorySlug: 'milling',
          },
          {
            id: 4,
            title: <>Chemicals for mining</>,
            imageUrl: '/services/mining/chemicals.png',
            categorySlug: 'mining-chemicals',
          },
        ]}
        baseRoute="/services/mining-mineral-processing/"
      />
      <OfferedServices
        services={[
          'Sales & Maintenance',
          'Installation & Commissioning',
          'Gravity Testing: Lab and Pilot Testing',
          'Gravity Audit',
        ]}
        image={{
          src: '/services/mining/services.png',
          alt: 'Mining & General Industry',
        }}
        title="Services We Offer"
        highlightedWord="We Offer"
        description="We offer a wide range of mining and general industry services to meet your needs."
      />

      <TopProducts data={topProductsData} className="mt-32" />
    </main>
  );
}
