import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Monaco PI",
  description: "Professional investigation services including surveillance, background checks, divorce investigations, and more. Licensed investigators with court-ready evidence.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Services
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive investigation solutions for complex situations
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Core Services</h2>
          
          <div className="space-y-28">
            {/* Service 01 */}
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-navy">01</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                  Field Surveillance
                </h3>
                <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-2xl">
                  Professional, undetectable surveillance using advanced equipment and counter-surveillance techniques. Our investigators maintain safe distances while capturing the evidence you need.
                </p>
              </div>
            </div>

            {/* Service 02 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-cream-dark pt-28">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-navy">02</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                  Background Investigations
                </h3>
                <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-2xl">
                  Comprehensive reports delivered in 5-14 business days using proprietary databases and licensed skip-tracing tools. We uncover what others miss.
                </p>
              </div>
            </div>

            {/* Service 03 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-cream-dark pt-28">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-navy">03</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                  Scene Investigation
                </h3>
                <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-2xl">
                  24-48 hour initial assessment with full reports in 7-10 days. Every detail documented with timestamps, GPS coordinates, and chain-of-custody protocols.
                </p>
              </div>
            </div>

            {/* Service 04 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-cream-dark pt-28">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-navy">04</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                  Insurance Defense
                </h3>
                <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-2xl mb-8">
                  Bulletproof evidence that insurance companies and opposing counsel can&apos;t dispute. Our footage speaks for itself.
                </p>
                <p className="text-sm text-navy-lighter/70 font-light italic">
                  &quot;Sent them your video and they dropped it immediately. Didn&apos;t even argue lol&quot; — Workers&apos; Comp Defense
                </p>
              </div>
            </div>

            {/* Service 05 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-cream-dark pt-28">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-navy">05</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                  Process Serving
                </h3>
                <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-2xl">
                  Efficient, professional service with same-day and emergency options available. We find them and serve them – guaranteed.
                </p>
              </div>
            </div>

            {/* Service 06 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-cream-dark pt-28">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-navy">06</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                  Expert Witness Testimony
                </h3>
                <p className="text-lg text-navy-lighter font-light leading-relaxed max-w-2xl">
                  Our investigators are experienced courtroom witnesses who testify regularly. Your evidence will be presented professionally and withstand cross-examination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Investigations */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Specialized Investigations</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Divorce Services */}
            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Divorce & Family Law
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light">
                <li>Infidelity & Adultery Investigations</li>
                <li>Hidden Asset Discovery</li>
                <li>Child Custody Investigations</li>
                <li>Lifestyle & Spending Analysis</li>
                <li>Cohabitation Investigations</li>
                <li>Digital Evidence Recovery</li>
                <li>Business Valuation Support</li>
              </ul>
            </div>

            {/* Other Services */}
            <div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Additional Capabilities
              </h3>
              <ul className="space-y-4 text-navy-lighter font-light">
                <li>Missing Person Investigations</li>
                <li>Personal Security Assessment</li>
                <li>Asset & Financial Investigations</li>
                <li>Digital Forensics</li>
                <li>Drone Surveillance Operations</li>
                <li>International Investigations</li>
                <li>Cybersecurity Investigations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-32 md:py-40 bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-cream/60 mb-24">Advanced Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-light text-cream mb-8 tracking-tight">
                Cutting Edge Technology
              </h3>
              <ul className="space-y-4 text-cream/70 font-light leading-relaxed">
                <li>Advanced surveillance equipment and GPS tracking systems</li>
                <li>Digital forensics capabilities</li>
                <li>Licensed drone operations</li>
                <li>Specialized investigative databases</li>
                <li>International investigation networks</li>
                <li>Cybersecurity investigation tools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-light text-cream mb-8 tracking-tight">
                Multi-State Licensed
              </h3>
              <p className="text-cream/70 font-light leading-relaxed mb-6">
                Licensed in Colorado, Florida, and Texas with nationwide deployment capabilities.
              </p>
              <p className="text-cream/70 font-light leading-relaxed">
                This multi-state licensing allows us to conduct investigations across state lines legally and efficiently, providing local expertise with national reach for complex cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-lg text-navy-lighter font-light mb-12 leading-relaxed">
            Get your free confidential consultation and find out how we can help with your investigation needs.
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
