import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Monaco PI",
  description: "Terms of Service for Monaco PI. Review our service terms, client responsibilities, payment terms, and professional standards for investigation services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Professional standards and service agreements
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-navy-lighter/70 mb-12">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg text-navy-light font-light leading-relaxed mb-6">
                These Terms of Service (&quot;Terms&quot;) govern your use of Monaco PI&apos;s website and services. By accessing our website or engaging our investigation services, you agree to be bound by these Terms.
              </p>
              <p className="text-sm text-navy-lighter font-light leading-relaxed">
                Please read these Terms carefully before using our services. If you do not agree with these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Acceptance */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                By accessing or using Monaco PI&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These Terms constitute a legally binding agreement between you (&quot;Client&quot; or &quot;you&quot;) and Monaco PI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
              </p>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                2. Description of Services
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Monaco PI provides professional private investigation services, including but not limited to:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Field surveillance and documentation</li>
                <li>• Background investigations and checks</li>
                <li>• Corporate fraud investigations</li>
                <li>• Divorce and family law investigations</li>
                <li>• Asset searches and financial investigations</li>
                <li>• Missing person investigations</li>
                <li>• Scene investigation and documentation</li>
                <li>• Expert witness testimony</li>
                <li>• Process serving</li>
              </ul>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Specific services will be outlined in individual service agreements. We reserve the right to refuse service to anyone for any lawful reason.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                3. Eligibility and Client Responsibilities
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Age Requirement
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                You must be at least 18 years of age to use our services. By using our services, you represent and warrant that you meet this age requirement.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Lawful Purpose
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                You agree to use our services only for lawful purposes. You will not request investigations for:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Illegal activities or purposes</li>
                <li>• Harassment, stalking, or threatening behavior</li>
                <li>• Violating anyone&apos;s privacy rights</li>
                <li>• Obtaining information through illegal means</li>
                <li>• Any purpose that violates federal, state, or local laws</li>
              </ul>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Truthful Information
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                You agree to provide accurate, complete, and truthful information when engaging our services. Providing false information may result in termination of services and potential legal consequences.
              </p>
            </div>

            {/* Service Agreements */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                4. Service Agreements and Engagement
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Before beginning any investigation, we will provide a written service agreement that includes:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Scope of services to be provided</li>
                <li>• Estimated timeline and deliverables</li>
                <li>• Fee structure and payment terms</li>
                <li>• Terms of engagement and termination</li>
                <li>• Confidentiality provisions</li>
              </ul>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Services begin only after the signed agreement and required retainer payment are received. The service agreement, along with these Terms, constitutes the complete agreement between parties.
              </p>
            </div>

            {/* Fees and Payment */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                5. Fees, Payment, and Refunds
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Fee Structure
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Our fees vary depending on the type and complexity of services required. Fees may be structured as:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Hourly rates for time-based services</li>
                <li>• Flat fees for specific deliverables</li>
                <li>• Retainer-based arrangements</li>
              </ul>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Payment Terms
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Payment terms will be specified in your service agreement. Generally:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• A retainer is required before services begin</li>
                <li>• Additional fees are billed as services are rendered</li>
                <li>• Invoices are due within 15 days of receipt unless otherwise specified</li>
                <li>• Late payments may incur interest charges</li>
              </ul>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Expenses
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                In addition to service fees, clients are responsible for reasonable expenses incurred during the investigation, including travel, database searches, court fees, and other necessary costs. Significant expenses will be pre-approved when possible.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Refund Policy
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Refunds are considered on a case-by-case basis. Generally, fees for work already performed are non-refundable. If services are terminated before completion, unused retainer funds may be refunded after deducting fees for work performed and non-recoverable expenses incurred.
              </p>
            </div>

            {/* Limitations */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                6. Limitations and No Guarantees
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Best Efforts
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We will provide professional investigation services using industry-standard methods and our best efforts. However, we cannot and do not guarantee specific results or outcomes. Investigation results depend on many factors outside our control, including availability of information, cooperation of witnesses, and legal restrictions.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Legal Limitations
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                All investigations are conducted within the bounds of federal, state, and local laws. We will not engage in illegal activities, trespassing, wiretapping, or other unlawful conduct. Some information may be legally unavailable or restricted.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Admissibility of Evidence
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                While we follow proper protocols to ensure evidence admissibility, we cannot guarantee that any evidence will be admitted in court proceedings. Admissibility is determined by judges based on various legal factors.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                7. Confidentiality and Privilege
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We maintain strict confidentiality of all client information and case details:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• All client communications and case information are confidential</li>
                <li>• We do not disclose client identity without permission</li>
                <li>• Investigation findings are shared only with authorized parties</li>
                <li>• Attorney-client privilege applies when working with legal counsel</li>
                <li>• We may be required to disclose information pursuant to court order or subpoena</li>
              </ul>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Clients must also maintain confidentiality regarding our investigation methods and any proprietary techniques or processes.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                8. Intellectual Property and Work Product
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Website Content
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                All content on our website, including text, graphics, logos, images, and software, is owned by Monaco PI or its licensors and is protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without our written permission.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Investigation Reports
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Investigation reports and work product are provided to clients for their authorized use only. Clients may not reproduce, distribute, or publish reports without our written consent, except as necessary for their legitimate legal purposes.
              </p>
            </div>

            {/* Liability */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                9. Limitation of Liability
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Monaco PI&apos;s total liability for any claims arising from our services shall not exceed the fees paid for those specific services</li>
                <li>• We are not liable for indirect, incidental, consequential, or punitive damages</li>
                <li>• We are not liable for outcomes in legal proceedings or decisions made based on our reports</li>
                <li>• We are not responsible for delays or inability to perform due to circumstances beyond our control</li>
              </ul>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                This limitation applies regardless of the legal theory of liability, whether contract, tort, strict liability, or otherwise.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                10. Indemnification
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                You agree to indemnify, defend, and hold harmless Monaco PI, its owners, employees, and contractors from any claims, damages, losses, liabilities, and expenses (including attorney fees) arising from:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Your use of our services</li>
                <li>• Your violation of these Terms</li>
                <li>• Your violation of any applicable laws or regulations</li>
                <li>• Providing false or misleading information</li>
                <li>• Your use of investigation reports or information</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                11. Termination
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                By Client
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                You may terminate services at any time by providing written notice. You will be responsible for payment of all fees for work performed and non-recoverable expenses incurred up to the termination date.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                By Monaco PI
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We reserve the right to terminate services immediately if:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• You violate these Terms</li>
                <li>• Payment is not received as agreed</li>
                <li>• You provide false or misleading information</li>
                <li>• Continuing services would be illegal or unethical</li>
                <li>• There is a conflict of interest</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                12. Dispute Resolution and Governing Law
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Informal Resolution
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                In the event of any dispute, we encourage you to contact us first to seek informal resolution. Many disputes can be resolved through good-faith communication.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Arbitration
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                If informal resolution is unsuccessful, any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law. Each party shall bear its own costs and fees.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Governing Law
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                These Terms are governed by the laws of the State of Colorado, without regard to conflict of law principles. Any legal proceedings must be brought in the state or federal courts located in Colorado.
              </p>
            </div>

            {/* Professional Standards */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                13. Professional Standards and Licensing
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Monaco PI is licensed as a private investigator in Colorado, Florida, and Texas. We adhere to all applicable professional standards and codes of ethics, including:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• State private investigator licensing requirements</li>
                <li>• Professional association codes of conduct</li>
                <li>• Federal and state privacy laws</li>
                <li>• Fair Credit Reporting Act (FCRA) when applicable</li>
                <li>• Rules of evidence and legal procedures</li>
              </ul>
            </div>

            {/* Website Use */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                14. Website Use and Disclaimer
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Our website is provided &quot;as is&quot; without warranties of any kind. While we strive to provide accurate information:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Website content is for informational purposes only</li>
                <li>• Information should not be considered legal advice</li>
                <li>• We do not guarantee website availability or error-free operation</li>
                <li>• We may update or change website content without notice</li>
                <li>• Third-party links are provided for convenience; we are not responsible for their content</li>
              </ul>
            </div>

            {/* Changes */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                15. Changes to Terms
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Material changes will be communicated to active clients. Your continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Individual service agreements take precedence over these general Terms in case of any conflict.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                16. Severability and Waiver
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                17. Contact Information
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white p-8 rounded-sm border border-cream-dark">
                <p className="text-sm text-navy-lighter font-light mb-2">
                  <strong>Monaco PI</strong>
                </p>
                <p className="text-sm text-navy-lighter font-light mb-2">
                  Email: monacocrystalpi@gmail.com
                </p>
                <p className="text-sm text-navy-lighter font-light mb-2">
                  Phone: (555) 123-4567
                </p>
                <p className="text-sm text-navy-lighter font-light">
                  Licensed in Colorado, Florida, and Texas
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-16 bg-cream-dark p-8 rounded-sm">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                Acknowledgment
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed">
                By using Monaco PI&apos;s services or website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-16 border-t border-cream-dark text-center">
            <p className="text-sm text-navy-lighter font-light mb-8">
              Ready to get started with professional investigation services?
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light transition-all duration-300 rounded-sm"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

