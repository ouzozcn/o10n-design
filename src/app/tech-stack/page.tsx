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
      <div className="WorkflowSection flex flex-col w-full border-b border-stone-900 bg-amber-50">
        <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60">
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
      <div className="SectionHeader p-6 md:p-8 border-b border-stone-900 content-center lg:h-60">
        <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">Design Tools</h2>
      </div>
      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex  grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
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
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
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

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
          <Image
            src="/img/icons/icon-react.svg"
            alt="React Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans">React</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            My go-to stack for building interactive interfaces and components. I use TypeScript for
            safe, predictable code and better dev experience.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
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
            I prefer utility-first CSS for its scalability and speed. I also define and manage
            custom color tokens for consistent theming.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
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
            I use it to build node-based interfaces and interactive canvas systems — especially for
            data-driven or visual workflows (like Hydrogen and Growth Agent dashboards).
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
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
            I use Storybook to document, test, and validate React components in isolation — helping
            design and dev stay aligned.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
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
            For visual regression testing and design system CI/CD. I integrate it with Storybook to
            catch UI inconsistencies before they reach production.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-b border-stone-900">
          <Image
            src="/img/icons/icon-github.svg"
            alt="GitHub Logo"
            width={32}
            height={32}
            className="inline-block"
          />
          <p className="text-2xl m-2 font-sans ">GitHub</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 justify-center border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Version control, code reviews, and team collaboration. I use feature branching and
            commit conventions to keep everything clean and maintainable.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-80">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center  md:border-r border-stone-900">
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
            I analyze behavioral and product data using Python, Pandas, and Matplotlib. Great for
            making informed design decisions with real usage data.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
