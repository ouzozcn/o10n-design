import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Me | Oğuzhan Özcan',
  description:
    'Product designer and design engineer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
  alternates: {
    canonical: 'https://o10n.design/about-me',
  },
  openGraph: {
    title: 'About Me | Oğuzhan Özcan',
    description:
      'Product designer and design engineer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
    url: 'https://o10n.design/about-me',
    images: 'https://o10n.design/img/og_images/about_me_open_graph.png',
    siteName: 'o10n.design',
    type: 'article',
  },
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
  keywords:
    'Who is Oğuzhan Özcan?, Oğuzhan Özcan kimdir, oğuzhan özcan, ouzozcn, o10n, o10n.design, Product Designer, Design Engineer, SaaS UX Design, Design Systems, Enterprise Product Design, Accessibility Design, Developer-Friendly Design, Data-Driven Design, AI Workflows, B2B Product Design, Jotform, React Design Components, Storybook Design Handoff, Design to Code, User Research, Frontend Design, Oğuzhan Özcan, Oguzhan Ozcan, Oğuz Özcan, ouzozcn, o10n, o10n.design, UX Designer Turkey, UI/UX Designer, Digital Product Designer, Remote Product Designer, Freelance Product Designer, Full-Stack Designer, Interaction Design, Visual Design, Usability, User Experience, Mobile App Design, Web Design, Prototyping, Wireframing',
};

export default function AboutMe() {
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
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-lime-200 hover:bg-lime-200 cursor-default"
          title="About Me"
        />
        <MenuItem
          to="/tech-stack"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
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

      <div className="PageHero flex flex-col p-8 md:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Hi, I&apos;m Oğuzhan Özcan
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          a self-taught product designer with a background in physics, a passion for building
          systems, and a deep curiosity for how things work — and why people use them.
        </h2>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Nice to meet you!
        </h2>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">TL;DR</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            <b>Self-taught designer</b> with a physics background
          </p>
          <p className="text-lg font-sans">
            <b>5+ years of experience</b> designing complex SaaS products
          </p>
          <p className="text-lg font-sans">
            Transitioning into <b>design engineering</b>
          </p>
          <p className="text-lg font-sans">
            Passionate about <b>systems, accessibility, and AI</b>
          </p>
          <p className="text-lg font-sans">Based in Ankara, Türkiye</p>
          <p className="text-lg font-sans">
            You can view my resume if you like:{' '}
            <a
              href="./assets/documents/oguzhan_ozcan_curriculum_vitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:text-blue-800 hover:underline"
            >
              See Resume
            </a>
          </p>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">My Story</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I began my journey in science, studying Physics at Middle East Technical University.
            Though I didn&apos;t finish the degree, the problem-solving mindset, experimental rigor,
            and systems thinking I learned during that time continue to shape how I approach product
            design.
          </p>
          <p className="text-lg font-sans">
            I taught myself design out of necessity, and stayed because I found it was the perfect
            intersection of logic, creativity, and human behavior. Since 2020, I&apos;ve been
            designing SaaS B2B products — first at Enocta, and now at Jotform Enterprise, where I
            work as a Product Designer in the Enterprise Division, designing scalable, secure
            experiences for large organizations.
          </p>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">What I Do Now</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            At Jotform, I design for complex features used by thousands of enterprise users — from
            secure form encryption to account management and analytics. I collaborate closely with
            developers, PMs, and stakeholders across the company to ship features that are both
            thoughtful and technically feasible.
          </p>
          <p className="text-lg font-sans">
            But beyond UI, I&apos;m deeply interested in how design systems scale, how to automate
            front-end workflows, and how to integrate AI into human-centered products.
          </p>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">On the Side</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I love working on side projects — whether it&apos;s building tools for accessibility
            (like Kroma), designing AI-powered lead scoring dashboards, or creating frameworks for
            product research.
          </p>
          <p className="text-lg font-sans">
            I also maintain open-source lab reports for physics students, volunteer in accessibility
            causes (like teaching Braille), and occasionally dream of reviving a science newsletter
            I once started: ObserveraScientia.
          </p>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full md:h-60 text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex flex-col p-8 grow-1 w-full h-auto items-center justify-center bg-amber-100 gap-4 border-stone-900">
          <p className="text-2xl font-medium font-sans">Let&apos;s Talk</p>
          <p className="text-lg font-sans">
            Feel free to reach out or connect with me on{' '}
            <a
              href="https://linkedin.com/in/ouzozcn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:text-blue-800 hover:underline"
            >
              LinkedIn
            </a>
            . Whether it&apos;s a collaboration, a freelance idea, or a shared curiosity — I&apos;m
            always open to new conversations.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
