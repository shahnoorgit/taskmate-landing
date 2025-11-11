import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxMate — Simplify freelance finances",
  description: "Create invoices, track GST, and understand your income with AI. TaxMate helps freelancers take control of their money.",
  keywords: ["freelance", "invoicing", "GST", "tax", "India", "accounting", "finance"],
  authors: [{ name: "Dtrue" }],
  openGraph: {
    title: "TaxMate — Simplify freelance finances",
    description: "Create invoices, track GST, and understand your income with AI. TaxMate helps freelancers take control of their money.",
    url: "https://taxmate.dtrue.online",
    siteName: "TaxMate",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "TaxMate - Simplify freelance finances",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxMate — Simplify freelance finances",
    description: "Create invoices, track GST, and understand your income with AI. TaxMate helps freelancers take control of their money.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

