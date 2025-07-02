import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import React from 'react';

function SetsUsApart() {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32">
      <Container>
        <div>
          <SectionHeader
            highlightedWord="Us Apart"
            className="leading-snug hidden lg:block"
            size="base">
            What Sets Us Apart
          </SectionHeader>
          <SectionHeader
            highlightedWord="Us Apart"
            className="leading-snug lg:hidden"
            size="md">
            What Sets Us Apart
          </SectionHeader>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              style={{
                backgroundImage:
                  'url(/about/sets-us-apart/partnerships.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-56 md:h-64 lg:h-72 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-50" />
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  01
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl  text-white uppercase leading-tight">
                    Strong supplier <br /> partnerships
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage:
                  'url(/about/sets-us-apart/delivery.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-56 md:h-64 lg:h-72 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-black opacity-50" />
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  02
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl  text-white uppercase leading-tight">
                    Quick sourcing
                    <br />
                    and delivery
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage:
                  'url(/about/sets-us-apart/support.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-56 md:h-64 lg:h-72 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-black opacity-50" />
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  03
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl  text-white uppercase leading-tight">
                    Expert product <br /> support
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage:
                  'url(/about/sets-us-apart/solutions.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-56 md:h-64 lg:h-72 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-50" />
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  04
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl  text-white uppercase leading-tight">
                    Tailored solutions <br /> for every sector
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SetsUsApart;
