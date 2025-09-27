import type { Metadata } from 'next';
import KromaClient from './KromaClient';

export const metadata: Metadata = {
  title: 'Kroma | Color Blindness Accessibility Checker for User Interfaces',
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
    images: 'https://o10n.design/img/og_images/kroma_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kroma | Color Blindness Accessibility Checker for User Interfaces',
    description:
      'Kroma is a free tool for designers and developers to upload UI screens and instantly preview how they appear to users with various types of color vision deficiency.',
    images: 'https://o10n.design/img/og_images/kroma_open_graph.png',
  },
  keywords:
    'use-kroma, kroma app, Color Blindness Checker, Accessibility Testing Tool, Color Vision Deficiency Simulator, UI Accessibility Tool, Free Color Blindness Simulator, Protanopia Simulator, Deuteranopia Simulator, WCAG Color Contrast, Accessible Design Tool, Color Accessibility Checker, Visual Impairment Testing, UI Color Testing, Inclusive Design Tool, Color Blind Friendly Design, Design Accessibility, UX Accessibility Tool, Free Accessibility Checker, Color Vision Testing, Product Design Accessibility, Interface Accessibility Testing',
  robots: 'index, follow',
};

export default function Kroma() {
  return <KromaClient />;
}
