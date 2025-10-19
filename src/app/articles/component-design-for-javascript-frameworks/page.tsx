'use client';
/* import type { Metadata } from 'next'; */
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ThankYou from '@/components/ThankYou';
import Button from '@/components/Button';
import Tag from '@/components/Tag';
import TopDivider from '@/components/TopDivider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BookIcon from '@mui/icons-material/Book';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import LanguageIcon from '@mui/icons-material/Language';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Image from 'next/image';
import Link from 'next/link';
import TextLink from '@/components/TextLink';
import InfoContainer from '@/components/InfoContainer';
import IconButton from '@/components/IconButton';
import { Code, CodeBlock, CodeHeader } from '@/components/animate-ui/components/animate/code';
import ContentCard from '@/components/ContentCard';
import FigmaIcon from '@/components/icons/Figma';
import StorybookIcon from '@/components/icons/Storybook';
/*
export const metadata: Metadata = {
  title: 'Component Design for JavaScript Frameworks | Design to Code Best Practices',
  description:
    'Learn how to design UI components that are js-friendly by following simple rules for auto-layout, meaningful layer names, and component-driven design principles.',
  alternates: {
    canonical: 'https://o10n.design/articles/dev-friendly-component-design',
  },
  openGraph: {
    title: 'Component Design for JavaScript Frameworks | Design to Code Best Practices',
    description:
      'Practical guide to designing components that translate seamlessly from Figma to code. Auto-layout best practices, naming conventions, and handoff strategies.',
    url: 'https://o10n.design/articles/dev-friendly-component-design',
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
*/

