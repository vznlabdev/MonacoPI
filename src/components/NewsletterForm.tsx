"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-32 bg-navy">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-cream mb-8 tracking-tight">
          Stay informed
        </h2>
        <p className="text-lg text-cream/70 font-light mb-12 leading-relaxed">
          Get expert investigation insights delivered to your inbox
        </p>
        
        {status === "success" && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-sm max-w-md mx-auto font-light">
            Successfully subscribed! Check your email to confirm.
          </div>
        )}
        
        {status === "error" && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm max-w-md mx-auto font-light">
            Something went wrong. Please try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={status === "loading"}
            className="flex-1 px-6 py-4 bg-navy-light border border-navy-light text-cream placeholder-neutral-500 rounded-sm focus:outline-none focus:border-navy-lighter transition-colors font-light disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-4 bg-white text-navy text-sm font-normal hover:bg-cream-dark transition-all rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        <p className="text-xs text-navy-lighter mt-6 font-light">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

