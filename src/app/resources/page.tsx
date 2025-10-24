import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources - MonacoPI",
  description: "Helpful resources and information about private investigation services",
};

const faqs = [
  {
    question: "How much does a private investigator cost?",
    answer:
      "Investigation costs vary based on the complexity and duration of the case. We offer competitive rates and provide detailed estimates after an initial consultation. Most cases are billed hourly, with rates ranging from $75-$200 per hour depending on the service required.",
  },
  {
    question: "How long does an investigation take?",
    answer:
      "Investigation timelines depend on the nature and complexity of your case. Simple background checks may take 2-5 business days, while complex surveillance operations could take several weeks. We'll provide a timeline estimate during your consultation.",
  },
  {
    question: "Are private investigators legal?",
    answer:
      "Yes! Private investigators are legal and regulated professionals. All our investigators are fully licensed, insured, and operate within the bounds of federal and state laws. We comply with all privacy regulations and legal requirements.",
  },
  {
    question: "Will my investigation be confidential?",
    answer:
      "Absolutely. Client confidentiality is one of our highest priorities. All investigations are conducted discreetly, and your personal information and case details are protected by strict confidentiality agreements.",
  },
  {
    question: "Can investigation results be used in court?",
    answer:
      "Yes, our investigation reports and evidence are prepared to meet legal standards and can be used in court proceedings. Our investigators can also provide expert testimony when required.",
  },
  {
    question: "What information do I need to start an investigation?",
    answer:
      "The amount of information needed varies by case type. Generally, we need basic details about the subject (name, address, description) and the nature of your concern. During consultation, we'll determine exactly what information is necessary.",
  },
];

const resources = [
  {
    title: "When to Hire a Private Investigator",
    description: "Learn about common situations where professional investigation services can help you get answers and protect your interests.",
    icon: "📖",
  },
  {
    title: "What to Expect During an Investigation",
    description: "Understanding the investigation process, timelines, and what you can expect from working with a professional investigator.",
    icon: "🔍",
  },
  {
    title: "Legal Rights & Privacy",
    description: "Information about your legal rights, privacy considerations, and how investigations are conducted within the law.",
    icon: "⚖️",
  },
  {
    title: "Types of Evidence",
    description: "Learn about different types of evidence that can be gathered and how they may be used in legal proceedings or personal decisions.",
    icon: "📄",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-blue-100">
            Helpful information and frequently asked questions
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Investigation Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Regulations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Licensing & Regulations
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-semibold mb-4">Fully Licensed & Insured</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                MonacoPI operates in full compliance with all federal and state regulations
                governing private investigation services. Our investigators hold current licenses
                and maintain professional liability insurance.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We adhere to strict ethical standards and follow all applicable laws regarding
                surveillance, evidence collection, and privacy rights. Our commitment to legal
                and ethical practices ensures that all evidence we gather is admissible and
                professionally obtained.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  All investigations are conducted in accordance with applicable federal and
                  state laws. We respect individual privacy rights while providing professional
                  investigation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Tips */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Tips for Working with an Investigator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Be Prepared
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gather all relevant information, documents, and details about your case
                before your consultation to help us understand your needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Be Honest
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Provide accurate information and be truthful about your situation. This
                helps us conduct an effective investigation.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Set Clear Goals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Define what you want to achieve from the investigation. Clear objectives
                help us deliver results that meet your expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Stay Patient
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quality investigations take time. Trust the process and maintain
                communication with your investigator throughout the case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We&apos;re here to help. Contact us for a free, confidential consultation.
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

