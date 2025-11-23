'use client'

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // In production, this would go to a service like Sentry, LogRocket, etc.
    if (typeof window !== 'undefined') {
      // Client-side error logging
      fetch('/api/log-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          timestamp: new Date().toISOString(),
          url: window.location.href,
        }),
      }).catch(() => {
        // Fallback if logging endpoint fails
        console.error('Application error:', error);
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-navy mb-6 tracking-tight">
          Something went wrong
        </h1>
        <p className="text-lg text-navy-lighter font-light leading-relaxed mb-8">
          We encountered an unexpected error. This has been logged and our team will investigate.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-white border border-navy text-navy text-sm font-normal tracking-wide hover:bg-cream-dark hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            Return Home
          </Link>
        </div>

        {/* Contact support */}
        <div className="mt-12 pt-8 border-t border-cream-dark">
          <p className="text-sm text-navy-lighter/70 font-light mb-4">
            If this problem persists, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a 
              href="tel:+17205944441"
              className="text-navy hover:text-navy-light transition-colors font-light"
            >
              +1 720-594-4441
            </a>
            <span className="hidden sm:inline text-navy-lighter/50">•</span>
            <a 
              href="mailto:monacocrystalpi@gmail.com"
              className="text-navy hover:text-navy-light transition-colors font-light"
            >
              monacocrystalpi@gmail.com
            </a>
          </div>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-sm text-left">
            <p className="text-xs font-mono text-red-800 break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

