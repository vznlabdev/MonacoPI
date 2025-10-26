import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-normal tracking-tight text-white">
                Monaco
              </span>
            </Link>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Elite investigation services for discerning clients who demand excellence, discretion, and results.
            </p>
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <p className="text-neutral-500 text-xs font-light">
                Licensed • Bonded • Insured
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium mb-8 text-neutral-500 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium mb-8 text-neutral-500 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/for-attorneys" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  For Attorneys
                </Link>
              </li>
              <li>
                <Link href="/for-individuals" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/for-corporations" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  For Corporations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-medium mb-8 text-neutral-500 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-neutral-400 text-sm font-light">
              <li>info@monacopi.com</li>
              <li>(555) 123-4567</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs font-light">
            © {currentYear} Monaco PI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-neutral-600 hover:text-neutral-400 text-xs font-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-600 hover:text-neutral-400 text-xs font-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

