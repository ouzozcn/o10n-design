'use client';
import React, { useState } from 'react';
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
import DesignSkillPie from '@/components/data-vis/DesignSkillPie';
import { ToastContainer } from 'react-toastify';
import { showCustomToast } from '@/components/CustomToast';
import RoughAnnotate from '@/components/rough-notation/RoughAnnotate';
import Input from '@/components/Input';

/* Input Constants */
// Moved inside component function
/* */
const handleClickOne = () => {
  showCustomToast('You clicked the Primary Button.');
};
const handleClickTwo = () => {
  showCustomToast('You clicked the Icon Button.');
};

const handleClickFour = () => {
  showCustomToast(
    'This button container shows the default, hover, focus, loading, and disabled states of a button component.'
  );
};
const buttonFactsOne = () => {
  showCustomToast(
    'The first web button was created in 1993. The Mosaic browser introduced the <input type="button"> element. Before that, all web interactions were just hyperlinked text!'
  );
};
const buttonFactsTwo = () => {
  showCustomToast(
    'The word "button" in UI comes from actual clothing buttons. Early computer interfaces borrowed heavily from physical metaphors. Buttons were designed to look "pushable" with beveled edges and shadows, mimicking real-world buttons you could press.'
  );
};
const buttonFactsThree = () => {
  showCustomToast(
    'The optimal button border-radius is 4-8 pixels. Studies show that slightly rounded corners (4-8px) are processed 17% faster by our brains than sharp corners, which our minds perceive as slightly threatening.'
  );
};
const buttonFactsFour = () => {
  showCustomToast(
    'Ghost buttons increase cart abandonment by 20-30%. Despite being trendy, ghost buttons perform significantly worse than solid buttons for primary actions.'
  );
};
const buttonFactsFive = () => {
  showCustomToast(
    'Japanese websites have 3x more buttons. Japanese web design typically features significantly more buttons and options on a single page compared to Western minimalist designs.'
  );
};
const buttonFactsSix = () => {
  showCustomToast(
    'The average button click takes 200ms. Studies show that the average time it takes for a user to click a button is 200ms, which is a significant amount of time.'
  );
};
const buttonFactsSeven = () => {
  showCustomToast(
    'The average user encounters 100+ buttons daily. From elevator buttons to smartphone apps, the average person interacts with over 100 buttons per day, yet only consciously notices about 10% of them.'
  );
};
const buttonFactsEight = () => {
  showCustomToast(
    'Buttons cause "decision fatigue". Studies show that presenting users with more than 3-5 button options significantly increases abandonment rates. This is why good UX design emphasizes primary, secondary, and tertiary button hierarchies.'
  );
};
const buttonFactsNine = () => {
  showCustomToast(
    'The average user clicks a button 3-5 times per day. From elevator buttons to smartphone apps, the average person interacts with over 100 buttons per day, yet only consciously notices about 10% of them.'
  );
};
const buttonFactsTen = () => {
  showCustomToast(
    '"Sign Up" beats "Register" by 60%. Changing button copy from "Register" to "Sign Up" can increase conversions by up to 60%. "Register" feels formal and commitment-heavy, while "Sign Up" feels casual and reversible.'
  );
};
const buttonExample = () => {
  showCustomToast('I am a button made of three frames');
};

