# Monaco PI - Comprehensive Improvement Recommendations

*Analysis Date: November 23, 2025*
*Current Status: Production Ready (8.5/10)*

---

## 🚨 CRITICAL PRIORITIES (Do First)

### 1. **Clean Up Unused API Routes**
**Issue**: API routes exist but aren't used (forms now use 1prompt.com)
**Files**: 
- `src/app/api/contact/route.ts`
- `src/app/api/newsletter/route.ts`

**Action**: 
```bash
# Option A: Delete if not needed
rm -rf src/app/api/contact
rm -rf src/app/api/newsletter

# Option B: Keep for logging/backup
# Update to log submissions while 1prompt.com handles actual sending
```

**Impact**: Cleaner codebase, no confusion
**Time**: 5 minutes

---

### 2. **Fix Contact Page Metadata Duplication**
**Issue**: Contact page tries to set metadata in two places

**File**: `src/app/contact/page.tsx`
**Remove**: Lines 7-14 (the useEffect that sets document.title)

**Why**: The layout.tsx already handles metadata properly. Client-side title changes are overridden and cause confusion.

**Impact**: Proper SEO, cleaner code
**Time**: 2 minutes

---

### 3. **Add Google Search Console Verification**
**Issue**: Placeholder verification token in layout

**File**: `src/app/layout.tsx` line 85
**Current**: `google: 'verification_token_here'`
**Action**:
1. Go to Google Search Console
2. Add property: monacopi.com
3. Choose "HTML tag" verification
4. Copy the content value
5. Replace placeholder

**Impact**: Critical for SEO tracking
**Time**: 10 minutes

---

### 4. **Add Google Analytics 4**
**Issue**: No analytics tracking

**Action**:
```typescript
// Add to src/app/layout.tsx in <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Impact**: Track visitors, conversions, behavior
**Time**: 15 minutes

---

## ⚡ HIGH PRIORITY (This Week)

### 5. **Delete Empty Resources Folder**
**Issue**: `src/app/resources/` exists but is empty

**Action**: 
```bash
rm -rf src/app/resources
```

**Impact**: Cleaner structure
**Time**: 1 minute

---

### 6. **Add Favicon Set**
**Issue**: No favicon configured

**Action**:
1. Create `src/app/favicon.ico`
2. Add `src/app/icon.png` (180x180)
3. Add `src/app/apple-icon.png` (180x180)

Next.js will automatically use these.

**Impact**: Professional appearance in browser tabs, bookmarks
**Time**: 10 minutes

---

### 7. **Add Security Headers**
**Issue**: Missing security headers

**File**: `next.config.js`
**Add**:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        }
      ]
    }
  ]
}
```

**Impact**: Better security score, protection
**Time**: 5 minutes

---

### 8. **Optimize Unicorn Studio Loading**
**Issue**: ScriptLoaded state set but never used

**File**: `src/app/page.tsx`
**Remove**: `const [scriptLoaded, setScriptLoaded] = useState(false);` (line 19)
**Remove**: `setScriptLoaded(true);` (line 39)

**Impact**: Cleaner code, unused state removed
**Time**: 2 minutes

---

### 9. **Add Loading State for 1prompt.com Forms**
**Issue**: Forms load instantly but users might see blank iframe briefly

**Recommendation**: Add skeleton/loading state
```typescript
// In contact page
const [isLoading, setIsLoading] = useState(true);

<div style={{ height: '588px' }}>
  {isLoading && <div className="animate-pulse bg-cream-dark">Loading form...</div>}
  <iframe 
    onLoad={() => setIsLoading(false)}
    // ... rest of props
  />
</div>
```

**Impact**: Better UX during form load
**Time**: 10 minutes

---

## 📈 MEDIUM PRIORITY (This Month)

### 10. **Add Schema Markup for Reviews**
**Issue**: Reviews on homepage lack structured data

