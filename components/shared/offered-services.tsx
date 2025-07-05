import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import Image from 'next/image';
import React from 'react';

interface OfferedServicesProps {
  services: string[];
  image: {
    src: string;
    alt: string;
  };
  title?: string;
  highlightedWord?: string;
  description?: string;
}

function OfferedServices({
  services,
  image,
  title = 'Services We Offer',
  highlightedWord = 'We Offer',
  description = 'We offer a wide range of security systems and services to meet your needs.',
}: OfferedServicesProps) {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32">
      <Container className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
        {/* Left Column */}
        <div className="flex-1 lg:max-w-xl flex flex-col justify-between">
          <div>
            <SectionHeader
              highlightedWord={highlightedWord}
              className="leading-snug hidden lg:block"
              size="base">
              {title}
            </SectionHeader>
            <SectionHeader
              highlightedWord={highlightedWord}
              className="leading-snug lg:hidden"
              size="md">
              {title}
            </SectionHeader>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center bg-gray-50 rounded-xl px-4 sm:px-6 py-4 sm:py-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-800 mr-3 sm:mr-4 flex-shrink-0">
                  {/* Checkmark SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-4 h-4 sm:w-5 sm:h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OfferedServices;
