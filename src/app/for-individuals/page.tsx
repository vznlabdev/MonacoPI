import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Private Investigation for Individuals | Infidelity, Missing Persons & More",
  description: "Compassionate, discreet investigation services for personal matters. Relationship concerns, missing person searches, background checks, and asset investigations. Get the answers you deserve.",
  keywords: [
    "private investigator for individuals",
    "infidelity investigation",
    "cheating spouse",
    "missing person search",
    "background check",
    "asset investigation"
  ],
  alternates: {
    canonical: "https://monacopi.com/for-individuals"
  },
  openGraph: {
    title: "Private Investigation for Individuals | Infidelity, Missing Persons & More",
    description: "Compassionate, discreet investigation services for personal matters. Relationship concerns, missing person searches, and background investigations.",
    url: "https://monacopi.com/for-individuals",
    siteName: "Monaco PI",
    images: [
      {
        url: "/images/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Monaco PI - Private Investigation for Individuals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Investigation for Individuals | Infidelity, Missing Persons & More",
    description: "Compassionate, discreet investigation services for personal matters. Get the answers you deserve.",
    images: ["/images/opengraph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ForIndividualsPage() {
  return (
    <div className="bg-cream">
      {/* Breadcrumbs */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <Breadcrumbs 
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "For Individuals" }
          ]} 
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            For Individuals
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            When your personal life demands professional answers
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-navy-light font-light leading-relaxed mb-12">
              When your world feels uncertain and you need answers, you shouldn&apos;t have to navigate this alone.
            </p>
            <p className="text-xl text-navy-lighter font-light leading-relaxed">
              Whether you&apos;re dealing with a relationship crisis, searching for someone important, or protecting what matters most to you, Monaco PI provides the professional expertise and compassionate support you need during life&apos;s most challenging moments.
            </p>
          </div>
        </div>
      </section>

      {/* Situations We Handle */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Situations We Handle</h2>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-light text-navy mb-6 tracking-tight">
                Relationship & Marriage Concerns
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed mb-6">
                When trust has been broken and you need to know the truth. Our surveillance and investigation services provide the clarity you need to make informed decisions about your future.
              </p>
              <p className="text-sm text-navy-lighter/70 font-light italic">
                &quot;Everyone kept saying I was being paranoid. Well guess what? I WASN&apos;T.&quot;
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-navy mb-6 tracking-tight">
                Missing Person Investigations
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed mb-6">
                Reconnecting with lost family members, locating estranged relatives, or finding someone who&apos;s disappeared from your life. We use advanced databases and investigative techniques others can&apos;t access.
              </p>
              <p className="text-sm text-navy-lighter/70 font-light italic">
                &quot;She&apos;s okay!! She&apos;s really okay. I can&apos;t stop crying. Thank you thank you thank you&quot;
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-navy mb-6 tracking-tight">
                Background Investigations
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Before you make important personal decisions about a new relationship, business partnership, or childcare provider, know who you&apos;re really dealing with.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-navy mb-6 tracking-tight">
                Asset & Financial Investigations
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed mb-6">
                Uncovering hidden assets, suspicious financial activity, or protecting yourself from fraud. We follow the money trail that others miss.
              </p>
              <p className="text-sm text-navy-lighter/70 font-light italic">
                &quot;Dude you found him in 2 days. TWO DAYS. I&apos;ve been looking for months!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Help */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-cream/60 mb-24">Why Professional Help</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                You Can&apos;t Afford Mistakes
              </h3>
              <p className="text-cream/70 font-light leading-relaxed mb-6">
                DIY investigations often backfire. Social media stalking, confronting people directly, or hiring inexperienced investigators can make your situation worse.
              </p>
              <p className="text-sm text-navy-lighter/70 font-light italic">
                &quot;I thought I was going insane. Turns out my gut was right all along.&quot;
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Your Privacy Is Everything
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                We understand that discretion isn&apos;t just preferred, it&apos;s essential. Our investigations are conducted with complete confidentiality using unmarked vehicles and encrypted communications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Compassionate Support
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Our team combines professional expertise with genuine empathy. We listen to your concerns and provide the emotional support you need while delivering the facts you deserve.
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
              <h3 className="text-xl font-light text-navy mb-4">How much does a private investigator cost?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Our rates vary based on case complexity and requirements. Most investigations range from $75-150 per hour, with surveillance cases typically requiring multiple hours. We provide detailed quotes during your free consultation and never charge hidden fees.
              </p>
            </div>

            <div className="border-b border-cream-dark pb-8">
              <h3 className="text-xl font-light text-navy mb-4">How long does an investigation take?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Timeline varies by case type. Background checks typically take 5-14 business days, while surveillance investigations depend on subject patterns and behavior. We provide estimated timelines during consultation and keep you updated throughout the process.
              </p>
            </div>

            <div className="border-b border-cream-dark pb-8">
              <h3 className="text-xl font-light text-navy mb-4">Will anyone find out I hired an investigator?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Absolutely not. Complete discretion is guaranteed. We use unmarked vehicles, encrypted communications, and maintain strict confidentiality. Your identity and case details are protected under investigator-client privilege.
              </p>
            </div>

            <div className="border-b border-cream-dark pb-8">
              <h3 className="text-xl font-light text-navy mb-4">Can the evidence you gather be used in court?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Yes. We follow legal protocols and chain-of-custody procedures to ensure all evidence is court-admissible. Our investigators are experienced expert witnesses and our reports are prepared to meet legal standards.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-light text-navy mb-4">Do you offer payment plans?</h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Yes. We understand financial stress during difficult times. We offer flexible payment arrangements and work with you to structure a plan that fits your budget while ensuring thorough investigation.
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
                    "name": "How much does a private investigator cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our rates vary based on case complexity and requirements. Most investigations range from $75-150 per hour, with surveillance cases typically requiring multiple hours. We provide detailed quotes during your free consultation and never charge hidden fees."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does an investigation take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Timeline varies by case type. Background checks typically take 5-14 business days, while surveillance investigations depend on subject patterns and behavior. We provide estimated timelines during consultation and keep you updated throughout the process."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will anyone find out I hired an investigator?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely not. Complete discretion is guaranteed. We use unmarked vehicles, encrypted communications, and maintain strict confidentiality. Your identity and case details are protected under investigator-client privilege."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the evidence you gather be used in court?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We follow legal protocols and chain-of-custody procedures to ensure all evidence is court-admissible. Our investigators are experienced expert witnesses and our reports are prepared to meet legal standards."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer payment plans?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We understand financial stress during difficult times. We offer flexible payment arrangements and work with you to structure a plan that fits your budget while ensuring thorough investigation."
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
            Get the answers you deserve
          </h2>
          <p className="text-lg text-navy-lighter font-light mb-12 leading-relaxed">
            Take the first step toward peace of mind with your free confidential consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            Request Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
