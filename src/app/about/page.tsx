import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - MonacoPI",
  description: "Learn about MonacoPI's experienced team and commitment to excellence",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MonacoPI</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in professional investigation services
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
            At MonacoPI, we are dedicated to providing exceptional investigation services
            with integrity, professionalism, and discretion. Our mission is to deliver
            accurate, timely, and actionable intelligence that empowers our clients to
            make informed decisions.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We uphold the highest ethical standards in all our investigations
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Confidentiality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your privacy is paramount and strictly protected at all times
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in every case we undertake
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dependable service and consistent results you can trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-xl font-semibold mb-2">Years of Experience</p>
              <p className="text-gray-600 dark:text-gray-400">
                Proven track record in professional investigations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-xl font-semibold mb-2">Cases Completed</p>
              <p className="text-gray-600 dark:text-gray-400">
                Successfully resolved investigations across various sectors
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-xl font-semibold mb-2">Licensed & Insured</p>
              <p className="text-gray-600 dark:text-gray-400">
                Fully certified professionals you can trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Our team consists of highly trained investigators with diverse backgrounds
            in law enforcement, corporate security, and legal support. Each member brings
            specialized expertise and a commitment to delivering exceptional results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-blue-600">Lead Investigator</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                15+ years in law enforcement and private investigation
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  JS
                </div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-blue-600">Senior Investigator</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Specialist in corporate investigations and fraud detection
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  MJ
                </div>
                <h3 className="text-xl font-semibold">Mike Johnson</h3>
                <p className="text-blue-600">Field Investigator</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Expert in surveillance and evidence gathering operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work With Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Experience the difference that professional, ethical investigation services can make
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

