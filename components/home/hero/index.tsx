import React from 'react';
import Carousel from '@/components/shared/carousel';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import { carouselImages } from '@/lib/data';

function Hero() {
  return (
    <section className="mt-28 md:mt-40">
      <Container>
        <SectionHeader
          highlightedWord="Mining, Laboratory & Security"
          className="leading-snug hidden lg:block"
          size="base">
          Your Trusted Source for Mining, Laboratory & Security
          Solutions.
        </SectionHeader>
        <SectionHeader
          highlightedWord="Mining, Laboratory & Security"
          className="leading-snug lg:hidden"
          size="md">
          Your Trusted Source for Mining, Laboratory & Security
          Solutions.
        </SectionHeader>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed sm:leading-snug mt-3 sm:mt-4 lg:mt-6">
          Prosep Services Ltd supplies world-class equipment and
          systems for industrial safety, mineral exploration, and
          scientific research across Ghana and West Africa.
        </p>
      </Container>

      <Carousel images={carouselImages} height="60vh" />
    </section>
  );
}

export default Hero;
