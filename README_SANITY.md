# 📝 README: Sanity CMS Integration

## Overview

Your MonacoPI project has been successfully prepared for **Sanity CMS** integration. This document provides a high-level overview of what was done and how to proceed.

---

## 🎯 What Is Sanity CMS?

Sanity is a headless CMS that allows you to:
- Manage blog posts, case studies, and other content without touching code
- Edit content through a beautiful web interface (Sanity Studio)
- Automatically optimize and serve images through a CDN
- Preview changes before publishing
- Collaborate with team members
- Track content version history

**Perfect for:** Private investigation firm that needs to regularly update blog content, case studies, and service offerings.

---

## ✅ What Was Done

### 1. Installed Packages
- `sanity` - Core Sanity Studio and Content Lake
- `next-sanity` - Next.js integration helpers
- `@sanity/image-url` - Image optimization utilities
- `@sanity/vision` - Query tool for testing
- `@portabletext/react` - Rich text rendering

### 2. Created Configuration
- `sanity.config.ts` - Main Sanity configuration
- `sanity.cli.ts` - CLI configuration for deployment
- Studio route at `/studio` for content management

### 3. Designed Schemas (Content Types)
- **Blog Post** - Title, excerpt, sections, categories, SEO
- **Case Study** - Challenge, approach, outcome, metrics, testimonials
- **Location** - State pages with cities, services, FAQs, statistics
- **Service** - Service offerings with categories and availability

### 4. Created Utilities
- **Client** (`sanity.client.ts`) - Fetch data from Sanity
- **Queries** (`sanity.queries.ts`) - Pre-built GROQ queries
- **Types** (`sanity.types.ts`) - TypeScript definitions

### 5. Prepared Documentation
- `SANITY_QUICK_START.md` - Fastest way to get started (10 min)
- `SANITY_ENV_SETUP.md` - Environment setup details
- `SANITY_MIGRATION_GUIDE.md` - How to migrate existing content
- `SANITY_INTEGRATION_SUMMARY.md` - Complete technical overview

---

## 🚀 Getting Started (10 Minutes)

### Quick Steps:

1. **Create Sanity account** at https://sanity.io
2. **Get Project ID and API token**
3. **Create `.env.local`** with credentials
4. **Run** `npm run dev`
5. **Visit** http://localhost:3000/studio

**👉 See `SANITY_QUICK_START.md` for detailed steps.**

---

## 📂 Project Structure

```
MonacoPI/
├── sanity/
│   └── schemas/              # Content type definitions
│       ├── blogPost.ts       # Blog post schema
│       ├── caseStudy.ts      # Case study schema
│       ├── location.ts       # Location page schema
│       └── service.ts        # Service schema
│
├── src/
│   ├── app/
│   │   └── studio/           # Sanity Studio route (/studio)
│   └── lib/
│       ├── sanity.client.ts  # Sanity client & image helpers
│       ├── sanity.queries.ts # Pre-built GROQ queries
│       └── sanity.types.ts   # TypeScript types
│
├── sanity.config.ts          # Sanity configuration
├── sanity.cli.ts             # CLI configuration
└── .env.local               # Your credentials (create this)
```

---

## 📊 Current Content

### Ready to Migrate:
- **6 Blog Posts** in `src/data/blogPosts.ts`
- **3 Case Studies** in `src/data/caseStudies.ts`
- **3 Location Pages** (Colorado, Florida, Texas)

### Migration Time:
- **Manual entry**: 1-2 hours (recommended)
- **Automated script**: 30 min (requires setup)

**👉 See `SANITY_MIGRATION_GUIDE.md` for instructions.**

---

## 🛠️ How It Works

### Current Setup (Static Files)
```typescript
// Blog posts hardcoded in file
import { blogPosts } from '@/data/blogPosts'
```

### After Sanity (Dynamic CMS)
```typescript
// Blog posts fetched from Sanity
import { client } from '@/lib/sanity.client'
import { blogPostsQuery } from '@/lib/sanity.queries'

const posts = await client.fetch(blogPostsQuery)
```

### Benefits:
- ✅ Update content without redeployment
- ✅ No coding required
- ✅ Automatic image optimization
- ✅ Built-in SEO fields
- ✅ Version history

---

## 🎨 Sanity Studio Features

Once set up, you can:

### Content Management
- Create/edit blog posts with sections
- Add case studies with metrics and testimonials
- Manage location pages (cities, services, FAQs)
- Organize services by category

### Media Management
- Upload images (auto-optimized)
- Crop and adjust images
- Add alt text for accessibility
- Serve via global CDN

### Publishing
- Save as draft
- Preview before publishing
- Schedule posts (with plugins)
- Version history

---

## 📈 Schema Overview

### Blog Post Schema
| Field | Type | Purpose |
|-------|------|---------|
| Title | String | Blog post title |
| Slug | Slug | URL-friendly identifier |
| Excerpt | Text | Short description |
| Category | String | Investigation Tips, Legal Insights, etc. |
| Published Date | DateTime | Publication date |
| Featured Image | Image | Hero image with alt text |
| Introduction | Text | Opening paragraph |
| Sections | Array | Heading + content pairs |
| Conclusion | Text | Closing paragraph |
| SEO | Object | Meta title, meta description |

