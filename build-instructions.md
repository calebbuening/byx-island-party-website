# BYX Fraternity Website - Build Instructions for Claude Code

## Mission
Build a professional, scalable website for BYX (Brothers Under Christ), a Christian fraternity. The site serves three core purposes:
1. Direct students to purchase event tickets
2. Enable sponsors to donate/inquire
3. Communicate BYX's Christian mission and values

## Tech Stack - NON-NEGOTIABLE

```
Framework: Next.js 14+ (App Router, TypeScript)
Styling: Tailwind CSS
Deployment: Vercel
CMS: Sanity.io
Version Control: Git/GitHub
```

**Why this stack:**
- Modern, production-ready
- Excellent resume value
- Free hosting
- Scales to 50k+ visitors/month
- Easy content management for non-technical officers

---

## Project Setup - START HERE

### Step 1: Initialize Project

```bash
npx create-next-app@latest byx-website --typescript --tailwind --app --eslint
cd byx-website
```

**Configuration choices:**
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ✅ Import alias (@/*)
- ❌ src/ directory (keep it simple)

### Step 2: Install Dependencies

```bash
npm install @sanity/client @sanity/image-url next-sanity
npm install -D @types/node
npm install react-hook-form
npm install resend  # for contact form emails
```

### Step 3: Initialize Sanity

```bash
npm install -g @sanity/cli
sanity init
```

**Sanity configuration:**
- Create new project
- Dataset: production
- Output path: ./sanity
- Use TypeScript

### Step 4: Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# For contact forms
RESEND_API_KEY=your_resend_key_here
CONTACT_EMAIL=placeholder@example.com
```

Create `.env.example` (for GitHub, no actual values):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
CONTACT_EMAIL=
```

---

## File Structure to Create

```
byx-website/
├── app/
│   ├── layout.tsx                 # Root layout with header/footer
│   ├── page.tsx                   # Home page
│   ├── about/
│   │   └── page.tsx               # About BYX
│   ├── tickets/
│   │   └── page.tsx               # Event tickets
│   ├── support/
│   │   └── page.tsx               # Donations & sponsorships
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts           # Contact form handler
│   │   └── sponsor/
│   │       └── route.ts           # Sponsor inquiry handler
│   └── globals.css                # Global styles
├── components/
│   ├── Header.tsx                 # Site navigation
│   ├── Footer.tsx                 # Site footer
│   ├── Hero.tsx                   # Hero section component
│   ├── ValueCard.tsx              # For displaying BYX values
│   ├── ContactForm.tsx            # Contact form component
│   ├── SponsorForm.tsx            # Sponsor inquiry form
│   └── Button.tsx                 # Reusable button component
├── lib/
│   ├── sanity.ts                  # Sanity client config
│   └── utils.ts                   # Utility functions
├── sanity/
│   ├── schema.ts                  # All Sanity schemas
│   ├── env.ts                     # Sanity env config
│   └── lib/
│       ├── client.ts              # Sanity client
│       └── image.ts               # Image URL builder
├── public/
│   ├── images/                    # Static images
│   └── favicon.ico
├── types/
│   └── index.ts                   # TypeScript types
├── .gitignore
├── README.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Sanity Schemas - IMPLEMENT THESE EXACTLY

Create `sanity/schema.ts`:

```typescript
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
```

---

## Sanity Client Configuration

Create `lib/sanity.ts`:

```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for better performance
})

// Helper function to fetch data
export async function sanityFetch<T>({
  query,
  tags,
}: {
  query: string
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, {}, { next: { tags } })
}
```

---

## Page Implementations

### 1. Root Layout (app/layout.tsx)

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BYX - Brothers Under Christ',
  description: 'BYX is a Christian fraternity dedicated to brotherhood, faith, and service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### 2. Home Page (app/page.tsx)

```typescript
import Hero from '@/components/Hero'
import { sanityFetch } from '@/lib/sanity'
import Link from 'next/link'
import { Button } from '@/components/Button'

export default async function Home() {
  // Fetch featured event
  const featuredEvent = await sanityFetch<any>({
    query: `*[_type == "event" && featured == true][0]{
      title,
      description,
      date,
      ticketUrl,
      "imageUrl": image.asset->url
    }`,
    tags: ['event'],
  })

  // Fetch core values preview (first 3)
  const values = await sanityFetch<any[]>({
    query: `*[_type == "value"] | order(order asc)[0..2]{
      title,
      description,
      icon
    }`,
    tags: ['value'],
  })

  return (
    <div>
      <Hero />
      
      {/* Quick Action Cards */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/tickets" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Get Tickets</h3>
              <p className="text-gray-600 mb-4">Purchase tickets to our upcoming events</p>
              <span className="text-blue-600 group-hover:underline">Buy Tickets →</span>
            </div>
          </Link>

          <Link href="/support" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Support Us</h3>
              <p className="text-gray-600 mb-4">Help us continue our mission and service</p>
              <span className="text-blue-600 group-hover:underline">Donate Now →</span>
            </div>
          </Link>

          <Link href="/about" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Learn About BYX</h3>
              <p className="text-gray-600 mb-4">Discover our values and mission</p>
              <span className="text-blue-600 group-hover:underline">Learn More →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Event</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {featuredEvent.imageUrl && (
                <img 
                  src={featuredEvent.imageUrl} 
                  alt={featuredEvent.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{featuredEvent.title}</h3>
                <p className="text-gray-600 mb-4">{featuredEvent.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(featuredEvent.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                {featuredEvent.ticketUrl && (
                  <a 
                    href={featuredEvent.ticketUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Tickets
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/about" className="text-blue-600 hover:underline text-lg">
              Learn More About BYX →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
```

### 3. Tickets Page (app/tickets/page.tsx)

```typescript
import { sanityFetch } from '@/lib/sanity'

export default async function TicketsPage() {
  const events = await sanityFetch<any[]>({
    query: `*[_type == "event"] | order(date desc){
      title,
      description,
      date,
      location,
      ticketUrl,
      "imageUrl": image.asset->url
    }`,
    tags: ['event'],
  })

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get Your Tickets</h1>
        <p className="text-xl text-gray-600 mb-12">
          Join us for unforgettable events that bring our brotherhood together.
        </p>

        <div className="space-y-8">
          {events.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600">No upcoming events at this time. Check back soon!</p>
            </div>
          ) : (
            events.map((event) => (
              <div key={event.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {event.imageUrl && (
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>{new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                    })}</p>
                    {event.location && <p>{event.location}</p>}
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  {event.ticketUrl ? (
                    <a 
                      href={event.ticketUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Buy Tickets
                    </a>
                  ) : (
                    <p className="text-gray-500 italic">Tickets coming soon</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Event FAQs</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-bold mb-2">What should I bring?</h3>
              <p className="text-gray-600">Just bring your ticket confirmation and a positive attitude!</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Are guests allowed?</h3>
              <p className="text-gray-600">Yes! Guests are welcome at most events. Check individual event details.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Questions?</h3>
              <p className="text-gray-600">Contact us at <a href="/contact" className="text-blue-600 hover:underline">our contact page</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### 4. Support/Donate Page (app/support/page.tsx)

```typescript
import { sanityFetch } from '@/lib/sanity'
import SponsorForm from '@/components/SponsorForm'

export default async function SupportPage() {
  const donationPlatforms = await sanityFetch<any[]>({
    query: `*[_type == "donationPlatform" && active == true] | order(order asc){
      name,
      url,
      "qrCodeUrl": qrCode.asset->url
    }`,
    tags: ['donationPlatform'],
  })

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Support BYX</h1>
        <p className="text-xl text-gray-600 mb-12">
          Your support helps us continue our mission of brotherhood, faith, and service.
        </p>

        {/* Donation Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Donate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                {platform.qrCodeUrl && (
                  <img 
                    src={platform.qrCodeUrl} 
                    alt={`${platform.name} QR Code`}
                    className="w-32 h-32 mx-auto mb-4"
                  />
                )}
                <span className="text-blue-600 hover:underline">Donate via {platform.name} →</span>
              </a>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Support BYX?</h2>
          <p className="text-gray-700 mb-4">
            Your donations directly support:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Community service projects and outreach</li>
            <li>Brotherhood development and retreats</li>
            <li>Campus ministry and faith-building activities</li>
            <li>Leadership development programs</li>
            <li>Event hosting and student engagement</li>
          </ul>
        </section>

        {/* Sponsorship Inquiry Form */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
          <p className="text-gray-600 mb-6">
            Interested in a larger partnership? Fill out the form below and we'll be in touch.
          </p>
          <SponsorForm />
        </section>
      </div>
    </div>
  )
}
```

### 5. About Page (app/about/page.tsx)

```typescript
import { sanityFetch } from '@/lib/sanity'

export default async function AboutPage() {
  const aboutData = await sanityFetch<any>({
    query: `*[_type == "aboutPage"][0]{
      missionStatement,
      whatMakesUsDifferent,
      history,
      "heroImageUrl": heroImage.asset->url
    }`,
    tags: ['aboutPage'],
  })

  const values = await sanityFetch<any[]>({
    query: `*[_type == "value"] | order(order asc){
      title,
      description,
      icon
    }`,
    tags: ['value'],
  })

  const faqs = await sanityFetch<any[]>({
    query: `*[_type == "faq" && category == "general"] | order(order asc){
      question,
      answer
    }`,
    tags: ['faq'],
  })

  return (
    <div className="py-16 px-4">
      {/* Hero Section */}
      {aboutData?.heroImageUrl && (
        <div className="w-full h-64 mb-12">
          <img 
            src={aboutData.heroImageUrl} 
            alt="BYX Brotherhood"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Mission Statement */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">About BYX</h1>
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData?.missionStatement || 
                'BYX (Brothers Under Christ) is a Christian fraternity dedicated to building brotherhood centered on faith in Jesus Christ.'}
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">✦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What Makes BYX Different</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {aboutData?.whatMakesUsDifferent || 
              'BYX is more than a fraternity—it's a brotherhood built on faith. We challenge each other to grow spiritually, serve our community, and become men of character.'}
          </p>
        </section>

        {/* History */}
        {aboutData?.history && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Chapter History</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.history}
            </p>
          </section>
        )}

        {/* FAQs */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
```

### 6. Contact Page (app/contact/page.tsx)

```typescript
import ContactForm from '@/components/ContactForm'
import { sanityFetch } from '@/lib/sanity'

export default async function ContactPage() {
  const siteSettings = await sanityFetch<any>({
    query: `*[_type == "siteSettings"][0]{
      contactEmail,
      socialMedia
    }`,
    tags: ['siteSettings'],
  })

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Have questions? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Other ways to connect</h2>
            
            {siteSettings?.contactEmail && (
              <div className="mb-6">
                <h3 className="font-bold mb-2">Email</h3>
                <a 
                  href={`mailto:${siteSettings.contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {siteSettings.contactEmail}
                </a>
              </div>
            )}

            {siteSettings?.socialMedia && (
              <div className="mb-6">
                <h3 className="font-bold mb-2">Social Media</h3>
                <div className="space-y-2">
                  {siteSettings.socialMedia.instagram && (
                    <a 
                      href={siteSettings.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:underline"
                    >
                      Instagram
                    </a>
                  )}
                  {siteSettings.socialMedia.facebook && (
                    <a 
                      href={siteSettings.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:underline"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-gray-700">
                We typically respond within 24-48 hours during the academic year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## Component Implementations

### Header Component (components/Header.tsx)

```typescript
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            BYX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/tickets" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tickets
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-blue-600 transition-colors">
              Support
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/tickets"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/tickets" className="text-gray-700 hover:text-blue-600">Tickets</Link>
              <Link href="/support" className="text-gray-700 hover:text-blue-600">Support</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
```

### Footer Component (components/Footer.tsx)

```typescript
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">BYX</h3>
            <p className="text-gray-400">
              Brothers Under Christ - Building brotherhood centered on faith.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/tickets" className="block text-gray-400 hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/support" className="block text-gray-400 hover:text-white transition-colors">
                Support BYX
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} BYX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

### Hero Component (components/Hero.tsx)

```typescript
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brothers Under Christ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Building brotherhood centered on faith, service, and leadership
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tickets"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Tickets
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Contact Form Component (components/ContactForm.tsx)

```typescript
'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
      )}
    </form>
  )
}
```

### Sponsor Form Component (components/SponsorForm.tsx)

```typescript
'use client'

import { useState } from 'react'

export default function SponsorForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/sponsor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', organization: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div>
        <label htmlFor="sponsor-name" className="block text-sm font-medium mb-1">
          Name *
        </label>
        <input
          type="text"
          id="sponsor-name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium mb-1">
          Organization/Company
        </label>
        <input
          type="text"
          id="organization"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="sponsor-email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          id="sponsor-email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="sponsor-message" className="block text-sm font-medium mb-1">
          Sponsorship Interest *
        </label>
        <textarea
          id="sponsor-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us about your interest in sponsoring BYX..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
      >
        {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">Inquiry sent! We'll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Failed to send inquiry. Please try again.</p>
      )}
    </form>
  )
}
```

### Button Component (components/Button.tsx)

```typescript
import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ 
  href, 
  children, 
  variant = 'primary', 
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white disabled:border-gray-400 disabled:text-gray-400',
  }

  const className = `${baseStyles} ${variants[variant]}`

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  )
}
```

---

## API Routes

### Contact Form API (app/api/contact/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'BYX Website <onboarding@resend.dev>', // Update this with your verified domain
      to: process.env.CONTACT_EMAIL || 'contact@example.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

### Sponsor Form API (app/api/sponsor/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, organization, email, phone, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'BYX Website <onboarding@resend.dev>', // Update this with your verified domain
      to: process.env.CONTACT_EMAIL || 'contact@example.com',
      replyTo: email,
      subject: `Sponsorship Inquiry from ${name}`,
      text: `
New Sponsorship Inquiry

Name: ${name}
${organization ? `Organization: ${organization}` : ''}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Sponsor form error:', error)
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    )
  }
}
```

---

## Configuration Files

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1e3a8a',
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
```

---

## .gitignore

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## README.md

```markdown
# BYX Website

Modern, scalable website for BYX (Brothers Under Christ) fraternity built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity.io
- **Deployment:** Vercel
- **Email:** Resend

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account
- Resend account (for contact forms)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd byx-website
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Fill in your environment variables in `.env.local`

4. Set up Sanity
```bash
npm run sanity init
```

5. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/app` - Next.js pages and API routes
- `/components` - React components
- `/lib` - Utility functions and configurations
- `/sanity` - Sanity CMS schemas and configuration
- `/public` - Static assets

## Content Management

Access Sanity Studio at `http://localhost:3000/studio` (after deployment: `yourdomain.com/studio`)

### Content Types

- Site Settings (logo, colors, contact info)
- Events (with ticket links)
- Core Values
- FAQs
- Donation Platforms
- About Page Content

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

### Environment Variables

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`

## Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Contact forms with email notifications
- ✅ Event management
- ✅ Donation platform integration
- ✅ Content management via Sanity

## License

MIT

## Support

For questions or issues, contact [your-email@example.com]
```

---

## Deployment Steps

### 1. GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit: BYX website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Vercel Deployment

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables
6. Click "Deploy"

### 3. Sanity Studio Deployment

```bash
npm run sanity deploy
```

Choose a studio hostname (e.g., `byx-cms`)

### 4. Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate (automatic)

---

## Post-Deployment Checklist

- [ ] Access Sanity Studio and add initial content
- [ ] Test all forms (contact, sponsor)
- [ ] Verify environment variables
- [ ] Test responsive design on mobile
- [ ] Run Lighthouse audit
- [ ] Set up Vercel Analytics
- [ ] Add Google Analytics (optional)
- [ ] Test all navigation links
- [ ] Verify external ticket links work
- [ ] Check donation platform links
- [ ] Set up email forwarding with ImprovMX
- [ ] Update social media links

---

## Maintenance Tasks

### Weekly
- Check form submissions
- Monitor analytics
- Update event information

### Monthly
- Update dependencies: `npm update`
- Review and respond to contact inquiries
- Add new content/photos

### As Needed
- Update donation links
- Add new events
- Modify core values/mission statement
- Upload new photos

---

## Troubleshooting

### Forms not sending emails
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for errors
- Ensure `CONTACT_EMAIL` is valid

### Sanity content not showing
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Check Sanity dashboard for published content
- Ensure API token has read permissions

### Build errors
- Delete `.next` folder and rebuild
- Clear npm cache: `npm cache clean --force`
- Verify all dependencies are installed

---

## Future Enhancements

### Phase 2
- [ ] Member directory
- [ ] Photo gallery
- [ ] Blog/news section
- [ ] Event calendar
- [ ] RSVP system

### Phase 3
- [ ] Member portal (authentication)
- [ ] Online merchandise store
- [ ] Email newsletter integration
- [ ] Advanced analytics dashboard

---

## Development Notes

- Always test locally before pushing to production
- Use meaningful commit messages
- Keep dependencies updated
- Monitor performance with Vercel Analytics
- Backup Sanity content regularly
- Follow TypeScript best practices
- Use Tailwind utility classes consistently

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Resend Documentation](https://resend.com/docs)

---

**Built with ❤️ for BYX**
**Last Updated:** February 2026
