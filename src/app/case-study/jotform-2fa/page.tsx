import type { Metadata } from 'next';
import MFAClient from './MFAClient';

export const metadata: Metadata = {
  title: 'Jotform 2FA: Designing Secure Authentication for 25M Users | Oğuzhan Özcan',
  description:
    'Led the design and rollout of Jotform’s Two-Factor Authentication (2FA) system—addressing 2,000+ user requests and enterprise security needs. Achieved 10,000+ active 2FA users with 95% retention through research-driven UX, recovery flows, and targeted growth strategies.',
  alternates: {
    canonical: 'https://o10n.design/case-study/jotform-2fa',
  },
  keywords:
    'Two-Factor Authentication, 2FA UX Design, Enterprise Security Design, Account Security, Multi-Factor Authentication, Jotform 2FA, Authenticator App Design, Recovery Flow Design, Security UX, B2B Security Features, SaaS Authentication, User Account Protection, Security-First Design, TOTP Implementation, Enterprise Admin Controls, Security Compliance Design, Authentication Flow Design, Growth Strategy Product Design, Security Feature Adoption, Password Security Enhancement',
  openGraph: {
    title: 'Jotform 2FA: Designing Secure Authentication for 25M Users | Oğuzhan Özcan',
    description:
      'How I designed and shipped a platform-wide 2FA system for Jotform—balancing security, usability, and enterprise-grade controls. 10K+ active users, 95% retention, 40+ enterprise clients.',
    url: 'https://o10n.design/case-study/jotform-2fa',
    images: 'https://o10n.design/img/og_images/jotform2fa_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jotform 2FA: Designing Secure Authentication for 25M Users | Oğuzhan Özcan',
    description:
      'How I designed and shipped a platform-wide 2FA system for Jotform—balancing security, usability, and enterprise-grade controls.',
    images: 'https://o10n.design/img/og_images/jotform2fa_open_graph.png',
  },
  robots: 'index, follow',
};

export default function Jotform2FA() {
  return <MFAClient />;
}
