import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Service Locations - Colorado, Florida, Texas",
  description: "Monaco PI provides professional private investigation services across Colorado, Florida, and Texas. Licensed and bonded investigators serving major cities and surrounding areas.",
  keywords: [
    "private investigator Colorado",
    "private investigator Florida", 
    "private investigator Texas",
    "licensed PI Denver",
    "licensed PI Miami",
    "licensed PI Austin",
    "investigation services near me"
  ],
  openGraph: {
    title: "Service Locations - Colorado, Florida, Texas | Monaco PI",
    description: "Professional private investigation services across Colorado, Florida, and Texas. Licensed and bonded investigators in your area.",
    url: "https://monacopi.com/locations",
  },
};

export default function LocationsPage() {
  const locations = [
    {
      state: "Colorado",
      slug: "colorado",
      tagline: "Serving the Front Range and Beyond",
      cities: ["Denver", "Boulder", "Colorado Springs", "Fort Collins", "Aurora", "Lakewood"],
      description: "As our flagship location, Colorado is where Monaco PI was founded. We serve the entire Front Range corridor and surrounding areas with comprehensive investigation services.",
      image: "/images/maroon-bells-colorado.jpg",
    },
    {
      state: "Florida",
      slug: "florida",
      tagline: "Serving South Florida and the Sunshine State",
      cities: ["Miami", "Fort Lauderdale", "West Palm Beach", "Tampa", "Orlando", "Jacksonville"],
      description: "Monaco PI brings Colorado's excellence to Florida, serving the entire state with professional investigation services backed by years of experience.",
      image: "/images/st-augustine-florida.jpg",
    },
    {
      state: "Texas",
      slug: "texas",
      tagline: "Serving the Lone Star State",
      cities: ["Austin", "Dallas", "Houston", "San Antonio", "Fort Worth", "El Paso"],
      description: "Expanding our trusted services to Texas, Monaco PI provides the same level of excellence and professionalism that made us successful in Colorado and Florida.",
      image: "/images/austin-texas.jpg",
    },
  ];

  return (
    <div className="bg-cream">
      {/* Breadcrumbs */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <Breadcrumbs 
          items={[
            { label: "Home", href: "/" },
            { label: "Locations" }
          ]} 
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Our Locations
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-3xl mx-auto leading-relaxed">
            Professional private investigation services across three states. Local presence, national excellence.
          </p>
        </div>
      </section>

      {/* States Overview */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">
            Where We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={`Private Investigator Services in ${location.state}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-light text-cream mb-2 tracking-tight">
                      {location.state}
                    </h3>
                    <p className="text-sm text-cream/80 font-light">
                      {location.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-navy-lighter font-light leading-relaxed mb-6">
                    {location.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-3">
                      Major Cities Served
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.cities.map((city) => (
                        <span
                          key={city}
                          className="text-sm text-navy-lighter font-light px-3 py-1 bg-cream rounded-sm"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-navy group-hover:text-navy-light transition-colors font-light">
                    View {location.state} Details
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Presence Matters */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Why local presence matters
              </h2>
              <p className="text-lg text-navy-lighter font-light leading-relaxed mb-6">
                Private investigation isn&apos;t one-size-fits-all. Each state has unique laws, regulations, and local nuances that impact how investigations are conducted.
              </p>
              <p className="text-lg text-navy-lighter font-light leading-relaxed">
                Our licensed investigators understand local jurisdictions, have established relationships with local resources, and know the terrain—both literally and figuratively.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Licensed in Each State",
                  description: "Fully licensed, bonded, and insured in Colorado, Florida, and Texas. We comply with all state-specific regulations.",
                },
                {
                  title: "Local Knowledge",
                  description: "Our investigators know the areas they serve, from city layouts to local court systems and law enforcement protocols.",
                },
                {
                  title: "Fast Response Times",
                  description: "Local presence means faster response times and the ability to act quickly when time-sensitive situations arise.",
                },
                {
                  title: "Regional Networks",
                  description: "Established relationships with local resources, databases, and contacts enhance our investigative capabilities.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-sm flex items-center justify-center text-cream font-light text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-navy mb-2 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-navy-lighter font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-cream mb-8 tracking-tight">
            Ready to discuss your case?
          </h2>
          <p className="text-xl text-cream/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us for a free, confidential consultation with a licensed investigator in your area.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

