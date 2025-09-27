import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Ideas | Oğuzhan Özcan',
  description:
    'Explorations and unrealized projects: Brifl (collaborative form builder with 30+ unique blocks for creatives), Jotform Logbook (internal tool for cross-team awareness), and other design concepts. Ideas that shaped my thinking—even if they never launched.',
  alternates: {
    canonical: 'https://o10n.design/ideas',
  },
  openGraph: {
    title: 'Ideas | Oğuzhan Özcan',
    description:
      'Explorations and unrealized projects: Brifl (collaborative form builder with 30+ unique blocks for creatives), Jotform Logbook (internal tool for cross-team awareness), and other design concepts. Ideas that shaped my thinking—even if they never launched.',
    url: 'https://o10n.design/ideas',
    images: 'https://o10n.design/img/og_images/ideas_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideas | Oğuzhan Özcan',
    description:
      'Explorations and unrealized projects: Brifl (collaborative form builder with 30+ unique blocks for creatives), Jotform Logbook (internal tool for cross-team awareness), and other design concepts. Ideas that shaped my thinking—even if they never launched.',
    images: 'https://o10n.design/img/og_images/ideas_open_graph.png',
  },
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
  keywords:
    'Design Concepts, Product Ideas, Design Explorations, Unrealized Projects, Design Thinking, Concept Design, Product Ideation, Design Process, Creative Tools Design, Collaborative Tools, Form Builder Design, Internal Tools Design, Design Experiments, Side Projects, Design Portfolio Ideas, Product Design Concepts, UX Explorations, Design Innovation, Speculative Design, Design Research Projects',
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
          to="/writings"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="Writings"
        />
      </div>

      <div className="PageHero flex flex-col p-8 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Ideas
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Here are some of the Ideas I&apos;ve worked on.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          direction="right"
          cardTitle="brifl: Empowering Creators with Collaborative Form Building"
          cardContent="An open-source tool designed for designers, developers, writers, and photographers to create, share, and analyze forms seamlessly."
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
          cardContent="Jotform Logbook is an internal tool that helps Jotformers to be aware of what's happening in the company. It's a simple tool that helps us to be more transparent and aware of what's happening in the company."
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
