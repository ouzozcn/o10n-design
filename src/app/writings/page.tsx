import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Writings | Oğuzhan Özcan',
  description:
    'Articles and essays on product design, design systems, accessibility, and design engineering. Exploring developer-friendly components, design-to-code workflows, and building inclusive digital experiences.',
  alternates: {
    canonical: 'https://o10n.design/writings',
  },
  openGraph: {
    title: 'Writings | Oğuzhan Özcan',
    description:
      'Articles and essays on product design, design systems, accessibility, and design engineering. Exploring developer-friendly components, design-to-code workflows, and building inclusive digital experiences.',
    url: 'https://o10n.design/writings',
    images: 'https://o10n.design/img/og_images/writings_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writings | Oğuzhan Özcan',
    description:
      'Articles and essays on product design, design systems, accessibility, and design engineering. Exploring developer-friendly components, design-to-code workflows, and building inclusive digital experiences.',
    images: 'https://o10n.design/img/og_images/writings_open_graph.png',
  },
  keywords:
    'Design-to-Developer Handoff, Design Specs, Product Design Articles, Design Systems Writing, Accessibility Essays, Design Engineering Blog, UI Component Design Articles, Design to Code Articles, Developer Friendly Design Writing, Design Process Articles, UX Design Writing, SaaS Design Patterns, Frontend Design Blog, Design Thinking Essays, Component Architecture Writing, Design Handoff Best Practices, Design System Documentation, Design Leadership Writing, Product Design Process, Interface Design Articles, Design Collaboration Writing, Technical Design Writing, Design Strategy Essays, User Research Writing, Design Critique Articles, Design Tools Review, Figma Tips Articles, Storybook Documentation, React Component Design, Design Token Writing, Atomic Design Principles, Design System Governance',
  robots: 'index, follow',
};

export default function Writings() {
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
          to="/writings"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900 bg-emerald-200 hover:bg-emerald-200 cursor-default"
          title="Writings"
        />
      </div>

      <div className="PageHero flex flex-col p-8 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Writings
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Here are some of the Writings I&apos;ve posted on.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          className="border-b-0"
          direction="left"
          cardTitle="Developer Friendly Component Design"
          cardContent="Learn how to design UI components that are developer-friendly by following simple rules for auto-layout, meaningful layer names, and component-driven design principles."
          tags={[
            {
              label: 'Writing',
              type: 'emerald',
              size: 'large',
            },
            {
              label: 'UI Component',
              type: 'outline',
              size: 'large',
            },
          ]}
          to="/writings/developer-friendly-component-design"
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
