import Image, { StaticImageData } from 'next/image';

export const PartnerCard = ({
  src,
  alt,
}: {
  src: StaticImageData | string;
  alt: string;
}) => (
  <div className="flex justify-center items-center p-2 sm:p-3 md:p-4">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="object-contain w-full h-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] transition-transform duration-300 hover:scale-105"
    />
  </div>
);
