import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import RoughAnnotate from '@/components/rough-notation/RoughAnnotate';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import TwoFactorAuth from '@/components/examples/TwoFactorAuth';
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
        {/* 2FA v2 Section Starts */}
        <div className="Jotform2FA__Section group flex flex-col lg:flex-row lg:h-[600px] w-full  items-center justify-center ">
          <div className="Jotform2FA__Text flex flex-col w-full lg:w-1/2 p-4 lg:p-20 gap-4 order-2 lg:order-1">
            <h2 className="text-stone-900 text-xl font-sans font-normal lg:text-3xl">
              Enhancing Security Through Two-Factor Authentication
            </h2>
            <p className="text-stone-900 text-sm font-normal font-sans lg:text-base">
              Designed and launched Jotform's two-factor authentication system,{' '}
              <RoughAnnotate
                type="underline"
                color="#0ea5e9"
                padding={2}
                delay={1000}
                animationDuration={1200}
                showWhenVisible={true}
              >
                adopted by 50,000+ users
              </RoughAnnotate>{' '}
              with a 90% retention rate. A security feature that scaled across Web, Mobile, and
              Enterprise platforms.
            </p>
            <div className="Section__Tags flex justify-start items-center gap-2 flex-wrap">
              <Tag label="Case Study" type="lime" size="large" />
              <Tag label="Security Feature" type="outline" size="large" />
            </div>
            <div className="flex justify-start items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 ">
              <Button
                label="Read Case Study"
                rounded={true}
                to="case-study/jotform-2fa"
                target="_blank"
                type="primary"
                endIcon={<ArrowForwardRoundedIcon />}
              />
            </div>
          </div>
          <div className="2FA__Placeholder w-full lg:w-1/2 ">
            <div className="flex flex-col w-auto h-full p-4 lg:p-24 ">
              <TwoFactorAuth />
            </div>
          </div>
        </div>
        {/* 2FA v2 Section Ends */}
      </div>

      <Footer />
    </div>
  );
}
