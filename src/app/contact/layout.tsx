import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Monaco PI | Free Confidential Consultation",
  description: "Get in touch for a free, confidential consultation. Available 24/7 for emergencies. Contact Colorado&apos;s premier private investigation firm. Response within 24 hours.",
  openGraph: {
    title: "Contact Monaco PI | Free Confidential Consultation",
    description: "Get in touch for a free, confidential consultation. Available 24/7 for emergencies. Response within 24 hours.",
    url: "https://monacopi.com/contact",
    siteName: "Monaco PI",
    images: [
      {
        url: "/images/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Monaco PI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Monaco PI | Free Confidential Consultation",
    description: "Get in touch for a free, confidential consultation. Available 24/7 for emergencies.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

