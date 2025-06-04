import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Oguzhan Ozcan | Product Designer",
  description: "Portfolio showcasing design and development work",
  keywords: ["design", "development", "portfolio", "UX", "UI"],
  authors: [{ name: "Oğuzhan Özcan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://o10n.design",
    siteName: "Oguzhan Ozcan | Product Designer",
    title: "Oguzhan Ozcan | Product Designer",
    description: "Portfolio showcasing design and development work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oguzhan Ozcan | Product Designer",
    description: "Portfolio showcasing design and development work",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {children}
        <VercelAnalytics />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
