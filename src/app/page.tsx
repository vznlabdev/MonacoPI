import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center bg-neutral-900 relative overflow-hidden">
        {/* Hero Image */}
        <img 
          src="/images/hero.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/70 to-neutral-900/80"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-[1.05]">
            Monaco
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Elite investigation services for discerning clients who demand excellence, discretion, and proven results.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-400 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 md:py-40" id="about-section">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-16">About</h2>
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed">
                Monaco PI exists to deliver truth with integrity. We believe every client deserves answers—whether it's protecting your family, your business, or your assets.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed">
                We don't just gather information; we provide clarity, closure, and actionable intelligence when you need it most. Our team combines decades of experience to serve clients who understand that excellence isn't optional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 md:py-40 bg-white" id="services-section">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-24">Services</h2>
          
          <div className="space-y-28">
            {/* Service 01 */}
            <div className="grid md:grid-cols-12 gap-12 items-start group">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-neutral-900">01</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
                  Divorce Investigations
                </h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10 max-w-2xl">
                  Professional surveillance and evidence gathering for family law matters. We handle infidelity investigations, hidden asset discovery, and custody support with complete discretion.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-500 font-light">
                  <div>Infidelity & Adultery</div>
                  <div>Hidden Asset Discovery</div>
                  <div>Child Custody Support</div>
                  <div>Cohabitation Documentation</div>
                </div>
              </div>
            </div>

            {/* Service 02 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-28 group">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-neutral-900">02</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
                  Corporate Intelligence
                </h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10 max-w-2xl">
                  Protect your business interests with comprehensive corporate investigations. From due diligence to fraud detection, we deliver actionable intelligence.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-500 font-light">
                  <div>Due Diligence</div>
                  <div>Fraud Investigation</div>
                  <div>Employee Screening</div>
                  <div>Competitive Intelligence</div>
                </div>
              </div>
            </div>

            {/* Service 03 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-28 group">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-neutral-900">03</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
                  Legal Support
                </h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10 max-w-2xl">
                  Court-ready evidence and expert witness testimony for attorneys. Our investigations meet legal standards and withstand scrutiny in proceedings.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-500 font-light">
                  <div>Evidence Collection</div>
                  <div>Witness Location</div>
                  <div>Expert Testimony</div>
                  <div>Case Documentation</div>
                </div>
              </div>
            </div>

            {/* Service 04 */}
            <div className="grid md:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-28 group">
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-neutral-900">04</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
                  Background Intelligence
                </h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10 max-w-2xl">
                  Comprehensive background investigations delivered in 5-14 business days. We uncover what others miss using proprietary databases and licensed skip-tracing tools.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-500 font-light">
                  <div>Personal Background Checks</div>
                  <div>Asset Searches</div>
                  <div>Missing Persons</div>
                  <div>Skip Tracing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Results Section */}
      <section className="py-32 md:py-40 bg-[#FAFAF9]" id="projects-section">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-24">Results</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Case 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-neutral-200 mb-8 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-neutral-900/40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-light tracking-wider uppercase">View Case</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                Hidden Asset Recovery
              </h3>
              <div className="flex gap-4 text-xs text-neutral-500 font-light mb-4 tracking-wide">
                <span>Denver</span>
                <span>Divorce</span>
                <span>2024</span>
              </div>
              <p className="text-neutral-600 font-light leading-relaxed">
                Located $2.3M in concealed assets across multiple offshore accounts within 10 days, securing favorable settlement.
              </p>
            </div>

            {/* Case 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-neutral-200 mb-8 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-neutral-900/40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-light tracking-wider uppercase">View Case</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                Corporate Fraud Case
              </h3>
              <div className="flex gap-4 text-xs text-neutral-500 font-light mb-4 tracking-wide">
                <span>Boulder</span>
                <span>Corporate</span>
                <span>2024</span>
              </div>
              <p className="text-neutral-600 font-light leading-relaxed">
                Documented extensive employee fraud scheme, resulting in full recovery and successful criminal prosecution.
              </p>
            </div>

            {/* Case 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-neutral-200 mb-8 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-neutral-900/40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-light tracking-wider uppercase">View Case</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                Custody Investigation
              </h3>
              <div className="flex gap-4 text-xs text-neutral-500 font-light mb-4 tracking-wide">
                <span>Colorado Springs</span>
                <span>Family Law</span>
                <span>2024</span>
              </div>
              <p className="text-neutral-600 font-light leading-relaxed">
                Comprehensive evidence gathering ensuring child safety and favorable custody arrangement for client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-24 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-light text-neutral-900 mb-6">95%+</div>
              <div className="text-neutral-500 font-light text-sm tracking-wide">case resolution rate</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-light text-neutral-900 mb-6">17+</div>
              <div className="text-neutral-500 font-light text-sm tracking-wide">years experience</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-light text-neutral-900 mb-6">24/7</div>
              <div className="text-neutral-500 font-light text-sm tracking-wide">availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 md:py-40 bg-[#FAFAF9]" id="reviews-section">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-24 text-center">
            Reviews
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-sm border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <p className="text-neutral-700 font-light leading-relaxed mb-8 text-lg">
                "I finally got some sleep last night. First time in weeks. Thank you so much."
              </p>
              <div className="text-xs text-neutral-500 font-light tracking-wide">— Divorce Investigation Client</div>
            </div>

            <div className="bg-white p-10 rounded-sm border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <p className="text-neutral-700 font-light leading-relaxed mb-8 text-lg">
                "Everyone kept saying I was being paranoid. Well guess what? I WASN'T."
              </p>
              <div className="text-xs text-neutral-500 font-light tracking-wide">— Custody Case Client</div>
            </div>

            <div className="bg-white p-10 rounded-sm border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <p className="text-neutral-700 font-light leading-relaxed mb-8 text-lg">
                "That footage was perfect. He saw it and settled the same week. Done deal."
              </p>
              <div className="text-xs text-neutral-500 font-light tracking-wide">— Personal Injury Attorney</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 text-center tracking-tight">
            Partner with us
          </h2>
          <p className="text-lg text-neutral-600 font-light text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            If you're looking for professional investigation services, share a few details so we can discuss how to bring clarity to your situation.
          </p>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-6 py-4 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 rounded-sm focus:outline-none focus:border-neutral-400 transition-colors font-light"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-4 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 rounded-sm focus:outline-none focus:border-neutral-400 transition-colors font-light"
              />
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="A little bit about your situation"
                className="w-full px-6 py-4 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 rounded-sm focus:outline-none focus:border-neutral-400 transition-colors font-light resize-none"
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-10 py-4 bg-neutral-900 text-white text-sm font-normal tracking-wide hover:bg-neutral-700 transition-all duration-300 rounded-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
