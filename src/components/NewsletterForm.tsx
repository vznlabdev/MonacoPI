"use client";

import Script from "next/script";
import { useState } from "react";

export default function NewsletterForm() {
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  return (
    <section className="py-32 bg-navy">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-cream mb-8 tracking-tight">
          Stay informed
        </h2>
        <p className="text-lg text-cream/70 font-light mb-12 leading-relaxed">
          Get expert investigation insights delivered to your inbox
        </p>
        
        <div className="max-w-2xl mx-auto relative" style={{ height: '492px' }}>
          {/* Loading skeleton */}
          {!isFormLoaded && (
            <div className="absolute inset-0 bg-navy-light border border-navy-lighter rounded-sm animate-pulse">
              <div className="p-6 space-y-4">
                <div className="h-4 bg-navy rounded w-3/4 mx-auto"></div>
                <div className="h-10 bg-navy rounded"></div>
                <div className="h-10 bg-navy rounded w-32 mx-auto mt-6"></div>
                <div className="flex justify-center pt-6">
                  <div className="text-sm text-cream/70 font-light">Loading newsletter form...</div>
                </div>
              </div>
            </div>
          )}
          <iframe
            src="https://link.1prompt.com/widget/form/s1LZukeoilYik57vWWdq"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-s1LZukeoilYik57vWWdq"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="MonacoPI.com Newsletter Form"
            data-height="492"
            data-layout-iframe-id="inline-s1LZukeoilYik57vWWdq"
            data-form-id="s1LZukeoilYik57vWWdq"
            title="MonacoPI.com Newsletter Form"
            onLoad={() => setIsFormLoaded(true)}
          />
        </div>
        
        <Script
          src="https://link.1prompt.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}

