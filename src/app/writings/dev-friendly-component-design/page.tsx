import type { Metadata } from 'next';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ThankYou from '@/components/ThankYou';
import Button from '@/components/Button';
import TopDivider from '@/components/TopDivider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
import Link from 'next/link';
import MetaInfo from '@/components/MetaInfo';
import TextLink from '@/components/TextLink';

export const metadata: Metadata = {
  title: 'Developer Friendly UI Component Design | Oguzhan Ozcan',
  description:
    'Learn how to design UI components that are developer-friendly by following simple rules for auto-layout, meaningful layer names, and component-driven design principles.',
  alternates: {
    canonical: 'https://o10n.design/writings/dev-friendly-component-design',
  },
  openGraph: {
    title: 'Developer Friendly UI Component Design | Oguzhan Ozcan',
    description:
      'Learn how to design UI components that are developer-friendly by following simple rules for auto-layout, meaningful layer names, and component-driven design principles.',
    url: 'https://o10n.design/writings/dev-friendly-component-design',
  },
};

export default function DevFriendlyComponentDesign() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            Developer Friendly UI Component Design
          </h1>
          <Button
            label="See GitHub Repo"
            type="secondary"
            size="medium"
            endIcon={<ArrowOutwardIcon />}
            to="http://github.com/ouzozcn/Solart"
            target="_blank"
          />
        </div>
      </div>
      <div className="PageImage flex p-8 w-full h-60 md:h-auto bg-cyan-50 border-b border-stone-900 justify-center items-center gap-4">
        <Image
          src="/img/hero/hero-dev-friendly-comp.svg"
          alt="Developer Friendly Component Design Thumbnail"
          width={1200}
          height={600}
          className="drop-shadow-lg"
        />
      </div>
      <div className="PageContent flex flex-col w-full h-full gap-4 p-8 border-b border-stone-900">
        <div className="PageMeta flex flex-col w-full h-full gap-2">
          <div className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans">
            Developer Friendly UI Component Design
          </div>
        </div>
      </div>

      <div className="SummaryContent flex w-full  p-4 md:px-32 md:py-8 text-xl items-center justify-center text-center font-regular text-stone-900">
        As we product and user interface designers working on the front-end environment, our
        end-products define the development effort. We, designers, can reduce the development effort
        by just simply following some simple rules. Frames th2at we use defines the HTML structure,
        where frame names actually equals to corresponding CSS class. Today, Figma allow us to
        define properties, states, actions of a component while designing where Component Driven
        Design is gaining popularity within the design world. Figma Dev Mode is a trending product
        among developers while developing components and interfaces. Hand-off tools like Zeplin
        allow to view specs of a UI element. Component Driven Design approach requires well-taught
        component structures to implement widely in digital products. I believe, as a designer, it
        is my responsibility to think about my component’s development process which is also help
        development team the reduce their effort.
      </div>

      <div className="BlogBody flex flex-col md:flex-row gap-0 font-sans">
        <div className="BlogContentContainer flex flex-col w-full md:w-3/4  gap-4 md:border-r border-stone-900">
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle className="bg-amber-100" title="Using Proper Auto-Layout with Frames" />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-4 items-center justify-center">
              <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Our goal was to improve account security with an additional layer of
                  authentication—without creating friction or drop-off in user experience. We needed
                  a solution that served both our individual (B2C) users and our enterprise clients
                  with scalable and customizable options.
                </p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle className="bg-amber-100" title="Giving Meaningful Layer Names" />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-4 items-center justify-center">
              <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Our goal was to improve account security with an additional layer of
                  authentication—without creating friction or drop-off in user experience. We needed
                  a solution that served both our individual (B2C) users and our enterprise clients
                  with scalable and customizable options.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="BlogSideBar flex flex-col p-8 items-start justify-start gap-4 w-full md:w-1/4 bg-amber-50 md:border-t border-stone-900">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-center text-stone-900">Table of Contents</p>
          </div>
          <div className="flex flex-col pl-4 gap-4">
            <TextLink label="Introduction" to="#introduction" />
            <TextLink label="The Challenge" to="#the-challenge" />
            <TextLink label="The Solution" to="#the-solution" />
            <TextLink label="The Result" to="#the-result" />
            <TextLink label="Conclusion" to="#conclusion" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
