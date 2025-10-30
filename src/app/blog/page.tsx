import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import NewsletterForm from "@/components/NewsletterForm";

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
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer"
              >
                <article>
                  <div className="aspect-[4/3] mb-8 rounded-sm overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />
    </div>
  );
}
