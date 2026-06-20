import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import Providers from "@/components/Providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kajiyahouses.com"),
  title: {
    default: "Kajiya Houses Sapanca | Özel Havuzlu Bungalov",
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Sapanca bungalov",
    "özel havuzlu bungalov",
    "Sapanca tatil evi",
    "Kajiya Houses",
    "ısıtmalı havuz Sapanca",
    "müstakil tatil evi",
  ],
  openGraph: {
    title: "Kajiya Houses Sapanca | Özel Havuzlu Bungalov",
    description: site.description,
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kajiya Houses Sapanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kajiya Houses Sapanca | Özel Havuzlu Bungalov",
    description: site.description,
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2C4A3E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
