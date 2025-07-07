import { client, urlFor } from './sanity';
import { Team } from './types';

export async function getTeam(): Promise<Team[]> {
  try {
    const query = `*[_type == 'team'] | order(_createdAt asc) {
      name,
      role,
      image
    }`;
    const data = await client.fetch(query);
    // Map image to URL
    return data.map((member: unknown) => {
      const m = member as {
        name: string;
        role: string;
        image?: unknown;
      };
      return {
        ...m,
        image: m.image ? urlFor(m.image).url() : '',
      };
    });
  } catch (error) {
    console.error('Error fetching team:', error);
    return [];
  }
}
