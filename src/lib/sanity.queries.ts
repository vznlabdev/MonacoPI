import { groq } from 'next-sanity'

// Blog Post Queries
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    readTime,
    image,
    "imageUrl": image.asset->url
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    readTime,
    image,
    "imageUrl": image.asset->url,
    introduction,
    sections,
    conclusion,
    seo
  }
`

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost"] {
    "slug": slug.current
  }
`

// Case Study Queries
export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    location,
    category,
    year,
    image,
    "imageUrl": image.asset->url,
    featured
  }
`

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    location,
    category,
    year,
    image,
    "imageUrl": image.asset->url,
    challenge,
    approach,
    outcome,
    metrics,
    testimonial
  }
`

export const caseStudySlugsQuery = groq`
  *[_type == "caseStudy"] {
    "slug": slug.current
  }
`

export const featuredCaseStudiesQuery = groq`
  *[_type == "caseStudy" && featured == true] | order(_createdAt desc) [0...3] {
    _id,
    title,
    slug,
    shortDescription,
    location,
    category,
    year,
    image,
    "imageUrl": image.asset->url
  }
`

// Location Queries
export const locationsQuery = groq`
  *[_type == "location"] | order(sortOrder asc) {
    _id,
    name,
    slug,
    title,
    description,
    heroImage,
    "heroImageUrl": heroImage.asset->url,
    majorCities,
    services,
    sortOrder
  }
`

export const locationBySlugQuery = groq`
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    title,
    description,
    heroImage,
    "heroImageUrl": heroImage.asset->url,
    majorCities,
    services,
    expertiseAreas,
    faqs,
    statistics,
    license
  }
`

export const locationSlugsQuery = groq`
  *[_type == "location"] {
    "slug": slug.current
  }
`

// Service Queries
export const servicesQuery = groq`
  *[_type == "service"] | order(sortOrder asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    category,
    featured,
    sortOrder
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    icon,
    category,
    availableIn[]-> {
      name,
      slug
    }
  }
`

export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(sortOrder asc) [0...6] {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    category
  }
`

