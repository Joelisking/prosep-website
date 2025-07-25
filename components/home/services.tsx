import React from 'react';
import SectionHeader from '../shared/section-header';
import Container from '../shared/container';
import ServiceCard from './service-card';

function Services() {
  return (
    <section className="mt-32">
      <Container>
        <SectionHeader
          highlightedWord="Products & Services"
          className="leading-snug hidden lg:block"
          size="base">
          Our Products & Services
        </SectionHeader>
        <SectionHeader
          highlightedWord="Products & Services"
          className="leading-snug lg:hidden"
          size="md">
          Our Products & Services
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6">
          <ServiceCard
            title="Mining and Mineral Processing"
            description="Innovative clean energy solutions, land use optimization, and sanitation improvements."
            image="/home/services/1.jpg"
            alt="Mining Equipment"
            url="/services/mining-mineral-processing"
          />
          <ServiceCard
            title="Laboratory Instruments"
            description="We offer a wide range of laboratory instruments, including spectrometers, chromatographs, and other analytical equipment."
            image="/home/services/2.png"
            alt="Laboratory Instruments"
            fullWidthTitle={true}
            url="/services/laboratory-instruments"
          />
          <ServiceCard
            title="ABUS Safety & Security Systems"
            description="We offer a wide range of safety and security systems, including CCTV cameras, access control systems, and other security equipment."
            image="/home/services/3.png"
            alt="ABUS Safety & Security Systems"
            fullWidthTitle={true}
            url="/services/security-systems"
          />
          <ServiceCard
            title="Pumps"
            description="We offer a wide range of pumps from Pedrollo for all applications, Samuadin pumps, and parts for Aojin Pumps."
            image="/home/services/4.png"
            alt="Pumps"
            url="/services/pumps"
          />
        </div>
      </Container>
    </section>
  );
}

export default Services;