const handleClickOne = () => {
  alert('🚀 You triggered this JavaScript Popup Box by clicking the Primary Button.');
};
const handleClickTwo = () => {
  alert('🚀 You triggered this JavaScript Popup Box by clicking the Icon Button.');
};
const handleClickThree = () => {
  alert('Whereas the loading and tertiary buttons cannot be clicked, this primary one can.');
};
const handleClickFour = () => {
  alert(
    'This button container shows the default, hover, focus, loading, and disabled states of a button component.'
  );
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
          alt="Developer Friendly Component Design Thumbnail o10n"
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
            Component Design for JavaScript Frameworks
          </div>
          <div className="PageSubtitle flex flex-col text-center text-lg text-stone-600 w-full h-full gap-2">
            <p>A Designer's Guide to JS-Friendly Components</p>
          </div>
        </div>
      </div>

      <div className="Summary__Content flex flex-col w-full  gap-4 lg:gap-12 p-6 lg:py-12 lg:px-40 text-xl items-center justify-center text-start font-regular text-stone-900">
        <p>
          During product development, design must communicate with a variety of stakeholders,
          including researchers, product managers, developers, testers, data analysts, and others.
          But developers are probably the ones we see, talk to, and discuss the most. We talk about
          every little element of a product with our fellow engineers and developers. Common
          knowledge is essential for a more productive workplace. Communication is improved,
          misunderstandings are decreased, expectations and reality can be discussed, and design and
          development can coexist peacefully when everyone speaks the same language.
        </p>
        <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 ">
          <Image
            src="/img/js-components/communication_freq_with_stakeholders.svg"
            alt="Figma Local Variables Types"
            width={600}
            height={1}
          />
          <p className="text-center text-sm text-stone-600">
            Approximate communication frequency with stakeholders for a designer
          </p>
        </div>
        <p>
          The current environment mostly recommends vibe design and vibe coding for product
          development, but these approaches are not long-term viable. Designing and developing
          without knowledge is not sustainable. Furthermore, it can be cathosrophic in the long
          term. Fundamental understanding of several verticals, such as development, is necessary
          for designing a sustainable product. To produce components, elements, and pages that are
          ready for production, we product designers and design engineers must therefore have
          greater knowledge about front-end development. It's better to know what's happening to our
          designs after we deliver them to developers.
        </p>

        <div className="Logo__Container flex flex-col md:flex-row items-center justify-center w-full gap-2 md:gap-12">
          <Image src="/img/icons/icon-figma.svg" alt="Figma Icon" width={72} height={1} />
          <Image
            src="/img/icons/icon-arrow-right.svg"
            alt="Arrow Right Icon"
            width={72}
            height={1}
          />
          <Image src="/img/icons/icon-react.svg" alt="React Icon" width={72} height={1} />
          <Image src="/img/icons/icon-svelte.svg" alt="Svelte Icon" width={72} height={1} />
          <Image src="/img/icons/icon-vue.svg" alt="Vue Icon" width={72} height={1} />
          <Image src="/img/icons/icon-angular.svg" alt="Angular Icon" width={72} height={1} />
        </div>
        <p className="text-center text-sm text-stone-600">From Figma to Code</p>
        <p>
          In this article, we'll explore best practices for designing components that developers can
          easily implement in applications. At the end of reading, you will have a solid
          understanding of:
        </p>
        <ul className="list-disc list-inside ml-4  space-y-4 marker:text-stone-600">
          <li>
            How Figma's Auto-Layout directly maps to CSS Flexbox, enabling you to design with code
            structure in mind
          </li>
          <li>
            Property naming conventions that work identically across all major JavaScript frameworks
          </li>
          <li>Design token implementation strategies for scalable theming and dark mode support</li>
          <li>Prototyping interactions and states for realistic UI behavior</li>
          <li>
            Complete accessibility guidelines including WCAG 2.2 compliance and keyboard navigation
            patterns
          </li>
        </ul>
        <p className=" font-semibold text-center text-stone-900 text-h3 font-sans lg:mt-8">
          Who benefits from reading this article?
        </p>
        {/* Target Audience Cards */}
        <div className="SectionContent flex  items-start justify-center flex-col md:flex-row gap-8">
          <ContentCard
            title="Designers"
            icon={<DesignServicesIcon />}
            color="neutral"
            className="hover:bg-lime-50"
            content={
              <div>
                <p>
                  Reduce developer questions and create components that translate perfectly to code.
                  Learn Auto-Layout patterns, property and layer naming conventions, design tokens
                  and handoff best practices.
                </p>
              </div>
            }
          />
          <ContentCard
            title="Frontend Developers"
            icon={<CodeRoundedIcon />}
            color="neutral"
            className="hover:bg-teal-50"
            content={
              <div>
                <p>
                  Implement designs faster with clear component structure. Understand design
                  decisions and reduce refactoring by recognizing well-structured Figma files.
                </p>
              </div>
            }
          />
          <ContentCard
            title="Product Managers"
            icon={<DirectionsRunIcon />}
            color="neutral"
            className="hover:bg-purple-50"
            content={
              <div>
                <p>
                  Accelerate feature delivery with better design-dev collaboration. Understand
                  technical constraints and reduce sprint delays from unclear component specs.
                </p>
              </div>
            }
          />
        </div>
        <p>
          Whether you're a product designer, UI/UX designer, or front-end developer, mastering these
          concepts will greatly enhance your ability to create cohesive and user-friendly
          interfaces. By the end, you'll understand not just what makes a good component, but{' '}
          <i>why</i> certain decisions matter and <i>how</i> they impact the final product. If you
          are ready to take your component design skills to the next level, let's dive in!
        </p>
      </div>

      <div className="BlogBody flex flex-col md:flex-row gap-0 font-sans">
        <div className="BlogContentContainer flex flex-col w-full md:w-3/4  gap-4 md:border-r border-stone-900">
          {/* * Section Start * */}
          <div className="BlogContent flex flex-col w-full   gap-4 " id="history">
            <SectionTitle
              title="0. History"
              className="md:sticky md:top-[87px] md:self-start"
              color="emerald"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-12">
                <p>
                  The history of human-computer interaction and user interface design (graphical
                  user interface, GUI) spans over 70 years. There were only text-based command-line
                  interfaces available when it was initially launched in the early 1960s. We first
                  saw the mouse, windows, icons, and hypertext links when Douglas Engelbart unveiled
                  the "Mother of All Demos.”
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 ">
                  <Image
                    src="/img/js-components/mother-of-all-demos.jpg"
                    alt="Mother of All Demos"
                    width={800}
                    height={1}
                    className="rounded-lg border border-stone-900 "
                  />
                  <p className="text-center text-sm text-stone-600">
                    Douglas Engelbart using the NLS’s 5-button chord keyset, a standard QWERTY
                    keyboard, and 3-button mouse, around 1968. NMAH Catalog #2015.3073.11.
                  </p>
                </div>
                <p>
                  This marked the start of a lengthy history of user interface design, which was
                  followed by some incredible successes like Xerox PARC’s Alto (’73) and Star (’81),
                  Apple Lisa (’83) and Macintosh (’84), Microsoft Windows (’85). The development of
                  standardized, user-friendly, and reusable interfaces became necessary as a result
                  of all these technical advancements.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 ">
                  <Image
                    src="/img/js-components/mac-gui.png"
                    alt="Macintosh System 1 GUI"
                    width={800}
                    height={1}
                    className="rounded-lg border border-stone-900 "
                  />
                  <p className="text-center text-sm text-stone-600">
                    Macintosh System 1 GUI (1984)
                  </p>
                </div>
                <p>
                  When UI became dynamic with Web 2.0 tech in the early 2000s, designers started to
                  create reusable snippets (navigation elements, modals, form elements). This led to
                  emerging design patterns like Yahoo did back in 2006 with Yahoo Design Pattern
                  Library (YUI).
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 ">
                  <Image
                    src="/img/js-components/yahoo_design_library.png"
                    alt="Yahoo Design Library Calendar Component"
                    width={400}
                    height={1}
                    className="rounded-lg border border-stone-900 "
                  />
                  <p className="text-center text-sm text-stone-600">
                    Calendar Component from Yahoo Design Pattern Library
                  </p>
                </div>
                <p>
                  Facebook released React in 2013, marking a significant advancement in UI
                  architecture and contributing to the growth of the component ecosystem. Today's
                  digital products are composed of a vast array of uniform, scalable, and reusable
                  components. Because a component must fit in multiple locations on the interface,
                  designing a small square with an optional checkmark icon within takes additional
                  planning effort. Since designers and developers co-own modern UI components, we
                  designers need to learn more about their technical implementation.
                </p>
              </div>
            </div>
          </div>
          {/* * Section End * */}
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="understanding-components-and-properties"
          >
            <SectionTitle
              title="1. Understanding Components and Properties"
              color="emerald"
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
                    onClick={handleClickOne}
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
                    onClick={handleClickTwo}
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
                  both design systems and code architecture. Modern practices like Atomic Design
                  emphasize the importance of breaking down components into their most basic parts
                  to create a more efficient and scalable design process.
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
                  to="https://atomicdesign.bradfrost.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  className="my-4"
                />
                <p>
                  Understanding this hierarchy and their relationships is crucial for creating
                  effective design systems. By leveraging atomic design principles, you can ensure
                  consistency and scalability across your projects.
                </p>
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
                  Despite syntactic differences, all modern JavaScript frameworks and libraries
                  share a common component-based architecture:
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
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/universal_component_model.svg"
                    alt="Universal Component Model"
                    width={600}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Universal Component Model Diagram
                  </p>
                </div>
                <p>
                  When you design components with these universal concepts in mind, your work
                  translates smoothly across most popular frameworks. A well-designed button in
                  Figma becomes an equally well-implemented button in React (technically a library,
                  not a full framework), Vue, Angular, or Svelte.
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
                <div className="Animated___Code__Block flex flex-col w-full lg:w-1/2 items-center justify-center lg:mx-auto lg:mb-4">
                  <Code
                    className="lg:w-[430px] lg:h-[600px]"
                    code={` // Basic properties

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
  startIcon={<WestRoundedIcon />}
  onClick={() => { /* handle click */ }}
/>`}
                  >
                    <CodeHeader
                      icon={CodeRoundedIcon}
                      copyButton
                      className="text-amber-50 h-16 px-6"
                    >
                      Button.tsx
                    </CodeHeader>
                    <CodeBlock
                      lang="tsx"
                      theme="dark"
                      writing
                      duration={12000}
                      inView={true}
                      cursor={true}
                    />
                  </Code>
                  <p className="text-center text-sm text-stone-600 lg:my-6">
                    Basic properties for a button component in TypeScript
                  </p>
                </div>
                <p>
                  <b>Properties (props)</b> define a component's identity and characteristics.
                  Consider a car analogy: it has properties like brand, model, year, and passenger
                  capacity where each serves a specific purpose.
                </p>{' '}
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-60 lg:my-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="Primary Button"
                    type="primary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    startIcon={<CodeRoundedIcon />}
                    onClick={handleClickThree}
                  />
                  <Button
                    label="Secondary Button"
                    type="secondary"
                    size="medium"
                    isDisabled={false}
                    isLoading={true}
                    className="h-[52px]"
                  />
                  <Button
                    label="Tertiary Button"
                    type="tertiary"
                    size="medium"
                    isDisabled={true}
                    isLoading={false}
                  />
                </div>
                <p className="text-center text-sm text-stone-600 lg:mb-6">
                  Button component with different property configurations
                </p>
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
                <div className="flex w-auto items-center justify-center">
                  <InfoContainer
                    color="cyan"
                    icon={<StorybookIcon />}
                    content="Try Button component properties on Storybook "
                    to="/docs/index.html?path=/docs/components-button--docs"
                    target="_blank"
                    className="mt-6 mb-6"
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
              color="emerald"
              className="md:sticky md:top-[87px] md:self-start"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/fundamentals_of_component.svg"
                    alt="The Fundamentals of JS-Friendly Components"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    The Fundamentals of JS-Friendly Components Diagram
                  </p>
                </div>
                <p>
                  Designing components that developers can efficiently implement requires mastering
                  four fundamental principles:
                </p>
                <ul className="list-disc list-inside ml-4 my-4 space-y-4 marker:text-stone-600">
                  <li>
                    <b>Structure:</b> Using Auto-Layout and meaningful frame names to define HTML
                    structure.
                  </li>
                  <li>
                    <b>Properties:</b> Establishing clear, js-friendly component properties.
                  </li>
                  <li>
                    <b>Tokenization:</b> Applying design tokens for scalable theming.
                  </li>
                  <li>
                    <b>Interaction:</b> Prototyping behaviors and states.
                  </li>
                </ul>
                <p>
                  Learning these fundamentals will help you design components that are not only
                  visually appealing but also easy to implement and maintain.
                </p>
              </div>
            </div>
          </div>
          <div className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]" id="structure">
            <SectionTitle
              title="3. Structure"
              className="md:sticky md:top-[87px] md:self-start"
              color="emerald"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/frame_structure_example.svg"
                    alt="Frame Structure Example"
                    width={600}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Unnamed and named frame structure
                  </p>
                </div>
                <p>
                  Regarding layer naming, there are two schools of thought: those that define the
                  names and those who do not. Naming your levels is really helpful when done
                  correctly and purposefully. Naming levels aid in our comprehension of the proper
                  HTML structure for a given component. When you wish to iterate later, it also
                  makes the component easier to understand. To make the components more
                  understandable, the majority of design system libraries employ layer naming. In
                  this section, we'll cover best practices for structuring components using
                  <b> Auto-Layout in Figma</b> and naming conventions that translate seamlessly to
                  HTML/CSS.
                </p>
              </div>
            </div>
          </div>
          <div
            className="BlogContent flex flex-col w-full gap-4 scroll-mt-[87px]"
            id="using-proper-auto-layout-with-frames"
          >
            <SectionTitle
              title="3.1 Using Proper Auto-Layout with Frames"
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
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma_group_vs_frames.svg"
                    alt="Figma Groups vs Frames"
                    width={600}
                    height={1}
                  />
                </div>

                <p>
                  Using Auto-Layout will allow us to define the layout of the component in a more
                  flexible way. Auto-Layout in Figma directly corresponds to CSS Flexbox properties.
                  When you configure Auto-Layout settings in Figma, you're essentially defining:
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
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma-layout-types.svg"
                    alt="Figma Auto-Layout Types"
                    width={600}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Auto-Layout types available in Figma
                  </p>
                </div>
                <p>
                  Besides defining the layout of the component, Auto-Layout also allows us to define
                  the spacing between the children of the component with using Gap and Padding
                  properties.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma_gap_and_padding.svg"
                    alt="Figma Gap and Padding"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Gap and Padding properties in Auto-Layout
                  </p>
                </div>
                <InfoContainer
                  color="teal"
                  icon={<FigmaIcon />}
                  content="Learn more about Figma Auto-Layout and how it maps to CSS Flexbox. Visit the Figma Help Center for a comprehensive guide."
                  to="https://help.figma.com/hc/en-us/articles/360040451373-Create-designs-with-Auto-Layout?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
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
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/semantic_frame_map.svg"
                    alt="Semantic Frame Mapping"
                    width={600}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">Semantic Frame Mapping</p>
                </div>
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
              title="3.2 Example: Button Component Structure"
              color="orange"
              className="md:sticky md:top-[87px] md:self-start"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-8">
                <p>
                  A simple button needs only three frames which wrapped by a container. These frames
                  are used for start icon, button label, and end icon.
                </p>
                <div className="flex items-center justify-center w-full gap-16 my-4">
                  <Button
                    label="Button Label"
                    type="primary"
                    size="large"
                    startIcon={<WestRoundedIcon />}
                    endIcon={<EastRoundedIcon />}
                    ariaLabel="Example button with start and end icons"
                    onClick={() => alert('I am a button made of three frames')}
                  />
                  <Image
                    src="/img/js-components/simple_button_frames.svg"
                    alt="Figma Local Variables Types"
                    width={300}
                    height={1}
                  />
                </div>

                <p className="text-cen">
                  Those three frames translate directly to HTML and CSS as:
                </p>

                <div className="Animated___Code__Blocks flex flex-col lg:flex-row w-full items-center justify-center gap-2 lg:gap-4 lg:mx-auto lg:mb-4">
                  <Code
                    className="lg:w-1/2 lg:h-[330px]"
                    code={`<button class="button" aria-label="{buttonLabel}">
  <span class="icon startIcon">{startIcon}</span>
  <span class="label">{buttonLabel}</span>
  <span class="icon endIcon">{endIcon}</span>
</button>`}
                  >
                    <CodeHeader
                      icon={CodeRoundedIcon}
                      copyButton
                      className="text-amber-50 h-16 px-6"
                    >
                      index.html
                    </CodeHeader>
                    <CodeBlock
                      lang="html"
                      theme="dark"
                      writing
                      duration={8000}
                      inView={true}
                      cursor={true}
                    />
                  </Code>
                  <Code
                    className=" lg:w-1/2 lg:h-[330px]"
                    code={`.button {
    width: 100%;
    padding: 16px 24px;
    background: #292524;
    border: none;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #FAFAFA;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

.icon {
    width: 24px;
    height: 24px;
    background: #292524;   
}

.startIcon, .endIcon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.label {
    flex-grow: 1;
}     `}
                  >
                    <CodeHeader
                      icon={CodeRoundedIcon}
                      copyButton
                      className="text-amber-50 h-16 px-6"
                    >
                      style.css
                    </CodeHeader>
                    <CodeBlock
                      lang="css"
                      theme="dark"
                      writing
                      duration={8000}
                      inView={true}
                      cursor={true}
                    />
                  </Code>
                </div>
                <p>
                  You can have more or less frames inside a container depending on the complexity of
                  the component. For example, if you have a spinner for loading state, you can add a
                  frame for the spinner.{' '}
                </p>
                <div className="flex items-center justify-center w-auto mx-auto">
                  <InfoContainer
                    color="teal"
                    icon={<CodeRoundedIcon />}
                    content="You can try the button example in CodePen"
                    to="https://codepen.io/ouzozcn/pen/dPGJmoo"
                    target="_blank"
                    className="my-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="giving-meaningful-layer-names"
          >
            <SectionTitle
              title="3.3 Giving Meaningful Layer Names"
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
                  color="emerald"
                  icon={<AutoAwesomeRoundedIcon />}
                  content="Figma provides AI-powered layer naming if you prefer not to manually label frames. Learn more about using AI to rename layers in Figma."
                  to="https://help.figma.com/hc/en-us/articles/24004711129879-Rename-layers-with-AI?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
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
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Use clear, descriptive names

