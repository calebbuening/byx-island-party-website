export interface SiteSettings {
  title: string
  tagline?: string
  description?: string
  logo?: any
  primaryColor?: string
  secondaryColor?: string
  contactEmail?: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
}

export interface Event {
  title: string
  slug: { current: string }
  description?: string
  date?: string
  location?: string
  ticketUrl?: string
  featured?: boolean
  imageUrl?: string
}

export interface Value {
  title: string
  description?: string
  icon?: string
  order?: number
}

export interface FAQ {
  question: string
  answer?: string
  category?: 'general' | 'membership' | 'events' | 'donations'
  order?: number
}

export interface DonationPlatform {
  name: string
  url?: string
  qrCodeUrl?: string
  active?: boolean
  order?: number
}

export interface AboutPage {
  missionStatement?: string
  whatMakesUsDifferent?: string
  history?: string
  heroImageUrl?: string
}
