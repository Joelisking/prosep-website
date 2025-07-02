import Image from 'next/image';

export interface Product {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({
  product,
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-secondary h-80 flex items-center justify-center">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={500}
          height={500}
          className="object-contain max-w-full max-h-full"
        />
      </div>
      <div className="flex flex-col mt-3">
        <p className="font-semibold text-2xl">{product.name}</p>
        <p className="text-gray-400">{product.category}</p>
      </div>
    </div>
  );
};
