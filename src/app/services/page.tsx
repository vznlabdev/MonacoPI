import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - MonacoPI",
  description: "Comprehensive investigation services for all your needs",
};

const services = [
  {
    title: "Background Investigations",
    description: "Thorough background checks for employment, tenant screening, and personal verification.",
    icon: "🔍",
  },
  {
    title: "Surveillance Services",
    description: "Professional surveillance operations for individuals, insurance claims, and corporate matters.",
    icon: "📹",
  },
  {
    title: "Corporate Investigations",
    description: "Fraud detection, employee misconduct, and internal investigations for businesses.",
    icon: "🏢",
  },
  {
    title: "Legal Support",
    description: "Evidence gathering, witness interviews, and case preparation for attorneys.",
    icon: "⚖️",
  },
  {
    title: "Due Diligence",
    description: "Pre-employment screening, vendor verification, and business partner investigations.",
    icon: "📊",
  },
  {
    title: "Asset Searches",
    description: "Locate hidden assets, property ownership, and financial investigations.",
    icon: "💰",
  },
  {
    title: "Missing Persons",
    description: "Skip tracing and location services for missing individuals.",
    icon: "🔎",
  },
  {
    title: "Insurance Claims",
    description: "Investigation of suspicious insurance claims and fraud detection.",
    icon: "🛡️",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive investigation solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Initial confidential meeting to discuss your needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Develop a customized investigation strategy
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Investigation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Execute the plan with professional expertise
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Reporting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deliver comprehensive findings and documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Specialized Service?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            If you don&apos;t see what you&apos;re looking for, contact us. We can help with
            a wide range of investigation needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

