import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

// Client for fetching data (can be used in server components)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you want fresh data
  perspective: 'published',
})

// Client for preview mode (requires authentication)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'previewDrafts',
})

// Helper function to use the correct client based on preview mode
export const getClient = (preview: boolean = false) =>
  preview ? previewClient : client

// Image URL builder
const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper to generate image URLs with transformations
export function getImageUrl(source: any) {
  return urlFor(source).auto('format').fit('max').url()
}

// Helper to generate optimized image URLs
export function getOptimizedImageUrl(
  source: any,
  width?: number,
  height?: number
) {
  let image = urlFor(source).auto('format').fit('max')
  
  if (width) {
    image = image.width(width)
  }
  if (height) {
    image = image.height(height)
  }
  
  return image.url()
}

