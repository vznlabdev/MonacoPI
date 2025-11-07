import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
  title: "Monaco PI | Elite Private Investigation Services in Colorado",
  description: "Colorado&apos;s premier private investigation firm. 95%+ case resolution rate, 17+ years experience. Professional investigation services for attorneys, individuals, and corporations. Licensed, bonded, and insured.",
  openGraph: {
    title: "Monaco PI | Elite Private Investigation Services in Colorado",
    description: "Colorado&apos;s premier private investigation firm. 95%+ case resolution rate, 17+ years experience. Licensed, bonded, and insured.",
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
    description: "Colorado&apos;s premier private investigation firm. 95%+ case resolution rate, 17+ years experience.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="690db157d1e01cfa4120ec4d"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

