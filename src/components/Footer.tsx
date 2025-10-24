import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">MonacoPI</h3>
            <p className="text-gray-400 text-sm">
              Professional investigation services tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/for-attorneys" className="text-gray-400 hover:text-blue-400 transition-colors">
                  For Attorneys
                </Link>
              </li>
              <li>
                <Link href="/for-individuals" className="text-gray-400 hover:text-blue-400 transition-colors">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/for-corporations" className="text-gray-400 hover:text-blue-400 transition-colors">
                  For Corporations
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@monacopi.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} MonacoPI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