🟩 CardImage (not Image1)
🟩 CardTitle (not Text_Layer_2)
🟩 ActionButton (not Button)
🟩 IconWrapper (not Group_23)
🟩 PriceLabel (not Text)`}
                  </pre>
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
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
                  content="Avoid using Rectangle and Ellipse in Figma since they do not translate to semantic HTML elements. Always use Frames with Auto-Layout for containers. Learn more about Groups vs Frames in Figma."
                  to="https://www.figma.com/best-practices/groups-versus-frames/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
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
            className="BlogContent flex flex-col w-full   gap-4 scroll-mt-[87px]"
            id="properties"
          >
            <SectionTitle
              title="4. Properties"
              className="md:sticky md:top-[87px] md:self-start"
              color="emerald"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Image__Container flex flex-col items-center justify-center w-full">
                  <Image
                    src="/img/js-components/FigmaComponentProps.svg"
                    alt="Figma UI Component Properties"
                    className="mb-4"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Properties of a sample button component in Figma
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
                <p>
                  We can use these property types to create a button component with different states
                  and variants. Below is a table that maps Figma properties to frontend equivalents.
                </p>
                <div className="FigmaPropTable w-full overflow-x-auto my-4">
                  <table className="min-w-full border border-stone-300 rounded-xl bg-white text-stone-900 text-sm">
                    <thead>
                      <tr className="bg-amber-100">
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
              </div>
            </div>
          </div>
          {/* * Section Start * */}
          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="property-naming-conventions"
          >
            <SectionTitle
              title="4.1 Property Naming Conventions"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
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
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/component__property_naming.svg"
                    alt="Figma Property Naming Conventions"
                    width={600}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">Property naming conventions</p>
                </div>
                <p>
                  While naming properties, consider giving meaningful names that convey the purpose
                  of the property. Following front-end conventions can help maintain consistency and
                  clarity and it also reduce the development time. As an example, adding a <b>?</b>{' '}
                  at the end of boolean properties indicates that the property is optional which is
                  a valuable info for the development team.
                </p>
                <div className="flex flex-col md:flex-row gap-4 w-full ">
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Use descriptive, purposeful names

🟩 cardTitle
🟩 isDisabled
🟩 buttonLabel
🟩 iconStart
🟩 hasEndIcon
🟩 showKebabMenu`}
                  </pre>
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Do not use vague, generic names

