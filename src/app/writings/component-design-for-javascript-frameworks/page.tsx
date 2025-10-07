import type { Metadata } from 'next';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ThankYou from '@/components/ThankYou';
import Button from '@/components/Button';
import PageBreaker from '@/components/PageBreaker';
import Tag from '@/components/Tag';
import TopDivider from '@/components/TopDivider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BookIcon from '@mui/icons-material/Book';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import Image from 'next/image';
import Link from 'next/link';
import MetaInfo from '@/components/MetaInfo';
import TextLink from '@/components/TextLink';
import SwapContent from '@/components/SwapContent';
import ContentCard from '@/components/ContentCard';
import InfoContainer from '@/components/InfoContainer';
import IconButton from '@/components/IconButton';
import { Chip, Icon } from '@mui/material';

export const metadata: Metadata = {
  title: 'Component Design for JavaScript Frameworks | Design to Code Best Practices',
  description:
    'Learn how to design UI components that are js-friendly by following simple rules for auto-layout, meaningful layer names, and component-driven design principles.',
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
          <div
            id="introduction"
            className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans"
          >
            Component Design for JavaScript Frameworks: <br /> A Designer's Guide to JS-Friendly
            Components
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

        <p>
          This article will guide you through designing components that seamlessly integrate with
          modern JavaScript frameworks like React, Vue, Angular, and Svelte—reducing development
          effort and improving collaboration regardless of the tech stack your team uses.
        </p>
      </div>

      <div className="BlogBody flex flex-col md:flex-row gap-0 font-sans">
        <div className="BlogContentContainer flex flex-col w-full md:w-3/4  gap-4 md:border-r border-stone-900">
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="understanding-components-and-properties"
          >
            <SectionTitle
              title="1. Understanding Components and Properties"
              color="violet"
              sectionID="understanding-components-and-properties"
              className="md:sticky md:top-[87px] md:self-start"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Component__Samples flex flex-col  md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-60 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I am a primary button"
                    size="large"
                    className="rounded-full"
                    endIcon={<ArrowOutwardIcon />}
                  />
                  <Tag
                    className="h-[52px] p-4"
                    label="I am a tag"
                    size="large"
                    type="lime"
                    startIcon={<AutoAwesomeRoundedIcon />}
                  />
                  <IconButton
                    className="h-[52px] p-4"
                    type="secondary"
                    aria-label="I am an icon button"
                    size="large"
                    icon={<CodeRoundedIcon />}
                  />
                </div>
                <div className="flex w-full items-center justify-center">
                  <p className="text-sm text-stone-600 text-center mt-4 h-auto">
                    Button, Tag, and Icon-Button components
                  </p>
                </div>
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
                    <b>Atom:</b> Basic elements (buttons, inputs, icons)
                  </li>
                  <li>
                    <b>Molecules:</b> Simple combinations (search bar = input + button)
                  </li>
                  <li>
                    <b>Organisms:</b> Complex sections (navigation header, product card)
                  </li>
                  <li>
                    <b>Templates:</b> Page-level layouts
                  </li>
                  <li>
                    <b>Pages:</b> Specific instances with real content
                  </li>
                </ul>

                <InfoContainer
                  color="teal"
                  icon={<BookIcon />}
                  content="Learn more about atomic design principles and how to apply them in your work. Visit the Brad Frost's Atomic Design website for a comprehensive guide."
                  to="https://atomicdesign.bradfrost.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2025100505"
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
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="the-universal-component-model"
          >
            <SectionTitle
              title="1.1 The Universal Component Model"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
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
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="what-is-a-property"
          >
            <SectionTitle
              title="1.2 What is a Property?"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
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
                    content="Try Button component properties on the Storybook Playground"
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
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="the-fundamentals-of-js-friendly-components"
          >
            <SectionTitle
              title="2. The Fundamentals of JS-Friendly Components"
              color="violet"
              className="md:sticky md:top-[87px] md:self-start"
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
                    <b>Properties & Props:</b> Establishing clear, js-friendly component properties
                  </li>
                  <li>
                    <b>Tokenization:</b> Applying design tokens for scalable theming
                  </li>
                  <li>
                    <b>Interaction:</b> Prototyping behaviors and states
                  </li>
                </ul>
                <p>Let's explore each principle in depth.</p>
              </div>
            </div>
          </div>
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="structure-naming"
          >
            <SectionTitle
              title="2.1 Structure & Naming"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
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
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="using-proper-auto-layout-with-frames-in-figma"
          >
            <SectionTitle
              title="2.2 Using Proper Auto-Layout with Frames in Figma"
              color="neutral"
              className="md:sticky md:top-[87px] md:self-start"
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
                  to="https://help.figma.com/hc/en-us/articles/360040451373-Create-designs-with-Auto-Layout?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2025100505"
                  target="_blank"
                  className="my-4"
                />
                <p>
                  <b>Key principle:</b> <br />
                  Your frame structure defines the HTML structure. Each frame typically becomes an
                  HTML element (most commonly a <code>{'<div>'}</code> container, but could be{' '}
                  <code>{'<button>'}</code>, <code>{'<section>'}</code>, <code>{'<header>'}</code>,{' '}
                  <code>{'<nav>'}</code>, or <code>{'<article>'}</code> depending on semantic
                  meaning). Therefore, using the minimum necessary frames helps developers create
                  cleaner, more maintainable code.
                </p>
                <p>
                  <b>Best practices:</b>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    <b>Sketch the structure:</b> Quick sketches help identify necessary containers.
                  </li>
                  <li>
                    <b>Minimize frames:</b> Use as few frames as possible while maintaining proper
                    layout.
                  </li>
                  <li>
                    <b>Use consistent spacing:</b> Apply 4px (0.25rem) or 8px (0.5rem) grid systems
                    using Auto-Layout gap and padding.
                  </li>
                  <li>
                    <b>Set proper sizing:</b> Use "Hug contents" or "Fill container" appropriately.
                  </li>
                  <li>
                    <b>Consider responsive behavior:</b> Think about how the component adapts to
                    different widths.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="example-button-component-structure"
          >
            <SectionTitle
              title="2.3 Example: Button Component Structure"
              color="orange"
              className="md:sticky md:top-[87px] md:self-start"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>A simple button needs only one or two frames:</p>
                <div className="flex items-center justify-center w-full my-4">
                  <Button
                    label="Button Label"
                    type="primary"
                    size="large"
                    startIcon={<WestRoundedIcon />}
                    endIcon={<EastRoundedIcon />}
                    ariaLabel="Example button with start and end icons"
                  />
                </div>
                <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                  {`ButtonContainer (Frame with Auto-Layout)
                ├── padding: 12px 24px
                ├── gap: 8px
                ├── direction: horizontal
                ├── align: center
                ├── width: hug contents
                │
                ├── StartIcon (optional, component instance)
                ├── ButtonLabel (text)
                └── EndIcon (optional, component instance)
                `}
                </pre>
                <p>This structure translates directly to HTML/CSS:</p>
                <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                  {`/// HTML
                  <button className="button">
                    {/* if startIcon present */}
                    <span>Click me</span>
                    {/* if endIcon present */}
                    </button>`}
                </pre>
                <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                  {`/// CSS
                  .button {
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      gap: 8px;
                      padding: 12px 24px;
                      width: fit-content;
                    }`}
                </pre>
              </div>
            </div>
          </div>
          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="giving-meaningful-layer-names"
          >
            <SectionTitle
              title="2.4 Giving Meaningful Layer Names"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Proper layer naming is essential for clear communication between designers and
                  developers. Meaningful names help developers understand the purpose of each frame
                  and how it maps to code. If you wouldn't name a CSS class "Frame 1" or "Group 2",
                  don't use those names in your layers. Instead, use descriptive names that reflect
                  the element's role.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/layer-naming-comp.svg"
                    alt="Layer Naming in Figma"
                    width={1200}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Unnamed vs Meaningful Layer Names for a Card Component
                  </p>
                </div>
                <p>
                  Above example shows a card component with poorly named layers (left) versus
                  thoughtfully named layers (right). The meaningful names clarify the structure and
                  purpose of each element, making it easier for developers to implement the design
                  accurately. Even the Figma icons tells the layout direction (horizontal vs
                  vertical) at a glance.
                </p>
                <InfoContainer
                  color="violet"
                  icon={<AutoAwesomeRoundedIcon />}
                  content="Figma provides AI-powered layer naming if you prefer not to manually label frames. Learn more about using AI to rename layers in Figma."
                  to="https://help.figma.com/hc/en-us/articles/24004711129879-Rename-layers-with-AI?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2025100506"
                  target="_blank"
                  className="my-4"
                />
                <p>
                  <b>Benefits of Thoughtful Layer Naming</b>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    <b>Clarifies HTML structure:</b>Layer names can inform semantic HTML elements
                    and CSS class names.
                  </li>
                  <li>
                    <b>Improves maintainability:</b> Easier to understand and modify components
                    later.
                  </li>
                  <li>
                    <b>Aligns with development patterns:</b> Developers can quickly map design to
                    code.
                  </li>
                  <li>
                    <b>Enhances team communication:</b> Shared vocabulary between design and
                    development.
                  </li>
                  <li>
                    <b>Enables better search:</b> Find components quickly in large Figma files.
                  </li>
                </ul>
                <p className="font-bold mt-2">Naming Conventions</p>
                <p>Follow these guidelines when naming layers:</p>
                <div className="flex flex-col md:flex-row gap-4 w-full ">
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Use clear, descriptive names

🟩 CardImage (not Image1)
🟩 CardTitle (not Text_Layer_2)
🟩 ActionButton (not Button)
🟩 IconWrapper (not Group_23)
🟩 PriceLabel (not Text)`}
                  </pre>
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Do not use vague, generic names

🟥 Container
🟥 Wrapper
🟥 Group
🟥 Frame #123456
🟥 Text`}
                  </pre>
                </div>
                <InfoContainer
                  color="red"
                  icon={<PriorityHighRoundedIcon />}
                  content="Do not use Rectangle and Ellipse in Figma since they do not translate to semantic HTML elements. Always use Frames with Auto-Layout for containers. Learn more about Groups vs Frames in Figma."
                  to="https://www.figma.com/best-practices/groups-versus-frames/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2025100507"
                  target="_blank"
                  className="my-4"
                />
                <p>
                  By combining proper Auto-Layout structure with meaningful layer names, you set
                  developers up for success—enabling them to implement components quickly and
                  accurately. Modern design systems like Material Design (Google), Carbon (IBM), and
                  Atlassian Design System use consistent layer naming to create clarity across
                  hundreds of components.
                </p>
                <p></p>
              </div>
            </div>
          </div>

          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="component-properties-in-figma"
          >
            <SectionTitle
              title="2.5 Component Properties in Figma"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Image__Container flex flex-col items-center justify-center w-full my-4">
                  <Image
                    src="/img/js-components/FigmaComponentProps.svg"
                    alt="Figma UI Component Properties"
                    className="mb-4"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Properties of the button component in Figma UI
                  </p>
                </div>
                <p>
                  Component properties (props) are arguably Figma's most powerful feature for
                  creating flexible, functional components that mirror real component behavior. As a
                  designer, If I am going to use an UI element more than once, I always create a
                  component with well-defined properties. This approach not only streamlines my
                  design process but also significantly reduces the development effort required to
                  implement the component. Defining properties is a time investment that pays off in
                  spades.
                </p>
                <p>
                  Figma supports several property types that map directly to JavaScript/TypeScript:
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma-property-types.svg"
                    alt="Figma UI Component Properties"
                    width={600}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Property types available in Figma
                  </p>
                </div>

                <div className="FigmaPropTable w-full overflow-x-auto my-4">
                  <table className="min-w-full border border-stone-300 rounded-xl bg-white text-stone-900 text-sm">
                    <thead>
                      <tr className="bg-stone-100">
                        <th className="px-4 py-2 border-b border-stone-300 text-left font-semibold">
                          Figma Property
                        </th>
                        <th className="px-4 py-2 border-b border-stone-300 text-left font-semibold">
                          Frontend Equivalent
                        </th>
                        <th className="px-4 py-2 border-b border-stone-300 text-left font-semibold">
                          Example Use Case
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-stone-200">Text</td>
                        <td className="px-4 py-2 border-b border-stone-200">
                          <code>string</code>
                        </td>
                        <td className="px-4 py-2 border-b border-stone-200">
                          Button labels, card titles, descriptions
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-stone-200">Boolean</td>
                        <td className="px-4 py-2 border-b border-stone-200">
                          <code>boolean</code>
                        </td>
                        <td className="px-4 py-2 border-b border-stone-200">
                          isDisabled, isLoading, hasIcon
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-stone-200">Instance Swap</td>
                        <td className="px-4 py-2 border-b border-stone-200">Component instance</td>
                        <td className="px-4 py-2 border-b border-stone-200">
                          Icon components, avatar images
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Variant</td>
                        <td className="px-4 py-2">
                          <code>string</code> enum
                        </td>
                        <td className="px-4 py-2">type="primary", size="large"</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-stone-600 text-center mt-3">
                    Table 1. Mapping Figma Properties to Frontend Equivalents
                  </p>
                </div>
                <p className="font-bold">Property Naming Best Practices</p>
                <p>
                  While naming properties, consider giving meaningful names that convey the purpose
                  of the property. Following front-end conventions can help maintain consistency and
                  clarity and it also reduce the development time. Adding a <b>?</b> at the end of
                  boolean properties indicates that the property is optional which is a valuable
                  info for the development team.
                </p>
                <div className="flex flex-col md:flex-row gap-4 w-full ">
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Use descriptive, purposeful names

