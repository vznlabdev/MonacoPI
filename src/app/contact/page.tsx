"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

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
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          {submitStatus === "success" && (
            <div className="mb-12 p-6 bg-green-50 border border-green-200 text-green-800 rounded-sm text-center font-light">
              Thanks for reaching out! We&apos;ll get back to you as soon as possible.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 tracking-tight">
                Partner with us
              </h2>
              <p className="text-lg text-navy-lighter font-light leading-relaxed">
                If you&apos;re looking for professional investigation services, share a few details so we can discuss how to bring clarity to your situation.
              </p>
            </div>
            
            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-6 py-4 bg-white border border-cream-dark text-navy placeholder-navy-lighter/50 rounded-sm focus:outline-none focus:border-navy-lighter transition-colors font-light"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full px-6 py-4 bg-white border border-cream-dark text-navy placeholder-navy-lighter/50 rounded-sm focus:outline-none focus:border-navy-lighter transition-colors font-light"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="A little bit about your situation"
                    required
                    className="w-full px-6 py-4 bg-white border border-cream-dark text-navy placeholder-navy-lighter/50 rounded-sm focus:outline-none focus:border-navy-lighter transition-colors font-light resize-none"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-10 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
              <p className="text-navy-lighter font-light leading-relaxed mb-2">
                info@monacopi.com
              </p>
              <p className="text-sm text-navy-lighter/70 font-light">
                Response within 24 hours
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-navy mb-4 tracking-tight">
                Phone
              </h3>
              <p className="text-navy-lighter font-light leading-relaxed mb-2">
                (555) 123-4567
              </p>
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
