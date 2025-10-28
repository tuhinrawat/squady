import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Squady - Auction Management System",
  description: "Create, manage, and run live player auctions with real-time bidding, automated timers, and comprehensive team management. Everything you need for professional auction events.",
  keywords: "auction management, live bidding, player auction, team management, auction platform, sports auction",
  authors: [{ name: "Squady" }],
  creator: "Squady",
  publisher: "Squady",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://squady.auction'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Squady - Professional Auction Management",
    description: "Create, manage, and run live player auctions with real-time bidding, automated timers, and comprehensive team management.",
    url: 'https://squady.auction',
    siteName: 'Squady',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Squady - Professional Auction Management",
    description: "Create, manage, and run live player auctions with real-time bidding, automated timers, and comprehensive team management.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <JsonLd />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
