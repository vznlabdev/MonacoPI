import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monacopi.com"),
  title: {
    default: "Monaco PI | Elite Private Investigation Services in Colorado",
    template: "%s | Monaco PI"
  },
  description: "Colorado's premier private investigation firm. 95%+ case resolution rate, 17+ years experience. Professional investigation services for attorneys, individuals, and corporations. Licensed, bonded, and insured.",
  keywords: [
    "private investigator Colorado",
    "private detective",
    "investigation services",
    "surveillance",
    "background checks",
    "infidelity investigation",
    "corporate investigation",
    "missing person",
    "legal investigation",
    "Denver private investigator",
    "licensed private investigator",
    "process serving",
    "fraud investigation"
  ],
  authors: [{ name: "Monaco PI" }],
  creator: "Monaco PI",
  publisher: "Monaco PI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Monaco PI | Elite Private Investigation Services in Colorado",
    description: "Colorado's premier private investigation firm. 95%+ case resolution rate, 17+ years experience. Licensed, bonded, and insured.",
    url: "https://monacopi.com",
    siteName: "Monaco PI",
    images: [
      {
        url: "/images/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Monaco PI - Elite Private Investigation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monaco PI | Elite Private Investigation Services in Colorado",
    description: "Colorado's premier private investigation firm. 95%+ case resolution rate, 17+ years experience.",
    images: ["/images/opengraph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
    // yandex: 'verification_token_here',
    // bing: 'verification_token_here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Skip to Content Link - Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-navy text-cream px-6 py-3 rounded-sm font-normal text-sm hover:bg-navy-light transition-colors focus:outline-none focus:ring-2 focus:ring-cream"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

