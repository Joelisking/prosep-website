import { CategoryProduct } from '@/lib/categoryProducts';
import Image from 'next/image';

export const CategoryProductCard: React.FC<{
  product: CategoryProduct;
}> = ({ product }) => {
  return (
    <div className="flex flex-col hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-gray-100">
      <div className="flex items-center justify-center mb-2 w-full h-48 bg-white">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={160}
          height={160}
          className={`w-full h-full ${
            product.showFullImage ? 'object-contain' : 'object-cover'
          }`}
        />
      </div>

      <div className="flex flex-col flex-grow p-3 mb-2">
        <h3 className="font-bold text-base lg:text-xl text-gray-900">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};
