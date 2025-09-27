import type { Metadata } from 'next';
import KromaClient from './KromaClient';

export const metadata: Metadata = {
  title: ' Kroma | Color Blindness Accessibility Checker for User Interfaces',
  description:
    'Kroma is a free tool for designers and developers to upload UI screens and instantly preview how they appear to users with various types of color vision deficiency.',
  alternates: {
    canonical: 'https://o10n.design/product/kroma',
  },
  openGraph: {
    title: 'Kroma | Color Blindness Accessibility Checker for User Interfaces',
    description:
      'Kroma is a free tool for designers and developers to upload UI screens and instantly preview how they appear to users with various types of color vision deficiency.',
    url: 'https://o10n.design/product/kroma',
  },
};

export default function Kroma() {
  return <KromaClient />;
}
