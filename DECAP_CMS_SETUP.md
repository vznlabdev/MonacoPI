# 🎯 Decap CMS Setup Guide - Monaco PI

## ✅ Status: Fully Configured and Ready!

Your MonacoPI project is now set up with **Decap CMS** - a free, open-source, Git-based CMS. **$0/month cost!**

---

## 📦 What Was Set Up

### 1. **CMS Configuration**
- ✅ `public/admin/config.yml` - Decap CMS configuration
- ✅ `public/admin/index.html` - Admin UI interface
- ✅ Editorial workflow enabled (draft → review → publish)

### 2. **Content Collections**
- ✅ **Blog Posts** - 6 posts converted to markdown
- ✅ **Case Studies** - 3 case studies converted to markdown

### 3. **Markdown Content**
- ✅ `content/blog/` - 6 blog post markdown files
- ✅ `content/case-studies/` - 3 case study markdown files

### 4. **Utilities Created**
- ✅ `src/lib/markdown.ts` - Markdown parsing utilities
- ✅ Functions to read and parse markdown files
- ✅ TypeScript types for content

### 5. **Pages Updated**
- ✅ Blog list page - reads from markdown
- ✅ Blog post page - reads from markdown
- ✅ Case study page - reads from markdown

---

## 🚀 Quick Start (3 Steps)

### Step 1: Update GitHub Repo in Config

Edit `public/admin/config.yml` and change line 3:

```yaml
backend:
  name: github
  repo: yourusername/MonacoPI  # ← Change this to your GitHub username/repo
  branch: main  # Or your default branch
```

### Step 2: Set Up GitHub OAuth (for production)

For production use, you'll need GitHub OAuth. For local development, you can use the local backend (already configured).

**For local development** (easiest):
```bash
# Install decap-server globally
npm install -g decap-server

# In one terminal, run the local backend
npx decap-server

# In another terminal, run your Next.js dev server
npm run dev
```

**For production** (GitHub OAuth):
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Monaco PI CMS
   - **Homepage URL**: `https://yoursite.com`
   - **Authorization callback URL**: `https://yoursite.com/admin/`
4. Copy Client ID and Client Secret
5. Add to your hosting platform (Vercel/Netlify) as environment variables

### Step 3: Access the CMS

**Local development**:
```bash
# Terminal 1: Run local backend
npx decap-server

# Terminal 2: Run dev server
npm run dev

# Visit:
http://localhost:3000/admin
```

**Production**:
```
https://yoursite.com/admin
```

---

## 📝 How to Use Decap CMS

### Creating a New Blog Post

1. Visit `/admin` in your browser
2. Click **"New Blog Posts"**
3. Fill in the fields:
   - Title
   - Slug (auto-generated from title)
   - Excerpt
   - Category (dropdown)
   - Publish Date
   - Read Time
   - Featured Image (upload)
   - Introduction
   - Body Content (markdown editor)
   - Conclusion
4. Click **"Save"** (draft) or **"Publish"**
5. If using editorial workflow, it creates a Pull Request
6. Merge the PR → content goes live!

### Creating a New Case Study

1. Visit `/admin`
2. Click **"New Case Studies"**
3. Fill in all fields (similar to blog)
4. Add approach steps (click "+" to add more)
5. Add metrics (click "+" to add more)
6. Add testimonial (optional)
7. Check "Featured" if you want it on homepage
8. Save/Publish

### Editing Existing Content

1. Visit `/admin`
2. Click on "Blog Posts" or "Case Studies"
3. Click on the post/study you want to edit
4. Make changes
5. Save/Publish

---

## 🎨 Admin UI Preview

When you visit `/admin`, you'll see:

```
┌─────────────────────────────────────┐
│  Monaco PI - Content Management [+] │
├─────────────────────────────────────┤
│  Collections:                       │
│  📝 Blog Posts (6)                  │
│  📊 Case Studies (3)                │
├─────────────────────────────────────┤
│  Workflow:                          │
│  📄 Drafts (0)                      │
│  👁️ In Review (0)                   │
│  ✅ Ready (0)                        │
└─────────────────────────────────────┘
```

