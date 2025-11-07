import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Attorneys | Court-Ready Evidence & Expert Witness Testimony",
  description: "Bulletproof evidence for legal professionals. 95%+ case resolution rate, 24-48h deployment, expert witness testimony. Specialized in personal injury, family law, criminal defense, and civil litigation.",
  keywords: [
    "private investigator for attorneys",
    "legal investigation",
    "court-ready evidence",
    "expert witness testimony",
    "litigation support",
    "attorney investigator"
  ],
  alternates: {
    canonical: "https://monacopi.com/for-attorneys"
  },
  openGraph: {
    title: "For Attorneys | Court-Ready Evidence & Expert Witness Testimony",
    description: "Bulletproof evidence for legal professionals. 95%+ case resolution rate, 24-48h deployment, expert witness testimony for all practice areas.",
    url: "https://monacopi.com/for-attorneys",
    siteName: "Monaco PI",
    images: [
      {
        url: "/images/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Monaco PI - Investigation Services for Attorneys",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Attorneys | Court-Ready Evidence & Expert Witness Testimony",
    description: "Bulletproof evidence for legal professionals. 95%+ case resolution rate, 24-48h deployment, expert witness testimony.",
    images: ["/images/opengraph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ForAttorneysPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            For Attorneys
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Bulletproof evidence and court-ready documentation for legal professionals
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-navy-light font-light leading-relaxed mb-12">
              When the stakes are high and failure isn&apos;t an option, you need more than basic investigation services.
            </p>
            <p className="text-xl text-navy-lighter font-light leading-relaxed">
              You need the elite expertise, absolute discretion, and proven results that discerning professionals trust. Our investigations deliver actionable intelligence that stands up in court.
            </p>
          </div>
        </div>
      </section>

      {/* Why Monaco PI */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Why Monaco PI</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="text-5xl font-light text-navy mb-6">95%+</div>
              <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                Case Resolution Rate
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed mb-6">
                We maintain one of the industry&apos;s highest success rates because we only accept cases we&apos;re confident we can solve.
              </p>
              <p className="text-sm text-navy-lighter/70 font-light italic">
                &quot;Seriously, you&apos;re the only ones who actually found him. Everyone else just took my money.&quot;
              </p>
            </div>

            <div>
              <div className="text-5xl font-light text-navy mb-6">17+</div>
              <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                Years Experience
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Our team combines decades of experience from law enforcement, military intelligence, and legal system expertise. We don&apos;t just gather information; we deliver actionable intelligence that stands up in court.
              </p>
            </div>

            <div>
              <div className="text-5xl font-light text-navy mb-6">24-48h</div>
              <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                Case Deployment
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed mb-6">
                When time matters, we move fast. Most investigations begin within 24-48 hours, with emergency same-day deployment available.
              </p>
              <p className="text-sm text-navy-lighter/70 font-light italic">
                &quot;Y&apos;all don&apos;t play around. 3 days and we had everything for the lawyers.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Investigation Services</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Evidence & Documentation
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light">
                <li>Witness Location & Interviews</li>
                <li>Evidence Collection</li>
                <li>Background Investigations</li>
                <li>Expert Witness Testimony</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Specialized Support
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light">
                <li>Surveillance Operations</li>
                <li>Asset Searches</li>
                <li>Scene Investigation</li>
                <li>Case Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-cream/60 mb-24">Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-light text-cream mb-4">Personal Injury</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Accident reconstruction, injury verification, and claims investigation
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-cream mb-4">Family Law</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Custody investigations, asset discovery, and divorce support
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-cream mb-4">Criminal Defense</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Witness location, evidence verification, and case investigation
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-cream mb-4">Civil Litigation</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Document retrieval, fact verification, and evidence collection
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-cream mb-4">Workers&apos; Compensation</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Surveillance, fraud investigation, and claims verification
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-cream mb-4">Insurance Defense</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Claims investigation, verification, and fraud detection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
            Strengthen your case
          </h2>
          <p className="text-lg text-navy-lighter font-light mb-12 leading-relaxed">
            Contact us to discuss how our elite investigation services can support your legal practice.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
