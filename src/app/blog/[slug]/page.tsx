import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Monaco PI Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://monacopi.com/blog/${post.slug}`,
      siteName: "Monaco PI",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-cream">
      {/* Hero Section with Featured Image */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 pb-16 pt-32">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-cream/80 hover:text-cream text-sm font-light transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <div className="mb-6">
            <span className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-navy rounded-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-cream/80 text-sm font-light">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-xl text-navy-lighter font-light leading-relaxed">
              {post.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-6 tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-navy-lighter font-light leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          {post.content.conclusion && (
            <div className="mt-16 pt-12 border-t border-navy/10">
              <h2 className="text-2xl md:text-3xl font-light text-navy mb-6 tracking-tight">
                Conclusion
              </h2>
              <p className="text-navy-lighter font-light leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 p-12 bg-navy rounded-sm">
            <h3 className="text-2xl font-light text-cream mb-4 tracking-tight">
              Need Professional Investigation Services?
            </h3>
            <p className="text-cream/80 font-light mb-8 leading-relaxed">
              Our experienced team is ready to help you get the answers you need. Contact us today for a confidential consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-navy text-sm font-normal hover:bg-cream-dark transition-all rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-12 tracking-tight">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <Link
                  key={index}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/3] mb-6 rounded-sm overflow-hidden relative">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/40 to-navy/60 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-navy rounded-sm">
                        {relatedPost.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-cream text-sm font-light tracking-wider uppercase">Read Article</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-navy mb-3 group-hover:text-navy-lighter transition-colors tracking-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-navy-lighter/70 font-light">
                    {relatedPost.readTime}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

