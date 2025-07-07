import AvailableSecurity from '@/components/services/security/available-security';
import OfferedServices from '@/components/services/security/offered-services';
import TopProducts from '@/components/shared/top-products';
import PageHero from '@/components/shared/hero';
import { getTopProducts } from '@/lib/topProducts';
import React from 'react';

export default async function SecuritySystems() {
  const topProductsData = await getTopProducts('security-systems');

  return (
    <main>
      <PageHero title="ABUS Security Systems." />
      <AvailableSecurity />
      <OfferedServices />
      <TopProducts data={topProductsData} className="mt-32" />
    </main>
  );
}
