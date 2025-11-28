# Sanity CMS Content Migration Guide

This guide will help you migrate your existing content from static files to Sanity CMS.

## 📋 Overview

You currently have:
- **6 Blog Posts** in `src/data/blogPosts.ts`
- **3 Case Studies** in `src/data/caseStudies.ts`
- **3 Location Pages** (Colorado, Florida, Texas)

## 🎯 Migration Strategy

You have two options for migrating content:

### Option 1: Manual Entry (Recommended for Small Datasets)
**Best for:** Your current situation (6 blog posts, 3 case studies)
- Use Sanity Studio interface to manually add content
- Gives you a chance to review and improve content
- Takes ~30-60 minutes for all content
- No risk of data transformation errors

### Option 2: Automated Import Script
**Best for:** Large datasets (100+ items)
- Programmatically import from existing data files
- Faster but requires script development
- May need data format adjustments

## 📝 Manual Migration Steps (Recommended)

### Step 1: Start Sanity Studio

```bash
npm run dev
```

Visit: `http://localhost:3000/studio`

### Step 2: Migrate Blog Posts

For each blog post in `src/data/blogPosts.ts`:

1. Click **"+ Create"** → **"Blog Post"**
2. Fill in the fields:

**Example for first blog post:**

| Field | Value |
|-------|-------|
| **Title** | 5 Signs You May Need a Private Investigator |
| **Slug** | Click "Generate" from title or manually enter: `5-signs-you-may-need-a-private-investigator` |
| **Excerpt** | Discover the common situations where professional investigation services... |
| **Category** | Investigation Tips |
| **Published Date** | October 15, 2024 (convert to date picker) |
| **Read Time** | 5 min read |
| **Featured Image** | Upload: `public/images/5-Signs-You-May-Need-a-Private-Investigator-khiet-tam-5rFbAKh0A-A-unsplash.jpg` |
| **Introduction** | Life presents situations where you need answers but don't know... |
| **Content Sections** | Add 5 sections (see below) |
| **Conclusion** | Recognizing when you need professional help is the first step... |

**Sections to add (click "+ Add item"):**
1. **Heading:** "1. Suspicions in a Personal Relationship"  
   **Content:** "If you're experiencing doubts about a partner's fidelity..."

2. **Heading:** "2. Concerns About Your Child's Safety"  
   **Content:** "When custody arrangements change or you have concerns..."

(Continue for all 5 sections)

3. Click **Publish** when done

**Repeat for all 6 blog posts.**

### Step 3: Migrate Case Studies

For each case study in `src/data/caseStudies.ts`:

1. Click **"+ Create"** → **"Case Study"**
2. Fill in fields from your data file

**Example for "Hidden Asset Recovery":**

| Field | Value |
|-------|-------|
| **Title** | Hidden Asset Recovery |
| **Slug** | Generate or enter: `hidden-asset-recovery` |
| **Short Description** | Located $2.3M in concealed assets across multiple offshore... |
| **Location** | Denver |
| **Category** | Divorce |
| **Year** | 2024 |
| **Featured Image** | Upload: `public/images/hidden-asset-sofya-kholodkova-HSlDZ7suCQQ-unsplash.jpg` |
| **The Challenge** | Our client, a successful entrepreneur, was going through a contentious... |

**Approach (add 4 items):**
1. **Heading:** "Comprehensive Financial Investigation"  
   **Description:** "We began with a thorough analysis..."

2. **Heading:** "Advanced Asset Tracing"  
   **Description:** "Using proprietary databases..."

(Continue for all 4 approach items)

**Outcome:**  
Paste the full outcome text

**Key Metrics (add 3 items):**
1. **Label:** "Assets Recovered" → **Value:** "$2.3M"
2. **Label:** "Investigation Timeline" → **Value:** "10 Days"
3. **Label:** "Offshore Accounts Located" → **Value:** "7"

**Client Testimonial:**
- **Quote:** "I knew something wasn't right, but I had no idea..."
- **Attribution:** "Divorce Client, Denver"

**Featured:** ☑️ Checked (for featured case studies)

**Repeat for all 3 case studies.**

### Step 4: Create Location Pages (Optional - for future CMS management)

Your location pages are currently static. You can optionally migrate them to Sanity:

1. Click **"+ Create"** → **"Location"**
2. Fill in for Colorado:

| Field | Value |
|-------|-------|
| **Location Name** | Colorado |
| **Slug** | `colorado` |
| **Page Title** | Colorado Private Investigator \| Licensed PI Services Denver, Boulder, Colorado Springs |
| **Description** | Comprehensive investigation services across Colorado... |
| **Hero Image** | Upload: `public/images/maroon-bells-colorado.jpg` |
| **Major Cities** | Add 12 cities with counties |
| **Services** | Add 12 services as array items |
| **FAQs** | Add 6 FAQs |
| **Statistics** | Years: "17+", Resolution: "95%+", etc. |
| **License** | Licensed Colorado Private Investigator |
| **Sort Order** | 1 |

**Repeat for Florida (sort order: 2) and Texas (sort order: 3).**

## 🔄 Automated Migration (Advanced)

