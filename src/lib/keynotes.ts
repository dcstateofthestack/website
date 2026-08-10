import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

/**
 * Fetches all keynote speakers, sorted by their optional `order` field
 * (entries without one come last, alphabetically by id), so the homepage
 * and program page carousels always render the same speakers in the same
 * order.
 */
export async function getKeynotes(): Promise<CollectionEntry<'speakers'>[]> {
	const speakers = await getCollection('speakers');
	return speakers
		.filter((s) => s.data.keynote)
		.sort((a, b) => {
			const ao = a.data.order ?? Number.MAX_SAFE_INTEGER;
			const bo = b.data.order ?? Number.MAX_SAFE_INTEGER;
			return ao - bo || a.id.localeCompare(b.id);
		});
}
