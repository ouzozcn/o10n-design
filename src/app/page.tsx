'use client';
import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import MenuItem from '@/components/MenuItem';
import InfoCard from '@/components/InfoCard';
import RowCard from '@/components/RowCard';
import Footer from '@/components/Footer';
import TopDivider from '@/components/TopDivider';
import { Analytics } from '@vercel/analytics/react';

const iconConfig = {
  sm: { height: 24, sizes: '24px' },
  md: { height: 32, sizes: '32px' },
  lg: { height: 72, sizes: '72px' },
};

export default function Home() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <h1 className="sr-only">
        Oğuzhan Özcan - Product Designer Portfolio | Analytics and Data-Driven Design
      </h1>

      <TopDivider />

      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-auto h-full lg:h-[536px] lg:border-b border-stone-900">
          <InfoCard />
        </div>

        <nav className="grid grid-cols-2 w-full" aria-label="Portfolio Navigation">
          <h2 className="sr-only">Portfolio Sections</h2>

          <MenuItem
            to="/product"
            className="lg:h-[268px] border-stone-900"
            title="Products"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/productIcon.svg"
                  alt="Products Icon"
                  width={1}
                  height={iconConfig.lg.height}
                  style={{ height: iconConfig.lg.height, width: 'auto' }}
                  data-tooltip-id="product-tooltip"
                  data-tooltip-content="Braille letter P – represents Products"
                  data-tooltip-place="right"
                />
                <Tooltip id="product-tooltip" />
              </>
            }
          />
          <MenuItem
            to="/case-study"
            className="lg:h-[268px] border-r-0"
            title="Case Studies"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/caseStudyIcon.svg"
                  alt="case studies"
                  width={1}
                  height={iconConfig.lg.height}
                  style={{ height: iconConfig.lg.height, width: 'auto' }}
                  data-tooltip-id="case-study-tooltip"
                  data-tooltip-content="Braille letters C and S – represent Case Studies"
                  data-tooltip-place="left"
                />
                <Tooltip id="case-study-tooltip" />
              </>
            }
          />
          <MenuItem
            to="/ideas"
            className="lg:h-[268px]"
            title="Ideas"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/ideaIcon.svg"
                  alt="ideas"
                  width={1}
                  height={iconConfig.lg.height}
                  style={{ height: iconConfig.lg.height, width: 'auto' }}
                  data-tooltip-id="idea-tooltip"
                  data-tooltip-content="Braille letter I – represents Ideas"
                  data-tooltip-place="right"
                />
                <Tooltip id="idea-tooltip" />
              </>
            }
          />
          <MenuItem
            to="/experiment"
            className="lg:h-[268px] border-r-0"
            title="Experiments"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/experimentIcon.svg"
                  alt="experiments logo"
                  width={1}
                  height={iconConfig.lg.height}
                  style={{ height: iconConfig.lg.height, width: 'auto' }}
                  data-tooltip-id="experiment-tooltip"
                  data-tooltip-content="Braille letter E – represents Experiments"
                  data-tooltip-place="left"
                />
                <Tooltip id="experiment-tooltip" />
              </>
            }
          />
        </nav>
      </div>

      <main className="flex flex-col place-items-start">
        <h2 className="sr-only">Featured Projects and Work</h2>

        <section className="w-full" aria-labelledby="security-project-heading">
          <h3 id="security-project-heading" className="sr-only">
            Two-Factor Authentication Implementation at Jotform
          </h3>
          <RowCard
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
              <Image
                src="/img/thumbs/thumb-jf2fa.svg"
                alt="Jotform 2FA implementation preview showing security interface"
                width={1}
                height={1}
                className="w-full h-full object-contain w-[90%]"
              />
            }
          />
        </section>

        <section className="w-full" aria-labelledby="logbook-project-heading">
          <h3 id="logbook-project-heading" className="sr-only">
            Jotform Logbook - Internal Company Awareness Tool
          </h3>
          <RowCard
            direction="right"
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
              <Image
                src="/img/thumbs/thumb-logbook.svg"
                alt="Jotform Logbook interface showing company updates and notifications"
                width={1}
                height={1}
                className="w-full h-full object-contain w-[110%]"
              />
            }
          />
        </section>

        <section className="w-full" aria-labelledby="kroma-project-heading">
          <h3 id="kroma-project-heading" className="sr-only">
            Kroma - Free Color Accessibility Checker Tool
          </h3>
          <RowCard
            direction="left"
            cardTitle="Kroma"
            cardContent="Kroma is a free color accessibility checker for those who works on the user interface. It's the only free tool which offer limitless color accessibility checks."
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
              <Image
                src="/img/thumbs/thumb-kroma2.svg"
                alt="Kroma accessibility checker interface showing color contrast validation"
                width={1}
                height={1}
                className="w-[70%]"
              />
            }
          />
        </section>

        <section className="w-full" aria-labelledby="brifl-project-heading">
          <h3 id="brifl-project-heading" className="sr-only">
            Brifl - Collaborative Form Building Tool
          </h3>
          <RowCard
            direction="right"
            cardTitle="Brifl: Empowering Creators with Collaborative Form Building"
            cardContent="An open-source tool designed for designers, developers, writers, and photographers to create, share, and analyze forms seamlessly."
            tags={[
              {
                label: 'Idea',
                type: 'purple',
                size: 'large',
              },
              {
                label: 'Form Builder',
                type: 'outline',
                size: 'large',
              },
            ]}
            to="/ideas/brifl"
            swapContent={
              <Image
                src="/img/thumbs/thumb-brifl2.svg"
                alt="Brifl form builder interface showing collaborative editing features"
                width={1}
                height={1}
                className="w-full h-full object-contain w-[120%]"
              />
            }
          />
        </section>

        <section className="w-full" aria-labelledby="design-system-heading">
          <h3 id="design-system-heading" className="sr-only">
            Brifl Design System - React Component Library
          </h3>
          <RowCard
            direction="left"
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
              <Image
                src="/img/thumbs/thumb-briflds.svg"
                alt="Brifl Design System components showcase displaying various UI elements"
                width={600}
                height={400}
                className="w-full h-full object-contain"
              />
            }
            className="border-b-0"
          />
        </section>

        <Footer />
        <Analytics />
      </main>
    </div>
  );
}