**File**: Create `src/components/ReviewSchema.tsx`
```typescript
export default function ReviewSchema() {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "Monaco PI Investigation Services"
    },
    // ... add review schema
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(reviewData)}} />
}
```

**Impact**: Rich snippets in Google search results (star ratings)
**Time**: 30 minutes

---

### 11. **Add FAQ Schema on Service Pages**
**Issue**: No FAQ section, missed rich snippet opportunity

**Recommendation**: Add FAQ section to each service page with schema markup

**Example** for `/for-individuals`:
```typescript
const faqs = [
  {
    question: "How much does a private investigator cost?",
    answer: "Costs vary by case complexity, typically $75-150/hour..."
  },
  // ... more FAQs
];
```

**Impact**: FAQ rich snippets in Google
**Time**: 2 hours for all pages

---

### 12. **Implement Breadcrumbs**
**Issue**: No breadcrumb navigation

**Benefits**: Better UX + SEO
**Example**: Home > Services > For Attorneys

**Action**: Create `<Breadcrumbs />` component, add to all pages

**Impact**: Breadcrumb rich snippets, better navigation
**Time**: 1 hour

---

### 13. **Add Skip to Content Link**
**Issue**: Accessibility - keyboard users must tab through entire nav

**Action**: Add to layout.tsx
```typescript
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-navy text-cream px-4 py-2">
  Skip to content
</a>
```

**Impact**: Better accessibility score
**Time**: 5 minutes

---

### 14. **Optimize Image Sizes**
**Issue**: Original images might be too large

**Current Images**:
- Multiple 2000px+ wide images
- JPG format (some quite large)

**Action**:
1. Run images through compression (TinyPNG, Squoosh)
2. Reduce to appropriate sizes (hero: 1920px max, thumbnails: 600px)
3. Next.js will auto-convert to WebP/AVIF, but smaller source = faster

**Impact**: 30-50% faster page loads
**Time**: 1 hour

---

### 15. **Add Error Boundaries**
**Issue**: No error boundaries - app crashes show white screen

**Action**: Create `src/app/error.tsx`
```typescript
'use client'
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="text-4xl font-light text-navy mb-4">Something went wrong</h1>
        <button onClick={() => reset()} className="px-6 py-3 bg-navy text-cream">
          Try again
        </button>
      </div>
    </div>
  )
}
```

**Impact**: Better error handling, professional UX
**Time**: 15 minutes

---

### 16. **Add 404 Page Customization**
**Issue**: Generic 404 page

**Action**: Create `src/app/not-found.tsx`
```typescript
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1>404 - Page Not Found</h1>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}
```

**Impact**: Better UX for broken links
**Time**: 15 minutes

---

## 🎯 NICE TO HAVE (Next 3 Months)

### 17. **Add OpenGraph Images Per Page**
**Issue**: All pages use same opengraph.jpg

**Recommendation**: Create unique OG images for:
- Each service page
- Blog posts
- Case studies

**Tool**: Use Canva or Figma templates
**Impact**: Better social sharing CTR
**Time**: 3-4 hours

---

### 18. **Implement Proper Logging**
**Issue**: console.log in production code

**Action**: 
```bash
npm install pino
```

Replace console.log with proper logger:
```typescript
import pino from 'pino';
const logger = pino();
logger.info('Contact form submission', { name, email });
```

**Impact**: Better debugging, production logs
**Time**: 30 minutes

---

### 19. **Add Rate Limiting to API Routes**
**Issue**: API routes vulnerable to spam/abuse

**Action**:
```bash
npm install @upstash/ratelimit @upstash/redis
```

Add rate limiting middleware to protect APIs

**Impact**: Prevent abuse, reduce spam
**Time**: 45 minutes

---

### 20. **Add Testimonial Schema Markup**
**Issue**: Client reviews lack structured data

**Action**: Add Review schema to homepage reviews section

**Impact**: Rich snippets potential
**Time**: 30 minutes

---

