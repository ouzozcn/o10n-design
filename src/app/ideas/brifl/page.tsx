import type { Metadata } from 'next';
import BriflClient from './BriflClient';

export const metadata: Metadata = {
  title: 'brifl | Collaborative Form Building for Creators | Oğuzhan Özcan',
  description:
    'An open-source form-building tool designed for designers, developers, writers, and photographers. brifl empowers creators with 30+ customizable blocks, recipient management, third-party integrations, and seamless client communication to streamline creative workflows.',
  alternates: {
    canonical: 'https://o10n.design/ideas/brifl',
  },
  openGraph: {
    title: 'brifl | Empowering Creators with Collaborative Form Building',
    description:
      'An open-source tool for designers, developers, writers, and photographers to create, share, and analyze forms seamlessly. Features 30+ customizable blocks, recipient management, and 20+ third-party integrations. Designed by Oğuzhan Özcan (January - December 2022) using Figma and maze.',
    url: 'https://o10n.design/ideas/brifl',
    type: 'website',
    images: [
      {
        url: 'https://o10n.design/img/og_images/brifl_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'brifl - Collaborative form-building tool for creators by Oğuzhan Özcan',
      },
    ],
    siteName: 'o10n.design',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'brifl | Open-Source Form Builder for Creators',
    description:
      'Collaborative form-building tool for designers, developers, writers, and photographers. Features 30+ customizable blocks, recipient management, and seamless third-party integrations.',
    images: ['https://o10n.design/img/og_images/brifl_open_graph.png'],
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
    'brifl',
    'brifl Form Application',
    'Collaborative Form Builder',
    'Open-Source Form Tool',
    'Creator Form Builder',
    'Form Building Platform',
    'Survey Builder for Creatives',
    'Brief Collection Tool',

    // Core Features
    'Form Blocks',
    'Customizable Form Blocks',
    'Recipient Management',
    'Third-Party Integrations',
    'Form Analytics',
    'Client Communication Forms',
    'Creative Workflow Forms',

    // Target Audience
    'Forms for Designers',
    'Forms for Developers',
    'Forms for Writers',
    'Forms for Photographers',
    'Creative Professional Tools',
    'Freelancer Tools',

    // Use Cases
    'Design Brief Forms',
    'Client Onboarding Forms',
    'Project Brief Builder',
    'Creative Brief Template',
    'Client Questionnaire',
    'Photography Brief',
    'Development Brief',
    'Content Brief Forms',

    // Form Types
    'Survey Builder',
    'Quiz Builder',
    'Poll Creator',
    'Feedback Forms',
    'Project Brief Forms',
    'Client Forms',

    // Comparison Keywords
    'Jotform Alternative',
    'Typeform Alternative',
    'SurveyMonkey Alternative',
    'Form Builder Comparison',
    'Best Form Builders',
    'Open Source Form Builder',

    // Technical
    'Form Building Tool',
    'Online Form Creator',
    'Custom Form Blocks',
    'Form Integrations',
    'Form Management System',

    // Design Methodology
    'Double Diamond',
    'User Research',
    'User Archetypes',
    'Problem-First Design',
    'User-Centered Design',

    // Tools Used
    'Figma',
    'maze',
    'User Testing',
    'Usability Testing',

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

export default function Brifl() {
  return <BriflClient />;
}
