import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Texas Private Investigator | Licensed PI Services Austin, Dallas, Houston",
  description: "Licensed private investigator serving Texas. Expert surveillance, background checks, corporate investigations across the Lone Star State. 95%+ case resolution. Call +1 720-594-4441.",
  keywords: [
    "private investigator Texas",
    "private detective Austin",
    "PI Dallas Texas",
    "Houston investigator",
    "San Antonio PI",
    "licensed investigator Texas",
    "surveillance Texas",
    "background check Texas",
    "corporate investigation Texas",
    "oil and gas investigation"
  ],
  openGraph: {
    title: "Texas Private Investigator | Licensed PI Services | Monaco PI",
    description: "Licensed private investigator serving Texas. Professional investigation services throughout the Lone Star State. Call +1 720-594-4441.",
    url: "https://monacopi.com/locations/texas",
  },
};

export default function TexasLocationPage() {
  const cities = [
    { name: "Austin", population: "Travis County" },
    { name: "Dallas", population: "Dallas County" },
    { name: "Houston", population: "Harris County" },
    { name: "San Antonio", population: "Bexar County" },
    { name: "Fort Worth", population: "Tarrant County" },
    { name: "El Paso", population: "El Paso County" },
    { name: "Arlington", population: "Tarrant County" },
    { name: "Corpus Christi", population: "Nueces County" },
    { name: "Plano", population: "Collin County" },
    { name: "Lubbock", population: "Lubbock County" },
    { name: "Irving", population: "Dallas County" },
    { name: "Amarillo", population: "Potter County" },
  ];

  const services = [
    "Surveillance Operations",
    "Background Investigations",
    "Infidelity & Domestic Investigations",
    "Child Custody Investigations",
    "Asset & Financial Investigations",
    "Corporate Fraud Investigations",
    "Oil & Gas Industry Investigations",
    "Missing Person Investigations",
    "Process Service",
    "Insurance Fraud Investigation",
    "Executive Protection Background Checks",
    "Workers' Compensation Fraud"
  ];

  const faqs = [
    {
      question: "Are you licensed in Texas?",
      answer: "Yes, Monaco PI is fully licensed, bonded, and insured to operate in the State of Texas. We comply with all Texas Occupations Code Chapter 1702 requirements and maintain active licensing with the Texas Department of Public Safety Private Security Program."
    },
    {
      question: "What areas of Texas do you serve?",
      answer: "We serve the entire state of Texas, from the major metros of Houston, Dallas-Fort Worth, Austin, and San Antonio to smaller communities throughout the state. Our investigators are familiar with urban, suburban, and rural Texas environments."
    },
    {
      question: "How much does a private investigator cost in Texas?",
      answer: "Investigation costs in Texas vary based on case complexity and required resources. Typical hourly rates range from $75-150 per hour. We provide transparent, detailed pricing during your free consultation and work within various budget requirements."
    },
    {
      question: "Do you work with Texas attorneys?",
      answer: "Absolutely. We work extensively with Texas law firms and attorneys on cases involving family law, criminal defense, civil litigation, personal injury, and business disputes. We understand Texas court requirements and provide court-admissible evidence and expert testimony."
    },
    {
      question: "Do you have experience with oil and gas investigations?",
      answer: "Yes, given Texas's prominence in the energy sector, we have extensive experience with oil and gas industry investigations including fraud, theft, safety violations, environmental concerns, and contract disputes."
    },
    {
      question: "Can you conduct cross-border investigations?",
      answer: "While we operate within U.S. jurisdiction, we have experience working on cases with cross-border elements common in Texas. We can coordinate with appropriate authorities and work within legal boundaries on international aspects."
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
            { label: "Texas" }
          ]} 
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/austin-texas.jpg"
          alt="Austin Texas skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-navy-light/85"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <div className="inline-block px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-sm mb-8">
            <span className="text-cream/90 text-sm font-light tracking-wide">Serving the Lone Star State</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Texas Private Investigator
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Licensed, bonded, and insured. Bringing Colorado excellence to Texas with professional investigation services across the Lone Star State.
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

      {/* Texas Advantage */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-8">
            The Texas Advantage
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                National standards. Texas expertise.
              </h3>
              <p className="text-lg text-navy-lighter font-light leading-relaxed mb-6">
                Monaco PI expands our proven Colorado excellence to Texas, one of the nation's most dynamic and diverse states. Our Texas operations combine national investigative standards with deep understanding of the Lone Star State's unique business environment, culture, and legal landscape.
              </p>
              <p className="text-lg text-navy-lighter font-light leading-relaxed">
                From the tech corridors of Austin to the energy capitals of Houston and Dallas, our Texas-licensed investigators understand the industries, communities, and challenges that make Texas investigations distinct.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "254", label: "Counties Served" },
                { stat: "95%+", label: "Case Resolution" },
                { stat: "24/7", label: "Availability" },
                { stat: "Licensed", label: "TX Chapter 1702" },
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
              Statewide investigation services
            </h3>
            <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-3xl">
              From the Dallas-Fort Worth Metroplex to the Rio Grande Valley, we provide professional investigation services throughout Texas. Our investigators understand the state's regional differences and diverse communities.
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
              Serving all 254 Texas counties. <Link href="/contact" className="text-navy hover:text-navy-light transition-colors underline">Contact us</Link> to discuss your investigation needs anywhere in Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Texas */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Texas Investigation Services
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Comprehensive services for Texas
              </h3>
              <p className="text-lg text-navy-lighter font-light leading-relaxed mb-8">
                Whether you're dealing with family matters, corporate fraud, or business disputes, our Texas-licensed investigators provide thorough, professional service backed by years of national experience.
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

      {/* Texas-Specific Expertise */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Texas Expertise
          </h2>

          <h3 className="text-4xl md:text-5xl font-light text-navy mb-16 tracking-tight">
            Understanding Texas's unique landscape
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Energy & Oil Gas",
                description: "Texas leads the nation in energy production. We specialize in investigations involving oil and gas operations, theft, fraud, environmental concerns, and contract disputes in this critical sector."
              },
              {
                title: "Technology Hub",
                description: "Austin's tech boom and Dallas's corporate headquarters create unique investigation needs. We handle corporate espionage, intellectual property theft, and employment disputes in tech industries."
              },
              {
                title: "Agriculture & Ranching",
                description: "Texas's vast agricultural operations require specialized knowledge. We investigate livestock theft, equipment fraud, water rights disputes, and land use issues."
              },
              {
                title: "Border Dynamics",
                description: "Texas's international border presents unique challenges. We work within legal boundaries on cases involving cross-border trade, immigration matters, and international business disputes."
              },
              {
                title: "Real Estate & Development",
                description: "From urban high-rises to rural land deals, Texas's booming real estate market requires investigation expertise for fraud prevention, title issues, and development disputes."
              },
              {
                title: "Transportation & Logistics",
                description: "As a major transportation hub, Texas sees significant trucking and logistics activity. We investigate cargo theft, accident reconstruction, and commercial vehicle fraud."
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
            Texas investigation FAQs
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
              Have more questions about private investigation services in Texas?
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

      {/* Why Choose Monaco PI in Texas */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-cream/70 mb-16">
            Why Choose Us
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {[
              {
                title: "Proven Track Record",
                description: "We bring our Colorado-proven 95%+ case resolution rate to Texas, combining multi-state experience with local Texas expertise."
              },
              {
                title: "Texas Licensed",
                description: "Fully licensed under Texas Occupations Code Chapter 1702, bonded, and insured. We operate within all Texas regulatory requirements and industry standards."
              },
              {
                title: "Industry Expertise",
                description: "From energy to technology, agriculture to finance, we understand the industries that drive Texas's economy and the unique investigation needs they create."
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
            Contact Monaco PI today for a free, confidential consultation with a Texas licensed private investigator.
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
            Available 24/7 for emergency investigations throughout Texas
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
            "name": "Monaco PI - Texas",
            "description": "Licensed private investigator serving Texas statewide",
            "url": "https://monacopi.com/locations/texas",
            "telephone": "+1-720-594-4441",
            "email": "monacocrystalpi@gmail.com",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "State",
                "name": "Texas"
              },
              {
                "@type": "City",
                "name": "Austin",
                "containedInPlace": "Texas, USA"
              },
              {
                "@type": "City",
                "name": "Dallas",
                "containedInPlace": "Texas, USA"
              },
              {
                "@type": "City",
                "name": "Houston",
                "containedInPlace": "Texas, USA"
              },
              {
                "@type": "City",
                "name": "San Antonio",
                "containedInPlace": "Texas, USA"
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
                    "areaServed": "Texas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Background Investigations",
                    "areaServed": "Texas"
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

