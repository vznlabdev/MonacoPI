export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://monacopi.com/#organization",
    "name": "Monaco PI",
    "alternateName": "Monaco Private Investigation",
    "url": "https://monacopi.com",
    "logo": "https://monacopi.com/images/opengraph.jpg",
    "image": "https://monacopi.com/images/opengraph.jpg",
    "description": "Colorado's premier private investigation firm specializing in surveillance, background checks, corporate investigations, and legal support services.",
    "telephone": "+1-720-594-4441",
    "email": "monacocrystalpi@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Colorado",
        "containedInPlace": {
          "@type": "Country",
          "name": "United States"
        }
      },
      {
        "@type": "State",
        "name": "Florida",
        "containedInPlace": {
          "@type": "Country",
          "name": "United States"
        }
      },
      {
        "@type": "State",
        "name": "Texas",
        "containedInPlace": {
          "@type": "Country",
          "name": "United States"
        }
      },
      // Colorado Cities
      {
        "@type": "City",
        "name": "Denver",
        "containedInPlace": {
          "@type": "State",
          "name": "Colorado"
        }
      },
      {
        "@type": "City",
        "name": "Colorado Springs",
        "containedInPlace": {
          "@type": "State",
          "name": "Colorado"
        }
      },
      {
        "@type": "City",
        "name": "Boulder",
        "containedInPlace": {
          "@type": "State",
          "name": "Colorado"
        }
      },
      {
        "@type": "City",
        "name": "Fort Collins",
        "containedInPlace": {
          "@type": "State",
          "name": "Colorado"
        }
      },
      {
        "@type": "City",
        "name": "Aurora",
        "containedInPlace": {
          "@type": "State",
          "name": "Colorado"
        }
      },
      {
        "@type": "City",
        "name": "Lakewood",
        "containedInPlace": {
          "@type": "State",
          "name": "Colorado"
        }
      },
      // Florida Cities
      {
        "@type": "City",
        "name": "Miami",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Tampa",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Orlando",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Jacksonville",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Fort Lauderdale",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "West Palm Beach",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      // Texas Cities
      {
        "@type": "City",
        "name": "Austin",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Dallas",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Houston",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "San Antonio",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Fort Worth",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "El Paso",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      }
    ],
    "serviceType": [
      "Private Investigation",
      "Surveillance",
      "Background Checks",
      "Corporate Investigation",
      "Fraud Investigation",
      "Process Serving",
      "Expert Witness Testimony"
    ],
    "slogan": "Elite investigation services for discerning clients who demand excellence, discretion, and proven results",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://monacopi.com"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://monacopi.com/#website",
    "url": "https://monacopi.com",
    "name": "Monaco PI",
    "description": "Elite private investigation services in Colorado, Florida, and Texas",
    "publisher": {
      "@id": "https://monacopi.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://monacopi.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
      />
    </>
  );
}


