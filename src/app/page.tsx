import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Investigation Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Trusted experts serving attorneys, individuals, and corporations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/for-attorneys"
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-blue-600 text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                For Attorneys
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Supporting legal professionals with comprehensive investigation services
                for case preparation and evidence gathering.
              </p>
            </Link>

            <Link
              href="/for-individuals"
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-blue-600 text-4xl mb-4">👤</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                For Individuals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Providing personal investigation services including background checks,
                surveillance, and missing persons cases.
              </p>
            </Link>

            <Link
              href="/for-corporations"
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-blue-600 text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                For Corporations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Delivering corporate investigation solutions for fraud detection,
                due diligence, and employee verification.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose MonacoPI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Experienced</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Years of expertise in professional investigations
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Confidential</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your privacy and discretion are our top priorities
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Efficient processes delivering timely outcomes
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Licensed</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fully licensed and insured professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a confidential consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

