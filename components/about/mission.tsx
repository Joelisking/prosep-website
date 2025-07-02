import React from 'react';
import Container from '../shared/container';
import Image from 'next/image';
import img from '@/public/LooperGroup.svg';

function Mission() {
  return (
    <section className="bg-gradient-to-r from-[#00254F] to-[#077BCF] py-10 md:py-20 lg:py-28 relative mt-16 md:mt-24 lg:mt-32">
      <Container>
        <div className="w-full lg:w-3/5">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Our Mission
          </h2>

          <p className="text-white/90 text-base lg:text-lg leading-relaxed mt-2">
            At Prosep Services Ltd, our mission is to equip our
            clients with reliable tools, equipment, and systems that
            ensure safety, efficiency, and progress.
          </p>
        </div>
      </Container>

      <div className="absolute top-0 bottom-0 right-0 h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src={img}
            alt="svg"
            className="h-full w-full object-contain object-right opacity-70 lg:opacity-100 transition-all duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
