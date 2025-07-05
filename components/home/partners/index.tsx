import React from 'react';
import Container from '../../shared/container';
import SectionHeader from '../../shared/section-header';
import { partnersData } from '@/lib/data';
import { PartnerCard } from './partner-card';

function Partners() {
  return (
    <section className="bg-secondary py-8 sm:py-12 lg:py-16 mt-16 sm:mt-24 lg:mt-32">
      <Container>
        <SectionHeader
          highlightedWord="International Partners"
          className="leading-snug hidden lg:block"
          size="base">
          We Have International Partners
        </SectionHeader>
        <SectionHeader
          highlightedWord="International Partners"
          className="leading-snug lg:hidden"
          size="md">
          We Have International Partners
        </SectionHeader>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 sm:mt-8 lg:mt-12 items-center">
          {partnersData.map((partner) => (
            <PartnerCard
              key={partner.id}
              src={partner.src}
              alt={partner.alt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Partners;
