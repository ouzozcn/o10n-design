import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Articles | Oğuzhan Özcan | Design Systems & Developer Handoff',
  description:
    'Articles on product design, design systems, accessibility, and design engineering. Topics: developer-friendly components, design-to-code workflows, Storybook handoff, atomic design, and building inclusive digital experiences. Insights from 5+ years in SaaS product design.',
  alternates: {
    canonical: 'https://o10n.design/articles',
  },
  openGraph: {
    title: 'Articles | Oğuzhan Özcan | Design Systems & Accessibility',
    description:
      'Essays on design systems, accessibility, and design-to-code workflows. How to build developer-friendly components, improve handoff, and create inclusive experiences.',
    url: 'https://o10n.design/articles',
    images: [
      {
        url: 'https://o10n.design/img/og_images/articles_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Oğuzhan Özcan Articles - Design Systems & Accessibility - o10n',
      },
    ],
    siteName: 'o10n.design',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Design Systems & Developer Handoff',
    description:
      'Articles on design systems, accessibility, and design-to-code workflows. Building better handoffs between design and development.',
    images: ['https://o10n.design/img/og_images/articles_open_graph.png'],
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
    // Content Types
    'Product Design Articles',
    'Design Systems Article',
    'Accessibility Essays',
    'Design Engineering Blog',
    'UX Article',

    // Core Topics
    'Design to Code Articles',
    'Developer Friendly Design',
    'Design Handoff Best Practices',
    'Component Architecture Article',
    'Design System Documentation',

    // Specific Focus Areas
    'Storybook Documentation',
    'Figma Tips',
    'React Component Design',
    'Design Tokens',
    'Atomic Design Principles',

    // Methodologies
    'Design Process Articles',
    'Design Thinking Essays',
    'User Research Article',
    'Design Strategy',
    'Design Leadership',

    // Technical Article
    'UI Component Design',
    'Frontend Design Articles',
    'Design System Governance',
    'Design Tools Review',

    // Collaboration
    'Design-Developer Collaboration',
    'Cross-Functional Design',
    'Design Critique',
    'Design Team Process',

    // Accessibility Focus
    'Accessible Design Article',
    'Inclusive Design Essays',
    'WCAG Guidelines',
    'Color Accessibility',

    // Creator
    'Oğuzhan Özcan Blog',
    'Product Design Insights',
    'Design Engineering Article',
  ].join(', '),
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  category: 'portfolio',
};

export default function Articles() {
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
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Case Studies"
        />
        <MenuItem
          to="/ideas"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 "
          title="Ideas"
        />
        <MenuItem
          to="/articles"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900 bg-emerald-200 hover:bg-emerald-200 cursor-default"
          title="Articles"
        />
      </div>

      <div className="PageHero flex flex-col p-8 lg:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Articles
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Essays and articles on design systems, accessibility, and design-to-code workflows. I
          write to clarify my thinking and share what I learn with the community.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          className="border-b-0"
          direction="left"
          cardTitle="Component Design for JavaScript Frameworks"
          cardContent="Learn how to design UI components that are developer-friendly by following simple rules for auto-layout, meaningful layer names, and component-driven design principles."
          tags={[
            {
              label: 'Article',
              type: 'emerald',
              size: 'large',
            },
            {
              label: 'UI Component',
              type: 'outline',
              size: 'large',
            },
          ]}
          to="/articles/component-design-for-javascript-frameworks"
          swapContent={
            <div className="relative w-full  min-h-[400px]">
              <Image
                src="/img/thumbs/thumb-dev-friendly-component.svg"
                alt="Developer Friendly Component Design"
                fill
                className="object-contain"
                priority
              />
            </div>
          }
        />
      </div>

      <Footer />
    </div>
  );
}
