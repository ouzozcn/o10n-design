import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import RowCard from '@/components/RowCard';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products | Oğuzhan Özcan',
  description:
    "Products and tools I've built: Kroma (free color blindness accessibility checker for UI designers), Brifl Design System (30+ React components with 200+ variants), and other design engineering experiments.",
  alternates: {
    canonical: 'https://o10n.design/product',
  },
  openGraph: {
    title: 'Products | Oğuzhan Özcan',
    description:
      "Explore the products I've worked on including Kroma color accessibility checker and Brifl Design System. See my portfolio of design and development projects.",
    url: 'https://o10n.design/product',
    images: 'https://o10n.design/img/og_images/products_open_graph.png',
    siteName: 'o10n.design',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Oğuzhan Özcan',
    description:
      "Explore the products I've worked on including Kroma color accessibility checker and Brifl Design System. See my portfolio of design and development projects.",
    images: 'https://o10n.design/img/og_images/products_open_graph.png',
  },
  keywords:
    'Color Blindness Tool, Accessibility Checker, Design System, React Components, UI Component Library, Kroma Accessibility, Brifl Design System, Design Engineering Projects, Product Designer Portfolio, Open Source Design Tools, Figma Components, Frontend Design Tools, Design System Architecture, Component Design, Accessibility Tools for Designers',
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

export default function Products() {
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
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-red-200 hover:bg-red-200 cursor-default"
          title="Products"
        />
        <MenuItem
          to="/case-study"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
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

      <div className="PageHero flex flex-col p-8 lg:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Products
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Tools and systems I've built to solve real problems—from accessibility checkers to full
          design systems. Each project reflects my commitment to open design, usability, and
          technical craftsmanship.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          direction="left"
          cardTitle="Kroma | Color Blindness Accessibility Checker for User Interfaces"
          cardContent="A free, no-limits color blindness accessibility checker built for UI designers and developers. Kroma simulates 8 types of color vision deficiency—helping you design interfaces everyone can use."
          tags={[
            {
              label: 'Product',
              type: 'red',
              size: 'large',
            },
            {
              label: 'Accessibility (a11y)',
              type: 'outline',
              size: 'large',
            },
          ]}
          to="/product/kroma"
          swapContent={
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/img/thumbs/thumb-kroma2.svg"
                alt="Kroma Color Accessibility Checker"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
        />
        <RowCard
          direction="right"
          cardTitle="Brifl Design System"
          cardContent="A modular, React-friendly component library based on atomic design principles. Contains over 30 components and 200+ states and variants."
          tags={[
            {
              label: 'Product',
              type: 'red',
              size: 'large',
            },
            {
              label: 'Design System',
              type: 'outline',
              size: 'large',
            },
          ]}
          to="/product/brifl-design-system"
          swapContent={
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/img/thumbs/thumb-briflds.svg"
                alt="Brifl Design System"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
          className="border-b-0"
        />
      </div>

      <Footer />
    </div>
  );
}
