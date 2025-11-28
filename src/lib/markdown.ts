import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Content directories
const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const CASE_STUDIES_DIR = path.join(process.cwd(), 'content/case-studies')

// Blog Post Types
export interface BlogPostFrontmatter {
  title: string
  slug: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  imageAlt?: string
  introduction: string
  conclusion?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface BlogPost extends BlogPostFrontmatter {
  content: string
  contentHtml: string
}

// Case Study Types
export interface CaseStudyFrontmatter {
  title: string
  slug: string
  shortDescription: string
  location: string
  category: string
  year: string
  image: string
  imageAlt?: string
  challenge: string
  approach: Array<{
    heading: string
    description: string
  }>
  outcome: string
  metrics?: Array<{
    label: string
    value: string
  }>
  testimonial?: {
    quote: string
    attribution: string
  }
  featured?: boolean
}

export interface CaseStudy extends CaseStudyFrontmatter {
  content?: string
  contentHtml?: string
}

/**
 * Convert markdown to HTML
 */
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
}

/**
 * Get all blog post slugs
 */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }
  
  const files = fs.readdirSync(BLOG_DIR)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))
}

/**
 * Get all blog posts (sorted by date, newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  
  const posts = slugs.map(slug => {
    const post = getBlogPostBySlug(slug)
    return post
  }).filter((post): post is BlogPost => post !== null)
  
  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      ...(data as BlogPostFrontmatter),
      content,
      contentHtml: '', // Will be populated when needed
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

/**
 * Get a single blog post with HTML content
 */
export async function getBlogPostWithHtml(slug: string): Promise<BlogPost | null> {
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return null
  }
  
  const contentHtml = await markdownToHtml(post.content)
  
  return {
    ...post,
    contentHtml,
  }
}

/**
 * Get all case study slugs
 */
export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return []
  }
  
  const files = fs.readdirSync(CASE_STUDIES_DIR)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))
}

/**
 * Get all case studies
 */
export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getAllCaseStudySlugs()
  
  const caseStudies = slugs.map(slug => {
    const caseStudy = getCaseStudyBySlug(slug)
    return caseStudy
  }).filter((study): study is CaseStudy => study !== null)
  
  // Sort by year (newest first)
  return caseStudies.sort((a, b) => {
    return parseInt(b.year) - parseInt(a.year)
  })
}

/**
 * Get a single case study by slug
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      ...(data as CaseStudyFrontmatter),
      content,
      contentHtml: '',
    }
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error)
    return null
  }
}

/**
 * Get a single case study with HTML content (if needed)
 */
export async function getCaseStudyWithHtml(slug: string): Promise<CaseStudy | null> {
  const caseStudy = getCaseStudyBySlug(slug)
  
  if (!caseStudy || !caseStudy.content) {
    return caseStudy
  }
  
  const contentHtml = await markdownToHtml(caseStudy.content)
  
  return {
    ...caseStudy,
    contentHtml,
  }
}

/**
 * Get featured case studies
 */
export function getFeaturedCaseStudies(limit = 3): CaseStudy[] {
  const allCaseStudies = getAllCaseStudies()
  return allCaseStudies
    .filter(study => study.featured === true)
    .slice(0, limit)
}