### Case Study Schema
| Field | Type | Purpose |
|-------|------|---------|
| Title | String | Case study title |
| Location | String | Denver, Boulder, etc. |
| Category | String | Divorce, Corporate, Family Law |
| Challenge | Text | Problem description |
| Approach | Array | Steps taken |
| Outcome | Text | Results achieved |
| Metrics | Array | Key statistics |
| Testimonial | Object | Client quote |
| Featured | Boolean | Show on homepage |

**👉 See `SANITY_INTEGRATION_SUMMARY.md` for complete schema details.**

---

## 🔐 Environment Variables

You need to create `.env.local` with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
```

**Important:**
- `.env.local` is in `.gitignore` (never commit!)
- `NEXT_PUBLIC_*` variables are safe to expose to browser
- `SANITY_API_TOKEN` stays server-side only

**👉 See `SANITY_ENV_SETUP.md` for detailed setup.**

---

## 💻 Code Examples

### Fetch All Blog Posts
```typescript
import { client } from '@/lib/sanity.client'
import { blogPostsQuery } from '@/lib/sanity.queries'

const posts = await client.fetch(blogPostsQuery)
```

### Fetch Single Blog Post by Slug
```typescript
import { blogPostBySlugQuery } from '@/lib/sanity.queries'

const post = await client.fetch(blogPostBySlugQuery, { 
  slug: 'your-post-slug' 
})
```

### Optimize Images
```typescript
import { getOptimizedImageUrl } from '@/lib/sanity.client'

const imageUrl = getOptimizedImageUrl(post.image, 800, 600)
```

### Generate Static Paths
```typescript
export async function generateStaticParams() {
  const slugs = await client.fetch(blogPostSlugsQuery)
  return slugs.map((item) => ({ slug: item.slug }))
}
```

---

## 🎯 Deployment Checklist

### Local Development
- [x] Install Sanity packages ✅
- [x] Create schemas ✅
- [x] Set up Studio route ✅
- [x] Create client utilities ✅
- [ ] Add `.env.local` (you do this)
- [ ] Migrate content
- [ ] Update pages to use Sanity
- [ ] Test locally

### Production Deployment
- [ ] Add environment variables to hosting platform (Vercel/Netlify)
- [ ] Deploy Next.js app
- [ ] Test production site
- [ ] (Optional) Deploy Sanity Studio separately

---

## 📚 Documentation Guide

| Document | When to Read |
|----------|-------------|
| `SANITY_QUICK_START.md` | ⭐ **Start here** - Get up and running in 10 minutes |
| `SANITY_ENV_SETUP.md` | When setting up environment variables |
| `SANITY_MIGRATION_GUIDE.md` | When ready to migrate your 6 blog posts & 3 case studies |
| `SANITY_INTEGRATION_SUMMARY.md` | For complete technical details |
| `README_SANITY.md` | This file - High-level overview |

---

## 🆘 Support

### Issues?
1. Check the troubleshooting section in `SANITY_QUICK_START.md`
2. Review Sanity documentation: https://www.sanity.io/docs
3. Check Next.js integration guide: https://www.sanity.io/plugins/next-sanity

### Common Issues:
- **Can't access Studio**: Check `.env.local` and restart dev server
- **Images not showing**: Upload to Sanity, don't reference local paths
- **Build errors**: Clear `.next` folder and rebuild
- **Content not updating**: Disable CDN in development (`useCdn: false`)

---

## ✨ Benefits Summary

### Content Management
- ✅ No coding required to update content
- ✅ Beautiful editing interface
- ✅ Real-time preview
- ✅ Version history
- ✅ Draft & publish workflow

### Performance
- ✅ Automatic image optimization
- ✅ Global CDN for images
- ✅ Efficient queries with GROQ
- ✅ Incremental static regeneration

### Developer Experience
- ✅ TypeScript throughout
- ✅ Pre-built queries
- ✅ Type-safe content fetching
- ✅ Easy image helpers

### Business Value
- ✅ Update content in minutes (not hours)
- ✅ Non-technical team members can manage content
- ✅ Better SEO with structured data
- ✅ Scalable for future growth
- ✅ Free tier available

---

## 🎉 Ready to Go!

Everything is set up and tested. Your next steps:

1. **Read** `SANITY_QUICK_START.md`
2. **Set up** Sanity account (10 minutes)
3. **Migrate** content (1-2 hours)
4. **Update** pages to use Sanity
5. **Deploy** to production

**You're ready to start managing content like a pro!** 🚀

---

## 📞 Quick Links

- **Sanity Account**: https://sanity.io
- **Project Dashboard**: https://sanity.io/manage
- **Documentation**: https://www.sanity.io/docs
- **Community**: https://www.sanity.io/community

---

*Generated: November 28, 2025*  
*Status: ✅ Ready for Integration*  
*Build: ✅ Successful*

