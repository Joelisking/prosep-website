import React from 'react';
import SectionHeader from '../shared/section-header';
import Container from '../shared/container';
import Image from 'next/image';

function ServiceCard({
  title,
  description,
  image,
  alt,
  fullWidthTitle = false,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  fullWidthTitle?: boolean;
}) {
  return (
    <div className="border border-secondary rounded-2xl p-6 text-center flex flex-col items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[430px]">
      <div className="flex flex-col items-center w-full flex-1 gap-y-3">
        <p
          className={
            `text-2xl font-bold mx-auto min-h-[56px] flex items-center justify-center` +
            (fullWidthTitle ? '' : ' w-2/3')
          }>
          {title}
        </p>
        <p className="text-sm min-h-[48px] flex items-center justify-center">
          {description}
        </p>
      </div>
      <div className="mt-6 rounded-2xl overflow-hidden w-full flex-shrink-0 flex justify-center">
        <div className="relative" style={{ width: 350, height: 220 }}>
          <Image
            src={image}
            alt={alt}
            fill
            className="rounded-2xl object-cover bg-secondary"
          />
        </div>
      </div>
    </div>
  );
}

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
            title="Mining Equipment"
            description="Innovative clean energy solutions, land use optimization, and sanitation improvements."
            image="/home/services/1.png"
            alt="Mining Equipment"
          />
          <ServiceCard
            title="Laboratory Instruments"
            description="We offer a wide range of laboratory instruments, including spectrometers, chromatographs, and other analytical equipment."
            image="/home/services/2.png"
            alt="Laboratory Instruments"
            fullWidthTitle={true}
          />
          <ServiceCard
            title="ABUS Safety & Security Systems"
            description="We offer a wide range of safety and security systems, including CCTV cameras, access control systems, and other security equipment."
            image="/home/services/3.png"
            alt="ABUS Safety & Security Systems"
            fullWidthTitle={true}
          />
          <ServiceCard
            title="Pumps"
            description="We offer a wide range of pumps from Pedrollo for all applications, Samuadin pumps, and parts for Aojin Pumps."
            image="/home/services/4.png"
            alt="Pumps"
          />
        </div>
      </Container>
    </section>
  );
}

export default Services;
