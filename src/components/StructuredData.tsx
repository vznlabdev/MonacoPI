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
        "name": "Colorado"
      },
      {
        "@type": "State",
        "name": "Florida"
      },
      {
        "@type": "State",
        "name": "Texas"
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

