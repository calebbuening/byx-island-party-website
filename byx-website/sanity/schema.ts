import { type SchemaTypeDefinition } from 'sanity'

// Site Settings (Singleton)
const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: 'Hex color code (e.g., #1e3a8a)',
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      description: 'Hex color code (e.g., #f59e0b)',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
      ],
    },
  ],
}

// Events
const event = {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'ticketUrl',
      title: 'Ticket Purchase URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Show on homepage',
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
    },
  ],
}

// Core Values
const value = {
  name: 'value',
  title: 'Core Values',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Value Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Heart, Users, BookOpen)',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}

// FAQs
const faq = {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Membership', value: 'membership' },
          { title: 'Events', value: 'events' },
          { title: 'Donations', value: 'donations' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}

// Donation Platforms
const donationPlatform = {
  name: 'donationPlatform',
  title: 'Donation Platforms',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Platform Name',
      type: 'string',
      description: 'e.g., Venmo, PayPal, Zelle',
    },
    {
      name: 'url',
      title: 'Donation URL or Handle',
      type: 'string',
    },
    {
      name: 'qrCode',
      title: 'QR Code',
      type: 'image',
      description: 'Optional QR code for mobile donations',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Display this platform on the site',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}

// About Page Content
const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 5,
    },
    {
      name: 'whatMakesUsDifferent',
      title: 'What Makes BYX Different',
      type: 'text',
      rows: 5,
    },
    {
      name: 'history',
      title: 'Chapter History',
      type: 'text',
      rows: 5,
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, event, value, faq, donationPlatform, aboutPage],
}
