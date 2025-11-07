import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-navy-light mt-auto">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 text-cream hover:opacity-80 transition-opacity">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-cream/70 text-sm font-light leading-relaxed">
              Elite investigation services for discerning clients who demand excellence, discretion, and results.
            </p>
            <div className="mt-8 pt-8 border-t border-navy-light">
              <p className="text-cream/60 text-xs font-light">
                Licensed • Bonded • Insured
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium mb-8 text-cream/60 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-cream/70 hover:text-cream transition-colors text-sm font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/70 hover:text-cream transition-colors text-sm font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/70 hover:text-cream transition-colors text-sm font-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-cream/70 hover:text-cream transition-colors text-sm font-light">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium mb-8 text-cream/60 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/for-attorneys" className="text-cream/70 hover:text-cream transition-colors text-sm font-light">
                  For Attorneys
                </Link>
              </li>
              <li>
                <Link href="/for-individuals" className="text-cream/70 hover:text-cream transition-colors text-sm font-light">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/for-corporations" className="text-cream/70 hover:text-cream transition-colors text-sm font-light">
                  For Corporations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-medium mb-8 text-cream/60 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-cream/70 text-sm font-light">
              <li>monacocrystalpi@gmail.com</li>
              <li>(555) 123-4567</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-xs font-light">
            © {currentYear} Monaco PI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-cream/50 hover:text-cream/70 text-xs font-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-cream/50 hover:text-cream/70 text-xs font-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

