'use client';

import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import MenuItem from '@/components/MenuItem';
import InfoCard from '@/components/InfoCard';
import RowCard from '@/components/RowCard';
import Footer from '@/components/Footer';
import TopDivider from '@/components/TopDivider';
import GitHubCalendar from 'react-github-calendar';
import Button from '@/components/Button';
import RoughAnnotate from '@/components/rough-notation/RoughAnnotate';
import KromaSimulator from '@/components/examples/KromaSimulator';
import Tag from '@/components/Tag';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
const iconConfig = {
  sm: { height: 24, sizes: '24px' },
  md: { height: 32, sizes: '32px' },
  lg: { height: 72, sizes: '72px' },
};
/* Date formatter for GitHub Calendar */
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
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
            className="lg:h-[268px] border-r-0"
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
            to="/articles"
            className="lg:h-[268px] border-r-0 "
            title="Articles"
            titleClassName="text-md md:text-xl lg:text-2xl"
            svg={
              <>
                <Image
                  src="/img/articlesIcon.svg"
                  alt="Articles Icon"
                  width={1}
                  height={iconConfig.lg.height}
                  style={{ height: iconConfig.lg.height, width: 'auto' }}
                  data-tooltip-id="article-tooltip"
                  data-tooltip-content="Braille letter A – represents Articles"
                  data-tooltip-place="right"
                />
                <Tooltip id="article-tooltip" />
              </>
            }
          />
        </nav>
      </div>

      <main className="flex flex-col w-full">
        <section className="flex flex-col w-full">
          <div className="Kroma__Section flex flex-col lg:flex-row w-full  items-center justify-center border-b border-stone-900">
            <div className="Kroma__Placeholder w-full lg:w-1/2 ">
              <div className="flex flex-col w-full h-full p-4 lg:p-24 ">
                <KromaSimulator />
              </div>
            </div>
            <div className="Kroma__Text flex flex-col w-full lg:w-1/2 p-4 lg:p-20 gap-4">
              <h2 className="text-stone-900 text-xl font-sans font-normal lg:text-3xl">
                Kroma | Color Blindness Simulator
              </h2>
              <p className="text-stone-900 text-sm font-normal font-sans lg:text-base">
                A free, no-limits{' '}
                <RoughAnnotate type="underline" color="#02567fff" padding={2}>
                  color blindness simulator
                </RoughAnnotate>{' '}
                built for UI designers and developers. Kroma simulates 8 types of color vision
                deficiency—helping you design interfaces everyone can use.
              </p>
              <div className="Section__Tags flex justify-start items-center gap-2 flex-wrap">
                <Tag label="Product" type="red" size="large" />
                <Tag label="Accessibility (a11y)" type="outline" size="large" />
                <Tag
                  label="Read more"
                  type="lime"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                  to="/product/kroma"
                  target="_blank"
                  className="hover:bg-lime-200"
                />
              </div>
            </div>
          </div>
          <RowCard
            direction="left"
            cardTitle="Kroma | Color Blindness Simulator for User Interfaces"
            cardContent={
              <>
                A free, no-limits{' '}
                <RoughAnnotate type="underline" color="#02567fff" padding={2}>
                  color blindness accessibility checker
                </RoughAnnotate>{' '}
                built for UI designers and developers. Kroma simulates 8 types of color vision
                deficiency—helping you design interfaces everyone can use.
              </>
            }
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
            cardContent="Designed and launched Jotform's first two-factor authentication system—adopted by 15,000+ users with a 95% retention rate. A security feature that scaled across Web, Mobile, and Enterprise platforms."
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
          <div className="activity__map relative flex flex-col gap-8 w-full h-auto lg:min-h-[600px] p-12 md:p-16 justify-center items-center border-b bg-stone-800  border-stone-900  ">
            <div className="text-lime-200 text-xl text-center font-sans font-normal lg:text-3xl">
              My Design Engineer Journey
            </div>
            <div className="text-lime-50 text-sm text-center font-normal font-sans lg:text-base lg:px-24">
              I'm transitioning from product designer to design engineer{' '}
              <RoughAnnotate type="box" padding={2}>
                one commit at a time.
              </RoughAnnotate>
              This GitHub activity map reflects my daily practice: learning Front-End, building
              components, and mastering the tools that bridge design and code.
            </div>

            <div className="w-full overflow-x-auto">
              <div className="min-w-[500px] w-fit mx-auto flex justify-center">
                <GitHubCalendar
                  username="ouzozcn"
                  blockSize={20}
                  blockRadius={2}
                  colorScheme="dark"
                  renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                      'data-tooltip-id': 'github-activity',
                      'data-tooltip-html': `${activity.count} activities on ${formatDate(activity.date)}`,
                    })
                  }
                  theme={{
                    light: ['#f5f5f4', '#d6d3d1', '#78716c', '#44403c', '#1c1917'],
                    dark: ['#292524', '#54613D', '#81945D', '#B0C97F', '#D9F99D'],
                  }}
                />
                <Tooltip id="github-activity" />
              </div>
            </div>
            <Button
              label="Let's Connect on GitHub"
              to="https://github.com/ouzozcn"
              target="_blank"
              type="secondary"
              endIcon={
                <Image src="/assets/images/github_dark.svg" alt="GitHub" width={24} height={24} />
              }
              ariaLabel="Button for Oğuzhan Özcan's GitHub Profile"
              className="hover:bg-stone-900 connect-github-button"
            />
          </div>

          <RowCard
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
                label: 'Company Awareness Product',
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
            cardContent="A collaborative form builder designed for creatives—featuring 30+ specialized blocks for designers, developers, writers, and photographers. Never launched, but it taught me how to design systems for diverse workflows."
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
                width={1}
                height={1}
                className="h-full object-contain w-full"
                priority
              />
            }
            className="border-b-0"
          />
        </section>

        <Footer />
      </main>
    </div>
  );
}
