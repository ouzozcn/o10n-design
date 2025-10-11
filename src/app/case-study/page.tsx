import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Case Studies | Oğuzhan Özcan | Enterprise SaaS & Security UX',
  description:
    'In-depth case studies from enterprise product design at Jotform. Jotform 2FA: Security feature adopted by 15,000+ users with 95% retention. Real problems, research-driven solutions, measurable impact across Web, Mobile, and Enterprise platforms.',
  alternates: {
    canonical: 'https://o10n.design/case-study',
  },
  openGraph: {
    title: 'Case Studies | Oğuzhan Özcan | Enterprise Product Design',
    description:
      'Jotform 2FA case study: Designed authentication system for 25M users. 15K+ adoptions, 95% retention. From research to rollout—security UX that scales.',
    url: 'https://o10n.design/case-study',
    images: [
      {
        url: 'https://o10n.design/img/og_images/case_studies_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Oğuzhan Özcan Case Studies - Enterprise SaaS & Security UX - o10n',
      },
    ],
    siteName: 'o10n.design',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Enterprise SaaS & Security UX',
    description:
      'Jotform 2FA: 15K+ users, 95% retention. How I designed authentication for 25M users. Research → prototypes → measurable impact.',
    images: ['https://o10n.design/img/og_images/case_studies_open_graph.png'],
    creator: '@ouzozcn',
    site: '@ouzozcn',
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
    // Case Study Focus
    'Product Design Case Studies',
    'Enterprise UX Case Studies',
    'B2B SaaS Design',
    'Security UX Design',
    'Two-Factor Authentication Design',

    // Methodologies
    'User Research Case Studies',
    'Design Thinking Case Studies',
    'UX Problem Solving',
    'User-Centered Design Process',

    // Specific Features
    'Jotform 2FA',
    'Authentication UX',
    'Security Feature Design',
    'Enterprise Software Design',
    '2FA User Experience',

    // Outcomes & Metrics
    'User Retention Strategies',
    'SaaS Product Success',
    'Design Impact Metrics',
    'Usability Testing Results',

    // Work Type
    'SaaS Workflow Design',
    'Enterprise Controls Design',
    'B2B Product Design',
    'Multi-Platform Design',

    // Skills Demonstrated
    'Cross-Functional Collaboration',
    'Design to Development',
    'Product Strategy',
    'Design Leadership',

    // Creator
    'Oğuzhan Özcan Case Studies',
    'Jotform Product Designer',
  ].join(', '),
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  category: 'portfolio',
};

export default function CaseStudy() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <div className="md:sticky md:top-0 md:z-10 flex flex-col md:flex-row w-auto border-b border-stone-900 bg-theme-primary">
        <MenuItem
          to="/"
          className="flex-1 md:border-b-0 border-r-0 md:border-r border-stone-900 text-center"
          title="Home"
        />
        <MenuItem
          to="/product"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Products"
        />
        <MenuItem
          to="/case-study"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-lime-200 hover:bg-lime-200 cursor-default"
          title="Case Studies"
        />
        <MenuItem
          to="/ideas"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Ideas"
        />
        <MenuItem
          to="/articles"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="Articles"
        />
      </div>

      <div className="PageHero flex flex-col p-8 lg:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Case Studies
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Deep dives into real product challenges—from security UX to enterprise workflows. These
          case studies show how I use research, iteration, and cross-functional collaboration to
          ship features that matter.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          className="border-b-0"
          direction="left"
          cardTitle="Enhancing Security Through Two-Factor Authentication"
          cardContent="Designed and launched Jotform's first two-factor authentication system—adopted by 15,000+ users with a 95% retention rate. A security feature that scaled across Web, Mobile, and Enterprise platforms."
          tags={[
            {
              label: 'Case Study',
              type: 'lime',
              size: 'large',
            },
            {
              label: 'Security Feature',
              type: 'outline',
              size: 'large',
            },
          ]}
          to="/case-study/jotform-2fa"
          swapContent={
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/img/thumbs/thumb-jf2fa.svg"
                alt="Jotform 2FA Case Study Thumbnail"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
        />
      </div>

      <Footer />
    </div>
  );
}
