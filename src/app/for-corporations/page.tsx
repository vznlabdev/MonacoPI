import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Corporate Investigation Services | Fraud Detection & Due Diligence",
  description: "Protect your business with professional corporate investigations. Fraud detection, due diligence, workplace investigations, IP protection, and employee screening. Complete confidentiality guaranteed.",
  keywords: [
    "corporate investigation",
    "fraud detection",
    "due diligence",
    "workplace investigation",
    "employee screening",
    "business intelligence"
  ],
  alternates: {
    canonical: "https://monacopi.com/for-corporations"
  },
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function ForCorporationsPage() {
  return (
    <div className="bg-cream">
      {/* Breadcrumbs */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <Breadcrumbs 
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "For Corporations" }
          ]} 
        />
      </div>

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

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-16 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="border-b border-cream-dark pb-8">
              <h3 className="text-xl font-light text-navy mb-4">How do you maintain confidentiality during workplace investigations?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                We conduct covert investigations without alerting subjects or disrupting operations. Our team uses discreet methods, encrypted communications, and works outside business hours when needed. All findings remain confidential between you and our firm.
              </p>
            </div>

            <div className="border-b border-cream-dark pb-8">
              <h3 className="text-xl font-light text-navy mb-4">What does a corporate fraud investigation cost?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Corporate investigations typically range from $5,000-25,000 depending on complexity and scope. We provide detailed proposals outlining estimated costs before beginning work and offer retainer-based arrangements for larger engagements.
              </p>
            </div>

            <div className="border-b border-cream-dark pb-8">
              <h3 className="text-xl font-light text-navy mb-4">Can you help recover stolen assets?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Yes. We trace hidden assets, document fraudulent transfers, and provide evidence for recovery efforts. Our investigations have led to millions in asset recovery for corporate clients, working closely with your legal and financial teams.
              </p>
            </div>

            <div className="border-b border-cream-dark pb-8">
              <h3 className="text-xl font-light text-navy mb-4">Do you work with our legal counsel?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Absolutely. We coordinate seamlessly with corporate attorneys to ensure attorney-client privilege protection and proper evidence handling. Our reports are formatted for legal proceedings and we provide testimony when needed.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-light text-navy mb-4">How long does due diligence take?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Standard due diligence investigations take 7-14 business days. Expedited service is available for urgent M&A transactions. We provide preliminary findings within 48 hours and comprehensive reports upon completion.
              </p>
            </div>
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do you maintain confidentiality during workplace investigations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We conduct covert investigations without alerting subjects or disrupting operations. Our team uses discreet methods, encrypted communications, and works outside business hours when needed. All findings remain confidential between you and our firm."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What does a corporate fraud investigation cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Corporate investigations typically range from $5,000-25,000 depending on complexity and scope. We provide detailed proposals outlining estimated costs before beginning work and offer retainer-based arrangements for larger engagements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you help recover stolen assets?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We trace hidden assets, document fraudulent transfers, and provide evidence for recovery efforts. Our investigations have led to millions in asset recovery for corporate clients, working closely with your legal and financial teams."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you work with our legal counsel?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We coordinate seamlessly with corporate attorneys to ensure attorney-client privilege protection and proper evidence handling. Our reports are formatted for legal proceedings and we provide testimony when needed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does due diligence take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Standard due diligence investigations take 7-14 business days. Expedited service is available for urgent M&A transactions. We provide preliminary findings within 48 hours and comprehensive reports upon completion."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-cream">
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
