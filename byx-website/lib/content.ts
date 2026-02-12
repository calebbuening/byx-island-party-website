export interface AboutPageContent {
  missionStatement: string
  whatMakesUsDifferent: string
  history: string
  heroImageUrl?: string
}

export interface CoreValue {
  title: string
  description: string
  icon?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface EventItem {
  title: string
  description: string
  date: string
  location: string
  ticketUrl?: string
  imageUrl?: string
}

export interface DonationPlatformItem {
  name: string
  url: string
  qrCodeUrl?: string
}

export interface SiteSettingsContent {
  contactEmail: string
  socialMedia: {
    instagram?: string
    facebook?: string
  }
}

export const aboutPageContent: AboutPageContent = {
  missionStatement:
    'BYX (Brothers Under Christ) is a Christian fraternity dedicated to building brotherhood centered on faith in Jesus Christ.',
  whatMakesUsDifferent:
    "BYX is more than a fraternity: it's a brotherhood built on faith. We challenge each other to grow spiritually, serve our community, and become men of character.",
  history:
    'Our chapter has grown through campus ministry, service initiatives, and events that create lasting brotherhood. Each year we keep building stronger men and stronger community impact.',
}

export const coreValues: CoreValue[] = [
  {
    title: 'Faith First',
    description: 'We put Christ at the center of our decisions, relationships, and leadership.',
    icon: 'Cross',
  },
  {
    title: 'Brotherhood',
    description: 'We build lifelong bonds rooted in accountability, encouragement, and trust.',
    icon: 'Users',
  },
  {
    title: 'Service',
    description: 'We serve our campus and community with humility and consistency.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Leadership',
    description: 'We equip each other to lead with integrity in every part of life.',
    icon: 'Flag',
  },
]

export const generalFaqs: FaqItem[] = [
  {
    question: 'Who can come to BYX events?',
    answer: 'Most events are open to students and invited guests. Check each event listing for details.',
  },
  {
    question: 'Do I need to be a member to attend?',
    answer: 'No. Many events are open to everyone and are a great way to get connected.',
  },
  {
    question: 'How can I get involved with BYX?',
    answer: 'Use the contact page to reach out and we can connect you with current members and leaders.',
  },
]

export const events: EventItem[] = [
  {
    title: 'Island Party Kickoff',
    description: 'Live music, beach games, and opening night energy with the full BYX community.',
    date: '2026-03-27T19:00:00-05:00',
    location: 'BYX Main Lawn',
    ticketUrl: 'https://example.com/tickets/kickoff',
  },
  {
    title: 'Sunset Worship & Testimony Night',
    description: 'An evening of worship, stories, and reflection with brothers and guests.',
    date: '2026-03-28T18:30:00-05:00',
    location: 'Campus Amphitheater',
    ticketUrl: 'https://example.com/tickets/worship',
  },
  {
    title: 'Service Day + Beach Cleanup',
    description: 'Hands-on service project focused on stewardship and community outreach.',
    date: '2026-03-29T09:00:00-05:00',
    location: 'Riverside Park',
  },
]

export const donationPlatforms: DonationPlatformItem[] = [
  {
    name: 'Venmo',
    url: 'https://example.com/donate/venmo',
  },
  {
    name: 'PayPal',
    url: 'https://example.com/donate/paypal',
  },
  {
    name: 'Zelle',
    url: 'https://example.com/donate/zelle',
  },
]

export const siteSettingsContent: SiteSettingsContent = {
  contactEmail: 'contact@byxislandparty.com',
  socialMedia: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
}
