import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@/components/Analytics';
import StructuredData from '@/components/StructuredData';
import Clarity from '@microsoft/clarity';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});
const projectId = 'up83tvx4g2';

Clarity.init(projectId);

export const metadata: Metadata = {
  title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
  description:
    'Product designer and design engineer specializing in B2B SaaS products, design systems, and accessibility. I bridge design and development with research-driven solutions, scalable components, and developer-friendly handoffs. Currently at Jotform Enterprise.',
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
    siteName: 'Oğuzhan Özcan | Product Designer & Design Engineer',
    title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
    description:
      'Product designer and design engineer specializing in B2B SaaS products, design systems, and accessibility. I bridge design and development with research-driven solutions, scalable components, and developer-friendly handoffs. Currently at Jotform Enterprise.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
    description:
      'Product designer and design engineer specializing in B2B SaaS products, design systems, and accessibility. I bridge design and development with research-driven solutions, scalable components, and developer-friendly handoffs. Currently at Jotform Enterprise.',
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
