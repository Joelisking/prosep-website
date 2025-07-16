import OfferedServices from '@/components/services/security/offered-services';
import TopProducts from '@/components/shared/top-products';
import PageHero from '@/components/shared/hero';
import { getTopProducts } from '@/lib/topProducts';
import React from 'react';
import ServiceCategories from '@/components/shared/service-categories';

export default async function SecuritySystems() {
  const topProductsData = await getTopProducts('security-systems');

  return (
    <main>
      <PageHero title="ABUS Security Systems." />
      <ServiceCategories
        title="Available Security Systems"
        equipment={[
          {
            id: 1,
            title: <>Padlocks</>,
            imageUrl: '/services/security/padlock.png',
            categorySlug: 'padlocks',
          },
          {
            id: 2,
            title: <>Video Surveillance Systems (CCTV)</>,
            imageUrl: '/services/security/cctv.png',
            categorySlug: 'security-cameras',
          },
          {
            id: 3,
            title: <>Lockout Tagout/ Occupational Safety</>,
            imageUrl: '/services/security/lockout.png',
            categorySlug: 'lockout-tagout',
          },
          {
            id: 4,
            title: <>Smart Locks & Access Control Systems</>,
            imageUrl: '/services/security/smart-lock.png',
            categorySlug: 'access-control',
          },
          {
            id: 5,
            title: <>Personal Protective Equipment</>,
            imageUrl: '/services/security/ppe.png',
            categorySlug: 'safety-equipment',
          },
          {
            id: 6,
            title: <>Security Chains & Hasps</>,
            imageUrl: '/services/security/hasps.png',
            categorySlug: 'security-chains',
          },
          {
            id: 7,
            title: <>Door and Window Security</>,
            imageUrl: '/services/security/door.png',
            categorySlug: 'door-window-security',
            // columnSpan: 'col-span-2',
          },
        ]}
      />
      <OfferedServices />
      <TopProducts data={topProductsData} className="mt-32" />
    </main>
  );
}
