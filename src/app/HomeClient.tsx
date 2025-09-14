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
import GitHubCalendar from 'react-github-calendar';
import Button from '@/components/Button';
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
            className="lg:h-[268px] border-stone-900 md:border-r-0"
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
            className="lg:h-[268px] border-stone-900 md:border-r-0"
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
              <Image
                src="/img/thumbs/thumb-kroma2.svg"
                alt="Kroma accessibility checker interface showing color contrast validation"
                width={1}
                height={1}
                className="w-[70%]"
              />
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
              <Image
                src="/img/thumbs/thumb-jf2fa.svg"
                alt="Jotform 2FA implementation preview showing security interface"
                width={1}
                height={1}
                className="h-full object-contain w-[90%]"
              />
            }
          />
          <div className="activity__map relative flex flex-col gap-8 w-full h-auto lg:min-h-[600px] p-12 md:p-16 justify-center items-center border-b border-stone-900 hover:bg-zinc-50 transition-all duration-300">
            <div className="text-stone-900 text-xl text-center font-sans font-normal lg:text-3xl">
              Bridging Design & Development
            </div>
            <div className="text-stone-900 text-sm text-center font-normal font-sans lg:text-base">
              As I transition from product designer to design engineer, I'm actively building my
              technical skills through consistent coding practice. This GitHub activity
              visualization reflects my commitment to mastering front-end development while
              maintaining my design perspective—creating experiences that are both beautiful and
              functionally robust.
            </div>

            <div>
              <GitHubCalendar
                username="ouzozcn"
                blockSize={16}
                blockRadius={1}
                colorScheme="light"
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    'data-tooltip-id': 'github-activity',
                    'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
                  })
                }
                theme={{
                  light: ['#f5f5f4', '#d6d3d1', '#78716c', '#44403c', '#1c1917'],
                  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
                }}
              />
              <Tooltip id="github-activity" />
            </div>
            <Button
              label="Let's Connect on GitHub"
              to="https://github.com/ouzozcn"
              target="_blank"
              type="secondary"
              endIcon={
                <Image src="/assets/images/github.svg" alt="GitHub" width={24} height={24} />
              }
              ariaLabel="Button for Oğuzhan Özcan's GitHub Profile"
            />
          </div>

          <RowCard
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
              <Image
                src="/img/thumbs/thumb-logbook.svg"
                alt="Jotform Logbook interface showing company updates and notifications"
                width={1}
                height={1}
                className="h-full object-contain w-[110%]"
              />
            }
          />
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
              <Image
                src="/img/thumbs/thumb-brifl2.svg"
                alt="Brifl form builder interface showing collaborative editing features"
                width={1}
                height={1}
                className=" h-full object-contain w-[120%]"
              />
            }
          />
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
