import { client } from './sanity';

export interface TopProductsData {
  page: string;
  title: string;
  highlightedWord: string;
  products: {
    id: string;
    name: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
  }[];
}

export async function getTopProducts(
  page: string
): Promise<TopProductsData | null> {
  try {
    const query = `
      *[_type == 'topProducts' && page == $page][0] {
        page,
        title,
        highlightedWord,
        products[] {
          id,
          name,
          category,
          imageAlt,
          "imageSrc": image.asset->url
        }
      }
    `;

    const data = await client.fetch(query, { page });
    return data;
  } catch (error) {
    console.error('Error fetching top products:', error);
    return null;
  }
}
