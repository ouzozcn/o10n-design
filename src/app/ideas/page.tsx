import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Ideas | Oğuzhan Özcan | Design Explorations & Concepts',
  description:
    'Design explorations and unrealized projects: Brifl (collaborative form builder with 30+ unique blocks for creatives), Jotform Logbook (internal tool for cross-team transparency). Ideas that shaped my design thinking—lessons from projects that never launched.',
  alternates: {
    canonical: 'https://o10n.design/ideas',
  },
  openGraph: {
    title: 'Ideas & Design Explorations | Oğuzhan Özcan',
    description:
      'Unrealized projects with real lessons: Brifl form builder, Jotform Logbook. What I learned from ideas that never launched—systems thinking, user research, and validation.',
    url: 'https://o10n.design/ideas',
    images: [
      {
        url: 'https://o10n.design/img/og_images/ideas_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Oğuzhan Özcan Design Ideas - Brifl & Jotform Logbook - o10n',
      },
    ],
    siteName: 'o10n.design',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideas & Design Explorations | Oğuzhan Özcan',
    description:
      'Projects that never launched but shaped how I design: Brifl (form builder for creatives), Jotform Logbook (internal transparency tool). Learning through exploration.',
    images: ['https://o10n.design/img/og_images/ideas_open_graph.png'],
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
    // Concept Types
    'Design Concepts',
    'Product Ideas',
    'Design Explorations',
    'Unrealized Projects',
    'Design Thinking',

    // Specific Projects
    'Brifl Form Builder',
    'Jotform Logbook',
    'Collaborative Form Tool',
    'Internal Company Tool',
    'Team Transparency Tool',

    // Design Approach
    'Concept Design',
    'Product Ideation',
    'Design Process',
    'User Research Process',
    'Systems Thinking',

    // Project Characteristics
    'Creative Tools Design',
    'Collaborative Software Design',
    'Open Source Design',
    'Side Projects',
    'Design Experiments',

    // Learning & Growth
    'Design Learning',
    'Design Failures',
    'Design Lessons',
    'Design Portfolio Process',
    'Product Validation',

    // Audience
    'Design for Creatives',
    'Tools for Designers',
    'Tools for Developers',
    'Tools for Writers',

    // Creator
    'Oğuzhan Özcan Ideas',
    'Design Innovation Projects',
  ].join(', '),
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  category: 'portfolio',
};

export default function Ideas() {
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
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-purple-200 hover:bg-purple-200 cursor-default"
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
          Ideas
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Projects that never launched—but shaped how I think. These explorations taught me systems
          thinking, user research, and the importance of validating ideas before building.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          direction="right"
          cardTitle="brifl: Empowering Creators with Collaborative Form Building"
          cardContent="A collaborative form builder designed for creatives—featuring 30+ specialized blocks for designers, developers, writers, and photographers. Never launched, but it taught me how to design systems for diverse workflows."
          tags={[
            {
              label: 'Idea',
              type: 'purple',
              size: 'large',
            },
          ]}
          to="/ideas/brifl"
          swapContent={
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/img/thumbs/thumb-brifl2.svg"
                alt="Brifl Form Building Tool"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
        />
        <RowCard
          className="border-b-0"
          direction="left"
          cardTitle="Jotform Logbook | An internal tool for better company awareness"
          cardContent="An internal tool concept for cross-team transparency at Jotform. Logbook lets teams log work-in-progress, share updates, and reduce duplicated efforts—addressing a real problem I observed in a 600+ person company."
          tags={[
            {
              label: 'Idea',
              type: 'purple',
              size: 'large',
            },
            {
              label: 'Company Awareness',
              type: 'outline',
              size: 'large',
            },
          ]}
          to="/ideas/jotform-logbook"
          swapContent={
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/img/thumbs/thumb-logbook.svg"
                alt="Jotform Logbook Internal Tool"
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
