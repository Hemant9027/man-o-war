import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Man-O-War Marina Village | Marina, Dockage & Services in Abaco, Bahamas",
    template: "%s | Man-O-War Marina Village",
  },
  description: SITE.description,
  keywords: [
    "Man-O-War Marina Village",
    "Man-O-War Cay marina",
    "Abaco dockage",
    "Bahamas marina",
    "Dock N' Dine",
    "Abaco fuel dock",
    "Man-O-War Cay restaurant",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Man-O-War Marina Village | Marina, Dockage & Services in Abaco, Bahamas",
    description: SITE.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
        width: 2400,
        height: 1600,
        alt: "Aerial view of boats on turquoise water at Man-O-War Marina Village, Abaco, Bahamas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Man-O-War Marina Village | Marina, Dockage & Services in Abaco, Bahamas",
    description: SITE.description,
    images: [
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2433",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-ivory font-sans text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