---

## 📂 File Structure

```
MonacoPI/
├── public/
│   └── admin/
│       ├── config.yml      # CMS configuration
│       └── index.html      # Admin UI
│
├── content/
│   ├── blog/               # Blog post markdown files
│   │   ├── 5-signs-you-may-need-a-private-investigator.md
│   │   ├── how-to-choose-the-right-private-investigator.md
│   │   ├── what-makes-evidence-court-admissible.md
│   │   ├── divorce-investigation-what-you-need-to-know.md
│   │   ├── the-truth-about-surveillance-operations.md
│   │   └── background-checks-what-they-reveal.md
│   │
│   └── case-studies/       # Case study markdown files
│       ├── hidden-asset-recovery.md
│       ├── corporate-fraud-investigation.md
│       └── custody-investigation.md
│
├── src/
│   ├── lib/
│   │   └── markdown.ts     # Markdown parsing utilities
│   │
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx          # Updated to read from markdown
│   │   │   └── [slug]/page.tsx   # Updated to read from markdown
│   │   │
│   │   └── case-studies/
│   │       └── [slug]/page.tsx   # Updated to read from markdown
│   │
│   └── data/              # Old static files (can be removed after testing)
│       ├── blogPosts.ts
│       └── caseStudies.ts
```

---

## 🔄 How It Works

### The Workflow:

```
1. You edit content in /admin
   ↓
2. Decap CMS commits changes to GitHub
   ↓
3. If using editorial workflow:
   - Creates a Pull Request
   - You review changes
   - Merge PR
   ↓
4. Vercel/Netlify detects git push
   ↓
5. Automatically rebuilds site
   ↓
6. New content is live! (2-5 minutes)
```

### Local Development:
- Uses `decap-server` for local git backend
- No GitHub needed for testing
- Changes saved to local files

### Production:
- Uses GitHub as backend
- All changes are Git commits
- Version controlled content
- Can rollback anytime

---

## 💰 Cost Breakdown

| Item | Cost |
|------|------|
| Decap CMS | **$0** (open-source) |
| GitHub hosting | **$0** (free repos) |
| Vercel/Netlify | **$0** (free tier) |
| **Total** | **$0/month** 🎉 |

---

## ✨ Features You Get

### Content Management
- ✅ Web-based editing (no code needed)
- ✅ Markdown support
- ✅ Image upload
- ✅ Draft/publish workflow
- ✅ Editorial workflow (PR-based)
- ✅ Rich text editor

### Version Control
- ✅ Every change is a Git commit
- ✅ Full history of all edits
- ✅ Easy rollback
- ✅ Branch-based workflow
- ✅ Collaborate via Pull Requests

