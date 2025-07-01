import React from 'react';
import Container from '../../shared/container';
import SectionHeader from '../../shared/section-header';
import { partnersData } from '@/lib/data';
import { PartnerCard } from './partner-card';

function Partners() {
  return (
    <section className="bg-secondary py-12 mt-32">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mt-8 items-center">
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
