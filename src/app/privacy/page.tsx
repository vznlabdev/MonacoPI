import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Monaco PI",
  description: "Monaco PI's privacy policy. Learn how we collect, use, and protect your personal information with the highest standards of confidentiality and data security.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Your privacy and confidentiality are our highest priorities
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
                At Monaco PI, we understand that privacy and confidentiality are paramount in our industry. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-sm text-navy-lighter font-light leading-relaxed">
                We are committed to protecting your personal information and conducting our business in accordance with all applicable privacy laws and regulations, including relevant state and federal privacy statutes.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                1. Information We Collect
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Personal Information You Provide
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-4">
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Contact us through our website forms or email</li>
                <li>• Request a consultation or quote</li>
                <li>• Subscribe to our newsletter</li>
                <li>• Engage our investigation services</li>
                <li>• Communicate with us by phone, email, or in person</li>
              </ul>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                This may include: name, email address, phone number, mailing address, and any information you choose to provide in your inquiry or case details.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Automatically Collected Information
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• IP address and browser type</li>
                <li>• Operating system and device information</li>
                <li>• Pages visited and time spent on pages</li>
                <li>• Referring website addresses</li>
                <li>• Geographic location (general)</li>
              </ul>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Cookies and Tracking Technologies
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                2. How We Use Your Information
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• To respond to your inquiries and provide requested services</li>
                <li>• To communicate with you about your case or consultation</li>
                <li>• To process and fulfill service agreements</li>
                <li>• To send administrative information and updates</li>
                <li>• To improve our website and service offerings</li>
                <li>• To send marketing communications (with your consent)</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and prevent fraud</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We do NOT sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:
              </p>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                With Your Consent
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We will share your information when you explicitly authorize us to do so, such as when reporting investigation findings to you or your attorney.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Service Providers
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We may share information with trusted third-party service providers who assist in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Legal Requirements
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We may disclose your information when required by law, court order, subpoena, or other legal process, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Business Transfers
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the successor entity, subject to the same confidentiality protections.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                4. Data Security
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• Encrypted data transmission (SSL/TLS)</li>
                <li>• Secure servers and databases</li>
                <li>• Access controls and authentication</li>
                <li>• Regular security audits and updates</li>
                <li>• Employee confidentiality agreements</li>
              </ul>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Client Confidentiality */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                5. Client Confidentiality
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                As a licensed private investigation firm, we maintain strict confidentiality standards that go beyond standard privacy practices:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• All case information is protected under attorney-client privilege when applicable</li>
                <li>• We never disclose that someone is or was a client without permission</li>
                <li>• Investigation findings are shared only with authorized parties</li>
                <li>• All employees and contractors sign non-disclosure agreements</li>
                <li>• Case files are stored securely and access is strictly limited</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                6. Data Retention
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Case files and client information are typically retained for 7 years in accordance with professional standards and legal requirements.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                7. Your Privacy Rights
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Depending on your jurisdiction, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-sm text-navy-lighter font-light leading-relaxed mb-6 ml-6">
                <li>• <strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li>• <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li>• <strong>Data Portability:</strong> Request a copy of your information in a portable format</li>
                <li>• <strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                8. Third-Party Websites
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
              </p>
            </div>

            {/* Updates */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last Updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                11. Contact Us
              </h2>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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
                  Available 24/7 for existing clients
                </p>
              </div>
            </div>

            {/* State-Specific Rights */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-navy mb-6 tracking-tight">
                12. State-Specific Privacy Rights
              </h2>
              
              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                California Residents (CCPA)
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your information (note: we do not sell personal information).
              </p>

              <h3 className="text-xl font-light text-navy mb-4 mt-6">
                Colorado, Virginia, and Other State Residents
              </h3>
              <p className="text-sm text-navy-lighter font-light leading-relaxed mb-6">
                Residents of states with comprehensive privacy laws have similar rights regarding access, deletion, correction, and data portability. Please contact us to exercise these rights.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-16 border-t border-cream-dark text-center">
            <p className="text-sm text-navy-lighter font-light mb-8">
              Have questions about our privacy practices?
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light transition-all duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

