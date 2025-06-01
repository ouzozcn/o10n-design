import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O10N Design - Portfolio",
  description: "Portfolio showcasing design and development work",
  keywords: ["design", "development", "portfolio", "UX", "UI"],
  authors: [{ name: "Oğuzhan Özcan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://o10n.design",
    siteName: "O10N Design",
    title: "O10N Design - Portfolio",
    description: "Portfolio showcasing design and development work",
  },
  twitter: {
    card: "summary_large_image",
    title: "O10N Design - Portfolio",
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
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
