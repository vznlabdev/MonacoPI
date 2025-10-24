import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Individuals - MonacoPI",
  description: "Personal investigation services for individuals and families",
};

const services = [
  {
    title: "Background Checks",
    description: "Pre-employment screening, tenant verification, and personal background investigations.",
    icon: "🔍",
  },
  {
    title: "Infidelity Investigations",
    description: "Discreet surveillance and evidence gathering for suspected infidelity cases.",
    icon: "💔",
  },
  {
    title: "Missing Persons",
    description: "Locate missing family members, friends, or long-lost relatives.",
    icon: "🔎",
  },
  {
    title: "Child Custody Support",
    description: "Documentation and evidence gathering for custody and visitation matters.",
    icon: "👨‍👩‍👧",
  },
  {
    title: "Personal Protection",
    description: "Risk assessment and personal security consultations.",
    icon: "🛡️",
  },
  {
    title: "Online Dating Verification",
    description: "Verify the identity and background of online acquaintances.",
    icon: "💻",
  },
];

export default function ForIndividualsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Individuals</h1>
          <p className="text-xl text-blue-100">
            Personal investigation services you can trust
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Life presents situations where you need answers, clarity, or protection. At MonacoPI,
            we provide discreet, professional investigation services tailored to your personal needs.
            Whether you&apos;re concerned about a relationship, need to locate someone, or require a
            background check, we&apos;re here to help.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our investigators handle each case with the utmost confidentiality and professionalism,
            understanding the sensitive nature of personal investigations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Services for Individuals
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

      {/* Common Scenarios */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Common Situations We Help With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Relationship Concerns</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Suspicions of infidelity or dishonesty in relationships can be emotionally
                challenging. We provide discreet surveillance and factual evidence to help
                you make informed decisions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Family Matters</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                From custody disputes to locating estranged family members, we handle
                sensitive family investigations with care and professionalism.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Pre-Employment Screening</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Hiring household help or childcare? Verify backgrounds, credentials, and
                references to ensure your family&apos;s safety.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Online Safety</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Verify the identity of online contacts, investigate potential scams, or
                check the background of someone you met online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Guarantee */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🔒</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Privacy is Our Priority
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            All investigations are conducted with complete discretion. Your personal information
            and case details are strictly confidential and protected at all times.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reach out for a free, confidential consultation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Details</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tell us about your situation and what you need
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">We Investigate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team conducts a thorough, discreet investigation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Answers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive a detailed report with our findings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get the Answers You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Take the first step toward peace of mind with a confidential consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

