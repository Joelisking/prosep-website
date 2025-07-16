import { client } from './sanity';

export interface CategoryProduct {
  id: string;
  name: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  showFullImage?: boolean;
}

export interface CategoryProductsData {
  service: string;
  pumpsCategory?: string;
  laboratoryCategory?: string;
  securityCategory?: string;
  miningCategory?: string;
  products: CategoryProduct[];
}

export async function getCategoryProducts(
  category: string
): Promise<CategoryProductsData | null> {
  try {
    const query = `
      *[_type == 'categoryProducts' && (
        pumpsCategory == $category || 
        laboratoryCategory == $category || 
        securityCategory == $category || 
        miningCategory == $category
      )][0] {
        service,
        pumpsCategory,
        laboratoryCategory,
        securityCategory,
        miningCategory,
        products[] {
          "id": id.current,
          name,
          description,
          imageAlt,
          showFullImage,
          "imageSrc": image.asset->url
        }
      }
    `;

    const data = await client.fetch(query, { category });

    // Process the data to set default alt text if not provided
    if (data && data.products) {
      data.products = data.products.map(
        (product: { imageAlt?: string; name: string }) => ({
          ...product,
          imageAlt:
            product.imageAlt || product.name || 'Product image',
        })
      );
    }

    return data;
  } catch (error) {
    console.error('Error fetching category products:', error);
    return null;
  }
}
