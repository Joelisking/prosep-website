import { CategoryProduct } from '@/lib/categoryProducts';
import Image from 'next/image';

export const CategoryProductCard: React.FC<{
  product: CategoryProduct;
}> = ({ product }) => {
  return (
    <div className="flex flex-col transition-all duration-300 rounded-xl overflow-hidden">
      <div className="flex items-center justify-center mb-2 w-full h-32 sm:h-40 lg:h-48 bg-transparent">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={160}
          height={160}
          className={`w-full h-full p-4 sm:p-6 lg:p-7 ${
            product.showFullImage ? 'object-contain' : 'object-cover'
          }`}
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-sm sm:text-base lg:text-xl text-white text-center">
          <span className="border-b border-[#CE0C24]">
            {product.name}
          </span>
        </h3>
        {product.description && (
          <p className="text-white text-xs sm:text-sm leading-relaxed mt-1 text-center">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};
