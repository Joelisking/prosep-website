import { client } from './sanity';

// Mapping of category slugs to display titles
const SECURITY_CATEGORY_TITLES: Record<string, string> = {
  'security-cameras': 'Video Surveillance Systems (CCTV)',
  'access-control': 'Smart Locks & Access Control Systems',
  'door-window-security': 'Door and Window Security',
  padlocks: 'Padlocks',
  'lockout-tagout': 'Lockout Tagout',
  'safety-equipment': 'Personal Protective Equipment',
  'security-chains': 'Security Chains & Hasps',
};

const PUMPS_CATEGORY_TITLES: Record<string, string> = {
  'surface-pumps': 'Surface Pumps',
  'submersible-pumps': 'Submersible Pumps',
  'borehole-pumps': 'Borehole Pumps',
};

const LABORATORY_CATEGORY_TITLES: Record<string, string> = {
  'glassware-microscopes-balances':
    'Glassware, Microscopes & Balances',
  'lab-chemicals-consumables': 'Lab Chemicals & Consumables',
  'testing-equipment': 'Testing Equipment',
  'lab-furniture-safety-gear': 'Lab Furniture & Safety Gear',
};

const MINING_CATEGORY_TITLES: Record<string, string> = {
  'mineral-processing': 'Mineral Processing',
  crushing: 'Crushing',
  milling: 'Milling',
  'mining-chemicals': 'Mining Chemicals',
};

export function getCategoryDisplayTitle(
  categorySlug: string
): string {
  return (
    SECURITY_CATEGORY_TITLES[categorySlug] ||
    PUMPS_CATEGORY_TITLES[categorySlug] ||
    LABORATORY_CATEGORY_TITLES[categorySlug] ||
    MINING_CATEGORY_TITLES[categorySlug] ||
    categorySlug
  );
}

export interface CategoryProduct {
  id: string;
  name: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  showFullImage?: boolean;
  subcategory?: string;
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
          "imageSrc": image.asset->url,
          subcategory
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
