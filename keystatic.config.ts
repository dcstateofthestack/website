import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'github', repo: 'dcstateofthestack/website' },
  collections: {
    speakers: collection({
      label: 'Speakers',
      slugField: 'name',
      path: 'src/content/speakers/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        title: fields.text({ label: 'Title & Company' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        talkName: fields.text({ label: 'Talk Name' }),
        photo: fields.image({
          label: 'Photo',
          directory: 'src/assets/speakers',
          publicPath: '/src/assets/speakers/',
        }),
      },
    }),
    sponsors: collection({
      label: 'Sponsors',
      slugField: 'name',
      path: 'src/content/sponsors/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        tier: fields.select({
          label: 'Tier',
          options: [
            { label: 'Platinum', value: 'platinum' },
            { label: 'Gold', value: 'gold' },
            { label: 'Silver', value: 'silver' },
            { label: 'Digital', value: 'digital' },
            { label: 'Closed Captioning', value: 'closed-caption' },
            { label: 'Lanyard', value: 'lanyard' },
            { label: 'Breakfast', value: 'breakfast' },
            { label: 'Lunch', value: 'lunch' },
            { label: 'Break', value: 'break' },
            { label: 'Social', value: 'social' },
            { label: 'Community', value: 'community' },
          ],
          defaultValue: 'gold',
        }),
        url: fields.url({ label: 'Website URL' }),
        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/sponsors',
          publicPath: '/src/assets/sponsors/',
        }),
      },
    }),
    organizers: collection({
      label: 'Organizers',
      slugField: 'name',
      path: 'src/content/organizers/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        company: fields.text({ label: 'Company' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        photo: fields.image({
          label: 'Photo',
          directory: 'src/assets/organizers',
          publicPath: '/src/assets/organizers/',
        }),
        socialLinks: fields.array(
          fields.object({
            platform: fields.select({
              label: 'Platform',
              options: [
                { label: 'Twitter / X', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'GitHub', value: 'github' },
                { label: 'Website', value: 'website' },
              ],
              defaultValue: 'linkedin',
            }),
            url: fields.url({ label: 'URL' }),
          }),
          {
            label: 'Social Links',
            itemLabel: (props) => props.fields.platform.value || 'Link',
          },
        ),
      },
    }),
  },
});
