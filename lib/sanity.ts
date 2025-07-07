import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'rlsdgf8v',
  dataset: 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: false, // Set to false for development, true for production
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
