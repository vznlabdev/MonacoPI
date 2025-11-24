import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Florida Private Investigator | Licensed PI Services Miami, Tampa, Orlando",
  description: "Licensed private investigator serving Florida. Expert surveillance, background checks, infidelity investigations across South Florida and statewide. 95%+ case resolution. Call +1 720-594-4441.",
  keywords: [
    "private investigator Florida",
    "private detective Miami",
    "PI Tampa Florida",
    "Orlando investigator",
    "Fort Lauderdale PI",
    "licensed investigator Florida",
    "surveillance Miami",
    "background check Florida",
    "South Florida investigator",
    "corporate investigation Florida"
  ],
  openGraph: {
    title: "Florida Private Investigator | Licensed PI Services | Monaco PI",
    description: "Licensed private investigator serving Florida. Professional investigation services throughout the Sunshine State. Call +1 720-594-4441.",
    url: "https://monacopi.com/locations/florida",
  },
};

export default function FloridaLocationPage() {
  const cities = [
    { name: "Miami", population: "Miami-Dade County" },
    { name: "Fort Lauderdale", population: "Broward County" },
    { name: "West Palm Beach", population: "Palm Beach County" },
    { name: "Tampa", population: "Hillsborough County" },
    { name: "Orlando", population: "Orange County" },
    { name: "Jacksonville", population: "Duval County" },
    { name: "St. Petersburg", population: "Pinellas County" },
    { name: "Naples", population: "Collier County" },
    { name: "Sarasota", population: "Sarasota County" },
    { name: "Fort Myers", population: "Lee County" },
    { name: "Tallahassee", population: "Leon County" },
    { name: "Pensacola", population: "Escambia County" },
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
    "Maritime Investigations",
    "Due Diligence Investigations",
    "Workers' Compensation Fraud"
  ];

  const faqs = [
    {
      question: "Are you licensed in Florida?",
      answer: "Yes, Monaco PI is fully licensed, bonded, and insured to operate in the State of Florida. We comply with all Florida Statutes Chapter 493 governing private investigators and maintain active licensing with the Florida Department of Agriculture and Consumer Services."
    },
    {
      question: "What areas of Florida do you serve?",
      answer: "We serve the entire state of Florida, with particular expertise in South Florida (Miami, Fort Lauderdale, West Palm Beach), Central Florida (Orlando, Tampa), and North Florida (Jacksonville, Tallahassee). We regularly conduct investigations throughout the state."
    },
    {
      question: "How much does a private investigator cost in Florida?",
      answer: "Investigation costs vary based on case complexity and required resources. Florida investigation rates typically range from $75-150 per hour. We provide transparent pricing during your free consultation and work within various budgets while maintaining professional standards."
    },
    {
      question: "Do you work with Florida attorneys?",
      answer: "Absolutely. We work extensively with Florida law firms and attorneys on cases involving family law, criminal defense, civil litigation, and personal injury. We understand Florida court requirements and provide court-admissible evidence and expert testimony when needed."
    },
    {
      question: "Can you investigate maritime cases in Florida?",
      answer: "Yes, Florida's unique coastal geography means we often handle maritime-related investigations including vessel documentation, marine insurance fraud, charter disputes, and port-related investigations throughout Florida's extensive coastline."
    },
    {
      question: "How quickly can you start an investigation in Florida?",
      answer: "We can typically begin investigations within 24-48 hours of your initial consultation. For emergency situations requiring immediate attention, we offer expedited service with investigators who can deploy the same day throughout major Florida metro areas."
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
            { label: "Florida" }
          ]} 
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/st-augustine-florida.jpg"
          alt="Historic St. Augustine Florida"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-navy-light/85"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <div className="inline-block px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-sm mb-8">
            <span className="text-cream/90 text-sm font-light tracking-wide">Serving the Sunshine State</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Florida Private Investigator
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Licensed, bonded, and insured. Professional investigation services throughout Florida backed by proven Colorado excellence.
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

      {/* Florida Advantage */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-8">
            The Florida Advantage
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Colorado excellence. Florida expertise.
              </h3>
              <p className="text-lg text-navy-lighter font-light leading-relaxed mb-6">
                Monaco PI brings our proven track record of excellence to the Sunshine State. Our Florida operations combine Colorado's investigative standards with deep local knowledge of Florida's unique environment, laws, and communities.
              </p>
              <p className="text-lg text-navy-lighter font-light leading-relaxed">
                From the vibrant streets of Miami to the Gulf Coast beaches, our Florida-licensed investigators understand the diverse landscapes and cultures that make Florida investigations uniquely challenging.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "Statewide", label: "Coverage" },
                { stat: "95%+", label: "Case Resolution" },
                { stat: "24/7", label: "Availability" },
                { stat: "Licensed", label: "FL Chapter 493" },
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
              Professional investigations across Florida
            </h3>
            <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-3xl">
              From South Florida's bustling metropolitan areas to the Panhandle's coastal communities, we provide comprehensive investigation services throughout the state. Our investigators understand Florida's diverse regions and unique investigative challenges.
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
              Serving all 67 Florida counties. <Link href="/contact" className="text-navy hover:text-navy-light transition-colors underline">Contact us</Link> to discuss your investigation needs anywhere in Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Florida */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Florida Investigation Services
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Comprehensive services for Florida
              </h3>
              <p className="text-lg text-navy-lighter font-light leading-relaxed mb-8">
                Whether you're dealing with family law matters, corporate fraud, or personal concerns, our Florida-licensed investigators provide thorough, professional service throughout the Sunshine State.
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

      {/* Florida-Specific Expertise */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Florida Expertise
          </h2>

          <h3 className="text-4xl md:text-5xl font-light text-navy mb-16 tracking-tight">
            Understanding Florida's unique environment
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Coastal & Maritime",
                description: "Florida's extensive coastline presents unique investigation opportunities. We handle maritime fraud, vessel investigations, and coastal property disputes with specialized expertise."
              },
              {
                title: "Tourism & Hospitality",
                description: "Florida's tourism industry creates specific investigation needs. We work with hotels, resorts, and entertainment venues on security, fraud, and liability matters."
              },
              {
                title: "Retirement & Elder Care",
                description: "With Florida's large retirement population, we specialize in elder fraud investigations, nursing home negligence, and estate-related investigations."
              },
              {
                title: "Real Estate & Development",
                description: "Florida's dynamic real estate market requires specialized investigation services for title issues, development disputes, and property fraud."
              },
              {
                title: "Latin American Connections",
                description: "South Florida's international community means we often handle cases with Latin American connections, working with bilingual investigators when needed."
              },
              {
                title: "Insurance Hub",
                description: "Florida's complex insurance environment means extensive experience with insurance fraud, claims investigation, and workers' compensation cases."
              },
            ].map((item, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm">
                <h4 className="text-xl font-light text-navy mb-4 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-navy-lighter font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Frequently Asked Questions
          </h2>

          <h3 className="text-4xl md:text-5xl font-light text-navy mb-16 tracking-tight">
            Florida investigation FAQs
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
              Have more questions about private investigation services in Florida?
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

      {/* Why Choose Monaco PI in Florida */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-cream/70 mb-16">
            Why Choose Us
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {[
              {
                title: "Proven Excellence",
                description: "We bring our Colorado-proven 95%+ case resolution rate to Florida, combining national experience with local expertise."
              },
              {
                title: "Florida Licensed",
                description: "Fully licensed under Florida Statutes Chapter 493, bonded, and insured. We operate within all Florida regulatory requirements."
              },
              {
                title: "Diverse Expertise",
                description: "From Miami's international business environment to the Panhandle's unique culture, we understand Florida's regional differences."
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
            Contact Monaco PI today for a free, confidential consultation with a Florida licensed private investigator.
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
            Available 24/7 for emergency investigations throughout Florida
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
            "name": "Monaco PI - Florida",
            "description": "Licensed private investigator serving Florida statewide",
            "url": "https://monacopi.com/locations/florida",
            "telephone": "+1-720-594-4441",
            "email": "monacocrystalpi@gmail.com",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "State",
                "name": "Florida"
              },
              {
                "@type": "City",
                "name": "Miami",
                "containedInPlace": "Florida, USA"
              },
              {
                "@type": "City",
                "name": "Tampa",
                "containedInPlace": "Florida, USA"
              },
              {
                "@type": "City",
                "name": "Orlando",
                "containedInPlace": "Florida, USA"
              },
              {
                "@type": "City",
                "name": "Jacksonville",
                "containedInPlace": "Florida, USA"
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
                    "areaServed": "Florida"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Background Investigations",
                    "areaServed": "Florida"
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

