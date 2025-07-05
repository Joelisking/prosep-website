import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import React from 'react';

interface EquipmentItem {
  id: number;
  title: string | React.ReactNode;
  imageUrl: string;
}

interface AvailableEquipmentProps {
  title?: string;
  highlightedWord?: string;
  equipment: EquipmentItem[];
  className?: string;
}

function AvailableEquipment({
  title = 'Available Equipment',
  highlightedWord = 'Equipment',
  equipment,
  className = '',
}: AvailableEquipmentProps) {
  return (
    <section className={`mt-16 md:mt-24 ${className}`}>
      <Container>
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

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {equipment.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="h-72 md:h-80 lg:h-96 rounded-2xl flex pb-4 md:pb-6 p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="z-20 flex flex-col justify-between w-full">
                  <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                    {item.id.toString().padStart(2, '0')}
                  </span>

                  <div className="border-t border-white pt-2 md:pt-4 lg:pt-6">
                    <span className="text-lg md:text-2xl lg:text-3xl text-white uppercase leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AvailableEquipment;
