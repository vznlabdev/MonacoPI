import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-navy-light mt-auto">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 text-cream hover:opacity-80 transition-opacity">
              <svg 
                className="h-8 w-auto" 
                viewBox="0 0 310 102" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1,0,0,1,-787.019,-645.628)">
                  <g transform="matrix(1.01891,0,0,1.03226,-18.7851,154.666)">
                    <path d="M875.524,529.386L790.847,529.386L790.847,519.504L875.524,519.504L875.524,491.912C875.524,482.92 882.92,475.62 892.03,475.62L993.448,475.62C1002.56,475.62 1009.95,482.92 1009.95,491.912L1009.95,519.504L1094.63,519.504L1094.63,529.386L1009.95,529.386L1009.95,557.845C1009.95,566.837 1002.56,574.138 993.448,574.138L892.03,574.138C882.92,574.138 875.524,566.837 875.524,557.845L875.524,529.386ZM1000.77,491.912C1000.77,487.923 997.489,484.685 993.448,484.685L892.03,484.685C887.989,484.685 884.708,487.923 884.708,491.912L884.708,557.845C884.708,561.834 887.989,565.072 892.03,565.072L993.448,565.072C997.489,565.072 1000.77,561.834 1000.77,557.845L1000.77,491.912ZM914.78,536.116L914.78,552.78L906.87,552.78L906.87,497.791L925.249,497.791C930.081,497.791 934.23,498.555 937.694,500.084C941.159,501.612 943.822,503.812 945.685,506.683C947.548,509.552 948.479,512.987 948.479,516.987C948.479,520.934 947.548,524.345 945.685,527.219C943.822,530.093 941.159,532.294 937.694,533.824C934.23,535.352 930.081,536.116 925.249,536.116L914.78,536.116ZM914.78,529.316L925.005,529.316C930.098,529.316 933.954,528.239 936.574,526.085C939.194,523.929 940.503,520.897 940.503,516.987C940.503,513.024 939.194,509.967 936.574,507.817C933.954,505.666 930.098,504.591 925.005,504.591L914.78,504.591L914.78,529.316ZM970.697,552.78L970.697,497.791L978.607,497.791L978.607,552.78L970.697,552.78Z" fill="currentColor"/>
                  </g>
                </g>
              </svg>
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
              <li>info@monacopi.com</li>
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
            <Link href="#" className="text-cream/50 hover:text-cream/70 text-xs font-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-cream/50 hover:text-cream/70 text-xs font-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

