import type { Metadata } from 'next';
import SandboxClient from './SandboxClient';

export const metadata: Metadata = {
  title: 'Sandbox | Oğuzhan Özcan | Sandbox for Design Experiments',
  description:
    'A sandbox for design experiments and prototypes. Sandbox allows you to design and test your ideas before implementing them.',
  alternates: {
    canonical: 'https://o10n.design/sandbox',
  },
  openGraph: {
    title: 'Sandbox | Oğuzhan Özcan | Sandbox for Design Experiments',
    description:
      'An open-source tool for designers, developers, writers, and photographers to create, share, and analyze forms seamlessly. Features 30+ customizable blocks, recipient management, and 20+ third-party integrations. Designed by Oğuzhan Özcan (January - December 2022) using Figma and maze.',
    url: 'https://o10n.design/sandbox',
    type: 'website',
    images: [
      {
        url: 'https://o10n.design/img/og_images/sandbox_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Sandbox - Sandbox for Design Experiments by Oğuzhan Özcan',
      },
    ],
    siteName: 'o10n.design',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandbox | Sandbox for Design Experiments',
    description:
      'A sandbox for design experiments and prototypes. Sandbox allows you to design and test your ideas before implementing them.',
    images: ['https://o10n.design/img/og_images/sandbox_open_graph.png'],
    creator: '@ouzozcn',
    site: '@ouzozcn',
  },
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  publisher: 'Oğuzhan Özcan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  colorScheme: 'light',
  icons: {
    icon: [
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon-32x32.png',
    apple: [{ url: '/img/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
  keywords: [
    // Project Specific
    'sandbox',
    'sandbox for design experiments',
    'sandbox for prototypes',
    'sandbox for design',

    // Core Identity
    'Product Designer',
    'User Researcher',
    'UX Designer',
    'UI Designer',
    'UI/UX Designer',

    // Personal Brand
    'Oğuzhan Özcan',
    'Oguzhan Ozcan',
    'Oğuz Özcan',
    'ouzozcn',
    'o10n',
    'o10n.design',
  ].join(', '),
  category: 'portfolio',
  classification: 'Design Portfolio',
};

export default function Sandbox() {
  return <SandboxClient />;
}
