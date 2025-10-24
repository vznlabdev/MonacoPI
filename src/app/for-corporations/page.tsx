import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Corporations - MonacoPI",
  description: "Corporate investigation services for businesses and organizations",
};

const services = [
  {
    title: "Employee Background Checks",
    description: "Comprehensive pre-employment screening and credential verification.",
    icon: "👔",
  },
  {
    title: "Fraud Investigations",
    description: "Internal fraud detection, embezzlement investigations, and financial audits.",
    icon: "🔍",
  },
  {
    title: "Due Diligence",
    description: "Business partner verification, vendor screening, and merger & acquisition support.",
    icon: "📊",
  },
  {
    title: "Workplace Investigations",
    description: "Harassment claims, policy violations, and employee misconduct investigations.",
    icon: "🏢",
  },
  {
    title: "Intellectual Property Protection",
    description: "Trade secret theft, patent infringement, and competitor intelligence.",
    icon: "💡",
  },
  {
    title: "Risk Assessment",
    description: "Security audits, vulnerability assessments, and threat analysis.",
    icon: "🛡️",
  },
];

export default function ForCorporationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Corporations</h1>
          <p className="text-xl text-blue-100">
            Protecting your business with comprehensive corporate investigations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            In today&apos;s complex business environment, protecting your company&apos;s assets,
            reputation, and intellectual property is more critical than ever. MonacoPI provides
            specialized corporate investigation services designed to safeguard your organization
            from internal and external threats.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our experienced team works discreetly with corporate security departments, human
            resources, and legal teams to deliver actionable intelligence and evidence-based
            solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Corporate Investigation Services
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

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Financial Services",
              "Healthcare",
              "Technology",
              "Manufacturing",
              "Retail",
              "Insurance",
              "Real Estate",
              "Hospitality",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow text-center"
              >
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Benefits for Your Organization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Protect Assets</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Safeguard your company&apos;s financial assets, intellectual property,
                and sensitive information from internal and external threats.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">📉</div>
              <h3 className="text-xl font-semibold mb-3">Reduce Risk</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Identify vulnerabilities, prevent fraud, and mitigate potential
                legal and financial risks before they impact your business.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">Ensure Compliance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Maintain regulatory compliance and industry standards through
                thorough investigations and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Common Corporate Investigation Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">Internal Theft & Fraud</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Investigate employee theft, embezzlement, expense fraud, and financial
                irregularities within your organization.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">Employee Misconduct</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handle harassment allegations, policy violations, and workplace
                disputes with professional, impartial investigations.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">Competitive Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gather lawful market intelligence, monitor competitors, and protect
                against corporate espionage.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">Vendor & Partner Verification</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Conduct due diligence on potential business partners, vendors, and
                contractors before entering agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Corporations Trust MonacoPI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Confidentiality</h3>
              <p className="text-blue-100 text-sm">
                Complete discretion in all investigations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Rapid Response</h3>
              <p className="text-blue-100 text-sm">
                Quick deployment for urgent matters
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-semibold mb-2">Detailed Reports</h3>
              <p className="text-blue-100 text-sm">
                Comprehensive documentation and findings
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Proven Expertise</h3>
              <p className="text-blue-100 text-sm">
                Years of corporate investigation experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Business Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Contact us for a confidential consultation about your corporate investigation needs
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

