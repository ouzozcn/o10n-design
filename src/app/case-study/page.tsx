import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Case Studies | Oğuzhan Özcan',
  description:
    'In-depth case studies from enterprise product design at Jotform. Featuring: Jotform 2FA (15K+ users, 95% retention), security UX, enterprise controls, and B2B SaaS workflows. Real problems, research-driven solutions, measurable impact.',
  alternates: {
    canonical: 'https://o10n.design/case-study',
  },
  openGraph: {
    title: 'Case Studies | Oğuzhan Özcan',
    description:
      'In-depth case studies from enterprise product design at Jotform. Featuring: Jotform 2FA (15K+ users, 95% retention), security UX, enterprise controls, and B2B SaaS workflows. Real problems, research-driven solutions, measurable impact.',
    url: 'https://o10n.design/case-study',
    images: 'https://o10n.design/img/og_images/case_studies_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Oğuzhan Özcan',
    description:
      'In-depth case studies from enterprise product design at Jotform. Featuring: Jotform 2FA (15K+ users, 95% retention), security UX, enterprise controls, and B2B SaaS workflows. Real problems, research-driven solutions, measurable impact.',
    images: 'https://o10n.design/img/og_images/case_studies_open_graph.png',
  },
  keywords:
    'Product Design Case Studies, Enterprise UX Design, B2B SaaS Design, Security UX, Two-Factor Authentication Design, User Research in Product Design, SaaS User Experience, Design Thinking Case Studies, UX Problem Solving, User-Centered Design, SaaS Workflow Design, Enterprise Software Design, Product Management Case Studies, Usability Testing in SaaS, Design Strategy for B2B, SaaS Product Development, User Retention Strategies, Accessibility in Enterprise Software, Interaction Design for SaaS, Visual Design in Product Case Studies',
  robots: 'index, follow',
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
          to="/writings"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="Writings"
        />
      </div>

      <div className="PageHero flex flex-col p-8 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Case Studies
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Here are some of the Case Studies I&apos;ve worked on.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          className="border-b-0"
          direction="left"
          cardTitle="Enhancing Security Through Two-Factor Authentication"
          cardContent="Improving user security by implementing 2FA on Jotform which resulted in a 15K+ users adopting the feature."
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
