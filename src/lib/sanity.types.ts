// Sanity Document Types
// These match your existing data structures

export interface SanityBlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  publishedAt: string
  readTime: string
  image: SanityImage
  imageUrl?: string
  introduction: string
  sections: {
    heading: string
    content: string
  }[]
  conclusion?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface SanityCaseStudy {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  location: string
  category: string
  year: string
  image: SanityImage
  imageUrl?: string
  challenge: string
  approach: {
    heading: string
    description: string
  }[]
  outcome: string
  metrics: {
    label: string
    value: string
  }[]
  testimonial?: {
    quote: string
    attribution: string
  }
  featured?: boolean
}

export interface SanityLocation {
  _id: string
  name: string
  slug: { current: string }
  title: string
  description: string
  heroImage?: SanityImage
  heroImageUrl?: string
  majorCities?: {
    city: string
    county?: string
  }[]
  services?: string[]
  expertiseAreas?: {
    title: string
    description: string
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
  statistics?: {
    yearsExperience?: string
    resolutionRate?: string
    casesCompleted?: string
    availability?: string
  }
  license?: string
  sortOrder?: number
}

export interface SanityService {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  fullDescription?: string
  icon?: string
  category?: 'personal' | 'corporate' | 'legal' | 'background'
  featured?: boolean
  availableIn?: {
    name: string
    slug: { current: string }
  }[]
  sortOrder?: number
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

// Helper type for transforming Sanity data to your existing interfaces
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  content: {
    introduction: string
    sections: {
      heading: string
      content: string
    }[]
    conclusion: string
  }
}

export interface CaseStudy {
  slug: string
  title: string
  shortDescription: string
  location: string
  category: string
  year: string
  image: string
  challenge: string
  approach: {
    heading: string
    description: string
  }[]
  outcome: string
  metrics: {
    label: string
    value: string
  }[]
  testimonial?: {
    quote: string
    attribution: string
  }
}

