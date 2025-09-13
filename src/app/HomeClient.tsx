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

export default function HomeClient() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <h1 className="sr-only">
        Oğuzhan Özcan - Product Designer | Analytics and Data-Driven Design
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
            className="lg:h-[268px] border-stone-900"
            title="Case Studies"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/caseStudyIcon.svg"
                  alt="Case Studies Icon"
                  width={1}
                  height={iconConfig.lg.height}
                  style={{ height: iconConfig.lg.height, width: 'auto' }}
                  data-tooltip-id="case-study-tooltip"
                  data-tooltip-content="Braille letter C – represents Case Studies"
                  data-tooltip-place="right"
                />
                <Tooltip id="case-study-tooltip" />
              </>
            }
          />

          <MenuItem
            to="/ideas"
            className="lg:h-[268px] border-stone-900"
            title="Ideas"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/ideaIcon.svg"
                  alt="Ideas Icon"
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
            className="lg:h-[268px] border-stone-900"
            title="Experiments"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/experimentIcon.svg"
                  alt="Experiments Icon"
                  width={1}
                  height={iconConfig.lg.height}
                  style={{ height: iconConfig.lg.height, width: 'auto' }}
                  data-tooltip-id="experiment-tooltip"
                  data-tooltip-content="Braille letter E – represents Experiments"
                  data-tooltip-place="right"
                />
                <Tooltip id="experiment-tooltip" />
              </>
            }
          />
        </nav>
      </div>

      <main className="flex flex-col w-full">
        <section className="flex flex-col w-full">
          <RowCard
            direction="left"
            cardTitle="Kroma | Color Blindness Accessibility Checker for User Interfaces"
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
          <RowCard
            direction="left"
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
            direction="right"
            cardTitle="Brifl Design System"
            cardContent="Allowing users to manage their integrations in one place by building an integration hub which increased user retention by 40% within six months."
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
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
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
