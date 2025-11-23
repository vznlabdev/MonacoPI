import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* 404 Message */}
        <div className="mb-12">
          <h1 className="text-8xl md:text-9xl font-light text-navy mb-6 tracking-tight">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-4 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-lg text-navy-lighter font-light leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h3 className="text-sm font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-6">
            Try These Pages
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/"
              className="px-6 py-4 bg-white border border-cream-dark text-navy text-sm font-normal hover:bg-cream-dark hover:shadow-md transition-all duration-300 rounded-sm"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="px-6 py-4 bg-white border border-cream-dark text-navy text-sm font-normal hover:bg-cream-dark hover:shadow-md transition-all duration-300 rounded-sm"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="px-6 py-4 bg-white border border-cream-dark text-navy text-sm font-normal hover:bg-cream-dark hover:shadow-md transition-all duration-300 rounded-sm"
            >
              About
            </Link>
            <Link
              href="/for-attorneys"
              className="px-6 py-4 bg-white border border-cream-dark text-navy text-sm font-normal hover:bg-cream-dark hover:shadow-md transition-all duration-300 rounded-sm"
            >
              For Attorneys
            </Link>
            <Link
              href="/for-individuals"
              className="px-6 py-4 bg-white border border-cream-dark text-navy text-sm font-normal hover:bg-cream-dark hover:shadow-md transition-all duration-300 rounded-sm"
            >
              For Individuals
            </Link>
            <Link
              href="/contact"
              className="px-6 py-4 bg-white border border-cream-dark text-navy text-sm font-normal hover:bg-cream-dark hover:shadow-md transition-all duration-300 rounded-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="pt-8 border-t border-cream-dark">
          <p className="text-sm text-navy-lighter font-light mb-6">
            Need immediate assistance?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17205944441"
              className="inline-block px-8 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white border border-navy text-navy text-sm font-normal tracking-wide hover:bg-cream-dark hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-navy-lighter font-light">
            <a 
              href="tel:+17205944441"
              className="hover:text-navy transition-colors"
            >
              +1 720-594-4441
            </a>
            <span className="hidden sm:inline text-navy-lighter/50">•</span>
            <a 
              href="mailto:monacocrystalpi@gmail.com"
              className="hover:text-navy transition-colors"
            >
              monacocrystalpi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

