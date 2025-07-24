import {
  getCategoryProducts,
  CategoryProduct,
  getCategoryDisplayTitle,
} from '@/lib/categoryProducts';
import React from 'react';
import { CategoryProductCard } from '@/components/shared/category-product-card';

function groupBySubcategory(products: CategoryProduct[]) {
  const groups: Record<string, CategoryProduct[]> = {};
  for (const product of products) {
    const key = product.subcategory || 'Other';
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
  }
  return groups;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  // Await the params promise to get the actual parameters
  const { categorySlug } = await params;
  let data = null;
  try {
    data = await getCategoryProducts(categorySlug);
    console.log('Laboratory data:', data);
  } catch (_error) {
    console.error('Laboratory error:', _error);
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>Could not fetch products for this category.</p>
      </main>
    );
  }

  if (!data || !data.products || data.products.length === 0) {
    console.log('Laboratory no data found for:', categorySlug);
    return (
      <main className="p-8 bg-gradient-to-br from-[#033E86] to-[#04274C]">
        <h1 className="text-3xl font-bold mb-6 text-white">
          {getCategoryDisplayTitle(categorySlug)}
        </h1>
        <div className="text-center text-white">
          <p className="text-xl mb-4">No products available yet</p>
          <p className="text-gray-300">
            Products for this category will be added soon.
          </p>
        </div>
      </main>
    );
  }

  const hasSubcategories = data.products.some((p) => p.subcategory);
  const grouped = hasSubcategories
    ? groupBySubcategory(data.products)
    : { All: data.products };

  return (
    <main className="p-8 bg-gradient-to-br from-[#033E86] to-[#04274C]">
      <h1 className="text-3xl font-bold mb-6 text-white">
        {getCategoryDisplayTitle(categorySlug)}
      </h1>
      {Object.entries(grouped).map(([subcat, products]) => (
        <section key={subcat} className="mb-12">
          {hasSubcategories && (
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {subcat}
            </h2>
          )}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <li key={product.id}>
                <CategoryProductCard product={product} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
