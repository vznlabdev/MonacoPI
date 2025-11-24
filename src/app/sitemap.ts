import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://monacopi.com'
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
    '/for-attorneys',
    '/for-individuals',
    '/for-corporations',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.8,
  }))

  // Location pages
  const locations = [
    '/locations/colorado',
    '/locations/florida',
    '/locations/texas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85, // High priority for local SEO
  }))

  // Blog posts
  const blogPosts = [
    '5-signs-you-may-need-a-private-investigator',
    'how-to-choose-the-right-private-investigator',
    'what-makes-evidence-court-admissible',
    'the-truth-about-surveillance-operations',
    'when-to-hire-a-private-investigator-for-divorce',
    'understanding-background-checks',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Case studies
  const caseStudies = [
    'hidden-asset-recovery',
    'corporate-fraud-investigation',
    'custody-investigation',
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...locations, ...blogPosts, ...caseStudies]
}