If you prefer to automate the migration, here's a script approach:

### Create Migration Script

Create `scripts/migrate-to-sanity.ts`:

```typescript
import { client } from '@/lib/sanity.client'
import { blogPosts } from '@/data/blogPosts'
import { caseStudies } from '@/data/caseStudies'

async function migrateBlogPosts() {
  for (const post of blogPosts) {
    const doc = {
      _type: 'blogPost',
      title: post.title,
      slug: { current: post.slug },
      excerpt: post.excerpt,
      category: post.category,
      publishedAt: new Date(post.date).toISOString(),
      readTime: post.readTime,
      introduction: post.content.introduction,
      sections: post.content.sections,
      conclusion: post.content.conclusion,
      // Note: You'll need to manually upload images
    }
    
    await client.create(doc)
    console.log(`✅ Migrated: ${post.title}`)
  }
}

async function migrateCaseStudies() {
  for (const study of caseStudies) {
    const doc = {
      _type: 'caseStudy',
      title: study.title,
      slug: { current: study.slug },
      shortDescription: study.shortDescription,
      location: study.location,
      category: study.category,
      year: study.year,
      challenge: study.challenge,
      approach: study.approach,
      outcome: study.outcome,
      metrics: study.metrics,
      testimonial: study.testimonial,
      // Note: You'll need to manually upload images
    }
    
    await client.create(doc)
    console.log(`✅ Migrated: ${study.title}`)
  }
}

async function main() {
  console.log('🚀 Starting migration...')
  await migrateBlogPosts()
  await migrateCaseStudies()
  console.log('✅ Migration complete!')
}

main()
```

**Note:** Images must be uploaded manually or using Sanity's asset API.

## 📸 Image Migration

Images need to be uploaded to Sanity's asset system:

### Manual Upload (Easiest):
1. When creating/editing content in Studio
2. Click "Upload" on image fields
3. Select images from `public/images/` folder
4. Sanity will handle optimization and CDN delivery

### Programmatic Upload (Advanced):
```typescript
import { client } from '@/lib/sanity.client'
import fs from 'fs'

async function uploadImage(filePath: string) {
  const buffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, {
    filename: filePath.split('/').pop(),
  })
  return asset
}
```

## 🔄 Updating Your Next.js Pages

After migrating content, you'll need to update your pages to fetch from Sanity instead of static files.

### Example: Update Blog List Page

**Before** (`src/app/blog/page.tsx`):
```typescript
import { blogPosts } from "@/data/blogPosts"
```

**After**:
```typescript
import { client } from '@/lib/sanity.client'
import { blogPostsQuery } from '@/lib/sanity.queries'

export default async function BlogPage() {
  const blogPosts = await client.fetch(blogPostsQuery)
  
  // Rest of your component stays the same!
}
```

### Example: Update Blog Post Page

**Before** (`src/app/blog/[slug]/page.tsx`):
```typescript
import { blogPosts } from "@/data/blogPosts"
const post = blogPosts.find((p) => p.slug === slug)
```

**After**:
```typescript
import { client } from '@/lib/sanity.client'
import { blogPostBySlugQuery } from '@/lib/sanity.queries'

const post = await client.fetch(blogPostBySlugQuery, { slug })
```

## ✅ Migration Checklist

- [ ] Set up Sanity account and project
- [ ] Add environment variables to `.env.local`
- [ ] Access Sanity Studio at `/studio`
- [ ] Migrate 6 blog posts
- [ ] Migrate 3 case studies
- [ ] Upload all images
- [ ] (Optional) Migrate location pages
- [ ] Update blog list page to use Sanity
- [ ] Update blog post page to use Sanity
- [ ] Update case study pages to use Sanity
- [ ] Test all pages locally
- [ ] Deploy to production
- [ ] Add environment variables to production hosting
- [ ] Test production site

## 🎉 After Migration

Once migrated, you can:
- ✅ Add/edit blog posts without touching code
- ✅ Update case studies instantly
- ✅ Preview changes before publishing
- ✅ Let non-technical team members manage content
- ✅ Automatic image optimization via Sanity CDN
- ✅ Version history for all content changes

## 💡 Pro Tips

1. **Start with one blog post** to test the process
2. **Take screenshots** of your current content before migration
3. **Keep the static files** until you're 100% confident in Sanity
4. **Test thoroughly** on localhost before deploying
5. **Use "Featured" flags** to highlight important content
6. **Set proper sort orders** for consistent display

## 🆘 Troubleshooting

**Can't access Studio?**
- Check `.env.local` has correct PROJECT_ID
- Restart dev server after adding env variables

**Images not appearing?**
- Make sure images are uploaded to Sanity, not just referencing paths
- Use `urlFor()` helper from `sanity.client.ts`

**Data not updating?**
- Check you're using the client from `sanity.client.ts`
- Try disabling CDN: `useCdn: false` for development

## 📚 Next Steps

After migration is complete, check out:
- **Sanity Dashboard**: https://sanity.io/manage
- **Documentation**: https://www.sanity.io/docs
- **Schema Reference**: https://www.sanity.io/docs/schema-types

