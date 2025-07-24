import Image from 'next/image';

export default function ServiceCard({
  title,
  description,
  image,
  alt,
  fullWidthTitle = false,
  url,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  fullWidthTitle?: boolean;
  url: string;
}) {
  return (
    <a
      href={url}
      className="border border-secondary rounded-2xl p-6 text-center flex flex-col items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[430px]">
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
    </a>
  );
}
