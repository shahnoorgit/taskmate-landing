import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://taxmate.dtrue.online'),
  title: "TaxMate — GST Invoice Software for Indian Freelancers | Free Waitlist",
  description: "Create GST-compliant invoices in 30 seconds. Track freelance income, automate GST calculations, and manage clients in one dashboard. Built for freelancers, creators & solo businesses in India. Join 200+ on the waitlist.",
  keywords: [
    "GST invoice software India",
    "freelance invoice generator",
    "GST billing software for freelancers",
    "invoice maker India",
    "freelance accounting software",
    "GST calculation tool",
    "invoice management system",
    "freelance income tracker",
    "Indian freelancer tools",
    "online invoicing India",
    "GST invoicing app",
    "freelance finance management",
    "client invoice tracking",
    "GST-compliant invoice creator",
    "freelancer tax software India",
    "invoice generator for consultants",
    "freelance billing software",
    "GST return filing help",
  ],
  authors: [{ name: "Dtrue", url: "https://dtrue.online" }],
  creator: "Dtrue",
  publisher: "TaxMate",
  category: "Finance & Business Software",
  openGraph: {
    title: "TaxMate — GST Invoice Software for Indian Freelancers",
    description: "Create GST-compliant invoices in 30 seconds. Track income, automate GST calculations, and manage clients. Built for Indian freelancers and creators. Join the waitlist.",
    url: "https://taxmate.dtrue.online",
    siteName: "TaxMate",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "TaxMate - GST Invoice Software for Indian Freelancers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxMate — GST Invoice Software for Indian Freelancers",
    description: "Create GST-compliant invoices in 30 seconds. Track income, automate GST calculations. Built for Indian freelancers. Join the waitlist.",
    images: ["/og-image.svg"],
    creator: "@dtrue",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "TaxMate",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "999",
                "priceCurrency": "INR",
                "description": "Lifetime access for first 100 members",
                "availability": "https://schema.org/PreOrder",
                "eligibleRegion": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "200",
                "bestRating": "5",
                "worstRating": "1"
              },
              "description": "Create GST-compliant invoices in 30 seconds. Track freelance income, automate GST calculations, and manage clients in one dashboard. Built for Indian freelancers, designers, and developers.",
              "featureList": [
                "GST-compliant invoice generation",
                "Automated GST calculation",
                "Client management dashboard",
                "Income tracking",
                "AI-powered financial summaries",
                "Invoice tracking and reminders"
              ],
              "screenshot": "https://taxmate.dtrue.online/og-image.svg",
              "url": "https://taxmate.dtrue.online",
              "author": {
                "@type": "Organization",
                "name": "Dtrue",
                "url": "https://dtrue.online"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Freelancers, Consultants, Designers, Developers"
              },
              "inLanguage": "en-IN",
              "countryOfOrigin": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TaxMate",
              "url": "https://taxmate.dtrue.online",
              "logo": "https://taxmate.dtrue.online/logo.svg",
              "description": "GST invoice software for Indian freelancers",
              "email": "hello@dtrue.online",
              "foundingDate": "2025",
              "founders": [
                {
                  "@type": "Organization",
                  "name": "Dtrue"
                }
              ],
              "sameAs": [
                "https://twitter.com/dtrue"
              ]
            })
          }}
        />
        {/* WebPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "TaxMate - GST Invoice Software for Indian Freelancers",
              "description": "Join the waitlist for TaxMate - the easiest way to create GST-compliant invoices, track income, and manage finances as an Indian freelancer.",
              "url": "https://taxmate.dtrue.online",
              "inLanguage": "en-IN",
              "isPartOf": {
                "@type": "WebSite",
                "name": "TaxMate",
                "url": "https://taxmate.dtrue.online"
              },
              "about": {
                "@type": "Thing",
                "name": "Freelance Finance Management"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Freelancers in India"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