### Developer Friendly
- ✅ Content as code (markdown files)
- ✅ TypeScript support
- ✅ No database needed
- ✅ Static site generation
- ✅ Easy backup (it's just Git!)

---

## 🛠️ Common Tasks

### Adding a New Category

Edit `public/admin/config.yml`:

```yaml
- label: "Category"
  name: "category"
  widget: "select"
  options:
    - "Investigation Tips"
    - "Legal Insights"
    - "Your New Category"  # Add here
```

### Adding a New Field

Edit `public/admin/config.yml` under the collection's `fields`:

```yaml
- { label: "Your New Field", name: "newField", widget: "string", required: false }
```

### Changing Image Upload Location

Edit `public/admin/config.yml`:

```yaml
media_folder: "public/images"  # Where images are stored
public_folder: "/images"       # URL path to images
```

---

## 🔍 Testing Your Setup

### Test 1: Access Admin UI
```bash
npm run dev
```
Visit: `http://localhost:3000/admin`

**Expected**: You see the Decap CMS login screen

### Test 2: Local Backend
```bash
# Terminal 1
npx decap-server

# Terminal 2
npm run dev
```
Visit: `http://localhost:3000/admin`  
Click "Work with Local Git Repository"

**Expected**: You see your blog posts and case studies

### Test 3: Create Test Post
1. Click "New Blog Posts"
2. Fill in minimal info:
   - Title: "Test Post"
   - Slug: "test-post"
   - Excerpt: "Testing"
   - Category: "Investigation Tips"
   - Date: Today
   - Read Time: "1 min read"
   - Upload any image
   - Introduction: "Test intro"
   - Body: "Test content"
3. Click "Publish"
4. Check `content/blog/test-post.md` was created
5. Visit `http://localhost:3000/blog/test-post`

**Expected**: Your test post appears on the site!

---

## 📊 Content Format

### Blog Post Markdown Example:

```markdown
---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
excerpt: "Short description here"
category: "Investigation Tips"
date: "2024-11-28T00:00:00.000Z"
readTime: "5 min read"
image: "/images/your-image.jpg"
imageAlt: "Image description"
introduction: "Your opening paragraph"
conclusion: "Your closing paragraph"
---

## Section 1 Heading

Content for section 1 goes here.

## Section 2 Heading

Content for section 2 goes here.
```

---

## 🚨 Troubleshooting

### Can't Access /admin?
- Check that `public/admin/config.yml` exists
- Check that `public/admin/index.html` exists
- Clear browser cache
- Try incognito/private mode

### "Failed to load entries"?
- Make sure `decap-server` is running (local dev)
- Check GitHub repo name in `config.yml`
- Check branch name is correct

### Images Not Uploading?
- Check `media_folder` path in `config.yml`
- Make sure folder exists: `public/images/`
- Check file permissions

### Build Errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Content Not Showing?
- Check markdown file exists in `content/blog/` or `content/case-studies/`
- Check frontmatter YAML is valid
- Check slug matches filename
- Restart dev server

---

## 🎯 Production Deployment

### Vercel

1. Push your code to GitHub
2. Connect repo to Vercel
3. Set up environment variables (if using GitHub OAuth):
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Set up Netlify Identity or GitHub OAuth
6. Deploy!

### GitHub OAuth Setup (Production)

Add to `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: yourusername/MonacoPI
  branch: main
  # Remove local_backend for production
```

---

## 📚 Additional Resources

### Official Documentation
- **Decap CMS Docs**: https://decapcms.org/docs/intro/
- **Configuration Options**: https://decapcms.org/docs/configuration-options/
- **Widgets**: https://decapcms.org/docs/widgets/

### Community
- **GitHub**: https://github.com/decaporg/decap-cms
- **Discord**: https://decapcms.org/community/

---

## ✅ Migration Checklist

- [x] Install markdown packages
- [x] Create Decap CMS config
- [x] Convert 6 blog posts to markdown
- [x] Convert 3 case studies to markdown
- [x] Create markdown parsing utilities
- [x] Update blog pages to read from markdown
- [x] Update case study pages to read from markdown
- [x] Test local development
- [ ] Update GitHub repo in config.yml (you do this)
- [ ] Test admin UI locally
- [ ] Create a test post
- [ ] Deploy to production
- [ ] Set up GitHub OAuth (optional, for production)
- [ ] Remove old static data files (optional, after testing)

---

## 🎉 You're All Set!

Your Monaco PI site now has a professional CMS that costs **$0/month**!

**Next steps:**
1. Edit `public/admin/config.yml` with your GitHub repo
2. Run `npx decap-server` and `npm run dev`
3. Visit `http://localhost:3000/admin`
4. Start editing content!

**Questions?** Check the troubleshooting section above or the official Decap CMS documentation.

---

*Setup completed: November 28, 2025*  
*Status: ✅ Fully Configured*  
*Cost: $0/month*

