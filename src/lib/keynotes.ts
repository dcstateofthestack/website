import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

/**
 * Fetches all keynote speakers, sorted by entry id, so the homepage and
 * program page carousels always render the same speakers in the same order.
 */
export async function getKeynotes(): Promise<CollectionEntry<'speakers'>[]> {
	const speakers = await getCollection('speakers');
	return speakers
		.filter((s) => s.data.keynote)
		.sort((a, b) => a.id.localeCompare(b.id));
}
