import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Investigation Insights & Expert Advice | Monaco PI Blog",
  description: "Expert insights on private investigation, security tips, legal guidance, and industry knowledge from Colorado&apos;s premier investigation firm. Learn from experienced investigators.",
  openGraph: {
    title: "Investigation Insights & Expert Advice | Monaco PI Blog",
    description: "Expert insights on private investigation, security tips, legal guidance, and industry knowledge from Colorado&apos;s premier investigation firm.",
    url: "https://monacopi.com/blog",
    siteName: "Monaco PI",
    images: [
      {
        url: "/images/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Monaco PI Blog - Investigation Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investigation Insights & Expert Advice | Monaco PI Blog",
    description: "Expert insights on private investigation, security tips, and industry knowledge from experienced investigators.",
    images: ["/images/opengraph.jpg"],
  },
};

const blogPosts = [
  {
    title: "5 Signs You May Need a Private Investigator",
    excerpt: "Discover the common situations where professional investigation services can provide the answers and evidence you need.",
    category: "Investigation Tips",
    date: "October 15, 2024",
    readTime: "5 min read",
    image: "/images/5-Signs-You-May-Need-a-Private-Investigator-khiet-tam-5rFbAKh0A-A-unsplash.jpg",
  },
  {
    title: "How to Choose the Right Private Investigator",
    excerpt: "Learn what to look for when hiring a private investigator to ensure you get professional, reliable results.",
    category: "Hiring Guide",
    date: "October 10, 2024",
    readTime: "7 min read",
    image: "/images/How-to-Choose-the-Right-Private-Investigator-marten-newhall-uAFjFsMS3YY-unsplash.jpg",
  },
  {
    title: "What Makes Evidence Court-Admissible?",
    excerpt: "Understanding the legal requirements for evidence in court proceedings and why proper protocols matter.",
    category: "Legal Insights",
    date: "October 5, 2024",
    readTime: "6 min read",
    image: "/images/What-Makes-Evidence-Court-Admissible-thom-masat-RLW1pzEXvEo-unsplash.jpg",
  },
  {
    title: "Divorce Investigation: What You Need to Know",
    excerpt: "A comprehensive guide to understanding how private investigators can help with divorce cases.",
    category: "Family Law",
    date: "September 28, 2024",
    readTime: "8 min read",
    image: "/images/Divorce-Investigation-engin-akyurt-Jw5Kth70hQo-unsplash.jpg",
  },
  {
    title: "The Truth About Surveillance Operations",
    excerpt: "Debunking common myths about surveillance and explaining how professional investigators conduct ethical operations.",
    category: "Investigation Methods",
    date: "September 20, 2024",
    readTime: "6 min read",
    image: "/images/The-Truth-bout-Surveillance-Operations-lianhao-qu-LfaN1gswV5c-unsplash.jpg",
  },
  {
    title: "Background Checks: What They Reveal",
    excerpt: "Learn what information background investigations can uncover and how they protect you.",
    category: "Background Checks",
    date: "September 15, 2024",
    readTime: "5 min read",
    image: "/images/Background-Checks-austin-distel-tLZhAKh0A-unsplash.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Expert insights and practical advice from Colorado&apos;s premier investigation firm
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] mb-8 rounded-sm overflow-hidden relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/40 to-navy/60 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-navy rounded-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-cream text-sm font-light tracking-wider uppercase">Read Article</span>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-navy mb-4 group-hover:text-navy-lighter transition-colors tracking-tight">
                  {post.title}
                </h3>
                <p className="text-navy-lighter font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-navy-lighter/70 font-light">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-cream mb-8 tracking-tight">
            Stay informed
          </h2>
          <p className="text-lg text-cream/70 font-light mb-12 leading-relaxed">
            Get expert investigation insights delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-navy-light border border-navy-light text-cream placeholder-neutral-500 rounded-sm focus:outline-none focus:border-navy-lighter transition-colors font-light"
            />
            <button className="px-8 py-4 bg-white text-navy text-sm font-normal hover:bg-cream-dark transition-all rounded-sm">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-navy-lighter mt-6 font-light">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
