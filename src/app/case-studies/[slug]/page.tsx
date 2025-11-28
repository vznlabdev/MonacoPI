import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllCaseStudySlugs, getCaseStudyBySlug, getAllCaseStudies } from "@/lib/markdown";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | Monaco PI`,
    description: caseStudy.shortDescription,
    openGraph: {
      title: `${caseStudy.title} - Case Study | Monaco PI`,
      description: caseStudy.shortDescription,
      url: `https://monacopi.com/case-studies/${caseStudy.slug}`,
      siteName: "Monaco PI",
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.shortDescription,
      images: [caseStudy.image],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }
  
  const allCaseStudies = getAllCaseStudies();

  return (
    <div className="bg-cream">
      {/* Hero Section - Two Column Layout */}
      <section className="bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-6 lg:py-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="mb-8">
                <Link
                  href="/#projects-section"
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
                  Back to Results
                </Link>
              </div>

              <div className="mb-6 flex gap-4 flex-wrap">
                <span className="inline-block bg-cream/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-navy rounded-sm">
                  {caseStudy.category}
                </span>
                <span className="inline-block bg-cream/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-navy rounded-sm">
                  {caseStudy.location}
                </span>
                <span className="inline-block bg-cream/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-navy rounded-sm">
                  {caseStudy.year}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6 tracking-tight leading-tight">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-cream/90 font-light leading-relaxed">
                {caseStudy.shortDescription}
              </p>
            </div>

            {/* Right Column - Featured Image */}
            <div className="aspect-square rounded-sm overflow-hidden relative">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-navy/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <article className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Metrics Bar */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-white rounded-sm border border-cream-dark">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-navy mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs text-navy-lighter/70 font-light tracking-wide uppercase">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* The Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 tracking-tight">
              The Challenge
            </h2>
            <p className="text-lg text-navy-lighter font-light leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-12 tracking-tight">
              Our Approach
            </h2>
            <div className="space-y-10">
              {caseStudy.approach.map((step, index) => (
                <div key={index} className="pl-8 border-l-2 border-navy/20">
                  <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                    {step.heading}
                  </h3>
                  <p className="text-navy-lighter font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Outcome */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 tracking-tight">
              The Outcome
            </h2>
            <p className="text-lg text-navy-lighter font-light leading-relaxed">
              {caseStudy.outcome}
            </p>
          </div>

          {/* Client Testimonial */}
          {caseStudy.testimonial && (
            <div className="mt-16 p-12 bg-navy rounded-sm">
              <div className="text-4xl text-cream/30 mb-6">&ldquo;</div>
              <p className="text-xl text-cream font-light leading-relaxed mb-6 italic">
                {caseStudy.testimonial.quote}
              </p>
              <div className="text-sm text-cream/70 font-light">
                {caseStudy.testimonial.attribution}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-20 p-12 bg-white rounded-sm border border-cream-dark text-center">
            <h3 className="text-2xl md:text-3xl font-light text-navy mb-4 tracking-tight">
              Need Similar Results?
            </h3>
            <p className="text-navy-lighter font-light mb-8 leading-relaxed max-w-2xl mx-auto">
              Every case is unique, but our approach remains consistent: thorough investigation, 
              professional documentation, and results that stand up in court.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-navy text-cream text-sm font-normal hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Start Your Investigation
            </Link>
          </div>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-12 tracking-tight">
            More Case Studies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {allCaseStudies
              .filter((cs) => cs.slug !== caseStudy.slug)
              .slice(0, 2)
              .map((relatedCase, index) => (
                <Link
                  key={index}
                  href={`/case-studies/${relatedCase.slug}`}
                  className="group"
                >
                  <div className="aspect-[3/4] mb-6 rounded-sm overflow-hidden relative">
                    <Image
                      src={relatedCase.image}
                      alt={relatedCase.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/40 to-navy/60 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-navy rounded-sm">
                        {relatedCase.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-cream text-sm font-light tracking-wider uppercase">View Case</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-navy mb-3 group-hover:text-navy-lighter transition-colors tracking-tight">
                    {relatedCase.title}
                  </h3>
                  <div className="flex gap-4 text-xs text-navy-lighter/70 font-light mb-4 tracking-wide">
                    <span>{relatedCase.location}</span>
                    <span>{relatedCase.category}</span>
                    <span>{relatedCase.year}</span>
                  </div>
                  <p className="text-navy-lighter font-light leading-relaxed">
                    {relatedCase.shortDescription}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

