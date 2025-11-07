"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ContactPage() {
  // Set page metadata dynamically for client component
  useEffect(() => {
    document.title = "Contact Monaco PI | Free Confidential Consultation | Monaco PI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Monaco PI for a free confidential consultation. Available 24/7 for investigation services in Colorado, Florida, and Texas. Call +1 720-594-4441.');
    }
  }, []);

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6 tracking-tight">
            Contact
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Get in touch for a free, confidential consultation
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text */}
            <div className="mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Partner with us
              </h2>
              <p className="text-lg text-navy-lighter font-light leading-relaxed">
                If you&apos;re looking for professional investigation services, share a few details so we can discuss how to bring clarity to your situation.
              </p>
            </div>
            
            {/* Right Column - Form */}
            <div className="w-full min-h-[588px]">
              <iframe
                src="https://link.1prompt.com/widget/form/SxXMXJRBjtxpWIRv7sdO"
                style={{ width: '100%', height: '588px', border: 'none', borderRadius: '0px' }}
                id="inline-SxXMXJRBjtxpWIRv7sdO"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="MonacoPI.com Contact form"
                data-height="588"
                data-layout-iframe-id="inline-SxXMXJRBjtxpWIRv7sdO"
                data-form-id="SxXMXJRBjtxpWIRv7sdO"
                title="MonacoPI.com Contact form"
              />
            </div>
          </div>
        </div>
        
        <Script
          src="https://link.1prompt.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </section>

      {/* Contact Information */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-navy-lighter/70 mb-24">Contact Information</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                Email
              </h3>
              <a 
                href="mailto:monacocrystalpi@gmail.com"
                className="text-navy-lighter font-light leading-relaxed mb-2 hover:text-navy transition-colors block"
              >
                monacocrystalpi@gmail.com
              </a>
              <p className="text-sm text-navy-lighter/70 font-light">
                Response within 24 hours
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                Phone
              </h3>
              <a 
                href="tel:+17205944441"
                className="text-navy-lighter font-light leading-relaxed mb-2 hover:text-navy transition-colors block"
              >
                +1 720-594-4441
              </a>
              <p className="text-sm text-navy-lighter/70 font-light">
                Available 24/7 for emergencies
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                Office
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed mb-2">
                By appointment only
              </p>
              <p className="text-sm text-navy-lighter/70 font-light">
                Colorado • Florida • Texas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Assurance */}
      <section className="py-32 bg-navy">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-cream mb-6 tracking-tight">
            Your privacy is protected
          </h2>
          <p className="text-lg text-cream/70 font-light leading-relaxed">
            All communications with Monaco PI are strictly confidential. We never share your information with third parties and maintain the highest standards of privacy and discretion.
          </p>
        </div>
      </section>
    </div>
  );
}
