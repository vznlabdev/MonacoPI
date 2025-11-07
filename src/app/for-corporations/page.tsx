import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Investigation Services | Fraud Detection & Due Diligence",
  description: "Protect your business with professional corporate investigations. Fraud detection, due diligence, workplace investigations, IP protection, and employee screening. Complete confidentiality guaranteed.",
  openGraph: {
    title: "Corporate Investigation Services | Fraud Detection & Due Diligence",
    description: "Protect your business with professional corporate investigations. Fraud detection, due diligence, workplace investigations, and IP protection.",
    url: "https://monacopi.com/for-corporations",
    siteName: "Monaco PI",
    images: [
      {
        url: "/images/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Monaco PI - Corporate Investigation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Investigation Services | Fraud Detection & Due Diligence",
    description: "Protect your business with professional corporate investigations. Fraud detection, due diligence, and workplace investigations.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function ForCorporationsPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            For Corporations
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Protecting your business interests with professional corporate intelligence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-navy-light font-light leading-relaxed mb-12">
              In today&apos;s complex business environment, protecting your company&apos;s assets, reputation, and intellectual property is critical.
            </p>
            <p className="text-xl text-navy-lighter font-light leading-relaxed">
              Monaco PI provides specialized corporate investigation services designed to safeguard your organization from internal and external threats with complete discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Corporate Services</h2>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-light text-navy mb-8 tracking-tight">
                Fraud & Risk Management
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light leading-relaxed">
                <li>Internal fraud detection and investigation</li>
                <li>Embezzlement investigations</li>
                <li>Financial audits and irregularity detection</li>
                <li>Risk assessment and vulnerability analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-light text-navy mb-8 tracking-tight">
                Due Diligence & Screening
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light leading-relaxed">
                <li>Business partner verification</li>
                <li>Vendor and contractor screening</li>
                <li>Merger & acquisition support</li>
                <li>Employee background checks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-light text-navy mb-8 tracking-tight">
                Workplace Investigations
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light leading-relaxed">
                <li>Harassment and discrimination claims</li>
                <li>Policy violation investigations</li>
                <li>Employee misconduct cases</li>
                <li>Workplace safety concerns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-light text-navy mb-8 tracking-tight">
                IP & Competitive Intelligence
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light leading-relaxed">
                <li>Trade secret theft investigations</li>
                <li>Patent infringement cases</li>
                <li>Competitive market intelligence</li>
                <li>Corporate espionage protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Monaco PI */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-cream/60 mb-24">Why Trust Monaco PI</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Complete Confidentiality
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                All investigations conducted with absolute discretion. Your business matters remain confidential and protected under strict NDAs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Rapid Deployment
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                When business issues arise, we respond quickly. Most corporate investigations begin within 24-48 hours of initial consultation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Proven Expertise
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Years of corporate investigation experience with businesses of all sizes. We understand the complexities of business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
            Protect your business
          </h2>
          <p className="text-lg text-navy-lighter font-light mb-12 leading-relaxed">
            Contact us for a confidential consultation about your corporate investigation needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
