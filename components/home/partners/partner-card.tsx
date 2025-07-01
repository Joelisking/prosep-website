import Image, { StaticImageData } from 'next/image';

export const PartnerCard = ({
  src,
  alt,
}: {
  src: StaticImageData | string;
  alt: string;
}) => (
  <div className="flex justify-center items-center">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="object-contain"
    />
  </div>
);