### 21. **Create Location-Specific Pages**
**Issue**: No dedicated pages for each state

**Recommendation**: Create:
- `/locations/colorado`
- `/locations/florida`
- `/locations/texas`

Each with local content, cities served, local office info

**Impact**: Better local SEO ranking
**Time**: 4-6 hours

---

### 22. **Add Service Area Schema**
**Issue**: Structured data doesn't detail specific cities

**File**: `src/components/StructuredData.tsx`
**Enhance**: Add specific cities to areaServed:
```typescript
"areaServed": [
  {
    "@type": "City",
    "name": "Denver"
  },
  {
    "@type": "City",
    "name": "Boulder"
  },
  // ... more cities
]
```

**Impact**: Better local search visibility
**Time**: 15 minutes

---

### 23. **Implement Progressive Enhancement**
**Issue**: Forms require JavaScript

**Recommendation**: Since using 1prompt.com, this is handled. But consider fallback:
- Show phone/email if iframe doesn't load
- Detect JavaScript disabled and show alternatives

**Impact**: Works for 100% of users
**Time**: 30 minutes

---

### 24. **Add Meta Pixel/Conversion Tracking**
**Issue**: No retargeting or conversion tracking

**Action**: Add Facebook Pixel, LinkedIn Insight Tag
**Impact**: Remarketing, better ad targeting
**Time**: 20 minutes

---

### 25. **Optimize Font Loading Further**
**Current**: Good (using next/font)
**Better**: Subset fonts to only needed characters

```typescript
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});
```

**Impact**: Marginal, but every bit helps
**Time**: 5 minutes

---

### 26. **Add Preconnect for External Services**
**Issue**: External resources (1prompt.com, unicorn studio) not preconnected

**File**: `src/app/layout.tsx`
**Add to head**:
```typescript
<link rel="preconnect" href="https://link.1prompt.com" />
<link rel="dns-prefetch" href="https://link.1prompt.com" />
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
```

**Impact**: Faster external resource loading
**Time**: 3 minutes

---

### 27. **Add Sitemap to robots.txt**
**Status**: Already done! ✅
**Note**: Verify sitemap.xml is accessible at https://monacopi.com/sitemap.xml after deployment

---

### 28. **Create RSS Feed for Blog**
**Issue**: No RSS feed

**Action**: Create `src/app/blog/feed.xml/route.ts`
**Impact**: Syndication, professional blog
**Time**: 30 minutes

---

### 29. **Add JSON Resume for Crystal Monaco**
**Issue**: About page has founder info but no structured data

**Recommendation**: Add Person schema for founder
**Impact**: Knowledge graph potential
**Time**: 20 minutes

---

### 30. **Implement View Transitions API**
**Future**: Smooth page transitions (experimental)

**Action**: Add to layout when stable:
```typescript
<meta name="view-transition" content="same-origin" />
```

**Impact**: Smoother navigation (cutting edge)
**Time**: 5 minutes (when supported)

---

## 🔍 SEO DEEP DIVE

### Current SEO Score: **7.5/10**

**What's Working**:
- ✅ Technical SEO foundation excellent
- ✅ On-page optimization good
- ✅ Content quality high
- ✅ Site structure logical

**What's Missing**:
- ❌ No backlinks yet (most important!)
- ❌ No Google Business Profile
- ❌ No reviews/ratings
- ❌ Limited ongoing content
- ❌ No local citations

### SEO Action Plan:

#### **Week 1: Foundation**
1. Set up Google Search Console
2. Set up Google Analytics 4
3. Submit sitemap
4. Create Google Business Profiles (CO, FL, TX)

#### **Week 2-3: Citations & Listings**
Submit to:
- Better Business Bureau
- Yelp
- Yellow Pages
- Avvo (for legal-related services)
- Thumbtack
- Angie's List
- Local Chamber of Commerce directories
- Private investigator associations

