import AvailableSecurity from '@/components/services/security/available-security';
import OfferedServices from '@/components/services/security/offered-services';
import TopProducts from '@/components/services/security/top-products';
import PageHero from '@/components/shared/hero';
import React from 'react';

function LaboratoryInstruments() {
  return (
    <main>
      <PageHero title="Laboratory Instruments & Consumables." />
      <AvailableSecurity />
      <OfferedServices />
      <TopProducts />
    </main>
  );
}

export default LaboratoryInstruments;
