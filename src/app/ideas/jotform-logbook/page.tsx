import type { Metadata } from 'next';
import JotformLogbookClient from './JFLogbookClient';

export const metadata: Metadata = {
  title: 'Jotform Logbook | Internal Tools & Company Collaboration | Oğuzhan Özcan',
  description:
    'An internal tool designed to enhance company awareness and collaboration. Jotform Logbook allows teams to log work in progress (WIP) and completed works (LOG), track affected products, collaborate across teams, and reduce duplicated work. Designed by Oğuzhan Özcan at Jotform.',
  alternates: {
    canonical: 'https://o10n.design/ideas/jotform-logbook',
  },
  openGraph: {
    title: 'Jotform Logbook | An Internal Tool for Better Company Awareness',
    description:
      'A centralized, searchable internal tool for teams to log WIP and completed work, track products, collaborate, and improve cross-department visibility. Designed by Oğuzhan Özcan (October 2024) at Jotform using Figma.',
    url: 'https://o10n.design/ideas/jotform-logbook',
    type: 'website',
    images: [
      {
        url: 'https://o10n.design/img/og_images/jotform_logbook_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Jotform Logbook - Internal tool for company awareness and collaboration by Oğuzhan Özcan',
      },
    ],
    siteName: 'o10n.design',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jotform Logbook | Internal Collaboration Tool',
    description:
      'Internal tool for better company awareness. Teams log WIP and completed work, track products, and collaborate to reduce duplicated work and improve visibility.',
    images: ['https://o10n.design/img/og_images/jotform_logbook_open_graph.png'],
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
    'Jotform Logbook',
    'Internal Tools',
    'Company Awareness',
    'Team Collaboration',
    'Work in Progress',
    'WIP Tracking',
    'Cross-Team Collaboration',
    'Internal Documentation',
    'Company Transparency',

    // Core Identity
    'Product Designer',
    'UX Designer',
    'UI/UX Designer',
    'Internal Tool Design',

    // Specialization
    'Enterprise UX Design',
    'B2B Product Design',
    'Internal Product Design',
    'Collaboration Tools',
    'Workflow Tools',
    'Team Productivity',

    // Technical Skills
    'Figma Design',
    'Product Design',
    'UX Design',
    'User Experience Design',
    'Problem Solving',

    // Methods & Approaches
    'User Research',
    'Problem Discovery',
    'Solution Design',
    'Iterative Design',
    'User-Centered Design',
    'Design Thinking',

    // Tools & Technologies
    'Figma',
    'Design Tools',
    'Prototyping',

    // Company & Projects
    'Jotform',
    'Jotform',
    'Internal Tools',
    'Enterprise Tools',

    // Features & Functionality
    'Work Logging',
    'Product Tracking',
    'Team Tagging',
    'Rich Text Descriptions',
    'Screenshot Sharing',
    'Search and Filter',
    'Email Notifications',

    // Personal Brand
    'Oğuzhan Özcan',
    'Oguzhan Ozcan',
    'Oğuz Özcan',
    'ouzozcn',
    'o10n',
    'o10n.design',

    // Timeline & Context
    'October 2024',
    '2024 Design Project',
  ].join(', '),
  category: 'portfolio',
  classification: 'Design Portfolio',
};

export default function JotformLogbook() {
  return <JotformLogbookClient />;
}
