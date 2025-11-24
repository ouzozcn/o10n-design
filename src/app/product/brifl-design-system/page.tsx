import type { Metadata } from 'next';
import BriflDSClient from './BriflDSClient';

export const metadata: Metadata = {
  title: 'brifl Design System | Design Systems & Component Libraries | Oğuzhan Özcan ',
  description:
    'A modular, React-friendly component library built on atomic design principles. The Brifl Design System contains 30+ UI components and 200+ states and variants, providing a scalable foundation for consistent, accessible, and high-fidelity UI design.',
  alternates: {
    canonical: 'https://o10n.design/product/brifl-design-system',
  },
  openGraph: {
    title: 'brifl Design System | Designing a Scalable and Modular UI Foundation',
    description:
      'A modular, React-friendly component library based on atomic design principles. Contains 30+ components and 200+ states and variants. Designed by Oğuzhan Özcan (August - December 2021) using Figma and Miro.',
    url: 'https://o10n.design/product/brifl-design-system',
    type: 'website',
    images: [
      {
        url: 'https://o10n.design/img/og_images/brifl_ds_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'brifl Design System - A modular, React-friendly component library by Oğuzhan Özcan',
      },
    ],
    siteName: 'o10n.design',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'brifl Design System | Scalable Component Library',
    description:
      'Modular, React-friendly design system with 30+ components and 200+ variants. Built on atomic design principles for consistent, accessible UI design.',
    images: ['https://o10n.design/img/og_images/brifl_ds_open_graph.png'],
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
    'Brifl Design System',
    'Brifl Form Application',
    'Atomic Design Principles',
    'React Component Library',
    'Modular Design System',
    'Component Library Design',
    'UI Component System',

    // Semrush Keywords
    'design system examples',
    'how to start design system',
    'design and systems',
    'ui materials',
    'ux design systems',
    'atlassian design system',
    'ibm carbon design system',
    'orbit by kiwi',
    'ant design',
    'design system components',
    'design system architecture',
    'design system documentation',
    'design system implementation',
    'design system best practices',
    'design system recommendations',
    'design system examples',
    'design system inspiration',
    'user interface components',
    'ui components',
    'components which make up a design',
    'component based development',
    'material components',
    'what-is-component-design',

    // Components in Brifl Design System
    'Autocomplete Component',
    'Avatar Component',
    'Badge Component',
    'Banner Component',
    'Breadcrumb Component',
    'Button Component',
    'Checkbox Component',
    'Comment Component',
    'Date-Time Picker Component',
    'Drawer Component',
    'Dropdown Menu Component',
    'Empty Component',
    'Form Component',
    'Inline Edit Component',
    'Input Component',
    'Modal Component',
    'Page Header Component',
    'Pagination Component',
    'Progress Component',
    'Radio Component',
    'Range Component',
    'Rating Component',
    'Select Component',
    'Spinner Component',
    'Skeleton Component',
    'Table Component',
    'Tabs Component',
    'Tag Component',
    'Toggle Component',
    'Tooltip Component',

    // Core Identity
    'Product Designer',
    'Design Engineer',
    'UX Designer',
    'UI Designer',
    'UI/UX Designer',

    // Specialization
    'Design Systems',
    'Component Design',
    'Design System Architecture',
    'Scalable Design System',
    'Accessibility Design',
    'Developer-Friendly Design',
    'Design to Code',

    // Technical Skills
    'React Design Components',
    'React-Friendly Components',
    'Figma to Code',
    'Frontend Design',
    'Design Engineering',
    'Component Variants',
    'Design Tokens',

    // Methods & Approaches
    'Atomic Design',
    'Brad Frost Atomic Design',
    'Modular Design',
    'Component-Based Design',
    'Design System Documentation',

    // Tools & Technologies
    'Figma',
    'Miro',
    'React',
    'Component Library',
    'Design System Tools',

    // Project Details
    '30 Components',
    '200 States and Variants',
    'Color Palette Design',
    'Typography System',
    'Icon Library',
    'Grid System',

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

export default function BriflDS() {
  return <BriflDSClient />;
}
