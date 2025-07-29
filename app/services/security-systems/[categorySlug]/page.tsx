import {
  getCategoryProducts,
  CategoryProduct,
  getCategoryDisplayTitle,
} from '@/lib/categoryProducts';
import React from 'react';
import Container from '@/components/shared/container';
import PageHero from '@/components/shared/hero';
import { SecurityProductCard } from '@/components/shared/security-product-card';

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
  } catch (_error) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>Could not fetch products for this category.</p>
      </main>
    );
  }

  const hasSubcategories = data?.products.some((p) => p.subcategory);
  const grouped = hasSubcategories
    ? groupBySubcategory(data?.products || [])
    : { All: data?.products };

  return (
    <main>
      <PageHero title={`${getCategoryDisplayTitle(categorySlug)}.`} />

      <section className="py-16 bg-gradient-to-br from-[#033E86] to-[#04274C] relative">
        {Object.entries(grouped).map(([subcat, products]) => (
          <Container key={subcat}>
            <section className="mb-12">
              {hasSubcategories && (
                <h2 className="text-2xl font-bold mb-4 text-white">
                  {subcat}
                </h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products?.map((product) => (
                  <div key={product.id}>
                    <SecurityProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>
          </Container>
        ))}
      </section>
    </main>
  );
}
