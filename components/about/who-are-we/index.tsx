import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

function WhoAreWe() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-3 rounded-3xl overflow-hidden">
          {/* Content Section */}
          <div className="bg-gradient-to-r from-[#00254F] to-[#077BCF] flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-20 lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0">
              {/* Logo */}
              <div>
                <Image
                  src="/white-logo.svg"
                  alt="Prosep Services Ltd Logo"
                  width={244}
                  height={69}
                  className="w-48 h-auto object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <div className="space-y-6 mt-6">
                <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
                  Who We Are
                </h2>

                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                  Prosep Services Ltd is a multi-sector supplier of
                  premium mining, laboratory, and security products.
                  We partner with top global brands like ABUS to serve
                  clients in mining, education, research, and
                  construction industries.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
            <Image
              src="/about/about.png"
              alt="Prosep Services team and facilities"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhoAreWe;
