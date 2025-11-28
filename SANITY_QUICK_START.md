# 🚀 Sanity CMS Quick Start Guide

## ✅ Status: Ready for Sanity!

Your MonacoPI project is **fully prepared** for Sanity CMS integration. All code, schemas, and utilities have been set up and tested.

---

## 📝 What You Need to Do Next

### Step 1: Create Sanity Account (5 minutes)

1. Visit [https://sanity.io](https://sanity.io)
2. Sign up with GitHub, Google, or email
3. Click **"Create new project"**
4. Choose a name: **"Monaco PI"**
5. Dataset: **"production"** (default)
6. Copy your **Project ID** (looks like: `abc12345`)

### Step 2: Get API Token (2 minutes)

1. Go to [https://sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Click **"API"** in sidebar
4. Click **"Tokens"** tab
5. Click **"Add API token"**
   - Name: `MonacoPI Development`
   - Permissions: **Editor**
6. Copy the token immediately (you won't see it again!)

### Step 3: Configure Environment Variables (1 minute)

Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
```

Replace:
- `your_project_id_here` → Your actual Project ID from Step 1
- `your_token_here` → Your API token from Step 2

### Step 4: Start Development Server (1 minute)

```bash
npm run dev
```

### Step 5: Access Sanity Studio (1 minute)

Open your browser and go to:

```
http://localhost:3000/studio
```

You should see the Sanity Studio login screen! 🎉

---

## 🎨 What You Can Do Now

Once you're logged into Studio, you can:

### Create Your First Blog Post
1. Click **"+ Create"** button
2. Select **"Blog Post"**
3. Fill in:
   - Title: "Test Blog Post"
   - Click "Generate" next to Slug
   - Category: "Investigation Tips"
   - Upload a test image
   - Fill in introduction and add sections
4. Click **"Publish"**

### Create Your First Case Study
1. Click **"+ Create"** button
2. Select **"Case Study"**
3. Fill in the details
4. Add metrics and testimonial
5. Click **"Publish"**

### (Optional) Create Location Pages
1. Click **"+ Create"** button
2. Select **"Location"**
3. Set up Colorado, Florida, or Texas
4. Add cities, services, FAQs
5. Click **"Publish"**

---

## 📚 Important Documents

| Document | Purpose |
|----------|---------|
| `SANITY_ENV_SETUP.md` | Detailed environment setup instructions |
| `SANITY_MIGRATION_GUIDE.md` | How to migrate your existing 6 blog posts & 3 case studies |
| `SANITY_INTEGRATION_SUMMARY.md` | Complete overview of what was built |
| `SANITY_QUICK_START.md` | This file - fastest way to get started |

---

## 🎯 Your Content to Migrate

### Ready to Import:
- ✅ **6 Blog Posts** from `src/data/blogPosts.ts`
- ✅ **3 Case Studies** from `src/data/caseStudies.ts`
- ✅ **All Images** from `public/images/`

### Migration Options:
1. **Manual Entry** (Recommended) - 1-2 hours, review as you go
2. **Automated Script** - Faster but requires script setup

**See `SANITY_MIGRATION_GUIDE.md` for detailed instructions.**

---

## 🔧 Technical Overview

### What Was Created

```
✅ Configuration
├── sanity.config.ts         # Main Sanity config
├── sanity.cli.ts            # CLI config
└── .env.local              # You create this

✅ Schemas (Content Types)
├── sanity/schemas/blogPost.ts
├── sanity/schemas/caseStudy.ts
├── sanity/schemas/location.ts
└── sanity/schemas/service.ts

✅ Utilities
├── src/lib/sanity.client.ts    # Client & image helpers
├── src/lib/sanity.queries.ts   # Pre-built queries
└── src/lib/sanity.types.ts     # TypeScript types

✅ Studio Route
└── src/app/studio/[[...index]]/
    ├── page.tsx
    └── layout.tsx
```

### Schema Features

**Blog Post Schema**
- Title, slug, excerpt, category
- Published date, read time
- Featured image with alt text
- Introduction, sections, conclusion
- SEO fields (meta title, description)

**Case Study Schema**
- Title, slug, location, category
- Challenge, approach, outcome
- Key metrics (label + value pairs)
- Client testimonials
- Featured flag

**Location Schema**
- Name, title, description
- Major cities with counties
- Services array
- Expertise areas
- FAQs
- Statistics

**Service Schema**
- Title, description
- Category (personal, corporate, legal, background)
- Icon name
- Available in locations (references)
- Featured flag

---

## 💻 Code Examples

### Fetching Blog Posts

```typescript
import { client } from '@/lib/sanity.client'
import { blogPostsQuery } from '@/lib/sanity.queries'

export default async function BlogPage() {
  // Fetch all blog posts from Sanity
  const posts = await client.fetch(blogPostsQuery)
  
  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### Fetching Single Blog Post

```typescript
import { client } from '@/lib/sanity.client'
import { blogPostBySlugQuery } from '@/lib/sanity.queries'

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await client.fetch(blogPostBySlugQuery, { 
    slug: params.slug 
  })
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.introduction}</p>
      {/* Render sections, etc. */}
    </article>
  )
}
```

### Optimizing Images

```typescript
import { getOptimizedImageUrl } from '@/lib/sanity.client'

// Get image URL with specific dimensions
const imageUrl = getOptimizedImageUrl(post.image, 800, 600)

<Image 
  src={imageUrl} 
  alt={post.image.alt || post.title}
  width={800}
  height={600}
/>
```

---

## ✨ Key Benefits

### For You
- ✅ **No code required** to update content
- ✅ **Real-time updates** without redeployment
- ✅ **Image optimization** automatic via CDN
- ✅ **Version history** for all changes
- ✅ **Draft & publish** workflow

### For Your Business
- ✅ **Faster updates** (minutes vs hours)
- ✅ **Team collaboration** (multiple editors)
- ✅ **Better SEO** (structured data built-in)
- ✅ **Cost-effective** (free tier available)
- ✅ **Scalable** (grows with you)

---

## 🎓 Learning Resources

### Official Docs
- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Integration**: https://www.sanity.io/plugins/next-sanity
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Schema Types**: https://www.sanity.io/docs/schema-types

### Video Tutorials
- **Sanity + Next.js**: https://www.sanity.io/guides/nextjs-app-router
- **Studio Basics**: https://www.sanity.io/docs/sanity-studio

---

## 🆘 Troubleshooting

### Can't Access Studio?
```bash
# Check if env variables are set
cat .env.local

# Restart dev server
npm run dev
```

### Build Errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Showing?
- Make sure you uploaded images to Sanity Studio (not just referencing local paths)
- Check you're using `getOptimizedImageUrl()` from `sanity.client.ts`

### Content Not Updating?
- Sanity uses CDN caching by default
- For development, set `useCdn: false` in `sanity.client.ts`
- For production, changes can take 1-2 minutes to propagate

---

## 📊 Current Build Status

✅ **Build: Successful**  
✅ **Linter: No Errors**  
✅ **TypeScript: Valid**  
✅ **Studio Route: Created**  
✅ **Schemas: 4 Types Ready**  
✅ **Queries: 15+ Pre-built**  

**Total Pages Built**: 31 (including new `/studio` route)

---

## 🎯 Next Steps Checklist

- [ ] Create Sanity account (5 min)
- [ ] Get API credentials (2 min)
- [ ] Add `.env.local` file (1 min)
- [ ] Start dev server (1 min)
- [ ] Access Studio at `/studio` (1 min)
- [ ] Create test blog post (5 min)
- [ ] Migrate 6 blog posts (30-60 min)
- [ ] Migrate 3 case studies (15-30 min)
- [ ] Update pages to fetch from Sanity
- [ ] Test thoroughly
- [ ] Deploy to production

---

## 🎉 You're Ready!

Everything is set up and tested. Follow the 5 steps at the top of this guide, and you'll be managing content in Sanity within **10 minutes**.

**Questions?** Check the detailed guides in this folder or visit the Sanity documentation.

**Happy content managing!** 🚀

