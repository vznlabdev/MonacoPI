import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Colorado Private Investigator | Licensed PI Services Denver, Boulder, Colorado Springs",
  description: "Licensed private investigator serving Colorado. 17+ years experience in Denver, Boulder, Colorado Springs, Fort Collins. 95%+ case resolution. Surveillance, background checks, infidelity investigations. Available 24/7.",
  keywords: [
    "private investigator Colorado",
    "private detective Denver",
    "PI Boulder Colorado",
    "Colorado Springs investigator",
    "Fort Collins PI",
    "licensed investigator Colorado",
    "surveillance Denver",
    "background check Colorado",
    "infidelity investigation Denver",
    "corporate investigation Colorado"
  ],
  openGraph: {
    title: "Colorado Private Investigator | Licensed PI Services | Monaco PI",
    description: "Licensed private investigator serving Colorado. 17+ years experience across the Front Range. Call +1 720-594-4441 for a free consultation.",
    url: "https://monacopi.com/locations/colorado",
  },
};

export default function ColoradoLocationPage() {
  const cities = [
    { name: "Denver", population: "Metro area" },
    { name: "Colorado Springs", population: "El Paso County" },
    { name: "Boulder", population: "Boulder County" },
    { name: "Fort Collins", population: "Larimer County" },
    { name: "Aurora", population: "Arapahoe County" },
    { name: "Lakewood", population: "Jefferson County" },
    { name: "Thornton", population: "Adams County" },
    { name: "Arvada", population: "Jefferson County" },
    { name: "Westminster", population: "Adams/Jefferson County" },
    { name: "Pueblo", population: "Pueblo County" },
    { name: "Centennial", population: "Arapahoe County" },
    { name: "Greeley", population: "Weld County" },
  ];

  const services = [
    "Surveillance Operations",
    "Background Investigations",
    "Infidelity & Domestic Investigations",
    "Child Custody Investigations",
    "Asset & Financial Investigations",
    "Corporate Fraud Investigations",
    "Missing Person Investigations",
    "Process Service",
    "Insurance Fraud Investigation",
    "Pre-Employment Screening",
    "Due Diligence Investigations",
    "Witness Location & Interviews"
  ];

  const faqs = [
    {
      question: "Are you licensed in Colorado?",
      answer: "Yes, Monaco PI is fully licensed, bonded, and insured to operate in the State of Colorado. We comply with all Colorado Revised Statutes governing private investigators and maintain active licensing with all required regulatory bodies."
    },
    {
      question: "What areas of Colorado do you serve?",
      answer: "We serve the entire state of Colorado, with a primary focus on the Front Range corridor including Denver, Boulder, Colorado Springs, Fort Collins, and surrounding communities. We regularly conduct investigations in mountain communities and rural areas as well."
    },
    {
      question: "How much does a private investigator cost in Colorado?",
      answer: "Investigation costs vary based on case complexity, required resources, and time commitment. Typical hourly rates range from $75-150 per hour. We provide transparent pricing during your free consultation and can work with various budgets while maintaining quality results."
    },
    {
      question: "Do you work with Colorado attorneys?",
      answer: "Absolutely. We work extensively with Colorado law firms and attorneys on cases involving family law, criminal defense, civil litigation, and personal injury. We understand Colorado court requirements and provide court-admissible evidence and expert testimony when needed."
    },
    {
      question: "How long does an investigation take in Colorado?",
      answer: "Investigation timelines vary greatly. Simple background checks may take 3-5 business days, while complex surveillance or fraud investigations can take several weeks or months. We'll provide a realistic timeline estimate during your consultation based on your specific needs."
    },
    {
      question: "Can you conduct surveillance in Denver city limits?",
      answer: "Yes, we regularly conduct surveillance throughout Denver and surrounding metro areas. Our investigators are familiar with Denver neighborhoods, traffic patterns, and local ordinances. We use discrete, professional methods that comply with all Colorado and municipal laws."
    }
  ];

  return (
    <div className="bg-cream">
      {/* Breadcrumbs */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <Breadcrumbs 
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: "Colorado" }
          ]} 
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/maroon-bells-colorado.jpg"
          alt="Colorado Rocky Mountains - Maroon Bells"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-navy-light/85"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <div className="inline-block px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-sm mb-8">
            <span className="text-cream/90 text-sm font-light tracking-wide">Colorado Headquarters</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Colorado Private Investigator
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Licensed, bonded, and insured. Serving the Front Range and throughout Colorado with 17+ years of professional investigation experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17205944441"
              className="inline-block px-8 py-4 bg-cream text-navy text-sm font-normal tracking-wide hover:bg-cream-dark hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Call Now: +1 720-594-4441
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border border-cream text-cream text-sm font-normal tracking-wide hover:bg-cream hover:text-navy hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Colorado Advantage */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-8">
            The Colorado Advantage
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Born in Colorado. Built on excellence.
              </h3>
              <p className="text-lg text-navy-lighter font-light leading-relaxed mb-6">
                Monaco PI was founded in Colorado, where we&apos;ve built our reputation on delivering results for individuals, attorneys, and corporations across the Front Range.
              </p>
              <p className="text-lg text-navy-lighter font-light leading-relaxed">
                Our deep understanding of Colorado&apos;s unique landscape—from urban Denver to mountain communities—combined with established local relationships gives our clients a distinct advantage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "17+", label: "Years in Colorado" },
                { stat: "95%+", label: "Case Resolution" },
                { stat: "24/7", label: "Emergency Service" },
                { stat: "1000+", label: "Cases Completed" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-sm">
                  <div className="text-4xl font-light text-navy mb-2 tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-sm text-navy-lighter font-light">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-32 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Cities & Counties We Serve
          </h2>
          
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-navy mb-8 tracking-tight">
              Serving communities across Colorado
            </h3>
            <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-3xl">
              From metro Denver to mountain towns, we provide professional investigation services throughout Colorado. Our investigators know the local terrain and have the resources to conduct effective investigations anywhere in the state.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-cream p-6 rounded-sm hover:shadow-md transition-shadow">
                <div className="text-xl font-light text-navy mb-1 tracking-tight">
                  {city.name}
                </div>
                <div className="text-sm text-navy-lighter/70 font-light">
                  {city.population}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-cream rounded-sm">
            <p className="text-navy-lighter font-light leading-relaxed text-center">
              Don&apos;t see your city listed? We serve all of Colorado. <Link href="/contact" className="text-navy hover:text-navy-light transition-colors underline">Contact us</Link> to discuss your investigation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Colorado */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Colorado Investigation Services
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Comprehensive investigation services
              </h3>
              <p className="text-lg text-navy-lighter font-light leading-relaxed mb-8">
                Whether you&apos;re an individual seeking answers, an attorney building a case, or a corporation protecting assets, we provide the full spectrum of investigation services in Colorado.
              </p>
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
              >
                View All Services
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-navy-lighter font-light">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Frequently Asked Questions
          </h2>

          <h3 className="text-4xl md:text-5xl font-light text-navy mb-16 tracking-tight">
            Colorado investigation FAQs
          </h3>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-cream-dark pb-8">
                <h4 className="text-xl md:text-2xl font-light text-navy mb-4 tracking-tight">
                  {faq.question}
                </h4>
                <p className="text-lg text-navy-lighter font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-cream rounded-sm text-center">
            <p className="text-lg text-navy-lighter font-light leading-relaxed mb-6">
              Have more questions about private investigation services in Colorado?
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Ask Us Anything
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Monaco PI in Colorado */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-cream/70 mb-16">
            Why Choose Us
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {[
              {
                title: "Colorado Roots",
                description: "Founded and based in Colorado, we understand the unique challenges and opportunities of investigating in the Centennial State."
              },
              {
                title: "Local Expertise",
                description: "Our investigators know Colorado's cities, counties, courts, and communities. This local knowledge is invaluable for effective investigations."
              },
              {
                title: "Proven Results",
                description: "95%+ case resolution rate across thousands of Colorado investigations. We deliver the answers you need with professionalism and discretion."
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-2xl font-light text-cream mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-cream/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-navy-lighter font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact Monaco PI today for a free, confidential consultation with a Colorado licensed private investigator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+17205944441"
              className="inline-block px-8 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Call Now: +1 720-594-4441
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border border-navy text-navy text-sm font-normal tracking-wide hover:bg-cream-dark hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Request Consultation
            </Link>
          </div>
          <p className="text-sm text-navy-lighter/70 font-light">
            Available 24/7 for emergency investigations
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Monaco PI - Colorado",
            "description": "Licensed private investigator serving Colorado with 17+ years experience",
            "url": "https://monacopi.com/locations/colorado",
            "telephone": "+1-720-594-4441",
            "email": "monacocrystalpi@gmail.com",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "State",
                "name": "Colorado"
              },
              {
                "@type": "City",
                "name": "Denver",
                "containedInPlace": "Colorado, USA"
              },
              {
                "@type": "City",
                "name": "Boulder",
                "containedInPlace": "Colorado, USA"
              },
              {
                "@type": "City",
                "name": "Colorado Springs",
                "containedInPlace": "Colorado, USA"
              },
              {
                "@type": "City",
                "name": "Fort Collins",
                "containedInPlace": "Colorado, USA"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Investigation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Surveillance Operations",
                    "areaServed": "Colorado"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Background Investigations",
                    "areaServed": "Colorado"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })
        }}
      />
    </div>
  );
}

