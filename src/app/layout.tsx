import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@/components/Analytics';
import StructuredData from '@/components/StructuredData';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Oguzhan Ozcan | Analytics and Data-Driven Product Designer',
  description:
    'Analytics and data-driven product designer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
  keywords: [
    'product design',
    'design engineer',
    'user experience design',
    'user interface design',
    'ui development',
    'product management',
    'frontend development',
    'development',
    'portfolio',
    'UX',
    'UI',
    'analytics',
    'data',
    'product',
    'research',
    'accessibility',
    'user-centered',
    'developer-friendly',
    'oğuzhan özcan',
    'oğuz özcan',
    'o10n',
    'o10n.design',
    'o10n design',
  ],
  authors: [{ name: 'Oğuzhan Özcan' }],
  creator: 'Oğuzhan Özcan',
  publisher: 'Oğuzhan Özcan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://o10n.design',
    siteName: 'Oguzhan Ozcan | Analytics and Data-Driven Product Designer',
    title: 'Oguzhan Ozcan | Analytics and Data-Driven Product Designer',
    description:
      'Analytics and data-driven product designer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oguzhan Ozcan | Analytics and Data-Driven Product Designer',
    description:
      'Analytics and data-driven product designer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
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
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {children}
        <VercelAnalytics />
        <SpeedInsights />
        <Analytics />
        <StructuredData />
      </body>
    </html>
  );
}
