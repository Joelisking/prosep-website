import { CategoryProduct } from '@/lib/categoryProducts';
import Image from 'next/image';

export const CategoryProductCard: React.FC<{
  product: CategoryProduct;
}> = ({ product }) => {
  return (
    <div className="flex flex-col transition-all duration-300 rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:shadow-2xl">
      <div
        className="flex items-center justify-center mb-4 w-full bg-white"
        style={{ width: '100%', height: 260, alignSelf: 'center' }}>
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={160}
          height={160}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-grow items-center px-4">
        <h3 className="font-bold text-base lg:text-lg text-white text-center mb-1">
          <span className="border-b border-[#CE0C24] pb-0.5">
            {product.name}
          </span>
        </h3>
        {product.description && (
          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed text-center">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};
