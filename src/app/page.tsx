import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Oguzhan Ozcan | Analytics and Data-Driven Product Designer',
  description:
    'Analytics and data-driven product designer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
  alternates: {
    canonical: 'https://o10n.design',
  },
  openGraph: {
    title: 'Oguzhan Ozcan | Analytics and Data-Driven Product Designer',
    description:
      'Analytics and data-driven product designer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
    url: 'https://o10n.design',
  },
};

export default function Home() {
  return <HomeClient />;
}