🟩 cardTitle
🟩 isDisabled
🟩 buttonLabel
🟩 iconStart
🟩 hasEndIcon
🟩 showKebabMenu`}
                  </pre>
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Do not use vague, generic names

🟥 text1
🟥 disabled
🟥 label
🟥 icon
🟥 end
🟥 menu`}
                  </pre>
                </div>
                <p className="font-bold md:mt-6 ">Follow frontend conventions</p>
                <p>
                  Front-end development is in progress since the early 2000s. Over the years,
                  certain conventions have emerged that enhance code readability and
                  maintainability. Adopting these conventions in your property naming can
                  significantly improve collaboration with developers. As designers, we should
                  strive to speak the same language as our developer counterparts. Here are some key
                  conventions to consider:
                </p>

                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    Use <b>camelCase</b> (e.g., buttonLabel, isDisabled) for property names to align
                    with JavaScript conventions.
                  </li>
                  <li>
                    Prefix boolean properties with <b>is</b>, <b>has</b>, <b>show</b>, or <b>can</b>{' '}
                    to indicate their <b>true/false</b> nature.
                  </li>
                  <li>Use specific, clear names (`primaryColor` not `color1`)</li>
                  <li>Indicate optional behavior clearly (`startIcon?` or `iconStart?`)</li>
                  <li>Use consistent naming patterns across all components</li>
                </ul>
                <InfoContainer
                  color="teal"
                  icon={<CodeRoundedIcon />}
                  content="Learn more about JavaScript naming conventions and best practices. Visit the W3Schools website for a comprehensive guide."
                  to="https://www.w3schools.com/js/js_conventions.asp?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2025100508"
                  target="_blank"
                  className="my-4"
                />
                <p className="font-bold md:mt-6 ">Framework-Specific Implementation</p>
                <p>
                  The same Figma component properties translate naturally across frameworks. Here's
                  how a button component with well-named props looks in different ecosystems:
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full my-4">
                  <Image
                    src="/img/js-components/figma-to-code-props.svg"
                    alt="Figma UI Component Properties"
                    className="mb-4"
                    width={1200}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Component property mapping between Figma and code
                  </p>
                </div>
                <p>
                  Above Figma button component properties map directly to props in React, Vue,
                  Angular, and Svelte with minimal adjustments for framework syntax. This
                  consistency reduces cognitive load for developers and help them implement
                  components faster and with fewer errors.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full ">
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {` /// React (TypeScript)

interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'tertiary';
  isLoading?: boolean;
  isDisabled?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick?: () => void;
}


// Usage

<Button 
  label="Click me" 
  type="primary" 
  size="medium"
  isDisabled={false}
  startIcon={<WestRoundedIcon />}
  onClick={() => { /* handle click */ }}
/>
                  `}
                  </pre>
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {` /// Vue 3 (TypeScript)

interface ButtonProps {
  label: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  isLoading?: boolean;
  startIcon?: Component;
  endIcon?: Component;
}


// Usage

<Button 
  label="Click me" 
  type="primary" 
  size="medium"
  :is-disabled="false"
  :start-icon="ArrowLeft"
  @click="handleClick"
/>
                  `}
                  </pre>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full mb-4 ">
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {` /// Angular (TypeScript)

@Component({
  selector: 'app-button',
  template: ''
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type?: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Input() isDisabled?: boolean = false;
  @Input() isLoading?: boolean = false;
  @Input() startIcon?: TemplateRef<any>;
  @Input() endIcon?: TemplateRef<any>;
  @Output() onClick = new EventEmitter<void>();
}


// Usage

<app-button 
  label="Click me" 
  type="primary" 
  size="medium"
  [isDisabled]="false"
  [startIcon]="arrowLeftTemplate"
  (onClick)="handleClick()"
/>
                  `}
                  </pre>
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {` /// Svelte (TypeScript)

<script lang="ts">
  export let label: string;
  export let type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let isDisabled: boolean = false;
  export let isLoading: boolean = false;
  export let startIcon: Component | undefined = undefined;
  export let endIcon: Component | undefined = undefined;
</script>


// Usage

<Button 
  label="Click me" 
  type="primary" 
  size="medium"
  isDisabled={false}
  startIcon={ArrowLeft}
  on:click={handleClick}
/>
                  `}
                  </pre>
                </div>
                <p>
                  As we can see, the same well-defined properties in Figma translate cleanly to
                  props in React, Vue, Angular, and Svelte. This consistency not only speeds up
                  development but also reduces the likelihood of miscommunication or errors during
                  implementation. By investing time in defining clear, js-friendly component
                  properties in Figma, we set the stage for a smoother handoff to developers and a
                  more efficient development process overall.
                </p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 " id="tokenization">
            <SectionTitle
              title="2.6 Tokenization"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Token__Samples__Placeholder flex flex-col gap-4 items-center justify-center w-full mb-4">
                  <div className="Token__Samples__List flex flex-col lg:flex-row gap-4 lg:gap-16 p-4 lg:p-16 items-center justify-center w-full h-60 rounded-lg border border-stone-900 hover:bg-stone-50">
                    <Tag label="--color-primary-600" size="large" type="lime" />
                    <Tag label="--spacing-4" size="large" type="red" />
                    <Tag label="--font-family-sans" size="large" type="amber" />
                    <Tag label="--radius-md" size="large" type="emerald" />
                  </div>
                  <p className="text-sm text-stone-600">
                    Sample design tokens which point to a color hex value (#0D99FF), spacing in
                    pixels (16px), font family (Space Grotesk), and border radius (8px).
                  </p>
                </div>
                <p>
                  Modern digital products require theme support (light mode, dark mode, high
                  contrast). This necessitates <b>tokenization</b>, using variables instead of
                  hard-coded values. Besides that, using tokens instead of fixed values also enables
                  scalability and consistency across the design system. For example, if your brand
                  color changes, updating a single token updates it everywhere. As designers, we
                  often hear new iteration ideas from stakeholders. Using tokens allows us to
                  implement changes quickly without redesigning every component.
                </p>
                <p className="font-bold md:mt-6 ">From Hard-Coded Values to Design Tokens</p>
                <p>
                  If you are using CSS or CSS-in-JS, design tokens are typically implemented as CSS
                  variables (custom properties). You need to create your own primitive and component
                  tokens. If you want to skip the creating primitive tokens, it's best to use an
                  existing open-source token library like TailwindCSS. Tailwind provides a
                  comprehensive set of design tokens that cover colors, spacing, typography, and
                  more. You can then create component-specific tokens that reference these
                  primitives. For example, a button's primary background color token might reference
                  Tailwind's `--tw-color-blue-600`. Here is an example of how to transition from old
                  way to modern way:
                </p>
                <div className="flex flex-col  gap-4 w-full ">
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Old approach (hard-coded values)

🟥 Color: "#0D99FF" (specific hex value)
🟥 Spacing: "16px" (specific pixel value)
🟥 Font: "Inter" (specific typeface)
🟥 Border radius: "8px" (specific value)`}
                  </pre>
                  <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Modern approach (design tokens)

🟩 Color: "--color-primary-600" → resolves to "#0D99FF" in light mode, "#3B82F6" in dark mode
🟩 Spacing: "--spacing-4" → resolves to "16px" (or "1rem" in fluid systems)
🟩 Font: "--font-family-sans" → resolves to "Inter, system-ui, sans-serif"
🟩 Border radius: "--radius-md" → resolves to "8px"`}
                  </pre>
                </div>
                <p className="font-bold md:mt-6 ">
                  <b>Benefits of Tokenization</b>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    <b>Easy theme switching:</b> Change entire color schemes by swapping variable
                    collections
                  </li>
                  <li>
                    <b>Consistent design:</b> All components reference the same token system,
                    eliminating one-off values
                  </li>
                  <li>
                    <b>Simplified maintenance:</b> Update a token once, change it everywhere
                  </li>
                  <li>
                    <b>Developer alignment:</b> Design tokens map directly to CSS custom properties
                  </li>
                  <li>
                    <b>Accessibility compliance:</b> Manage contrast ratios systematically
                  </li>
                  <li>
                    <b>Brand flexibility:</b> Support white-label products or multi-brand systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="implementing-tokens-in-figma"
          >
            <SectionTitle
              title="2.7 Implementing Tokens in Figma"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>Figma's Local Variables feature enables comprehensive tokenization:</p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full   gap-4 ">
            <SectionTitle
              title="2.8 Implementing Tokens in Figma"
              className="md:sticky md:top-[87px] md:self-start"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
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
        {/* * Sidebar Start * */}
        <div
          className="BlogSideBar flex flex-col px-4 py-3 items-start justify-start gap-4 w-full md:w-1/4 bg-amber-50 md:border-t border-stone-900 
            md:sticky md:top-[87px] md:self-start"
          style={{ maxHeight: 'calc(100vh - 88px)' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-center text-stone-900">Table of Contents</p>
          </div>
          <div className="flex flex-col  gap-4">
            <TextLink className=" text-sm" label="Introduction" to="#introduction" />
            <TextLink
              className=" text-sm"
              label="1. Understanding Components and Properties"
              to="#understanding-components-and-properties"
            />
            <TextLink
              className="ml-4  text-sm"
              label="1.1. The Universal Component Model"
              to="#the-universal-component-model"
            />
            <TextLink
              className="ml-4  text-sm"
              label="1.2. What is a Property?"
              to="#what-is-a-property"
            />
            <TextLink
              className=" text-sm"
              label="2. The Fundamentals of JS-Friendly Components"
              to="#the-fundamentals-of-js-friendly-components"
            />
            <TextLink
              className="ml-4  text-sm"
              label="2.1 Structure & Naming"
              to="#structure-naming"
            />
            <TextLink
              className="ml-4  text-sm"
              label="2.2 Using Proper Auto-Layout with Frames in Figma"
              to="#using-proper-auto-layout-with-frames-in-figma"
            />
            <TextLink
              className="ml-4  text-sm"
              label="2.3 Example: Button Component Structure"
              to="#example-button-component-structure"
            />
            <TextLink
              className="ml-4 text-sm "
              label="2.4 Giving Meaningful Layer Names"
              to="#giving-meaningful-layer-names"
            />
            <TextLink
              className="ml-4  text-sm"
              label="2.5 Component Properties in Figma"
              to="#component-properties-in-figma"
            />

            <TextLink className="ml-4  text-sm" label="2.6 Tokenization" to="#tokenization" />
            <TextLink
              className="ml-4  text-sm"
              label="2.7 Implementing Tokens in Figma"
              to="#implementing-tokens-in-figma"
            />
          </div>
        </div>
        {/* * Sidebar End * */}
      </div>

      <Footer />
    </div>
  );
}
