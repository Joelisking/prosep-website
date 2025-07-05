import { Product } from '@/lib/types';
import Image from 'next/image';

export const ProductCard: React.FC<{ product: Product }> = ({
  product,
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-secondary h-64 sm:h-72 md:h-80 flex items-center justify-center">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={500}
          height={500}
          className="object-contain max-w-full max-h-full"
        />
      </div>
      <div className="flex flex-col mt-2 sm:mt-3 lg:mt-4">
        <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
          {product.name}
        </p>
        <p className="text-gray-400 text-sm sm:text-base">
          {product.category}
        </p>
      </div>
    </div>
  );
};
