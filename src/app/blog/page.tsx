import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Monaco PI",
  description: "Expert insights on private investigation, security tips, and industry knowledge from Monaco PI's experienced investigators.",
};

const blogPosts = [
  {
    title: "5 Signs You May Need a Private Investigator",
    excerpt: "Discover the common situations where professional investigation services can provide the answers and evidence you need.",
    category: "Investigation Tips",
    date: "October 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "How to Choose the Right Private Investigator",
    excerpt: "Learn what to look for when hiring a private investigator to ensure you get professional, reliable results.",
    category: "Hiring Guide",
    date: "October 10, 2024",
    readTime: "7 min read",
  },
  {
    title: "What Makes Evidence Court-Admissible?",
    excerpt: "Understanding the legal requirements for evidence in court proceedings and why proper protocols matter.",
    category: "Legal Insights",
    date: "October 5, 2024",
    readTime: "6 min read",
  },
  {
    title: "Divorce Investigation: What You Need to Know",
    excerpt: "A comprehensive guide to understanding how private investigators can help with divorce cases.",
    category: "Family Law",
    date: "September 28, 2024",
    readTime: "8 min read",
  },
  {
    title: "The Truth About Surveillance Operations",
    excerpt: "Debunking common myths about surveillance and explaining how professional investigators conduct ethical operations.",
    category: "Investigation Methods",
    date: "September 20, 2024",
    readTime: "6 min read",
  },
  {
    title: "Background Checks: What They Reveal",
    excerpt: "Learn what information background investigations can uncover and how they protect you.",
    category: "Background Checks",
    date: "September 15, 2024",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Expert insights and practical advice from Colorado's premier investigation firm
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
                <div className="aspect-[4/3] bg-cream-dark mb-8 rounded-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-neutral-900/40 group-hover:opacity-70 transition-opacity duration-500"></div>
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
