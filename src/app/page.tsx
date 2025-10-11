import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Oğuzhan Özcan | Product Designer & Design Engineer | SaaS & Enterprise UX',
  description:
    'Product designer and design engineer specializing in SaaS B2B products, design systems, and accessibility. I bridge design and development with research-driven solutions, scalable components, and developer-friendly handoffs. Currently at Jotform Enterprise.',
  alternates: {
    canonical: 'https://o10n.design',
  },
  openGraph: {
    title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
    description:
      'Designing scalable SaaS products and design systems. From Jotform 2FA (15K+ users) to Kroma accessibility tool. I turn research into developer-ready components and accessible experiences.',
    url: 'https://o10n.design',
    type: 'website',
    images: [
      {
        url: 'https://o10n.design/img/og_images/o10n_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Oğuzhan Özcan - Product Designer & Design Engineer Portfolio - o10n',
      },
    ],
    siteName: 'o10n.design',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
    description:
      'SaaS product designer → design engineer. Building accessible interfaces, scalable systems, and developer-friendly components. Currently at Jotform Enterprise.',
    images: ['https://o10n.design/img/og_images/o10n_open_graph.png'],
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
    // Core Identity
    'Product Designer',
    'Design Engineer',
    'UX Designer',
    'UI/UX Designer',

    // Specialization
    'SaaS Product Design',
    'Enterprise UX Design',
    'B2B Product Design',
    'Design Systems',
    'Accessibility Design',
    'Developer-Friendly Design',
    'Design to Code',

    // Technical Skills
    'React Design Components',
    'Storybook Design Handoff',
    'Figma to Code',
    'Frontend Design',
    'Design Engineering',
    'Component Design',

    // Methods & Approaches
    'User Research',
    'Data-Driven Design',
    'Research-Based Design',
    'Accessibility-First Design',
    'User-Centered Design',

    // Tools & Technologies
    'Figma',
    'Storybook',
    'Chromatic',
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',

    // Company & Projects
    'Jotform',
    'Jotform Enterprise',
    'Kroma Accessibility',
    'Brifl Design System',

    // Personal Brand
    'Oğuzhan Özcan',
    'Oguzhan Ozcan',
    'Oğuz Özcan',
    'ouzozcn',
    'o10n',
    'o10n.design',

    // Location & Work Style
    'Remote Product Designer',
    'Turkey UX Designer',
    'Ankara Designer',
    'Freelance Product Designer',
  ].join(', '),
  category: 'portfolio',
  classification: 'Design Portfolio',
};

export default function Home() {
  return <HomeClient />;
}
