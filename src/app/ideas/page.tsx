import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import RoughAnnotate from '@/components/rough-notation/RoughAnnotate';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import BriflSample from '@/components/examples/BriflSample';
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
        {/* Jotform Logbook v2  Starts */}
        <div className="JotformLogbook__Section group flex flex-col lg:flex-row lg:h-[600px] w-full  items-center justify-center border-b border-stone-900">
          <div className="JotformLogbook__Placeholder w-full lg:w-1/2 ">
            <div className="flex flex-col w-full h-full p-4 lg:p-24 ">
              <Image
                src="/img/thumbs/thumb-logbook.svg"
                alt="Jotform Logbook interface showing company updates and notifications"
                width={1}
                height={1}
                className="h-full object-contain w-[110%]"
              />
            </div>
          </div>
          <div className="JotformLogbook__Text flex flex-col w-full lg:w-1/2 p-4 lg:p-20 gap-4">
            <h2 className="text-stone-900 text-xl lg:text-3xl text-start font-sans font-normal ">
              Jotform Logbook | An internal tool for better company awareness
            </h2>
            <p className="text-stone-900 text-sm font-normal font-sans lg:text-base">
              An internal tool concept for cross-team transparency at Jotform. Logbook lets teams
              log work-in-progress, share updates, and reduce duplicated efforts—addressing a real
              problem I observed in a 600+ person company.
            </p>
            <div className="Section__Tags flex justify-start items-center gap-2 flex-wrap">
              <Tag label="Idea" type="purple" size="large" />
              <Tag label="Company Awareness Product" type="outline" size="large" />
            </div>
            <div className="flex justify-start items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200  ">
              <Button
                label="Explore Jotform Logbook"
                rounded={true}
                to="/ideas/jotform-logbook"
                target="_blank"
                type="primary"
                endIcon={<ArrowForwardRoundedIcon />}
              />
            </div>
          </div>
        </div>
        {/* Jotform Logbook v2 Ends */}

        {/* Brifl v2 Section Starts */}
        <div className="Brifl__Section group flex flex-col lg:flex-row lg:h-[600px] w-full  items-center justify-center ">
          <div className="Brifl__Text flex flex-col w-full lg:w-1/2 p-4 lg:p-20 gap-4 order-2 lg:order-1">
            <h2 className="text-stone-900 text-xl font-sans font-normal lg:text-3xl">
              brifl | Collaborative Form Builder
            </h2>
            <p className="text-stone-900 text-sm font-normal font-sans lg:text-base">
              A collaborative form builder{' '}
              <RoughAnnotate
                type="box"
                color="#8b5cf6"
                padding={2}
                animationDuration={1200}
                showWhenVisible={true}
                delay={1000}
              >
                {' '}
                designed for creatives
              </RoughAnnotate>
              ,featuring 30+ specialized blocks for designers, developers, writers, and
              photographers. Never launched, but it taught me how to design systems for diverse
              workflows.
            </p>
            <div className="Section__Tags flex justify-start items-center gap-2 flex-wrap">
              <Tag label="Idea" type="purple" size="large" />
              <Tag label="Form Builder" type="outline" size="large" />
            </div>
            <div className="flex justify-start items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 ">
              <Button
                label="Explore brifl"
                rounded={true}
                to="ideas/brifl"
                target="_blank"
                type="primary"
                endIcon={<ArrowForwardRoundedIcon />}
              />
            </div>
          </div>
          <div className="Brifl__Placeholder w-full lg:w-1/2 ">
            <div className="flex flex-col w-auto h-full p-4 lg:p-24 ">
              <BriflSample />
            </div>
          </div>
        </div>
        {/* Brifl v2 Section Ends */}
      </div>

      <Footer />
    </div>
  );
}
