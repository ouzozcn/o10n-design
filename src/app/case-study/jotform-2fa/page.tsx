import type { Metadata } from 'next';
import MFAClient from './MFAClient';

export const metadata: Metadata = {
  title: 'Enhancing Security Through Two-Factor Authentication | Jotform 2FA',
  description:
    'Jotform is committed to providing a secure and user-friendly experience for all users. Our Two-Factor Authentication (2FA) feature adds an extra layer of security to protect user accounts.',
  alternates: {
    canonical: 'https://o10n.design/product/kroma',
  },
  keywords: 'Two-Factor Authentication, Security, Jotform, User Account Protection',
  openGraph: {
    title: 'Enhancing Security Through Two-Factor Authentication',
    description:
      'Explore Jotform’s 2FA feature to understand how we increase account security for users.',
    url: 'https://o10n.design/product/kroma',
    images: '/public/img/og_images/jotform2fa_open_graph.png',
    siteName: 'o10n.design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enhancing Security Through Two-Factor Authentication',
    description: 'Learn about Jotform’s 2FA feature for enhanced security.',
    images: '/public/img/og_images/jotform2fa_open_graph.png',
  },
  robots: 'index, follow',
};

export default function Jotform2FA() {
  return <MFAClient />;
}
