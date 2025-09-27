import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
  description:
    'Product designer and design engineer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
  alternates: {
    canonical: 'https://o10n.design',
  },
  openGraph: {
    title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
    description:
      'Product designer and design engineer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
    url: 'https://o10n.design',
    type: 'website',
    images: 'https://o10n.design/img/og_images/o10n_open_graph.png',
    siteName: 'o10n.design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oğuzhan Özcan | Product Designer & Design Engineer',
    description:
      'Product designer and design engineer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
    images: 'https://o10n.design/img/og_images/contact_open_graph.png',
  },
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
  robots: 'index, follow',
  keywords:
    'Product Designer, Design Engineer, SaaS UX Design, Design Systems, Enterprise Product Design, Accessibility Design, Developer-Friendly Design, Data-Driven Design, AI Workflows, B2B Product Design, Jotform, React Design Components, Storybook Design Handoff, Design to Code, User Research, Frontend Design, Oğuzhan Özcan, Oguzhan Ozcan, Oğuz Özcan, ouzozcn, o10n, o10n.design, UX Designer Turkey, UI/UX Designer, Digital Product Designer, Remote Product Designer, Freelance Product Designer, Full-Stack Designer, Interaction Design, Visual Design, Usability, User Experience, Mobile App Design, Web Design, Prototyping, Wireframing',
};

export default function Home() {
  return <HomeClient />;
}