export default function ComponentDesignForJavaScriptFrameworks() {
  /* Input Constants */
  const [value, setValue] = useState('');
  const [state, setState] = useState<
    'idle' | 'hover' | 'focus' | 'active' | 'loading' | 'disabled' | 'success' | 'error'
  >('idle');

  const handleFocus = () => {
    setState('focus');
  };

  const handleBlur = () => {
    if (value) {
      setState('success');
    } else {
      setState('idle');
    }
  };
  /* */

  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={false}
        closeButton={false}
      />
      <TopDivider />
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            Component Design for JavaScript Frameworks
          </h1>
          {/*
          <Button
            label="Storybook Repo"
            type="secondary"
            size="medium"
            endIcon={<ArrowOutwardIcon />}
            to="http://o10n.design/docs/index.html?path=/docs/components-button--docs"
            target="_blank"
          />
          */}
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

      <div className="Summary__Content flex flex-col w-full  gap-4 lg:gap-12 p-6 lg:py-12 lg:px-40 text-xl items-center justify-center text-justify font-regular text-stone-900">
        <p>
          The landscape of product design nowadays requires many more skills, knowledge, and
          expertise. We designers have learned about research methods for understanding user needs,
          data analysis for product growth, psychology for understanding others, and list goes on.
          Another important area where we may improve personally and learn new things is front-end
          development which is an emerging skill that is becoming more and more important. Analysis
          of current job market data shows that{' '}
          <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
            one in five Product Designer positions
          </RoughAnnotate>{' '}
          now requires front-end development knowledge which is a clear signal that technical skills
          have shifted from optional to essential.
        </p>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <DesignSkillPie />
          <p className="text-center text-sm mt-4 text-stone-600">
            Most required skills in job listings for Product Designers in 2024-2025 (
            <a
              href="/assets/documents/research/Product_Designer_Skills_Employers_Want_Most_in_2024_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-cyan-700 hover:text-cyan-900"
            >
              Source
            </a>
            )
          </p>
        </div>
        <p>
          This article is a guide for designers who want to create components that are easy to
          implement in code. It covers the{' '}
          <RoughAnnotate type="box" color="#a78bfa" padding={2}>
            fundamentals of component design,
          </RoughAnnotate>{' '}
          including structure, properties, design tokens, and interactions.
        </p>

        <div className="Hexagon__Icon__Container flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-8">
          <Image
            src="/img/js-components/hexagon_icon_structure.svg"
            alt="Hexagon Icon Structure"
            width={180}
            height={1}
            onClick={() => {
              window.location.href = '#structure';
            }}
            className="cursor-pointer"
          />
          <Image
            src="/img/js-components/hexagon_icon_properties.svg"
            alt="Hexagon Icon Properties"
            width={180}
            height={1}
            onClick={() => {
              window.location.href = '#properties';
            }}
            className="cursor-pointer"
          />
          <Image
            src="/img/js-components/hexagon_icon_tokens.svg"
            alt="Hexagon Icon Tokens"
            width={180}
            height={1}
            onClick={() => {
              window.location.href = '#tokens';
            }}
            className="cursor-pointer"
          />
          <Image
            src="/img/js-components/hexagon_icon_interaction.svg"
            alt="Hexagon Icon Interaction"
            width={180}
            height={1}
            onClick={() => {
              window.location.href = '#interaction';
            }}
            className="cursor-pointer"
          />
        </div>
        <p className="text-center text-sm text-stone-600">Topics covered in this article</p>
        <p>
          Learning these fundamentals will improve your design process and communication. During
          product development, design must communicate with a variety of stakeholders, including
          researchers, product managers, developers, testers, data analysts, and others. But
          developers are probably the ones we see, talk to, and discuss the most. We talk about
          every little element of a product with them. Common knowledge is essential for a more
          productive workplace. When designers and developers{' '}
          <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
            speak the same language,
          </RoughAnnotate>{' '}
          communication is improved, misunderstandings are decreased, expectations and reality can
          be discussed, and design and development can coexist peacefully.
        </p>
        <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 ">
          <Image
            src="/img/js-components/communication_freq_with_stakeholders.svg"
            alt="Communication frequency with stakeholders for a designer"
            width={500}
            height={1}
          />
          <p className="text-center text-sm text-stone-600">
            Approximate communication frequency with stakeholders for a designer
          </p>
        </div>

        <p>
          In this article, we'll explore best practices for{' '}
          <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
            designing components for JavaScript frameworks and libraries.
          </RoughAnnotate>{' '}
          At the end of reading, you will have a solid understanding of:
        </p>
        <ul className="list-disc list-inside ml-4  space-y-4 marker:text-stone-600">
          <li>How to nest frames within each other to create a proper HTML structure.</li>
          <li>
            How Figma's Auto-Layout directly maps to CSS, enabling you to design with code structure
            in mind.
          </li>
          <li>
            Property naming conventions that work identically across all major JavaScript
            frameworks.
          </li>
          <li>Design token implementation strategies for consistent and maintainable styling.</li>
          <li>Prototyping interactions and states for realistic UI behavior.</li>
        </ul>
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
        <p className="text-center text-sm text-stone-600">
          From Figma to React, Svelte, Vue, or Angular
        </p>
        <p className=" font-semibold text-center text-stone-900 text-h3 font-sans ">
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
        <div className="BlogContentContainer flex flex-col w-full md:w-3/4   md:border-r border-stone-900">
          {/* * Section Start * */}
          {/* <div className="BlogContent flex flex-col w-full   gap-4 " id="history">
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
          </div> */}
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
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    A component is a single, reusable UI element
                  </RoughAnnotate>{' '}
                  within a product, a building block that can be used repeatedly with different
                  configurations. This concept mirrors both design systems and code architecture.
                  Modern practices like Atomic Design emphasize the importance of breaking down
                  components into their most basic parts to create a more efficient and scalable
                  design process.
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
                  effective components, design systems, and products. By leveraging atomic design
                  principles, you can ensure consistency and scalability across your projects.
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
                  Despite syntactic differences,{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    all modern JavaScript frameworks and libraries
                  </RoughAnnotate>{' '}
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
  onClick={() => { /* Your action here */ }}
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
                  <b>Properties (props)</b> define a component's (object) identity and
                  characteristics. Each property has{' '}
                  <RoughAnnotate type="box" color="#8b5cf6" padding={2}>
                    a name and a value
                  </RoughAnnotate>{' '}
                  , and each of these name/value pairs tells you something about the component
                  itself.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/props_name_value.svg"
                    alt="Properties have a name and a value"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Properties have a name and a value
                  </p>
                </div>
                <p>
                  Duckett (2014) defines properties with a car analogy. Consider two cars: each has
                  properties like brand, model, year, and passenger capacity where each serves a
                  specific purpose. Both cars have these properties where the first car is a Toyota
                  and the second car is a Honda. The first car is a Corolla and the second car is a
                  Civic. The first car is a 2020 and the second car is a 2021. The first car has a
                  passenger capacity of 5 and the second car has a passenger capacity of 5.{' '}
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/car_props_table.svg"
                    alt="Property comparison for two different cars"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Property comparison for two different cars
                  </p>
                </div>
                <p className="mb-4">
                  The car objects have the same properties but with different values. They tell you
                  the maker of car,model, year, and passenger capacity. Similarly,{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    any UI component has properties
                  </RoughAnnotate>{' '}
                  like them. For instance, a button component might have properties like:
                </p>
                {/*  button block for prop showcase} */}
                <code>
                  <b>label:</b> string
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-24 lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I am label"
                    type="primary"
                    size="medium"
                    className="w-[200px]"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsOne}
                  />
                </div>
                {/*  button block for prop showcase} */}
                {/*  button block for prop showcase} */}
                <code>
                  <b>type:</b> enum ('primary' | 'secondary' | 'tertiary')
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-auto p-4   lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I am primary"
                    type="primary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsTwo}
                  />
                  <Button
                    label="I am secondary"
                    type="secondary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsThree}
                  />
                  <Button
                    label="I am tertiary"
                    type="tertiary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsFour}
                  />
                </div>
                {/*  button block for prop showcase} */}
                {/*  button block for prop showcase} */}
                <code>
                  <b>size:</b> enum ('small' | 'medium' | 'large')
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-auto p-4 lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I am small"
                    type="primary"
                    size="small"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsFive}
                  />
                  <Button
                    label="I am medium"
                    type="primary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsSix}
                  />
                  <Button
                    label="I am large"
                    type="primary"
                    size="xlarge"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsSeven}
                  />
                </div>
                {/*  button block for prop showcase} */}
                {/*  button block for prop showcase} */}
                <code>
                  <b>isDisabled:</b> boolean
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-24 lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I am disabled"
                    type="primary"
                    size="medium"
                    className="w-[200px]"
                    isDisabled={true}
                    isLoading={false}
                  />
                </div>
                {/*  button block for prop showcase} */}
                {/*  button block for prop showcase} */}
                <code>
                  <b>isLoading:</b> boolean
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-24 lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I am loading"
                    type="primary"
                    size="medium"
                    className="w-[200px]"
                    isDisabled={false}
                    isLoading={true}
                  />
                </div>
                {/*  button block for prop showcase} */}
                {/*  button block for prop showcase} */}
                <code>
                  <b>startIcon:</b> component instance
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-24 lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I have a start icon"
                    type="primary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    startIcon={<CodeRoundedIcon />}
                    onClick={buttonFactsEight}
                  />
                </div>
                {/*  button block for prop showcase} */}
                {/*  button block for prop showcase} */}
                <code>
                  <b>endIcon:</b> component instance
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-24 lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="I have an end icon"
                    type="primary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    endIcon={<CodeRoundedIcon />}
                    onClick={buttonFactsNine}
                  />
                </div>
                {/*  button block for prop showcase} */}
                {/*  button block for prop showcase} */}
                <code>
                  <b>onClick:</b> function
                </code>
                <div className="Button__Samples flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center w-full h-24 lg:h-60 mt-2 lg:mt-4 mb-4 lg:mb-8 rounded-lg border border-stone-900 hover:bg-stone-50">
                  <Button
                    label="What would happen when clicked?"
                    type="primary"
                    size="medium"
                    isDisabled={false}
                    isLoading={false}
                    onClick={buttonFactsTen}
                  />
                </div>
                {/*  button block for prop showcase} */}
                <div className="flex items-center justify-center w-auto mx-auto">
                  <InfoContainer
                    color="cyan"
                    icon={<StorybookIcon />}
                    content="You can try all button component properties on Storybook "
                    to="/docs/index.html?path=/docs/components-button--docs"
                    target="_blank"
                    className="my-4"
                  />
                </div>
                <p>
                  Above properties tells us the abilites of the button component. The idea of name
                  and value pairs is used in both HTML and CSS. In HTML, an attribute is like a
                  property. Different attributes have different names, and each attribute can have a
                  value. Name and Value pairs are used a lot in programming.
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
                  Designing components that developers can efficiently implement requires mastering{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    four fundamental principles:
                  </RoughAnnotate>
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
                    <b>Tokens:</b> Applying design tokens for scalable theming.
                  </li>
                  <li>
                    <b>Interaction:</b> Prototyping behaviors and states.
                  </li>
                </ul>
                <p>
                  Learning these fundamentals will help you design components that are not only
                  visually appealing but also easy to implement and maintain. Let's dive into each
                  fundamental in depth. We will start with the first fundamental: Structure.
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
                <p>
                  The arrangement and organization of HTML elements within a document is referred to
                  as its{' '}
                  <RoughAnnotate type="box" color="#8b5cf6" padding={3}>
                    structure.
                  </RoughAnnotate>{' '}
                  This structure establishes the relationships between the various sections of a web
                  page and the way content is presented. Below is an example of a basic HTML
                  structure.
                </p>
                <Code
                  className=" lg:w-auto h-[310px] mx-auto my-4 lg:my-8"
                  code={`<!DOCTYPE html>
<head>
  <title>This is the title visible in the browser tab</title>
</head>
<body>
  <h1>This is the heading of the page</h1>
  <p>This is the paragraph of the page</p> 
</body>
</html>
`}
                >
                  <CodeHeader icon={CodeRoundedIcon} copyButton className="text-amber-50 h-16 px-6">
                    Basic HTML Structure
                  </CodeHeader>
                  <CodeBlock lang="html" theme="dark" cursor={true} />
                </Code>
                <p>
                  HTML uses various elements to structure the content of a page. These elements are
                  called tags.{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    Each tag has a specific purpose
                  </RoughAnnotate>{' '}
                  and is used to create different types of content.
                </p>
                <div className="HTML__Tags__Samples__Placeholder flex flex-col gap-4 items-center justify-center w-full my-4 lg:my-8">
                  <div className="HTML__Tags__Samples__List flex flex-wrap gap-4 lg:gap-6 p-4 lg:p-8 items-center justify-center w-full h-60 rounded-lg border border-stone-900 hover:bg-stone-50">
                    <Tag label="<header>" size="large" type="lime" />
                    <Tag label="<nav>" size="large" type="red" />
                    <Tag label="<main>" size="large" type="amber" />
                    <Tag label="<section>" size="large" type="violet" />
                    <Tag label="<article>" size="large" type="teal" />
                    <Tag label="<footer>" size="large" type="purple" />
                    <Tag label="<h1>" size="large" type="emerald" />
                    <Tag label="<p>" size="large" type="indigo" />
                  </div>
                  <p className="text-sm text-stone-600">
                    Sample HTML tags which are used to structure the content
                  </p>
                </div>
                <p>
                  In design, we define this structure by using{' '}
                  <RoughAnnotate type="circle" color="#84cc16" padding={3}>
                    frames.
                  </RoughAnnotate>{' '}
                  Each frame we use is translated to a HTML element. Belows is the example of frame
                  nesting for the basic HTML structure mentioned above.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/basic_html_structure.svg"
                    alt="Basic HTML Structure Frame Structure"
                    width={300}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Basic Frame Nesting for the Basic HTML Structure
                  </p>
                </div>
                <p>
                  While desiging a page or a component, we actually define the HTML structure. That
                  is why it is important to understand and know how to nest frames within each
                  other. In the next section, we will cover how to use Auto-Layout, how to name
                  frames, and how to use them in a proper way.
                </p>
                <div className="flex w-auto items-center justify-center">
                  <InfoContainer
                    color="cyan"
                    icon={<CodeRoundedIcon />}
                    content="Learn more about HTML elements (tags) and their semantic meaning. Visit the W3Schools website for a comprehensive guide."
                    to="https://www.w3schools.com/html/html_elements.asp?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                    target="_blank"
                    className="mt-6 mb-6"
                  />
                </div>
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
                  Figma offers two ways to nest objects:{' '}
                  <RoughAnnotate type="underline" color="#ef4444" padding={2}>
                    <b>Groups</b>{' '}
                  </RoughAnnotate>{' '}
                  and{' '}
                  <RoughAnnotate type="underline" color="#22c55e" padding={2}>
                    <b>Frames</b>.
                  </RoughAnnotate>{' '}
                  Groups are the traditional Adobe-style approach, while Frames unlock Figma's
                  powerful
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
                  flexible way. Auto-Layout in Figma directly corresponds to{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    CSS Flexbox properties.
                  </RoughAnnotate>{' '}
                  When you configure Auto-Layout settings, you're essentially defining:
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
                  the spacing between the children of the component with using{' '}
                  <RoughAnnotate type="box" color="#8b5cf6" padding={2}>
                    Gap
                  </RoughAnnotate>{' '}
                  and{' '}
                  <RoughAnnotate type="box" color="#8b5cf6" padding={2}>
                    Padding
                  </RoughAnnotate>{' '}
                  properties.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/figma_gap_and_padding.svg"
                    alt="Figma Gap and Padding"
                    width={600}
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
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    Your frame structure defines the HTML structure.
                  </RoughAnnotate>{' '}
                  Each frame typically becomes an HTML element (most commonly a{' '}
                  <code>{'<div>'}</code> container, but could be <code>{'<button>'}</code>,{' '}
                  <code>{'<section>'}</code>, <code>{'<header>'}</code>, <code>{'<nav>'}</code>, or{' '}
                  <code>{'<article>'}</code> depending on semantic meaning). Therefore, using the
                  minimum necessary frames helps developers create cleaner, more maintainable code.
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
                <div className="flex items-center flex-col md:flex-row justify-center w-full gap-4 md:gap-16 my-4">
                  <Button
                    label="Button Label"
                    type="primary"
                    size="large"
                    startIcon={<WestRoundedIcon />}
                    endIcon={<EastRoundedIcon />}
                    ariaLabel="Example button with start and end icons"
                    onClick={buttonExample}
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
                    className="mb-4"
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
                  Proper layer naming is essential for clear communication between designers and
                  developers. Meaningful names help developers understand the purpose of each frame
                  and how it maps to code. If you wouldn't name a CSS class "Frame 1" or "Group 2",
                  don't use those names in your layers. Instead,{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    use descriptive names
                  </RoughAnnotate>{' '}
                  that reflect the element's role.
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
                  Above example shows a card component with unnamed frames (left) versus
                  thoughtfully named frames (right). The meaningful names{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    clarify the structure and purpose
                  </RoughAnnotate>{' '}
                  of each element, making it easier for developers to implement the design
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
                    <b>Clarifies HTML structure:</b> Layer names can inform semantic HTML elements
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
                </ul>
                <p className="font-bold mt-2">Naming Conventions</p>
                <p>Follow these guidelines when naming layers:</p>
                <div className="flex flex-col md:flex-row gap-4 w-full ">
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`// Use clear, descriptive names

🟩 CardImage (not Image1)
🟩 CardTitle (not Text_Layer_2)
🟩 ActionButton (not Button)
🟩 IconWrapper (not Group_23)
🟩 PriceLabel (not Text)`}
                  </pre>
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`// Do not use vague, generic names

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
                  your development team up for success. This will enable them to implement
                  components quickly and accurately. Modern design systems like Material Design
                  (Google), Carbon (IBM), and Atlassian Design System use consistent frame naming to
                  create clarity across hundreds of components.
                </p>
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
                  design process but also significantly{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    reduces the development effort
                  </RoughAnnotate>{' '}
                  required to implement the component. Defining properties is a time investment that
                  pays off in spades.
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
                  We can use these property types to create any UI component with different states
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
                  Front-end development has been around for a long time. Over the years, certain
                  conventions have emerged that enhance code readability and maintainability.
                  Adopting these conventions in your property naming can significantly improve
                  collaboration with developers. As designers, we should strive to speak the same
                  language as our developer counterparts. Here are some key conventions to consider:
                </p>

                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    Use{' '}
                    <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                      <b>camelCase</b>
                    </RoughAnnotate>{' '}
                    (e.g., buttonLabel, isDisabled) for property names to align with JavaScript
                    conventions.
                  </li>
                  <li>
                    Prefix boolean properties with <b>is</b>, <b>has</b>, <b>show</b>, or <b>can</b>{' '}
                    to indicate their <b>true/false</b> nature.
                  </li>
                  <li>Use specific, clear names (`primaryColor` not `color1`)</li>
                  <li>
                    Indicate optional behavior clearly with using question mark <b>?</b> (startIcon
                    is must but startIcon? is optional)
                  </li>
                  <li>Use consistent naming patterns across all components</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/component__property_naming.svg"
                    alt="Figma Property Naming Conventions"
                    width={700}
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
                    {`// Use descriptive, purposeful names

🟩 cardTitle
🟩 isDisabled
🟩 buttonLabel
🟩 iconStart
🟩 hasEndIcon
🟩 showKebabMenu`}
                  </pre>
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`// Do not use vague, generic names

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
                  Above Figma button component properties map directly to props in{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    React, Vue, Angular, and Svelte
                  </RoughAnnotate>{' '}
                  with minimal adjustments for framework syntax. This consistency reduces cognitive
                  load for developers and help them implement components faster and with fewer
                  errors. Let's take a look at how the same properties look in different frameworks:
                </p>
                <div className="Animated___Code__Blocks flex flex-col w-full items-center justify-center gap-2 lg:gap-4 lg:mx-auto lg:mb-4">
                  <Code
                    className="lg:w-[650px] lg:h-[330px]"
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
                  <p className="text-sm text-stone-600 lg:mb-4">
                    In React, component properties are defined in an interface.
                  </p>

                  <Code
                    className=" lg:w-[650px] lg:h-[330px]"
                    code={`interface ButtonProps {
  label: string;
  type?: 'primary' | 'secondary' | 'tertiary';<
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
                  <p className="text-sm text-stone-600 lg:mb-4">
                    In Vue, component properties are defined in an interface.
                  </p>

                  <Code
                    className="lg:w-[650px] lg:h-[430px]"
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
                  <p className="text-sm text-stone-600 lg:mb-4">
                    In Angular, component properties are defined in a class.
                  </p>

                  <Code
                    className=" lg:w-[650px] lg:h-[330px]"
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
                  <p className="text-sm text-stone-600 ">
                    In Svelte, component properties are defined in a script tag.
                  </p>
                </div>

                <p>
                  As we can see, the same well-defined properties in Figma translate cleanly to
                  props in React, Vue, Angular, and Svelte. This consistency not only speeds up
                  development but also reduces the likelihood of miscommunication or errors during
                  implementation. By investing time in defining clear, js-friendly component
                  properties in Figma, we set the stage for a{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    smoother handoff
                  </RoughAnnotate>{' '}
                  to developers and a more efficient development process overall.
                </p>
              </div>
            </div>
          </div>
          {/* * Section End * */}
          <div className="BlogContent flex flex-col w-full   gap-4 " id="tokens">
            <SectionTitle
              title="5. Tokens"
              className="md:sticky md:top-[87px] md:self-start"
              color="emerald"
            />
            <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
              <div className="SectionContent flex flex-col w-full items-start justify-center text-start text-stone-900 text-lg gap-4">
                <p>
                  A token, as used in web development and design, is typically a standardized value
                  that denotes a particular configuration or design element. Tokens are frequently
                  used to enhance scalability, preserve consistency, and promote cooperation across
                  various platforms and technologies.
                </p>
                <div className="Token__Samples__Placeholder flex flex-col gap-4 items-center justify-center w-full mb-4">
                  <div className="Token__Samples__List flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-8 items-center justify-center w-full h-60 rounded-lg border border-stone-900 hover:bg-stone-50">
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
                  contrast). This necessitates <b>tokens</b>, or customization features{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    using variables instead of hard-coded values.
                  </RoughAnnotate>{' '}
                  Besides that, using tokens instead of fixed values also enables scalability and
                  consistency across the design system. For example, if your brand color changes,
                  updating a single token updates it everywhere. As designers, we often hear new
                  iteration ideas from stakeholders. Using tokens allows us to implement changes
                  quickly without touching every component.
                </p>
                <p className="font-bold md:mt-6 ">From Hard-Coded Values to Design Tokens</p>
                <p>
                  If you are using CSS, SASS, or CSS-in-JS, design tokens are typically implemented
                  as CSS variables (custom properties). You need to create your own primitive and
                  component tokens. If you want to skip the creating primitive tokens, it's best to
                  use an existing library like{' '}
                  <RoughAnnotate type="box" color="#8b5cf6" padding={2}>
                    TailwindCSS.
                  </RoughAnnotate>{' '}
                  It provides a comprehensive set of design tokens that cover colors, spacing,
                  typography, and more. You can then create component-specific tokens that reference
                  these primitives. For example, a button's primary background color token might
                  reference Tailwind's `--tw-color-blue-600`. Here is an example of how to
                  transition from old way to modern way:
                </p>
                <div className="flex flex-col  lg:flex-row gap-4 w-full ">
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`// Old approach (hard-coded values)

🟥 Color: "#0D99FF" (specific hex value)
🟥 Spacing: "16px" (specific pixel value)
🟥 Font: "Inter" (specific typeface)
🟥 Border radius: "8px" (specific value)`}
                  </pre>
                  <pre className="bg-amber-50  rounded-lg p-4 text-sm font-mono w-full overflow-x-auto">
                    {`// Modern approach (design tokens)

🟩 Color: "--color-primary-600" → resolves to "#0D99FF" in light mode, "#3B82F6" in dark mode
🟩 Spacing: "--spacing-4" → resolves to "16px" (or "1rem" in fluid systems)
🟩 Font: "--font-family-sans" → resolves to "Inter, system-ui, sans-serif"
🟩 Border radius: "--radius-md" → resolves to "8px"`}
                  </pre>
                </div>
                <p className="font-bold md:mt-6 ">
                  <b>Benefits of Tokens</b>
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
                  A design token is a standardized,{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    reusable variable
                  </RoughAnnotate>{' '}
                  that stores design values like colors, spacing, or typography so they can be
                  easily accessed across different platforms and technologies. Design tokens
                  maintain consistency and help designers and developers collaborate more
                  effectively. We can define various types of tokens for different purposes. For
                  example, we can define color tokens for different purposes like primary,
                  secondary, success, error, etc.
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
                  the aid of design token management tools or preprocessors like Sass.
                </p>
                <Code
                  className=" lg:w-1/2 h-auto mx-auto"
                  code={`"color": {
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
                  Managing design tokens is a crucial part of components and design systems
                  maintenance. You can use various tools to manage design tokens like Tokens Studio,
                  Specify, and Supernova.
                </p>
                {/* Token Management Tools Cards */}
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
                  different types:{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    Color, Number, String, and Boolean.
                  </RoughAnnotate>{' '}
                  Using these tokens improves design system maintenance, ensures consistency across
                  the interface, eases style updates, and enables various theme modes such as
                  dark-light mode.{' '}
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
                    <b>Number:</b> Consistent spacing scale for height, gap, padding (4px, 8px,
                    etc.)
                  </li>
                  <li>
                    <b>String:</b> Font families, placeholders
                  </li>
                  <li>
                    <b>Boolean:</b> Light/Dark mode switch, IF/ELSE conditions
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
                  After defining the variables, you can start to{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    use them in every aspect of your design system.
                  </RoughAnnotate>{' '}
                  You can use color-body-text-primary to all your body text elements. This will
                  allow you to easily change the color of your body text by changing the value of
                  the related color variable.
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
                  It allows us to{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    mimic real-time behaviors
                  </RoughAnnotate>{' '}
                  for actionable items. Today most UI elements have interactions. At least, a hover
                  state is applicable for most of them. For instance, a button can redirect users to
                  a different page, display a dialog, or open a drawer on the side. Adding an On
                  Click event into a component in Figma actually helps developers while defining the
                  “onClick” function on the component so they can define proper destination for the
                  component.
                </p>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/prototype_flow.svg"
                    alt=" Button with hover and onClick actions"
                    width={1100}
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
                  them by using component-level prototyping. When a component has interactions,
                  developers can see those actions via{' '}
                  <RoughAnnotate type="box" color="#8b5cf6" padding={2}>
                    Dev Mode in Figma,
                  </RoughAnnotate>{' '}
                  VS Code, or Cursor.
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
                  Additionally, adding component interactions{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    reveals the component's faults
                  </RoughAnnotate>{' '}
                  during the early stages of design. Configuring user flows is made possible by the
                  usage of interactive components rather than static ones. Additionally, it is
                  necessary for the initial testing of prototypes. If you conduct a usability test,
                  you can use the prototype to test the user flows and interactions. Last but not
                  least of the benefits is having interactive elements enables stakeholders to
                  understand better while you are doing your presentations.
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
                  Almost all of the components{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    need to define various states.
                  </RoughAnnotate>{' '}
                  Every state serves a distinct function in displaying a component's status. While a
                  hover state provides visual input regarding the interactivity, a default state
                  displays the component's initial appearance. The cursor pointer's appearance may
                  indicate that a component is draggable or contains an anchor link that will take
                  us to a different location.
                </p>
                <div className="flex flex-col items-center justify-center w-full">
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
                </div>
                <p>
                  {' '}
                  Any interactive component needs to exhibit these fundamental states;{' '}
                  <b>Default</b>, <b>Hover</b>, <b>Focus</b>, <b>Active</b>, <b>Disabled</b>,{' '}
                  <b>Loading</b>, <b>Error</b>, <b>Success</b>. Let's take a look at each state in
                  detail with using an <b>input</b> component as an example.{' '}
                </p>
                <p className="font-semibold text-stone-900">Default State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>How the component appears initially</li>
                  <li>Resting state with no user interaction</li>
                </ul>

                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state={state}
                    placeholder="I am on default state"
                    startIcon={<CodeRoundedIcon />}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={newValue => setValue(newValue)}
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
                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state="hover"
                    placeholder="I am on hover state"
                    startIcon={<CodeRoundedIcon />}
                    onChange={newValue => setValue(newValue)}
                    className="bg-amber-200"
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
                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state="focus"
                    placeholder="I am on focus state"
                    startIcon={<CodeRoundedIcon />}
                    onChange={newValue => setValue(newValue)}
                  />

                  <p className="text-center text-sm text-stone-600 ">
                    Focus state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Active/Pressed State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Visual feedback during click/tap</li>
                  <li>Brief state showing the component is being activated</li>
                  <li>Often a slight scale reduction or color darkening</li>
                </ul>
                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state="active"
                    placeholder="I am on active state"
                    startIcon={<CodeRoundedIcon />}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={newValue => setValue(newValue)}
                  />

                  <p className="text-center text-sm text-stone-600">
                    Active state of an input component
                  </p>
                </div>
                <p className="font-semibold text-stone-900 mt-4">Disabled State</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Non-interactive appearance</li>
                  <li>Reduced opacity or grayed-out styling</li>
                  <li>Cursor changes to "not-allowed"</li>
                </ul>
                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state="disabled"
                    placeholder="I am on disabled state"
                    startIcon={<CodeRoundedIcon />}
                    onChange={newValue => setValue(newValue)}
                    className="cursor-not-allowed"
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
                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state="loading"
                    placeholder="I am on loading state"
                    startIcon={<CodeRoundedIcon />}
                    onChange={newValue => setValue(newValue)}
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
                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state="error"
                    placeholder="I am on error state"
                    startIcon={<CodeRoundedIcon />}
                    onChange={newValue => setValue(newValue)}
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
                <div className="Input__Sample__Container flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto gap-6 my-4 lg:my-6">
                  <Input
                    value={value}
                    state="success"
                    placeholder="I am on success state"
                    startIcon={<CodeRoundedIcon />}
                    onChange={newValue => setValue(newValue)}
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
                  Changing states of a component or assigning an onclick function requires{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    defining triggers and actions.
                  </RoughAnnotate>{' '}
                  Figma offers various triggers and actions for both web and mobile experiences. To
                  create an interactive component and functional interface in the design phase, you
                  need to use triggers and actions functionality.{' '}
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
                  You can designate{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    ten distinct triggers
                  </RoughAnnotate>{' '}
                  for your components in Figma. These triggers can be used to assign keyboard keys,
                  click and drag, move the mouse pointer over an element, or delay a transition. The
                  two triggers that designers use the most while designing are On Click and While
                  Hovering. On Tap and On Drag might be your top picks if you're designing for
                  mobile.{' '}
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
                  designate{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    eleven distinct actions
                  </RoughAnnotate>{' '}
                  for your components in Figma. These actions define the behavior of the component
                  when a trigger is activated.
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
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    Most common actions
                  </RoughAnnotate>{' '}
                  when designing components and pages are <b>Navigate</b>, <b>Scrool</b>,{' '}
                  <b>Open</b>, and <b>Open Overlay</b>. If you need to define complex behavior, you
                  can use the Conditional, Set Variable, and Set Variable Mode. Conditional action
                  type allows you to define IF/ELSE logic. Set Variable action type allows you to
                  set a variable value. Set Variable Mode action type allows you to switch between
                  different modes of a variable such as light mode, dark mode, and high contrast
                  mode.
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
                  The principles outlined in this article, <b>Structure</b>, <b>Properties</b>,{' '}
                  <b>Tokens</b>, and
                  <b>Interactions</b>, are essential for creating components that are easy to
                  implement in code. When you structure frames with HTML in mind, name properties
                  using proper conventions, implement design tokens for scalability, and prototype
                  complete interaction states, you're not just creating better Figma files.{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    You're building bridges between disciplines.
                  </RoughAnnotate>
                </p>
                <p>If you start to implement these principles, you will see the benefits like:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Fewer clarification questions from developers</li>
                  <li>Increased development velocity</li>
                  <li>Better code quality with clear component architecture</li>
                  <li>Easier iteration and maintenance</li>
                  <li>Scalable design systems across multiple products</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/bridge_between_design_dev.svg"
                    alt="Bridge between design and development"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">
                    Bridge between design and development
                  </p>
                </div>

                <p className="font-semibold text-stone-900 mt-4">Beyond Individual Components</p>
                <p>
                  While this article focused on component design, these principles extend far beyond
                  single UI elements:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>
                    <b>Design systems</b> become more maintainable when built on these foundations
                  </li>
                  <li>
                    <b>Cross-functional teams</b> collaborate more smoothly with shared terminology
                  </li>
                  <li>
                    <b>Product velocity</b> increases when handoffs are friction-free
                  </li>
                  <li>
                    <b>Technical debt</b> decreases when designs are implementable from the start
                  </li>
                  <li>
                    <b>Career opportunities</b> expand as you develop design engineering skills
                  </li>
                </ul>
                <p>
                  The job market data shows this clearly: 20% of product designer positions now
                  requires front-end development knowledge. This isn't a passing trend.{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    It's the evolution of our discipline.
                  </RoughAnnotate>{' '}
                  Designers who understand code structure, component architecture, and developer
                  workflows are becoming increasingly valuable.
                </p>
                <p className="font-semibold text-stone-900 mt-4">Starting Tomorrow</p>
                <p>You don't need to master everything at once. Start small:</p>
                <p>This week: </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Review one existing component in your design files</li>
                  <li>Rename frames using semantic, meaningful names</li>
                  <li>Check if your Auto-Layout structure makes sense for HTML</li>
                </ul>
                <p className=" mt-4">This month: </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Create or refine properties for your core components</li>
                  <li>Establish a naming convention document with your team</li>
                  <li>Prototype interaction states for your most-used components</li>
                </ul>
                <p className=" mt-4">This quarter: </p>
                <ul className="list-disc list-inside ml-4 space-y-2 marker:text-stone-600">
                  <li>Implement a design token system using Figma Variables</li>
                  <li>Document your component standards</li>
                  <li>Conduct a handoff retrospective with your development team</li>
                </ul>
                <div className="Image__Container flex flex-col items-center justify-center w-full gap-6 my-4 lg:my-6">
                  <Image
                    src="/img/js-components/learning_journey.svg"
                    alt="Your learning journey"
                    width={800}
                    height={1}
                  />
                  <p className="text-center text-sm text-stone-600">Your learning journey</p>
                </div>
                <p>
                  Small, consistent improvements compound into expertise. Each component you refine
                  teaches you more about the design-development relationship. Do not forget: The
                  best components aren't just beautiful. They are{' '}
                  <RoughAnnotate type="highlight" color="#a7f3d0" padding={2}>
                    thoughtfully structured, clearly documented, and ready to become excellent in
                    development.
                  </RoughAnnotate>
                </p>
                <p className="font-semibold text-stone-900 mt-4">A Final Thought</p>
                <p>
                  The best designs aren't the ones that look most impressive in Figma presentations.
                  They're the ones that successfully navigate the journey from concept to
                  production, maintaining their integrity, meeting user needs, and respecting
                  technical constraints along the way.
                </p>
                <p>
                  By mastering component design for JavaScript frameworks, you're not just becoming
                  a better designer. You're becoming a more{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    effective collaborator,
                  </RoughAnnotate>{' '}
                  a more{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    valuable team member,
                  </RoughAnnotate>{' '}
                  and a more{' '}
                  <RoughAnnotate type="underline" color="#0ea5e9" padding={2}>
                    complete product professional.
                  </RoughAnnotate>{' '}
                  You're learning to speak multiple languages fluently. The visual language of
                  design and the logical language of code. Use both to create experiences that truly
                  work.
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
                  href="https://www.sap-press.com/javascript_5554/?srsltid=AfmBOoqQj4XvAyc5MbhgoFjwT5gvatvbKQG061LEGNubgN7iUH5b4Ain?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Ackermann, P. (2022). <i>JavaScript: The Comprehensive Guide</i>.
                </a>
                <a
                  href="https://www.oreilly.com/library/view/learning-react-2nd/9781492051718?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Banks, A., & Porcello, E. (2020).{' '}
                  <i>Learning react: Modern Patterns for Developing React Apps.</i> O’Reilly Media.
                </a>

                <a
                  href="https://www.wiley.com/en-us/HTML+and+CSS%3A+Design+and+Build+Websites-p-9781118206911?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Duckett, J. (2011). <i>HTML and CSS: Design and Build Websites</i>. John Wiley &
                  Sons.
                </a>
                <a
                  href="https://www.wiley.com/en-us/JavaScript+and+jQuery%3A+Interactive+Front-End+Web+Development-p-9781118531648?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Duckett, J. (2014).{' '}
                  <i>JavaScript and jQuery: Interactive Front-End Web Development.</i> John Wiley &
                  Sons.
                </a>

                <a
                  href="https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Flanagan, D. (2020).{' '}
                  <i>
                    JavaScript: The Definitive Guide: Master the World’s Most-used Programming
                    Language.
                  </i>{' '}
                  O’Reilly Media.
                </a>
                <a
                  href="https://atomicdesign.bradfrost.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Frost, B. (2016). <i>Atomic design.</i>
                </a>
                <a
                  href="https://www.oreilly.com/library/view/modern-front-end-architecture/9781484266250/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Lanciaux, R. (2021).{' '}
                  <i>
                    Modern front-end architecture: Optimize Your Front-end Development with
                    Components, Storybook, and Mise en Place Philosophy.
                  </i>{' '}
                  Apress.
                </a>
                <a
                  href="https://www.oreilly.com/library/view/clean-code-a/9780136083238//?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition"
                >
                  ✤ Martin, R. C. (2009).{' '}
                  <i>Clean code: A Handbook of Agile Software Craftsmanship.</i> Pearson Education.
                </a>
              </div>
            </div>
          </div>
          {/* * Section End * */}

          <ThankYou
            message="Thanks for taking the time to explore this article. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it. If you found this guide valuable, share it with your design and development teams. Better component design benefits everyone in the product development process."
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
            {/* <TextLink className=" font-semibold text-sm" label="0. History" to="#history" /> */}
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
            <TextLink className="font-semibold  text-sm" label="5. Tokens" to="#tokens" />
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
