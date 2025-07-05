import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import React from 'react';

function AvailableSecurity() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <div>
          <SectionHeader
            highlightedWord="Security Systems"
            className="leading-snug hidden lg:block"
            size="base">
            Available Security Systems
          </SectionHeader>
          <SectionHeader
            highlightedWord="Security Systems"
            className="leading-snug lg:hidden"
            size="md">
            Available Security Systems
          </SectionHeader>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div
              style={{
                backgroundImage: 'url(/services/security/cctv.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-72 md:h-80 lg:h-96 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  01
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl  text-white uppercase leading-tight">
                    ABUS CCTV & <br />
                    Video Surveillance
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage:
                  'url(/services/security/smart-lock.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-72 md:h-80 lg:h-96 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  02
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl text-white uppercase leading-tight">
                    Smart Locks & Access
                    <br /> Control Systems
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage:
                  'url(/services/security/padlock.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-72 md:h-80 lg:h-96 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  03
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl  text-white uppercase leading-tight">
                    Padlocks, Cylinders & <br />
                    Door Fittings
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage: 'url(/services/security/alarms.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="h-72 md:h-80 lg:h-96 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="z-20 flex flex-col justify-between w-full">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                  04
                </span>

                <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                  <span className="text-lg md:text-2xl lg:text-3xl  text-white uppercase leading-tight">
                    Alarms, Detectors & <br /> Fire Safety Kits
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

export default AvailableSecurity;
