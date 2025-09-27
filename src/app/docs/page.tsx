import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation | Oğuzhan Özcan',
  description:
    'Interactive component library built with Storybook and Chromatic. Explore design specifications, component behaviors, accessibility testing, and developer handoff documentation. Bridging design and engineering with living documentation.',
  alternates: {
    canonical: 'https://o10n.design/docs',
  },
  openGraph: {
    title: 'Documentation | Oğuzhan Özcan',
    description:
      'Interactive component library built with Storybook and Chromatic. Explore design specifications, component behaviors, accessibility testing, and developer handoff documentation. Bridging design and engineering with living documentation.',
    url: 'https://o10n.design/docs',
    images: 'https://o10n.design/img/og_images/docs_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation | Oğuzhan Özcan',
    description:
      'Interactive component library built with Storybook and Chromatic. Explore design specifications, component behaviors, accessibility testing, and developer handoff documentation. Bridging design and engineering with living documentation.',
    images: 'https://o10n.design/img/og_images/docs_open_graph.png',
  },
  robots: 'index, follow',
  keywords:
    'Developer Friendly Design, Component Design, Figma to Code, Auto-Layout Best Practices, UI Component Naming Conventions, Design Handoff, Frontend Development, Design Systems, React Components, Storybook, CSS Class Naming, Web Development, UX/UI Design, Product Design, Design to Development Workflow, Accessible Design, Responsive Design, Developer Experience, Code-Ready Designs',
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  publisher: 'Oğuzhan Özcan',
  colorScheme: 'light',
  icons: {
    icon: 'https://o10n.design/img/favicons/favicon-32x32.png',
    shortcut: 'https://o10n.design/img/favicons/favicon-32x32.png',
    apple: 'https://o10n.design/img/favicons/apple-touch-icon.png',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Component Documentation with Storybook and Chromatic',
  description: 'Interactive component library documentation bridging design and development',
  author: {
    '@type': 'Person',
    name: 'Oğuzhan Özcan',
  },
  keywords:
    'UI Components, Button Component, Tag Component, Chip Component, Dropdown Component, Card Component, Section Divider Component, Storybook, Chromatic, Component Library, Design System, Documentation',
  url: 'https://o10n.design/docs',
};

export default function DocsPage() {
  // Redirect to /docs/index.html (the Storybook entry point)
  redirect('/docs/index.html');
  return null;
}
