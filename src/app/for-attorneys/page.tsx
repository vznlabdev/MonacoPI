import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Attorneys - MonacoPI",
  description: "Professional investigation services supporting legal professionals",
};

const services = [
  {
    title: "Witness Location & Interviews",
    description: "Locate and interview witnesses to gather crucial testimony for your cases.",
    icon: "👥",
  },
  {
    title: "Evidence Collection",
    description: "Professional evidence gathering that stands up in court proceedings.",
    icon: "📋",
  },
  {
    title: "Background Investigations",
    description: "Comprehensive background checks on parties, witnesses, and jurors.",
    icon: "🔍",
  },
  {
    title: "Surveillance Operations",
    description: "Expert surveillance for personal injury, workers comp, and fraud cases.",
    icon: "📹",
  },
  {
    title: "Asset Searches",
    description: "Locate hidden assets for divorce, judgment enforcement, and financial disputes.",
    icon: "💰",
  },
  {
    title: "Expert Testimony",
    description: "Professional testimony regarding investigation methods and findings.",
    icon: "⚖️",
  },
];

export default function ForAttorneysPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Attorneys</h1>
          <p className="text-xl text-blue-100">
            Professional investigation support for your legal practice
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            At MonacoPI, we understand the critical role that thorough investigation plays
            in building strong legal cases. Our team of licensed investigators works closely
            with attorneys to provide reliable, court-admissible evidence and comprehensive
            investigative support.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Whether you&apos;re preparing for trial, negotiating settlements, or need immediate
            investigative assistance, we deliver professional results that strengthen your
            legal position.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Services for Legal Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Practice Areas We Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Personal Injury</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Accident reconstruction and injury verification
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Family Law</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Custody investigations and asset discovery
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Criminal Defense</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Witness location and evidence verification
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Civil Litigation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Document retrieval and fact verification
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Workers&apos; Compensation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Surveillance and fraud investigation
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Insurance Defense</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Claims investigation and verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Attorneys Choose MonacoPI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3">Court-Ready Reports</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed, professional reports that meet legal standards and are
                admissible in court proceedings.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Attorney-Client Privilege</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We understand and respect attorney-client privilege and work
                within your legal framework.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Responsive Service</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quick turnaround times and 24/7 availability for urgent
                investigative needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Strengthen Your Case Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Contact us to discuss how our investigation services can support your legal practice
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

