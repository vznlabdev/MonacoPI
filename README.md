# Monaco PI - Private Investigation Services Website

A professional, modern website for Monaco PI, an elite private investigation firm. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring a sophisticated navy and cream color scheme.

## Features

- **Modern Design** - Clean, professional aesthetic with smooth animations and enhanced hover states
- **Fully Responsive** - Optimized for all devices from mobile to 4K displays
- **SEO Optimized** - Meta tags and semantic HTML for better search rankings
- **Fast Performance** - Built with Next.js 15 App Router and optimized images
- **Custom Color Scheme** - Sophisticated navy (#070d3f) and cream (#fef3e9) palette
- **Max-width Layout** - Content containers capped at 1920px for optimal reading
- **Accessible** - WCAG compliant with proper semantic markup
- **Service Focused** - Dedicated pages for attorneys, individuals, and corporations
- **Click-to-Call/Email** - All contact information is clickable for instant communication
- **Embedded Forms** - Integrated 1prompt.com forms for contact and newsletter subscriptions
- **Interactive CTAs** - Enhanced button hover states with scale and shadow effects

## Implemented Optimizations & Improvements

### ✅ Completed (Production Ready)

**Code Quality & Cleanup**
- ✅ Removed unused API routes (contact, newsletter - now using 1prompt.com)
- ✅ Fixed contact page metadata duplication
- ✅ Deleted empty resources folder
- ✅ Optimized Unicorn Studio script loading (removed unused state)
- ✅ Cleaned up codebase structure

**SEO Enhancements**
- ✅ Created dynamic sitemap.xml with all pages
- ✅ Added robots.txt for search engine crawling
- ✅ Implemented structured data (JSON-LD) for local business
- ✅ Added SEO keywords to all pages
- ✅ Canonical URLs on all pages
- ✅ Enhanced metadata with Open Graph & Twitter cards
- ✅ Added breadcrumbs with schema markup on all pages
- ✅ FAQ sections with FAQPage schema on service pages
- ✅ Optimized homepage H1 for search rankings

**Performance**
- ✅ Image optimization configured (AVIF, WebP)
- ✅ Font optimization (next/font with display: swap)
- ✅ Standalone build output for faster deployments
- ✅ Static generation for all pages
- ✅ Deleted unused hero-image.jpg (saved 465KB)
- ✅ Created image optimization script (scripts/optimize-images.js)

**User Experience**
- ✅ Added loading states for 1prompt.com forms
- ✅ Enhanced button hover effects (scale + shadow)
- ✅ Clickable phone numbers and emails throughout site
- ✅ Professional legal-style print CSS
- ✅ Skip to content link for keyboard accessibility
- ✅ Custom 404 page with helpful navigation
- ✅ Error boundaries for graceful error handling
- ✅ Mobile-responsive breadcrumbs

**Security**
- ✅ Security headers (HSTS, X-Frame-Options, CSP, etc.)
- ✅ Rate limiting on API endpoints
- ✅ Input validation on forms
- ✅ XSS protection headers

**Developer Experience**
- ✅ Proper logging system (Pino) replacing console statements
- ✅ Error logging API endpoint with rate limiting
- ✅ TypeScript strict mode throughout
- ✅ ESLint enforced on build
- ✅ Comprehensive documentation

**Design & Branding**
- ✅ Favicon set (favicon.ico, icon.png, apple-icon.png)
- ✅ Consistent color scheme (navy & cream)
- ✅ Professional typography (Crimson Pro + Inter)
- ✅ Enhanced hover states on all CTAs

### ⏳ Pending (Recommended for Future)

**Analytics & Tracking** (High Priority)
- ⏳ Add Google Analytics 4
- ⏳ Add Google Search Console verification
- ⏳ Implement conversion tracking
- ⏳ Add event tracking (button clicks, form views)

**Local SEO** (Critical for Rankings)
- ⏳ Create Google Business Profiles (CO, FL, TX)
- ⏳ Submit to business directories (BBB, Yelp, etc.)
- ⏳ Build local citations
- ⏳ Create location-specific pages

**Content & Marketing**
- ⏳ Publish blog posts regularly (2-4 per month)
- ⏳ Add more case studies
- ⏳ Build backlink strategy
- ⏳ Collect and display customer reviews
- ⏳ Add review schema markup when reviews available

**Advanced Features** (Nice to Have)
- ⏳ Add live chat widget
- ⏳ Implement CMS for easier content management
- ⏳ Add multi-language support (Spanish)
- ⏳ Create client portal for case updates
- ⏳ PWA support for mobile app-like experience
- ⏳ Add booking/scheduling system

**Further Optimizations**
- ⏳ Optimize remaining images (2 images need compression)
- ⏳ Add preconnect for external resources
- ⏳ Implement view transitions API (when stable)
- ⏳ Add sticky CTA on mobile scroll
- ⏳ Create RSS feed for blog
- ⏳ Add focus visible styles for better keyboard navigation

**Production Scaling**
- ⏳ Upgrade rate limiting to Redis-based (Upstash)
- ⏳ Add proper error reporting service (Sentry, LogRocket)
- ⏳ Implement unit tests (Jest + React Testing Library)
- ⏳ Add component documentation (Storybook)

## Design System

### Color Palette

```css
Navy (Primary):
  - Default:  #070d3f
  - Light:    #0f1a5f  (hover states)
  - Lighter:  #1a2780  (text/accents)

Cream (Secondary):
  - Default:  #fef3e9
  - Dark:     #f5e6d0  (borders/subtle backgrounds)
```

### Typography

- **Headings**: Crimson Pro (Light, serif)
- **Body**: Inter (Regular, sans-serif)
- **Letter Spacing**: Tight for headings, minimal for body text

### Layout

- **Max Width**: 1920px for all content containers
- **Padding**: 1.5rem (mobile) to 3rem (desktop)
- **Grid System**: Responsive CSS Grid and Flexbox

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

This project is configured and optimized for deployment on Vercel.

### Deploy with One Click

The easiest way to deploy is to connect your Git repository to Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your app will be live!

### Vercel Configuration

This project includes:
- **vercel.json** - Vercel-specific configuration
- **Node.js version specified** - Ensures consistent builds (`engines` in package.json)
- **Optimized build settings** - Standalone output mode for faster deployments
- **TypeScript & ESLint checks** - Enforced during builds to prevent errors
- **.nvmrc** - Node version manager configuration

### Build Requirements

The project is configured to:
- Use Node.js >= 18.17.0
- Run TypeScript type checking during builds
- Run ESLint checks during builds
- Use SWC for faster minification
- Output standalone builds for optimal performance

### Environment Variables

If you need environment variables:
1. Copy `.env.example` to `.env.local`
2. Add your environment variables
3. In Vercel dashboard, add the same variables under "Environment Variables"

## Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
npm run optimize-images  # Optimize images in public/images (requires: npm install sharp --save-dev)
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **1prompt.com** - Embedded forms for contact and newsletter
- **ESLint** - Code linting
- **SWC** - Fast JavaScript/TypeScript compiler

## Project Structure

```
MonacoPI/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx           # About page
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts       # Contact API endpoint (legacy)
│   │   │   └── newsletter/
│   │   │       └── route.ts       # Newsletter API endpoint (legacy)
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx       # Individual blog post
│   │   │   └── page.tsx           # Blog listing page
│   │   ├── case-studies/
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Case study details
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact page with 1prompt.com form
│   │   ├── for-attorneys/
│   │   │   └── page.tsx           # Attorney services page
│   │   ├── for-corporations/
│   │   │   └── page.tsx           # Corporate services page
│   │   ├── for-individuals/
│   │   │   └── page.tsx           # Individual services page
│   │   ├── privacy/
│   │   │   └── page.tsx           # Privacy policy page
│   │   ├── services/
│   │   │   └── page.tsx           # All services page
│   │   ├── terms/
│   │   │   └── page.tsx           # Terms of service page
│   │   ├── globals.css            # Global styles + Tailwind
│   │   ├── layout.tsx             # Root layout with nav/footer
│   │   └── page.tsx               # Homepage
│   └── components/
│       ├── Footer.tsx             # Site footer with clickable contacts
│       ├── Logo.tsx               # Site logo component
│       ├── Navigation.tsx         # Main nav with "Call Now" button
│       └── NewsletterForm.tsx     # Newsletter form (1prompt.com)
├── public/
│   ├── images/                    # Blog and case study images
│   └── videos/                    # Video assets
├── .nvmrc                         # Node version (18.17.0)
├── DEPLOYMENT.md                  # Deployment documentation
├── VERCEL_REQUIREMENTS.md         # Vercel setup guide
├── vercel.json                    # Vercel config
├── next.config.js                 # Next.js config (standalone mode)
├── tailwind.config.ts             # Tailwind + custom colors
└── tsconfig.json                  # TypeScript config
```

## Pages

### Public Pages
- **/** - Homepage with hero, services overview, results, and FAQ section
- **/about** - Company mission, story, leadership, and core values
- **/services** - Comprehensive list of investigation services
- **/blog** - Blog articles and industry insights with newsletter signup
- **/contact** - Embedded contact form (1prompt.com) and office information
- **/privacy** - Privacy policy and data protection information
- **/terms** - Terms of service and legal information

### Service Pages
- **/for-attorneys** - Legal support and evidence collection services
- **/for-individuals** - Personal investigation services
- **/for-corporations** - Corporate intelligence and fraud investigation

## Development Tips

### Working with Colors

The project uses custom Tailwind color utilities. You can use them anywhere:

```tsx
// Navy colors
className="bg-navy text-navy-light border-navy-lighter"

// Cream colors
className="bg-cream text-cream-dark border-cream-dark"

// With opacity
className="bg-navy/80 text-cream/70"
```

### Component Structure

All pages follow a consistent pattern:
1. Hero section with navy background
2. Content sections alternating between cream and white backgrounds
3. CTA sections with appropriate contrast
4. Footer navigation

### Adding New Pages

1. Create a new folder in `src/app/[page-name]/`
2. Add `page.tsx` with your content
3. Update `src/components/Navigation.tsx` if adding to main nav
4. Add metadata for SEO
5. Follow the existing color scheme and layout patterns

### Custom Fonts

The project uses Google Fonts:
- **Crimson Pro** for elegant headings
- **Inter** for clean, readable body text

These are imported in `src/app/globals.css`.

## Customization

### Changing Colors

Edit `tailwind.config.ts` to update the color scheme:

```typescript
navy: {
  DEFAULT: '#070d3f',  // Your primary dark color
  light: '#0f1a5f',
  lighter: '#1a2780',
},
cream: {
  DEFAULT: '#fef3e9',  // Your primary light color
  dark: '#f5e6d0',
},
```

### Adjusting Max Width

The max-width is set to 1920px. To change it globally:

```tsx
// In any page component
<div className="max-w-[YOUR_WIDTH_HERE] mx-auto px-6 lg:px-12">
```

## Performance Optimization

This project includes several performance optimizations:

- **Standalone Output** - Reduced deployment size
- **SWC Minification** - Faster builds and smaller bundles
- **Font Optimization** - Google Fonts preloaded and optimized
- **Image Optimization** - Next.js automatic image optimization
- **Static Generation** - Pages pre-rendered at build time
- **Code Splitting** - Automatic route-based code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Learn More

### Documentation
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Vercel Documentation](https://vercel.com/docs) - Deployment platform documentation
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript handbook

### Deployment Guides
- [Deploy Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs) - Official Vercel + Next.js guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Project-specific deployment instructions
- [VERCEL_REQUIREMENTS.md](./VERCEL_REQUIREMENTS.md) - Vercel configuration details

## License

This project is proprietary and confidential. All rights reserved.

## Contact Information

- **Email**: monacocrystalpi@gmail.com
- **Phone**: +1 720-594-4441
- **Website**: [monacopi.com](https://monacopi.com)
- **Licensed in**: Colorado, Florida, and Texas

## Key Integrations

### 1prompt.com Forms
The site uses embedded 1prompt.com forms for:
- **Contact Form** - Main contact/consultation requests
- **Newsletter Form** - Blog page email subscriptions

Form configurations:
- Contact form ID: `SxXMXJRBjtxpWIRv7sdO`
- Newsletter form ID: `s1LZukeoilYik57vWWdq`

### Interactive Features
- All phone numbers are `tel:` links for one-click calling
- All email addresses are `mailto:` links for instant emailing
- Navigation "Call Now" button directly dials +1 720-594-4441
- Enhanced button hover states with scale (105%) and shadow effects

## Support

For questions or issues, please contact the development team.

---

**Monaco PI** - Elite investigation services for discerning clients who demand excellence, discretion, and proven results.

