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
    <div className="bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            Contact
          </h1>
          <p className="text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Get in touch for a free, confidential consultation
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 md:py-40">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 text-center tracking-tight">
            Partner with us
          </h2>
          <p className="text-lg text-neutral-600 font-light text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            If you're looking for professional investigation services, share a few details so we can discuss how to bring clarity to your situation.
          </p>
          
          {submitStatus === "success" && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 text-green-800 rounded-sm text-center font-light">
              Thanks for reaching out! We'll get back to you as soon as possible.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full px-6 py-4 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 rounded-sm focus:outline-none focus:border-neutral-400 transition-colors font-light"
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
                className="w-full px-6 py-4 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 rounded-sm focus:outline-none focus:border-neutral-400 transition-colors font-light"
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
                className="w-full px-6 py-4 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 rounded-sm focus:outline-none focus:border-neutral-400 transition-colors font-light resize-none"
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 bg-neutral-900 text-white text-sm font-normal tracking-wide hover:bg-neutral-700 transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-24">Contact Information</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-light text-neutral-900 mb-4 tracking-tight">
                Email
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-2">
                info@monacopi.com
              </p>
              <p className="text-sm text-neutral-500 font-light">
                Response within 24 hours
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-neutral-900 mb-4 tracking-tight">
                Phone
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-2">
                (555) 123-4567
              </p>
              <p className="text-sm text-neutral-500 font-light">
                Available 24/7 for emergencies
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-neutral-900 mb-4 tracking-tight">
                Office
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-2">
                By appointment only
              </p>
              <p className="text-sm text-neutral-500 font-light">
                Colorado • Florida • Texas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Assurance */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Your privacy is protected
          </h2>
          <p className="text-lg text-neutral-400 font-light leading-relaxed">
            All communications with Monaco PI are strictly confidential. We never share your information with third parties and maintain the highest standards of privacy and discretion.
          </p>
        </div>
      </section>
    </div>
  );
}
