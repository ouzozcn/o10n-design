import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Tech Stack | Oğuzhan Özcan | Tools & Technologies',
  description:
    'Design and development tools I use daily: Figma, Storybook, Chromatic, React, TypeScript, Next.js, Tailwind CSS. From design systems to production code—the complete toolkit of a design engineer building accessible SaaS products.',
  alternates: {
    canonical: 'https://o10n.design/tech-stack',
  },
  openGraph: {
    title: 'Tech Stack | Oğuzhan Özcan | Design & Development Tools',
    description:
      'My design engineering toolkit: Figma → Storybook → React + TypeScript. Building design systems, accessible interfaces, and developer-friendly components.',
    url: 'https://o10n.design/tech-stack',
    images: [
      {
        url: 'https://o10n.design/img/og_images/tech_stack_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Oğuzhan Özcan Tech Stack - Design & Development Tools',
      },
    ],
    siteName: 'o10n.design',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Stack | Design Engineer Toolkit',
    description:
      'Design to code workflow: Figma → Storybook → React + TypeScript. Tools for building accessible, scalable SaaS products.',
    images: ['https://o10n.design/img/og_images/tech_stack_open_graph.png'],
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
    // Primary Tools
    'Figma',
    'Storybook',
    'Chromatic',
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',

    // Tool Categories
    'Design Tools',
    'Development Tools',
    'Design System Tools',
    'Frontend Tools',
    'Prototyping Tools',

    // Workflows
    'Design to Code Workflow',
    'Design Engineering Tools',
    'Component Design Tools',
    'Design Handoff Tools',
    'Design System Pipeline',

    // Specific Uses
    'React Component Design',
    'Visual Regression Testing',
    'Design Token Management',
    'Accessibility Testing Tools',
    'UI Component Library',

    // Analytics & Data
    'Jupyter Notebooks',
    'Data Analysis Tools',
    'Product Analytics',
    'User Research Tools',

    // Version Control
    'Git',
    'GitHub',
    'Version Control for Design',

    // Adobe Suite
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Vector Design',

    // Collaboration
    'Design Collaboration Tools',
    'Developer Handoff',
    'CI/CD for Design',

    // Personal Brand
    'Oğuzhan Özcan Tools',
    'Design Engineer Tech Stack',
    'SaaS Designer Tools',
  ].join(', '),
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  publisher: 'Oğuzhan Özcan',
  category: 'portfolio',
  colorScheme: 'light',
  icons: {
    icon: [
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon-32x32.png',
    apple: [{ url: '/img/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function TechStack() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <div className="md:sticky md:top-0 md:z-10 flex flex-col md:flex-row w-auto border-b border-stone-900 bg-theme-primary">
        <MenuItem
          to="/"
          className="flex-1 md:border-b-0 border-r-0 md:border-r border-stone-900 text-center"
          title="Home"
        />
        <MenuItem
          to="/about-me"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="About Me"
        />
        <MenuItem
          to="/tech-stack"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-purple-200 hover:bg-purple-200 cursor-default"
          title="Tech Stack"
        />
        <MenuItem
          to="/contact"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Contact"
        />
        <MenuItem
          to="/docs"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="</docs>"
        />
      </div>

      <div className="PageHero flex flex-col p-8 lg:p-32 md:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          My Tech Stack
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center max-w-3xl">
          Tools and technologies I use to design, build, and ship thoughtful, accessible, and
          scalable digital products.
        </h2>
        <p className="text-base text-center font-sans text-stone-600">
          From design systems to production code—my complete workflow.
        </p>
      </div>
      <div className="WorkflowSection flex flex-col w-full border-b border-stone-900 ">
        <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60 bg-amber-50">
          <h2 className="text-2xl font-sans font-medium text-stone-900 text-center ">
            My Design → Code Workflow
          </h2>
        </div>
        <div className="WorkflowSteps flex flex-col md:flex-row w-full lg:h-[400px] ">
          <div className="WorkflowStep flex-1  p-8 md:p-12 md:border-r border-b md:border-b-0 border-stone-900 text-center content-center ">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-sans font-medium text-stone-900 mb-2">1. Design</h3>
            <p className="text-base font-sans text-stone-700">
              <b>Figma</b> for wireframes, prototypes, and design systems. Components with
              properties, variants, and tokens.
            </p>
          </div>
          <div className="WorkflowStep flex-1  p-8 md:p-12 md:border-r border-b md:border-b-0 border-stone-900 text-center content-center ">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-sans font-medium text-stone-900 mb-2">2. Document</h3>
            <p className="text-base font-sans text-stone-700">
              <b>Storybook</b> for component documentation, testing, and developer handoff. Live,
              interactive specs.
            </p>
          </div>
          <div className="WorkflowStep flex-1    p-8 md:p-12 md:border-r border-b md:border-b-0 border-stone-900 text-center content-center ">
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="text-xl font-sans font-medium text-stone-900 mb-2">3. Test</h3>
            <p className="text-base font-sans text-stone-700">
              <b>Chromatic</b> for visual regression testing and design QA. Catch UI bugs before
              production.
            </p>
          </div>
          <div className="WorkflowStep flex-1  p-8 md:p-12 text-center content-center ">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-sans font-medium text-stone-900 mb-2">4. Ship</h3>
            <p className="text-base font-sans text-stone-700">
              <b>React + TypeScript</b> for production-ready components. Deployed with{' '}
              <b>Next.js</b> and <b>Tailwind CSS</b>.
            </p>
          </div>
        </div>
      </div>
      <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60 bg-amber-50">
        <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">Design Tools</h2>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex  grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-figma.svg"
            alt="Figma Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">Figma</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            My primary design tool for everything from wireframes to high-fidelity UI. I use Figma
            not just for visuals, but for system thinking — components, variants, tokens, and
            collaborative handoff with devs.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-adobe.svg"
            alt="Adobe Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">Adobe Creative Suite</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Primarily Illustrator and Photoshop for custom illustrations, vector assets, image
            editing, and visual polish beyond UI needs.
          </p>
        </div>
      </div>
      <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60 bg-amber-50">
        <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">
          Development Tools
        </h2>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-react.svg"
            alt="React Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">React + TypeScript</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            My go-to stack for building interactive interfaces and component libraries. I use{' '}
            <b>TypeScript</b> for type-safe, predictable code and better developer experience.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> Component development, design system implementation,
            interactive prototypes, production applications.
          </p>
        </div>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-next-js.svg"
            alt="Next.js Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">Next.js</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            React framework for building performant, SEO-friendly web applications. Powers this
            portfolio and my side projects.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> Portfolio website, documentation sites, production web apps,
            server-side rendering.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-tailwind.svg"
            alt="Tailwind Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">Tailwind CSS</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Utility-first CSS framework for rapid, scalable styling. I define custom color tokens
            and maintain consistency across projects.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> Component styling, responsive design, design system
            implementation, rapid prototyping.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-reactflow.svg"
            alt="React Flow Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">React Flow</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Library for building node-based interfaces and interactive canvas systems—especially
            useful for data-driven or visual workflows.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> Flowchart builders, data visualization, AI agent mapping,
            process diagrams.
          </p>
        </div>
      </div>
      <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60 bg-amber-50">
        <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">
          Design System & Documentation
        </h2>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-storybook.svg"
            alt="Storybook Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">Storybook</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Essential for documenting, testing, and validating React components in isolation.{' '}
            <b>This is how I bridge design and development</b>—giving developers interactive,
            explorable component specs.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> Component documentation, variant exploration, accessibility
            testing, design system handoff, developer collaboration.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-chromatic.svg"
            alt="Chromatic Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">Chromatic</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Visual regression testing and design system CI/CD. I integrate it with Storybook to{' '}
            <b>catch UI inconsistencies before they reach production</b>.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> Visual testing, design QA, catching unintended changes, design
            system versioning, collaboration with developers.
          </p>
        </div>
      </div>
      <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60 bg-amber-50">
        <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">
          Version Control & Collaboration
        </h2>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-github.svg"
            alt="GitHub Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans ">Git + GitHub</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Version control, code reviews, and team collaboration. I use{' '}
            <b>feature branching and conventional commits</b> to keep everything clean and
            maintainable.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> Code versioning, pull requests, design system releases,
            collaboration with developers, open-source contributions.
          </p>
        </div>
      </div>
      <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60 bg-amber-50">
        <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">
          Data & Analysis
        </h2>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-b border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b lg:border-b-0 border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-jupyter.svg"
            alt="Jupyter Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">Jupyter Notebooks</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I analyze behavioral and product data using <b>Python, Pandas, and Matplotlib</b>.
            Essential for making informed design decisions with real usage data.
          </p>
          <p className="text-lg font-sans">
            <b>What I use it for:</b> User behavior analysis, A/B test evaluation, feature usage
            tracking, data-driven design decisions.
          </p>
        </div>
      </div>
      <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60 bg-lime-50">
        <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">
          Currently Learning
        </h2>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-b border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b lg:border-b-0 border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-react.svg"
            alt="React Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans"> Advanced React Patterns</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Deepening my understanding of <b>hooks</b>, <b>state management</b>, and{' '}
            <b>component architecture</b> to write cleaner, more maintainable code.
          </p>
          <p className="text-lg font-sans">
            Why: To think like a developer and build production-ready components.
          </p>
        </div>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-b border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b lg:border-b-0 border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-dataset.svg"
            alt="Dataset Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans"> Database Structures</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Learning <b>MySQL</b> and <b>MongoDB</b> to understand data architecture. Getting better
            at writing queries and creating JSON structures from scratch.
          </p>
          <p className="text-lg font-sans">
            Why: To design better data-driven interfaces and understand backend constraints.
          </p>
        </div>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900  border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b lg:border-b-0 border-stone-900 min-h-20">
          <Image
            src="/img/icons/icon-api.svg"
            alt="API Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans"> API Development</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Learning <b>REST</b> and <b>GraphQL</b> to build efficient APIs. Focusing on
            authentication, data fetching strategies, and API design principles.
          </p>
          <p className="text-lg font-sans">
            Why: To build real, data-connected products—not just static prototypes.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
