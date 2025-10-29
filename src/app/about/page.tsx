import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Monaco PI",
  description: "Learn about Monaco PI's founder Crystal Monaco, our elite investigation team, and our commitment to delivering truth with integrity.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            About
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Elite investigation services built on integrity and results
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">Mission</h2>
          <p className="text-2xl md:text-3xl text-navy-light font-light leading-relaxed max-w-4xl">
            Monaco PI exists to deliver truth with integrity. We believe every client deserves answers whether it's protecting your family, your business, or your assets. We don't just gather information; we provide clarity, closure, and actionable intelligence when you need it most.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-16">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-xl text-navy-light font-light leading-relaxed">
                Founded on the principle that high stakes situations demand elite expertise, Monaco PI has built a reputation as Colorado's premier private investigation firm.
              </p>
            </div>
            <div>
              <p className="text-xl text-navy-light font-light leading-relaxed">
                Our team combines decades of experience from law enforcement, military intelligence to legal system expertise. We've built our practice around one simple truth: our clients deserve investigators who understand that precision, professionalism, and results aren't luxuries, they're requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Leadership</h2>
          
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-light text-navy mb-4 tracking-tight">
              Crystal Monaco
            </h3>
            <p className="text-lg text-navy-lighter font-light mb-12">
              Founder & Lead Investigator
            </p>
            
            <p className="text-xl text-navy-light font-light leading-relaxed mb-16">
              With over 17 years in private investigation, Monaco brings unparalleled expertise and a unique perspective to every case. Her background spans both sides of the legal system, providing deep insight into how evidence works in courtrooms and what attorneys need to win cases.
            </p>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-sm font-medium tracking-wider uppercase text-navy-lighter/70 mb-6">
                  Professional Background
                </h4>
                <ul className="space-y-3 text-navy-lighter font-light">
                  <li>17+ years as a licensed private investigator</li>
                  <li>Former investigator intern, Arapahoe County Public Defender's Office</li>
                  <li>10 years as investigator with Ross Investigators, P.C.</li>
                  <li>Nearly 5 years at personal injury law firm</li>
                  <li>Legal research experience at lobbying firm</li>
                  <li>Volunteer investigator, Colorado Innocence Center</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium tracking-wider uppercase text-navy-lighter/70 mb-6">
                  Education & Credentials
                </h4>
                <ul className="space-y-3 text-navy-lighter font-light">
                  <li>B.A. in Sociology</li>
                  <li>Certified Paralegal</li>
                  <li>Licensed Private Investigator (Colorado, Florida, Texas)</li>
                  <li>Digital forensics certification</li>
                  <li>Licensed drone operator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Discretion Above All
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                Your privacy isn't negotiable. Every case is handled with the utmost confidentiality. We've never had a confidentiality breach in our history.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Honest Communication
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                We tell you what we can realistically deliver, not what you want to hear. If we don't believe we can solve your case, we'll tell you upfront.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Relentless Pursuit
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                We don't quit until we've exhausted every legitimate avenue. Our 95%+ case resolution rate reflects our commitment to finding answers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Legal & Ethical Standards
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                We operate within the law, every single time. All evidence is collected legally and follows chain-of-custody protocols.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Client Empowerment
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed">
                You make the decisions. We provide the facts and guidance. You remain in control throughout the investigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Guarantees</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                No Results, Reduced Fee
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                If we don't deliver actionable findings through no fault of circumstances beyond our control, we adjust billing accordingly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Transparent Pricing
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                You'll receive a clear estimate upfront during your free consultation. No surprise charges, hidden fees, or unexpected costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Legal Compliance
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                All evidence is collected legally and admissible in court proceedings. Our investigators are experienced expert witnesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-cream mb-6 tracking-tight">
                Confidentiality
              </h3>
              <p className="text-cream/70 font-light leading-relaxed">
                Client information is protected under strict NDA. We've never had a breach in our history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
            Ready to work with us?
          </h2>
          <p className="text-lg text-navy-lighter font-light mb-12 leading-relaxed">
            Experience the Monaco PI difference with your free confidential consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light transition-all duration-300 rounded-sm"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