#### **Month 2: Content**
- Publish 1 blog post/week
- Create location pages
- Add more case studies
- Build resource pages

#### **Month 3+: Backlinks**
- Guest post on legal blogs
- Get featured in local news
- Partner with attorneys for links
- Join industry associations with directory listings

---

## 💡 USER EXPERIENCE IMPROVEMENTS

### 31. **Add Sticky CTA on Long Pages**
**Recommendation**: Floating "Call Now" button on mobile scroll

```typescript
// On service pages when scrolling
{scrolled && (
  <div className="fixed bottom-6 right-6 lg:hidden z-40">
    <a href="tel:+17205944441" className="...">Call Now</a>
  </div>
)}
```

**Impact**: Higher conversion rate
**Time**: 30 minutes

---

### 32. **Add Loading States Between Pages**
**Issue**: No visual feedback during page navigation

**Action**: Add loading bar at top
```bash
npm install nprogress
```

**Impact**: Better perceived performance
**Time**: 20 minutes

---

### 33. **Improve Mobile Navigation UX**
**Current**: Good
**Better**: 
- Add close button in mobile menu
- Dim background when menu open
- Prevent body scroll when menu open

**Impact**: More polished mobile experience
**Time**: 30 minutes

---

### 34. **Add Smooth Scroll Offset for Anchor Links**
**Issue**: Anchor links (#about-section) scroll behind sticky nav

**Action**: Add scroll-margin-top:
```css
[id] {
  scroll-margin-top: 100px;
}
```

**Impact**: Better anchor link experience
**Time**: 2 minutes

---

### 35. **Add "Back to Top" Button**
**Recommendation**: On long pages, add floating back-to-top button

**Impact**: Better UX on services/blog pages
**Time**: 20 minutes

---

## 🎨 DESIGN ENHANCEMENTS

### 36. **Add Micro-Interactions**
**Current**: Good hover states
**Better**: Add subtle animations on:
- Card hover (translate Y)
- Number counter animations on stats
- Stagger animation on list items

**Impact**: More engaging, modern feel
**Time**: 2 hours

---

### 37. **Improve Print Stylesheet Further**
**Current**: Excellent legal document style
**Addition**: Add print-specific header/footer with company info

**Impact**: More professional printed pages
**Time**: 30 minutes

---

### 38. **Add Focus Visible Styles**
**Issue**: Keyboard navigation could be clearer

**Action**: Add to globals.css
```css
*:focus-visible {
  outline: 2px solid var(--navy-light);
  outline-offset: 2px;
}
```

**Impact**: Better accessibility
**Time**: 5 minutes

---

## 🔧 TECHNICAL IMPROVEMENTS

### 39. **Add TypeScript Paths**
**Current**: Good (`@/*` configured)
**Enhancement**: Add more specific paths
```json
{
  "@/components/*": ["./src/components/*"],
  "@/data/*": ["./src/data/*"],
  "@/app/*": ["./src/app/*"]
}
```

**Impact**: Cleaner imports, better DX
**Time**: 5 minutes

---

### 40. **Add Environment Variable Validation**
**Issue**: No validation if env vars missing

**Action**: Create `src/lib/env.ts`
```typescript
const envSchema = {
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  // ... validate all required vars
};

export const env = envSchema;
```

**Impact**: Catch config errors early
**Time**: 15 minutes

---

### 41. **Add Performance Monitoring**
**Recommendation**: Add Web Vitals reporting

**File**: `src/app/layout.tsx`
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

// In body
<SpeedInsights />
```

**Impact**: Track real user performance
**Time**: 5 minutes

---

### 42. **Implement Component Library**
**Issue**: Repeated button styles

**Recommendation**: Create reusable components:
- `<Button variant="primary" />`
- `<Heading level={1} />`
- `<Container />`

**Impact**: Consistency, easier maintenance
**Time**: 3-4 hours

---

### 43. **Add Unit Tests**
**Issue**: No tests

**Recommendation**: Add Jest + React Testing Library
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

Test critical components (Navigation, Forms)

**Impact**: Prevent regressions
**Time**: 4-6 hours

---

### 44. **Add Storybook**
**Issue**: No component documentation

**Recommendation**: 
```bash
npx storybook@latest init
```

Document all components

**Impact**: Better developer experience
**Time**: 2-3 hours

---

### 45. **Implement CSS Modules or CSS-in-JS**
**Current**: Tailwind (good!)
**Future**: Consider if custom components grow

**Impact**: Better component isolation
**Time**: N/A (not needed now)

---

## 📱 MOBILE OPTIMIZATIONS

### 46. **Add PWA Support**
**Recommendation**: Make site installable

**Action**: Add manifest.json, service worker
**Impact**: App-like experience, offline support
**Time**: 2 hours

---

### 47. **Optimize for iOS Safari**
**Issue**: iOS-specific quirks

**Action**: Add iOS meta tags:
```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

**Impact**: Better iOS experience
**Time**: 5 minutes

---

## 📊 ANALYTICS & TRACKING

### 48. **Add Event Tracking**
**Issue**: No conversion tracking

**Events to Track**:
- Call Now button clicks
- Email clicks
- Form submissions (track in iframe if possible)
- Service page CTA clicks
- Blog post reads
- Case study views

**Impact**: Understand user behavior
**Time**: 1 hour

---

### 49. **Add Hotjar or Similar**
**Recommendation**: Heat maps and session recordings

**Impact**: See how users interact with site
**Time**: 15 minutes to set up

---

### 50. **Implement A/B Testing**
**Future**: Test different CTAs, headlines

**Tools**: Vercel Edge Config, Optimizely, or Google Optimize (deprecated)
**Impact**: Data-driven improvements
**Time**: Varies

---

## 🚀 PERFORMANCE ENHANCEMENTS

### 51. **Implement Image Lazy Loading**
**Current**: Next.js handles this
**Check**: Ensure images below fold don't have `priority` prop

**Impact**: Faster initial load
**Time**: Review only

---

### 52. **Add Suspense Boundaries**
**Future**: For dynamic content

**Action**: Wrap dynamic sections:
```typescript
<Suspense fallback={<Loading />}>
  <DynamicContent />
</Suspense>
```

**Impact**: Better loading experience
**Time**: 30 minutes per section

---

### 53. **Optimize Third-Party Scripts**
**Current**: Good (afterInteractive strategy)
**Enhancement**: Use Partytown for heavy scripts

**Impact**: Offload scripts to web worker
**Time**: 1 hour

---

## 🔐 SECURITY ENHANCEMENTS

### 54. **Add Content Security Policy**
**Issue**: CSP only for SVGs, not site-wide

**Action**: Implement full CSP in next.config.js

**Impact**: Prevent XSS attacks
**Time**: 1 hour (testing needed)

---

### 55. **Implement CAPTCHA on Forms**
**Issue**: Forms vulnerable to spam (if keeping API routes)

**Action**: Add hCaptcha or reCAPTCHA
**Impact**: Reduce spam submissions
**Time**: 30 minutes

---

### 56. **Add Subresource Integrity**
**Issue**: External scripts (Unicorn Studio, 1prompt) not verified

**Recommendation**: Add integrity attribute when possible
**Impact**: Prevent script tampering
**Time**: 10 minutes

---

## 📝 CONTENT STRATEGY

### 57. **Expand Blog Content**
**Current**: 4 quality posts
**Recommendation**: 
- Publish 2-4 posts/month
- Target long-tail keywords
- Add author bios
- Enable comments (or disable comment section)

**Impact**: More traffic, better authority
**Time**: Ongoing

---

### 58. **Create Resource Center**
**Recommendation**: 
- Investigation cost calculator
- Downloadable guides
- Checklist PDFs
- Legal resources

**Impact**: Lead magnets, link building
**Time**: 8-12 hours

---

### 59. **Add Video Content**
**Recommendation**: 
- Embed YouTube videos
- Add video schema markup
- Create video testimonials

**Impact**: Better engagement, video search results
**Time**: Varies (content creation heavy)

---

### 60. **Expand Case Studies**
**Current**: 3 case studies
**Recommendation**: Add 1-2 per month (anonymized)

**Impact**: Social proof, conversion
**Time**: 2 hours each

---

## 🎓 FUTURE ENHANCEMENTS

### 61. **Add Live Chat**
**Options**: 
- Intercom
- Drift
- Crisp
- Tawk.to (free)

**Impact**: Capture hot leads
**Time**: 30 minutes

---

### 62. **Implement CMS**
**Current**: Hardcoded content
**Future**: Headless CMS (Contentful, Sanity, Payload)

**Benefits**:
- Non-technical content updates
- Better workflow
- Preview drafts

**Impact**: Easier content management
**Time**: 8-16 hours

---

### 63. **Add Multi-Language Support**
**Recommendation**: Spanish translation for wider reach

**Action**: Use next-intl or next-i18next
**Impact**: Reach Hispanic market
**Time**: 20-30 hours

---

### 64. **Create Client Portal**
**Future Feature**: Secure portal for clients
- Case updates
- Document sharing
- Secure messaging
- Invoice payments

**Impact**: Premium service offering
**Time**: 40-80 hours

---

### 65. **Add Booking System**
**Recommendation**: Calendly integration or custom booking

**Impact**: Easier consultation scheduling
**Time**: 2-4 hours

---

## 📋 PRIORITY SUMMARY

### **Do Immediately** (1-2 hours total):
1. Fix contact page metadata duplication
2. Add Google Search Console verification
3. Add Google Analytics
4. Delete empty resources folder
5. Remove unused console.logs
6. Add security headers
7. Add favicon set

### **Do This Week** (4-6 hours total):
8. Add error boundary
9. Add custom 404 page
10. Optimize images
11. Add breadcrumbs
12. Add FAQ sections
13. Add review schema

### **Do This Month** (10-15 hours total):
14. Create location pages
15. Set up Google Business Profiles
16. Submit to directories
17. Add rate limiting
18. Implement logging system
19. Add conversion tracking

### **Ongoing**:
20. Publish blog content monthly
21. Collect and display reviews
22. Build backlinks
23. Monitor analytics
24. Add case studies

---

## 🎯 EXPECTED IMPACT

### If You Do Immediate + This Week Actions:
- **SEO**: 7.5/10 → 8.5/10
- **Performance**: 9/10 → 9.5/10
- **Security**: 7/10 → 9/10
- **UX**: 8/10 → 9/10
- **Conversion Rate**: +15-25%

### If You Do Everything (3-6 months):
- **SEO**: 9/10
- **Performance**: 9.5/10
- **Security**: 9.5/10
- **Conversion Rate**: +30-50%
- **Rankings**: Page 1 for targeted keywords

---

## 💰 ESTIMATED COSTS

**Immediate** (Free):
- Google tools: $0
- Code improvements: $0

**Optional Services**:
- Google Ads: $500-2000/month
- Directory submissions: $0-300 one-time
- Professional images: $300-1000
- Live chat: $0-100/month
- Analytics tools: $0-200/month

---

## ✅ CONCLUSION

**Your site is well-built and production-ready.**

**Biggest opportunities**:
1. **Off-page SEO** (backlinks, citations, reviews) - Do this!
2. **Analytics setup** - Track everything
3. **Content creation** - Blog regularly
4. **Code cleanup** - Remove unused files
5. **Local SEO** - Google Business Profiles ASAP

**Bottom line**: The technical foundation is **excellent**. Now focus on marketing, content, and backlinks to drive traffic and rankings.

---

*Want me to implement any of these improvements? Just ask!*