🟥 text1
🟥 disabled
🟥 label
🟥 icon
🟥 end
🟥 menu`}
                  </pre>
                </div>

                <InfoContainer
                  color="teal"
                  icon={<CodeRoundedIcon />}
                  content="Learn more about JavaScript naming conventions and best practices. Visit the W3Schools website for a comprehensive guide."
                  to="https://www.w3schools.com/js/js_conventions.asp?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  className="my-4"
                />
              </div>
            </div>
          </div>
          {/* * Section End * */}
          {/* * Section Start * */}
          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="framework-specific-implementation"
          >
            <SectionTitle
              title="4.2 Framework-Specific Implementation"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Figma component properties translate naturally across frameworks. Here's how a
                  button component with well-named props looks in React (TypeScript):
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
                <div className="Animated___Code__Blocks flex flex-col w-full items-center justify-center gap-2 lg:gap-4 lg:mx-auto lg:mb-4">
                  <Code
                    className="lg:w-full lg:h-[330px]"
                    code={`interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'tertiary';
  isLoading?: boolean;
  isDisabled?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick?: () => void;
} `}
                  >
                    <CodeHeader
                      icon={CodeRoundedIcon}
                      copyButton
                      className="text-amber-50 h-16 px-6"
                    >
                      React (TypeScript)
                    </CodeHeader>
                    <CodeBlock
                      lang="tsx"
                      theme="dark"
                      writing
                      duration={8000}
                      inView={true}
                      cursor={true}
                    />
                  </Code>
                  <Code
                    className=" lg:w-full lg:h-[330px]"
                    code={`interface ButtonProps {
  label: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  isLoading?: boolean;
  startIcon?: Component;
  endIcon?: Component;
} `}
                  >
                    <CodeHeader
                      icon={CodeRoundedIcon}
                      copyButton
                      className="text-amber-50 h-16 px-6"
                    >
                      Vue 3 (TypeScript)
                    </CodeHeader>
                    <CodeBlock
                      lang="tsx"
                      theme="dark"
                      writing
                      duration={8000}
                      delay={1000}
                      inView={true}
                      cursor={true}
                    />
                  </Code>

                  <Code
                    className="lg:w-full lg:h-[330px]"
                    code={`@Component({
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
} `}
                  >
                    <CodeHeader
                      icon={CodeRoundedIcon}
                      copyButton
                      className="text-amber-50 h-16 px-6"
                    >
                      Angular (TypeScript)
                    </CodeHeader>
                    <CodeBlock
                      lang="tsx"
                      theme="dark"
                      writing
                      duration={8000}
                      delay={1000}
                      inView={true}
                      cursor={true}
                    />
                  </Code>
                  <Code
                    className=" lg:w-full lg:h-[330px]"
                    code={` <script lang="ts">
  export let label: string;
  export let type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let isDisabled: boolean = false;
  export let isLoading: boolean = false;
  export let startIcon: Component | undefined = undefined;
  export let endIcon: Component | undefined = undefined;
</script> `}
                  >
                    <CodeHeader
                      icon={CodeRoundedIcon}
                      copyButton
                      className="text-amber-50 h-16 px-6"
                    >
                      Svelte (TypeScript)
                    </CodeHeader>
                    <CodeBlock
                      lang="ts"
                      theme="dark"
                      writing
                      duration={8000}
                      delay={1000}
                      inView={true}
                      cursor={true}
                    />
                  </Code>
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
          {/* * Section End * */}
          <div className="BlogContent flex flex-col w-full   gap-4 " id="tokenization">
            <SectionTitle
              title="5. Tokenization"
              className="md:sticky md:top-[87px] md:self-start"
              color="emerald"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Token__Samples__Placeholder flex flex-col gap-4 items-center justify-center w-full mb-4">
                  <div className="Token__Samples__List flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 lg:p-16 items-center justify-center w-full h-60 rounded-lg border border-stone-900 hover:bg-stone-50">
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
                  implement changes quickly without touching every component.
                </p>
                <p className="font-bold md:mt-6 ">From Hard-Coded Values to Design Tokens</p>
                <p>
                  If you are using CSS or CSS-in-JS, design tokens are typically implemented as CSS
                  variables (custom properties). You need to create your own primitive and component
                  tokens. If you want to skip the creating primitive tokens, it's best to use an
                  existing open-source library like TailwindCSS. TailwindCSS provides a
                  comprehensive set of design tokens that cover colors, spacing, typography, and
                  more. You can then create component-specific tokens that reference these
                  primitives. For example, a button's primary background color token might reference
                  Tailwind's `--tw-color-blue-600`. Here is an example of how to transition from old
                  way to modern way:
                </p>
                <div className="flex flex-col  lg:flex-row gap-4 w-full ">
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`/// Old approach (hard-coded values)

🟥 Color: "#0D99FF" (specific hex value)
🟥 Spacing: "16px" (specific pixel value)
🟥 Font: "Inter" (specific typeface)
🟥 Border radius: "8px" (specific value)`}
                  </pre>
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
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
            className="BlogContent flex flex-col w-full   gap-8 "
            id="definition-of-design-token"
          >
            <SectionTitle
              title="5.1 Definition of Design Token"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-8">
                <div className="Image__Container flex flex-col items-center justify-center w-full">
                  <Image
                    src="/img/js-components/button_tokens.svg"
                    alt="Button tokens illustration"
                    className="mb-4"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Examples for basic design tokens for a button component
                  </p>
                </div>
                <p>
                  A design token is a standardized, reusable variable that stores design values like
                  colors, spacing, or typography so they can be easily accessed across different
                  platforms and technologies. Design tokens maintain consistency and help designers
                  and developers collaborate more effectively. We can define various types of tokens
                  for different purposes. For example, we can define color tokens for different
                  purposes like primary, secondary, success, error, etc.
                </p>
                <p>
                  Tokens have various layers of abstraction, from primitive tokens to component
                  tokens to application tokens.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    <b>Primitive tokens:</b> These are the most basic tokens, like colors, spacing,
                    and typography.
                  </li>
                  <li>
                    <b>Component tokens:</b> These are tokens that are specific to a component, like
                    the button component illustrated above.
                  </li>
                  <li>
                    <b>Application tokens:</b> These are tokens that are specific to the
                    application, like the theme tokens.
                  </li>
                </ul>
                <div className="Token__Samples__Placeholder flex flex-col gap-4 items-center justify-center w-full mb-4">
                  <div className="Token__Samples__List flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 lg:p-16 items-center justify-center w-full h-60 rounded-lg border border-stone-900 hover:bg-stone-50">
                    <Tag label="--amber-500" size="large" type="amber" />
                    <Tag label="--button-surface-primary" size="large" type="red" />
                    <Tag label="--system-theme-primary" size="large" type="teal" />
                  </div>
                  <p className="text-sm text-stone-600">
                    Examples for design tokens levels from primitive to component to application.
                  </p>
                </div>
                <p>
                  Design tokens are simple to incorporate into component libraries, style guides,
                  and design systems because they are usually stored in a format like JSON, YAML, or
                  XML. They can be employed in a variety of frameworks and tools, frequently with
                  the aid of design token management tools or preprocessors.
                </p>
                <Code
                  className=" lg:w-1/2 h-auto mx-auto"
                  code={`
"color": {
  "primary": "#007bff",
  "secondary": "#6c757d",
  "success": "#28a745",
  "error": "#dc3545",
},
"font": {
  "baseSize": "16px",
  "headingSize": "24px",
  "fontFamily": "Space Grotesk, sans-serif"
},
"spacing": {
  "small": "4px",
  "medium": "8px",
  "large": "16px"
},
"borderRadius": {
  "small": "4px",
  "medium": "8px",
  "large": "16px"
}
`}
                >
                  <CodeHeader icon={CodeRoundedIcon} copyButton className="text-amber-50 h-16 px-6">
                    Design Token Documentation
                  </CodeHeader>
                  <CodeBlock lang="json" theme="dark" inView={true} cursor={true} />
                </Code>
                <p>
                  Managing design tokens is a crucial part of design system maintenance. You can use
                  various tools to manage design tokens like Tokens Studio, Specify, and Supernova.
                </p>
                {/* Market Analysis Cards */}
                <div className="SectionContent flex  my-4 items-start justify-center flex-col md:flex-row gap-8">
                  <ContentCard
                    title="Tokens Studio"
                    to="https://tokens.studio/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                    target="_blank"
                    icon={<CodeRoundedIcon />}
                    color="neutral"
                    content={
                      <div>
                        <p>
                          Tokens Studio is the designer's favorite, native Figma integration with
                          powerful Graph Engine for complex logic.
                        </p>
                      </div>
                    }
                  />
                  <ContentCard
                    title="Specify"
                    to="https://specifyapp.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                    target="_blank"
                    icon={<CodeRoundedIcon />}
                    color="neutral"
                    content={
                      <div>
                        <p>
                          Specify is the automation powerhouse perfect for teams that need reliable,
                          customizable token distribution. It's sad that it doesn't have a free
                          plan.
                        </p>
                      </div>
                    }
                  />
                  <ContentCard
                    title="Supernova"
                    to="https://supernova.io/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                    target="_blank"
                    icon={<CodeRoundedIcon />}
                    color="neutral"
                    content={
                      <div>
                        <p>
                          Supernova is the enterprise solution to complete design system management
                          platform with documentation and automation.
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* * Section Start * */}
          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="implementing-tokens-in-figma"
          >
            <SectionTitle
              title="5.2 Implementing Tokens in Figma"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 ">
                  <Image
                    src="/img/js-components/primitive_tokens.svg"
                    alt="Primitive Token in Figma - o10n"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Primitive level color token examples
                  </p>
                </div>
                <p>
                  Figma allows us to define various tokens through its Variables feature with four
                  different types: Color, Number, String, and Boolean. Using these tokens improves
                  design system maintenance, ensures consistency across the interface, eases style
                  updates, and enables various theme modes such as dark-light mode.{' '}
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma-variable-types.svg"
                    alt="Figma variables Types"
                    width={600}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Variable types available in Figma
                  </p>
                </div>
                <p>
                  These different types of tokens can be used in various ways to define style
                  properties while designing components, elements, templates, pages, and more:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    <b>Color:</b> Semantic color tokens (primary, secondary, success, error, etc.)
                  </li>
                  <li>
                    <b>Number:</b> Consistent spacing scale (4px, 8px, 12px, 16px, 24px, etc.)
                  </li>
                  <li>
                    <b>String:</b> Font families, sizes, weights, line heights
                  </li>
                  <li>
                    <b>Boolean:</b> Border radius, shadows, blur effects
                  </li>
                </ul>
                <p>
                  To get started using variables in Figma, open Variables panel via right sidebar
                  and create a "Collection" in the Variables window. Each file has its own variables
                  yet you can publish them via a team library. You can also move tokens between
                  design files by copying and pasting.{' '}
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/variables_sidebar_placement.svg"
                    alt="Figma Variables Sidebar Placement"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">Placement of the Variables</p>
                </div>
                <p>
                  Once you have created a collection, you can add variables to it by clicking the
                  "Create Variable" button. You can also add variables to a collection by copying
                  and pasting them from another collection.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/token_container.svg"
                    alt="Example of variable usage in Figma o10n"
                    width={1000}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">Example of variable usage</p>
                </div>
                <p>
                  After defining the variables, you can start to use them in every aspect of your
                  design system. You can use color-body-text-primary to all your body text elements.
                  This will allow you to easily change the color of your body text by changing the
                  value of the related color variable.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/token_usage_on_figma_component.svg"
                    alt="Example of variable usage in Figma o10n"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Using tokens for width, height, gap, and padding
                  </p>
                </div>
                <p>
                  You can also use tokens for width, height, gap, and padding of your components.
                  This will allow you to easily change the size of your components by changing the
                  value of the related token.
                </p>
                <div className="flex w-auto mx-auto items-center justify-center">
                  <InfoContainer
                    color="cyan"
                    icon={<FigmaIcon />}
                    content="Learn more about using variables and tokens in Figma "
                    to="https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                    target="_blank"
                    className="mt-6 mb-6"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* * Section End * */}
          {/* * Section Start * */}
          <div className="BlogContent flex flex-col w-full   gap-4 " id="interaction">
            <SectionTitle
              title="6. Interaction"
              className="md:sticky md:top-[87px] md:self-start"
              color="emerald"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Prototyping is one of the must-haves for delivering a production-ready component.
                  It allows us to mimic real-time behaviors for actionable items. Today most UI
                  elements have interactions. At least, a hover state is applicable for most of
                  them. For instance, A button can redirect users to a different page, display a
                  dialog, or open a drawer on the side. Adding an On Click event into a component in
                  Figma actually helps developers while defining the “onClick” function on the
                  component so they can define proper destination for the component.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/prototype_flow.svg"
                    alt=" Button with hover and onClick actions"
                    width={1200}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Button with hover and onClick actions
                  </p>
                </div>
                <p>
                  Various triggers and actions are available in Figma's prototype capabilities. Page
                  transitions can be defined using triggering overlays, which are primarily utilized
                  for drawers, dialog, and modals, as well as animations and destinations, which aid
                  in defining navigation. We can simulate items that function just like we developed
                  them by using component-level prototyping.When a component have interactions,
                  developers can see those actions via Dev Mode in Figma, VS Code, or Cursor.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/hover_trigger_flow_sample.svg"
                    alt="Interaction configurations for hover trigger"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Interaction configurations for hover trigger
                  </p>
                </div>
                <p>
                  Additionally, adding component interactions reveals the product's faults during
                  the early stages of design. Configuring user flows is made possible by the usage
                  of interactive components rather than static ones. Additionally, it is necessary
                  for the initial testing of prototypes. If you conduct a usability test, you can
                  use the prototype to test the user flows and interactions. Last but not least of
                  the benefits is having interactive elements enables stakeholders to understand
                  better while you are doing your presentations.
                </p>
              </div>
            </div>
          </div>
          {/* * Section End * */}
          {/* * Section Start * */}
          <div
            className="BlogContent flex flex-col w-full   gap-4 "
            id="essential-states-to-prototype"
          >
            <SectionTitle
              title="6.1 Essential States to Prototype"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Almost all of the components need to define various states. Every state serves a
                  distinct function in displaying a component's status. While a hover state provides
                  visual input regarding the interactivity, a default state displays the component's
                  initial appearance. The cursor pointer's appearance may indicate that a component
                  is draggable or contains an anchor link that will take us to a different location.
                </p>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-60 lg:my-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="Default"
                    type="secondary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={handleClickFour}
                  />
                  <Button
                    label="Hover"
                    type="secondary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={handleClickFour}
                    className="bg-amber-100"
                  />
                  <Button
                    label="Focus"
                    type="secondary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={handleClickFour}
                    className="outline outline-2 outline-stone-900"
                  />
                  <Button
                    label="Loading"
                    type="secondary"
                    size="medium"
                    isDisabled={false}
                    isLoading={true}
                    className="h-[52px]"
                  />
                  <Button
                    label="Disabled"
                    type="secondary"
                    size="medium"
                    isDisabled={true}
                    isLoading={false}
                  />
                </div>
                <p className="text-center text-sm text-stone-600 lg:mb-6">
                  Button component with default, hover, focus, loading, and disabled states
                </p>
                <p> Any interactive component needs to exhibit these fundamental states: </p>
                <p className="font-semibold text-stone-900">Default State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>How the component appears initially</li>
                  <li>Resting state with no user interaction</li>
                </ul>

                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_default.svg"
                    alt="Default state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Default state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Hover State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Visual feedback when pointer hovers over the element</li>
                  <li>Cursor changes to indicate interactivity</li>
                  <li>Subtle color shifts, elevations, or underlines</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_hover.svg"
                    alt="Hover state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Hover state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Focus State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Keyboard navigation indicator</li>
                  <li>Critical for accessibility (WCAG compliance)</li>
                  <li>Often a visible outline or highlight</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_focus.svg"
                    alt="Focus state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Focus state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Active/Pressed State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Visual feedback during click/tap</li>
                  <li>Brief state showing the component is being activated</li>
                  <li>Often a slight scale reduction or color darkening</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_active.svg"
                    alt="Active/Pressed state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Active/Pressed state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Disabled State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Non-interactive appearance</li>
                  <li>Reduced opacity or grayed-out styling</li>
                  <li>Cursor changes to "not-allowed"</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_disabled.svg"
                    alt="Disabled state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Disabled state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Loading State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Indicates asynchronous operations</li>
                  <li>Often shows spinner or skeleton loader</li>
                  <li>May disable interaction during loading</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_loading.svg"
                    alt="Loading state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Loading state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Error State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Displays validation errors or failures</li>
                  <li>Red/warning colors, error icons, helper text</li>
                  <li>Critical for form components</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_error.svg"
                    alt="Error state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Error state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Success State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Confirms successful operations</li>
                  <li>Green/success colors, checkmarks, confirmation messages</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/Input_success.svg"
                    alt="Success state of an input component"
                    width={400}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Success state of an input component
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* * Section End * */}
          {/* * Section Start * */}
          <div className="BlogContent flex flex-col w-full   gap-4 " id="triggers-and-actions">
            <SectionTitle
              title="6.2 Triggers and Actions"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Changing states of a component or assigning an onclick function requires defining
                  triggers and actions. Figma offers various triggers and actions for both web and
                  mobile experiences. To create an interactive component and functional interface in
                  the design phase, you need to use triggers and actions functionality.{' '}
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/interaction_flow_for_component.svg"
                    alt="Interaction flow for a component"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Interaction flow for a component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Triggers</p>
                <p>
                  You can designate ten distinct triggers for your components in Figma. These
                  triggers can be used to assign keyboard keys, click and drag, move the mouse
                  pointer over an element, or delay a transition. The two triggers that designers
                  use the most while designing are On Click and While Hovering. On Tap and On Drag
                  might be your top picks if you're developing for mobile.{' '}
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma_trigger_types.svg"
                    alt="Figma interactiontrigger types"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Trigger types available in Figma
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Actions</p>
                <p>
                  Actions are the functions that are executed when a trigger is activated. You can
                  designate eleven distinct actions for your components in Figma. These actions
                  define the behavior of the component when a trigger is activated.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma_action_types.svg"
                    alt="Figma action types"
                    width={680}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Action types available in Figma
                  </p>
                </div>
                <p>
                  Most common action when designing components and pages are Navigate, Scrool, Open,
                  and Open Overlay. If you need to define complex behavior, you can use the
                  Conditional, Set Variable, and Set Variable Mode. Conditional action type allows
                  you to define IF/ELSE logic. Set Variable action type allows you to set a variable
                  value. Set Variable Mode action type allows you to switch between different modes
                  of a variable such as light mode, dark mode, and high contrast mode.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/on_click_example.svg"
                    alt="On Click example"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Defining an On Click action on a button component to navigate user to pricing
                    page
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* * Section End * */}

          {/* * Section Start * */}
          <div className="BlogContent flex flex-col w-full   gap-4 " id="conclusion">
            <SectionTitle
              title="Conclusion"
              className="md:sticky md:top-[87px] md:self-start"
              color="lime"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  Design is an iterative process that involves collaborating with multiple
                  stakeholders. Among these, developers are often your closest partners and require
                  the most detailed support from designers. If you understand and start to apply the
                  principles of component design, you will be able to create components that are
                  easy to understand, maintain, and scale.
                </p>
                <p>By understanding how design decisions affect development, we can:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Reduce implementation time</li>
                  <li>Minimize miscommunication</li>
                  <li>Improve code quality</li>
                  <li>Enable faster iteration</li>
                  <li>Scale design systems</li>
                </ul>
                <p>
                  The best components aren't just beautiful. They are thoughtfully structured,
                  clearly documented, and ready to become excellent in development.
                </p>
              </div>
            </div>
          </div>
          {/* * Section End * */}
          {/* * Section Start * */}
          <div className="BlogContent flex flex-col w-full   gap-4 " id="references">
            <SectionTitle
              title="References"
              className="md:sticky md:top-[87px] md:self-start"
              color="neutral"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <a
                  href="https://www.amazon.com/JavaScript-Comprehensive-Learning-Professional-Programming/dp/1493222864?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Ackermann, P. (2022). JavaScript: The Comprehensive Guide.
                </a>
                <a
                  href="https://www.wiley.com/en-us/HTML+and+CSS%3A+Design+and+Build+Websites-p-9781118206911?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Duckett, J. (2011). HTML and CSS: Design and Build Websites. John Wiley & Sons.
                </a>
                <a
                  href="https://jackrusher.com/classic-ux/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Classic HCI demos. (n.d.).
                </a>
                <a
                  href="https://clarle.github.io/yui3/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ YUI Library. (n.d.).
                </a>
                <a
                  href="https://atomicdesign.bradfrost.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Atomic Design by Brad Frost. (n.d.).
                </a>
              </div>
            </div>
          </div>
          {/* * Section End * */}

          <ThankYou
            message="Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it."
            exploreBlocks={[
              <Link key="jotform-logbook" href="/ideas/jotform-logbook" className="flex-1 h-full">
                <div className="SectionBlock h-full p-6 flex flex-col justify-start items-start gap-2 cursor-pointer  hover:bg-orange-200 transition sm:border-b lg:border-b-0 lg:border-r border-stone-900">
                  <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                    Jotform Logbook
                  </div>
                  <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                    An internal tool for better company awareness
                  </div>
                </div>
              </Link>,
              <Link key="brifl" href="/ideas/brifl" className="flex-1 h-full">
                <div className="SectionBlock h-full p-6  flex flex-col justify-start items-start gap-2 cursor-pointer hover:bg-pink-200 transition">
                  <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                    Brifl
                  </div>
                  <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                    A collaborative form-building platform designed to bridge the gap between
                    creators and clients.
                  </div>
                </div>
              </Link>,
            ]}
            simpleTabs={[
              {
                icon: <LanguageIcon />,
                state: 'idle',
                to: 'https://usekroma.com/',
                className: 'h-full hover:bg-blue-100 border-r-0',
              },
            ]}
          />
        </div>
        {/* * Sidebar Start * */}
        <div
          className="BlogSideBar flex flex-col px-4 py-3 items-start justify-start gap-4 w-full md:w-1/4 bg-amber-50 md:border-t border-stone-900 
            md:sticky md:top-[87px] md:self-start"
          style={{ height: 'auto' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-center text-stone-900">In this article</p>
          </div>
          <div className="flex flex-col  gap-4">
            <TextLink className=" font-semibold text-sm" label="Introduction" to="#introduction" />
            <TextLink className=" font-semibold text-sm" label="0. History" to="#history" />
            <TextLink
              className=" font-semibold text-sm"
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
              className=" font-semibold text-sm"
              label="2. The Fundamentals of JS-Friendly Components"
              to="#the-fundamentals-of-js-friendly-components"
            />
            <TextLink className=" font-semibold text-sm" label="3. Structure" to="#structure" />
            <TextLink
              className="ml-4  text-sm"
              label="3.1 Using Proper Auto-Layout with Frames"
              to="#using-proper-auto-layout-with-frames"
            />
            <TextLink
              className="ml-4  text-sm"
              label="3.2 Example: Button Component Structure"
              to="#example-button-component-structure"
            />
            <TextLink
              className="ml-4 text-sm "
              label="3.3 Giving Meaningful Layer Names"
              to="#giving-meaningful-layer-names"
            />
            <TextLink className=" font-semibold text-sm" label="4. Properties" to="#properties" />
            <TextLink
              className=" ml-4 text-sm"
              label="4.1 Property Naming Conventions"
              to="#property-naming-conventions"
            />
            <TextLink
              className="ml-4 text-sm"
              label="4.2 Framework-Specific Implementation"
              to="#framework-specific-implementation"
            />
            <TextLink
              className="font-semibold  text-sm"
              label="5. Tokenization"
              to="#tokenization"
            />
            <TextLink
              className="ml-4  text-sm"
              label="5.1 Definition of Design Token"
              to="#definition-of-design-token"
            />
            <TextLink
              className="ml-4  text-sm"
              label="5.2 Implementing Tokens in Figma"
              to="#implementing-tokens-in-figma"
            />
            <TextLink className=" font-semibold text-sm" label="6. Interaction" to="#interaction" />
            <TextLink
              className="ml-4  text-sm"
              label="6.1 Essential States to Prototype"
              to="#essential-states-to-prototype"
            />
            <TextLink
              className="ml-4  text-sm"
              label="6.2 Triggers and Actions"
              to="#triggers-and-actions"
            />

            <TextLink className="font-semibold  text-sm" label="Conclusion" to="#conclusion" />
            <TextLink className="font-semibold text-sm" label="References" to="#references" />
          </div>
        </div>
        {/* * Sidebar End * */}
      </div>

      <Footer />
    </div>
  );
}
