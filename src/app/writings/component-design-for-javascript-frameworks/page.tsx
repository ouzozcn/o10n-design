import type { Metadata } from 'next';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ThankYou from '@/components/ThankYou';
import Button from '@/components/Button';
import TopDivider from '@/components/TopDivider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BookIcon from '@mui/icons-material/Book';
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';
import Image from 'next/image';
import Link from 'next/link';
import MetaInfo from '@/components/MetaInfo';
import TextLink from '@/components/TextLink';
import SwapContent from '@/components/SwapContent';
import ContentCard from '@/components/ContentCard';
import InfoContainer from '@/components/InfoContainer';
export const metadata: Metadata = {
  title: 'Component Design for JavaScript Frameworks | Design to Code Best Practices',
  description:
    'Learn how to design UI components that are developer-friendly by following simple rules for auto-layout, meaningful layer names, and component-driven design principles.',
  alternates: {
    canonical: 'https://o10n.design/writings/dev-friendly-component-design',
  },
  openGraph: {
    title: 'Component Design for JavaScript Frameworks | Design to Code Best Practices',
    description:
      'Practical guide to designing components that translate seamlessly from Figma to code. Auto-layout best practices, naming conventions, and handoff strategies.',
    url: 'https://o10n.design/writings/dev-friendly-component-design',
    images: 'https://o10n.design/img/og_images/compforjs_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Component Design for JavaScript Frameworks | Design to Code Best Practices',
    description:
      'Practical guide to designing components that translate seamlessly from Figma to code. Auto-layout best practices, naming conventions, and handoff strategies.',
    images: 'https://o10n.design/img/og_images/compforjs_open_graph.png',
  },
  robots: 'index, follow',
  keywords:
    'Component Design, JavaScript Frameworks, Figma to Code, Auto-Layout Best Practices, UI Component Naming Conventions, Design Handoff, Frontend Development, Design Systems, React Components, Storybook, CSS Class Naming, Web Development, UX/UI Design, Product Design, Design to Development Workflow, Accessible Design, Responsive Design, Developer Experience, Code-Ready Designs',
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

export default function ComponentDesignForJavaScriptFrameworks() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            Component Design for JavaScript Frameworks
          </h1>
          <Button
            label="Storybook Repo"
            type="secondary"
            size="medium"
            endIcon={<ArrowOutwardIcon />}
            to="http://o10n.design/docs/index.html?path=/docs/components-button--docs"
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
            Component Design for JavaScript Frameworks: <br /> A Designer's Guide to
            Developer-Friendly Components
          </div>
        </div>
      </div>

      <div className="SummaryContent flex flex-col w-full  lg:gap-6 p-4 md:px-16 md:py-8 text-xl items-center justify-center text-start font-regular text-stone-900">
        <p>
          A decade ago, UI designers relied on Photoshop for interface design. In the 2010s, Sketch
          emerged as a Mac-exclusive option, though its paid model limited widespread adoption. Many
          of us started with Adobe XD, which introduced component concepts but lacked robust
          property management. Tools like InVision, Origami Studio, and Axure RP existed but proved
          too complex for junior designers.
        </p>
        <div className="SwapContentPlaceholder w-full">
          <SwapContent label="Placeholder" className="w-full" />
        </div>
        <p>
          Today's landscape has transformed dramatically. Modern tools like Figma enable designers
          to create sophisticated component structures with properties (strings, booleans,
          instances) that directly translate to frontend code. The gap between design and
          development continues to narrow—I believe that within a few years, UI/UX Designer and
          Frontend Developer roles will merge into a single, highly valuable position.
        </p>
        <div className="SwapContentPlaceholder w-full">
          <SwapContent label="Placeholder" className="w-full" />
        </div>
        <p>
          This evolution has fundamentally changed the designer-developer relationship. Where we
          once handed off static mockups, today we deliver living component systems that mirror
          production code. Understanding this shift is essential for modern product designers.
        </p>
        <ContentCard
          color="lime"
          content="This is a default content card with a clean, modern design. Perfect for displaying important information or announcements."
          title="Welcome to Our Platform"
        />
        <p>
          This article will guide you through designing components that seamlessly integrate with
          modern JavaScript frameworks like React, Vue, Angular, and Svelte—reducing development
          effort and improving collaboration regardless of the tech stack your team uses.
        </p>
      </div>

      <div className="BlogBody flex flex-col md:flex-row gap-0 font-sans">
        <div className="BlogContentContainer flex flex-col w-full md:w-3/4  gap-4 md:border-r border-stone-900">
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle
              title="1. Understanding Components and Properties"
              className="bg-violet-100"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  A component is a single, reusable UI element within a product, a building block
                  that can be used repeatedly with different configurations. This concept mirrors
                  both design systems and code architecture.
                </p>
                <h2 className="SectionImage w-full flex font-bold text-start ">
                  Component hierarchy follows atomic design principles:
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-4 marker:text-stone-600">
                  <li>
                    <b>Atoms</b> – Basic elements (buttons, inputs, icons)
                  </li>
                  <li>
                    <b>Molecules</b> – Simple combinations (search bar = input + button)
                  </li>
                  <li>
                    <b>Organisms</b> – Complex sections (navigation header, product card)
                  </li>
                  <li>
                    <b>Templates</b> – Page-level layouts
                  </li>
                  <li>
                    <b>Pages</b> – Specific instances with real content
                  </li>
                </ul>

                <InfoContainer
                  color="teal"
                  icon={<BookIcon />}
                  content="Learn more about atomic design principles and how to apply them in your work. Visit the Brad Frost's Atomic Design website for a comprehensive guide."
                  to="https://atomicdesign.bradfrost.com/?utm_source=o10n-blog&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2025100505"
                  target="_blank"
                  className="my-4"
                />

                <h2 className="SectionImage w-full flex font-bold text-start ">
                  Common component examples:
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-4 marker:text-stone-600">
                  <li>
                    <b>Buttons:</b> primary, secondary, icon buttons
                  </li>
                  <li>
                    <b>Input fields:</b> text, password, search, textarea
                  </li>
                  <li>
                    <b>Cards:</b> product cards, user cards, content cards
                  </li>
                  <li>
                    <b>Navigation elements:</b> tabs, breadcrumbs, dropdown menus
                  </li>
                  <li>
                    <b>Modals and dialogs:</b> confirmation dialogs, alert modals
                  </li>
                  <li>
                    <b>Form elements:</b> checkboxes, radio buttons, toggles
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle title="1.1 The Universal Component Model" />
            <div className="flex flex-col md:flex-row gap-12 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Despite syntactic differences, all modern JavaScript frameworks share a common
                  component-based architecture:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-4 marker:text-stone-600 ">
                  <li>
                    <b>Props/Properties:</b> Data passed from parent to child components
                  </li>
                  <li>
                    <b>State:</b> Internal component data that triggers re-renders
                  </li>
                  <li>
                    <b>Events:</b> User interactions that trigger functions
                  </li>
                  <li>
                    <b>Composition:</b> Nesting components to build complex UIs
                  </li>
                </ul>
                <div className="SwapContentPlaceholder w-full">
                  <SwapContent label="Placeholder" className="w-full" />
                </div>
                <p>
                  When you design components with these universal concepts in mind, your work
                  translates smoothly across any framework. A well-designed button in Figma becomes
                  an equally well-implemented button in React, Vue, Angular, or Svelte.
                </p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle title="1.2 What is a Property?" />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  <b>Properties (props)</b> define a component's identity and characteristics.
                  Consider a car analogy: it has properties like brand, model, year, and passenger
                  capacity—each serving a specific purpose.
                </p>{' '}
                <br />
                <p>Similarly, a button component might have properties like:</p>
                <ul className="list-disc list-inside ml-4 mt-4 space-y-4 marker:text-stone-600">
                  <li>
                    <code>
                      <b>label</b>
                    </code>{' '}
                    (string) : The button text
                  </li>
                  <li>
                    <code>
                      <b>type</b>
                    </code>{' '}
                    (variant) : primary | secondary | tertiary
                  </li>
                  <li>
                    <code>
                      <b>size</b>
                    </code>{' '}
                    (variant) : small | medium | large
                  </li>
                  <li>
                    <code>
                      <b>isDisabled</b>
                    </code>{' '}
                    (boolean) : Whether the button is interactive
                  </li>
                  <li>
                    <code>
                      <b>isLoading</b>
                    </code>{' '}
                    (boolean) : Shows loading spinner
                  </li>
                  <li>
                    <code>
                      <b>startIcon</b>
                    </code>{' '}
                    (component instance) : Optional icon before text
                  </li>
                  <li>
                    <code>
                      <b>endIcon</b>
                    </code>{' '}
                    (component instance) : Optional icon after text
                  </li>
                  <li>
                    <code>
                      <b>onClick</b>
                    </code>{' '}
                    (action) : What happens when clicked
                  </li>
                </ul>
                <div className="lg:mx-8 ">
                  <InfoContainer
                    color="amber"
                    icon={<GamepadRoundedIcon />}
                    content="Try button properties on the Storybook Playground"
                    to="/docs/index.html?path=/docs/components-button--docs"
                    target="_blank"
                    className="  mt-6 mb-4"
                  />
                </div>
                <p>
                  These properties map directly to React/Vue/Angular/Svelte props and make
                  components flexible, reusable, and maintainable.
                </p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle
              title="2. The Four Pillars of Developer-Friendly Components"
              className="bg-violet-100"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Designing components that developers can efficiently implement requires mastering
                  four fundamental principles:
                </p>
                <ul className="list-disc list-inside ml-4 my-4 space-y-4 marker:text-stone-600">
                  <li>
                    <b>Structure & Naming:</b> Using Auto-Layout and meaningful frame names to
                    define HTML structure
                  </li>
                  <li>
                    <b>Properties & Props:</b> Establishing clear, developer-friendly component
                    properties
                  </li>
                  <li>
                    <b>Tokenization:</b> Applying design tokens for scalable theming
                  </li>
                  <li>
                    <b>Interaction:</b> Prototyping behaviors and states
                  </li>
                </ul>
                <p>Let's explore each pillar in depth.</p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle title="2.1 Structure & Naming" />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  In this section, we'll cover best practices for structuring components using
                  <b> Auto-Layout in Figma</b> and naming conventions that translate seamlessly to
                  HTML/CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle
              title="2.1.A Using Proper Auto-Layout with Frames in Figma"
              className="bg-amber-100 important"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Figma offers two ways to nest objects: <b>Groups</b> and <b>Frames</b>. Groups are
                  the traditional Adobe-style approach, while Frames unlock Figma's powerful
                  <b> Auto-Layout</b> feature.
                </p>
                <SwapContent label="Placeholder" className="w-full" />
                <p>
                  Auto-Layout in Figma directly corresponds to CSS Flexbox properties. When you
                  configure Auto-Layout settings in Figma, you're essentially defining:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-4 marker:text-stone-600">
                  <li>
                    <code>display: flex</code> or <code>display: inline-flex</code>
                  </li>
                  <li>
                    <code>flex-direction: row</code> or <code>flex-direction: column</code>
                  </li>
                  <li>
                    <code>justify-content</code> and <code>align-items</code> values
                  </li>
                  <li>
                    <code>gap</code> for spacing between children
                  </li>
                  <li>
                    <code>padding</code> for internal spacing
                  </li>
                  <li>
                    <code>width: auto</code> (hug contents) or <code>width: 100%</code> (fill
                    container)
                  </li>
                </ul>
                <SwapContent label="Placeholder" className="w-full" />
                <InfoContainer
                  color="teal"
                  icon={<ArrowOutwardIcon />}
                  content="Learn more about Figma Auto-Layout and how it maps to CSS Flexbox. Visit the Figma Help Center for a comprehensive guide."
                  to="https://help.figma.com/hc/en-us/articles/360040451373-Create-designs-with-Auto-Layout?utm_source=o10n-blog&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2025100505"
                  target="_blank"
                  className="my-4"
                />
                <p>
                  Your frame structure defines the HTML structure. Each frame typically becomes an
                  HTML element (most commonly a <code>{'<div>'}</code> container, but could be{' '}
                  <code>{'<button>'}</code>, <code>{'<section>'}</code>, <code>{'<header>'}</code>,{' '}
                  <code>{'<nav>'}</code>, or <code>{'<article>'}</code> depending on semantic
                  meaning). Therefore, using the minimum necessary frames helps developers create
                  cleaner, more maintainable code.
                </p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle title="{title}" />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
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
            <TextLink label="Understanding Components and Properties" to="#introduction" />
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
