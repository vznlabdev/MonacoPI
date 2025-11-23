'use client'

/**
 * Global Error Boundary
 * Catches errors in the root layout
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-navy mb-6 tracking-tight">
            Something went wrong
          </h1>
          <p className="text-lg text-navy-lighter font-light leading-relaxed mb-8">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="px-8 py-4 bg-navy text-cream text-sm font-normal tracking-wide hover:bg-navy-light transition-all duration-300 rounded-sm"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-white border border-navy text-navy text-sm font-normal tracking-wide hover:bg-cream-dark transition-all duration-300 rounded-sm"
            >
              Return Home
            </button>
          </div>

          {/* Contact support */}
          <div className="mt-12 pt-8 border-t border-cream-dark">
            <p className="text-sm text-navy-lighter/70 font-light mb-4">
              Need immediate assistance?
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
        </div>
      </body>
    </html>
  );
}

