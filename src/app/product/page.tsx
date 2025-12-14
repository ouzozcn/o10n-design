import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import RoughAnnotate from '@/components/rough-notation/RoughAnnotate';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import KromaSimulator from '@/components/examples/KromaSimulator';
import BriflDSSample from '@/components/examples/BriflDSSample';
export const metadata: Metadata = {
  title: 'Products | Oğuzhan Özcan | Design Tools & Systems',
  description:
    "Products and design tools I've built: Kroma (free color blindness accessibility checker used by designers worldwide) and Brifl Design System (30+ React components with 200+ variants). Open-source tools for accessible, developer-friendly design.",
  alternates: {
    canonical: 'https://o10n.design/product',
  },
  openGraph: {
    title: 'Products & Design Tools | Oğuzhan Özcan',
    description:
      'Kroma: Free accessibility checker for UI designers. Brifl Design System: 30+ React components. Tools built to solve real design problems.',
    url: 'https://o10n.design/product',
    images: [
      {
        url: 'https://o10n.design/img/og_images/products_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Oğuzhan Özcan Product Portfolio - Kroma & Brifl Design System - o10n',
      },
    ],
    siteName: 'o10n.design',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products & Design Tools | Oğuzhan Özcan',
    description:
      'Free accessibility tools & design systems: Kroma (color blindness checker) and Brifl (30+ React components). Built for designers and developers.',
    images: ['https://o10n.design/img/og_images/products_open_graph.png'],
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
    // Product Names
    'Kroma',
    'Kroma Accessibility',
    'Brifl Design System',
    'Color Blindness Checker',
    'Accessibility Checker',

    // Product Types
    'Design Tools',
    'Accessibility Tools',
    'Design System',
    'UI Component Library',
    'React Components',

    // Use Cases
    'Color Accessibility Testing',
    'UI Accessibility Checker',
    'Free Accessibility Tools',
    'Design System Architecture',
    'Component Design',

    // Technical
    'Figma Components',
    'React Design System',
    'Frontend Design Tools',
    'Atomic Design',
    'Design Tokens',

    // Audience
    'Tools for UI Designers',
    'Tools for Frontend Developers',
    'Open Source Design Tools',
    'Free Design Resources',

    // Creator
    'Oğuzhan Özcan Products',
    'o10n.design Products',
  ].join(', '),
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  category: 'portfolio',
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
          to="/articles"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="Articles"
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
        {/* Kroma Section Starts */}
        <div className="Kroma__Section group flex flex-col lg:flex-row lg:h-[600px] w-full  items-center justify-center border-b border-stone-900">
          <div className="Kroma__Placeholder w-full lg:w-1/2 ">
            <div className="flex flex-col w-full h-full p-4 lg:p-24 ">
              <KromaSimulator />
            </div>
          </div>
          <div className="Kroma__Text flex flex-col w-full lg:w-1/2 p-4 lg:p-20 gap-4">
            <h2 className="text-stone-900 text-xl lg:text-3xl text-start font-sans font-normal ">
              Kroma | Color Blindness Simulator
            </h2>
            <p className="text-stone-900 text-sm font-normal font-sans lg:text-base">
              A free, no-limits{' '}
              <RoughAnnotate
                type="highlight"
                color="#a7f3d0"
                padding={2}
                animationDuration={1200}
                showWhenVisible={true}
                delay={1000}
              >
                color blindness simulator
              </RoughAnnotate>{' '}
              built for UI designers and developers. Kroma simulates 8 types of color vision
              deficiency—helping you design interfaces everyone can use.
            </p>
            <div className="Section__Tags flex justify-start items-center gap-2 flex-wrap">
              <Tag label="Product" type="red" size="large" />
              <Tag label="Accessibility (a11y)" type="outline" size="large" />
            </div>
            <div className="flex justify-start items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200  ">
              <Button
                label="Explore Kroma"
                rounded={true}
                to="/product/kroma"
                target="_blank"
                type="primary"
                endIcon={<ArrowForwardRoundedIcon />}
              />
            </div>
          </div>
        </div>
        {/* Kroma Section Ends */}
        {/* Brifl DS Section Starts */}
        <div className="BriflDS__Section group flex flex-col lg:flex-row lg:h-[600px] w-full  items-center justify-center ">
          <div className="BriflDS__Text flex flex-col w-full lg:w-1/2 p-4 lg:p-20 gap-4 order-2 lg:order-1">
            <h2 className="text-stone-900 text-xl font-sans font-normal lg:text-3xl">
              brifl Design System
            </h2>
            <p className="text-stone-900 text-sm font-normal font-sans lg:text-base">
              A modular,{' '}
              <RoughAnnotate
                type="highlight"
                color="#a7f3d0"
                padding={2}
                animationDuration={1200}
                showWhenVisible={true}
                delay={1000}
              >
                React-friendly component library
              </RoughAnnotate>{' '}
              based on atomic design principles. Contains over 30 components and 200+ states and
              variants.
            </p>
            <div className="Section__Tags flex justify-start items-center gap-2 flex-wrap">
              <Tag label="Product" type="red" size="large" />
              <Tag label="Design System" type="outline" size="large" />
            </div>
            <div className="flex justify-start items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 ">
              <Button
                label="Explore brifl Design System"
                rounded={true}
                to="/product/brifl-design-system"
                target="_blank"
                type="primary"
                endIcon={<ArrowForwardRoundedIcon />}
              />
            </div>
          </div>
          <div className="BriflDS__Placeholder w-full lg:w-1/2 ">
            <div className="flex flex-col w-auto h-full p-4 lg:p-24 ">
              <BriflDSSample />
            </div>
          </div>
        </div>
        {/* Brifl DS Section Ends */}
      </div>

      <Footer />
    </div>
  );
}
