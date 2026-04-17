import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const speakers = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/speakers' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      talkName: z.string(),
      photo: image().optional(),
    }),
});

const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/sponsors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tier: z.enum(['platinum', 'gold', 'silver', 'digital', 'closed-caption', 'lanyard', 'breakfast', 'lunch', 'break', 'social', 'community']),
      url: z.string().optional(),
      logo: image().optional(),
    }),
});

const organizers = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/organizers' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.enum(['organizer','chair','co-chair']),
      company: z.string().optional(),
      bio: z.string().optional(),
      photo: image().optional(),
      socialLinks: z.array(
        z.object({
          platform: z.enum(['twitter', 'linkedin', 'github', 'website']),
          url: z.string(),
        }),
      ).optional(),
    }),
});

export const collections = { speakers, sponsors, organizers };
