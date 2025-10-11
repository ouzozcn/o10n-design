import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Me | Oğuzhan Özcan | Product Designer & Design Engineer',
  description:
    'Self-taught product designer now transitioning to design engineering. 5+ years designing SaaS B2B products. Passionate about accessibility, design systems, and building bridges between design and code. Currently at Jotform Enterprise.',
  alternates: {
    canonical: 'https://o10n.design/about-me',
  },
  openGraph: {
    title: 'About Oğuzhan Özcan | Product Designer → Design Engineer',
    description:
      'Self-taught product designer now transitioning to design engineering. 5+ years designing SaaS B2B products. Passionate about accessibility, design systems, and building bridges between design and code. Currently at Jotform Enterprise.',
    url: 'https://o10n.design/about-me',
    images: [
      {
        url: 'https://o10n.design/img/og_images/about_me_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'About Oğuzhan Özcan - Product Designer & Design Engineer - o10n',
      },
    ],
    siteName: 'o10n.design',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Oğuzhan Özcan | Product Designer → Design Engineer',
    description:
      'Self-taught product designer now transitioning to design engineering. 5+ years designing SaaS B2B products. Passionate about accessibility, design systems, and building bridges between design and code. Currently at Jotform Enterprise.',
    images: ['https://o10n.design/img/og_images/about_me_open_graph.png'],
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
    // Personal Identity
    'Oğuzhan Özcan',
    'Oguzhan Ozcan',
    'Oğuz Özcan',
    'ouzozcn',
    'o10n',
    'o10n.design',
    'Who is Oğuzhan Özcan',

    // Current Role
    'Product Designer',
    'Design Engineer',
    'UX Designer',
    'Self-Taught Designer',

    // Company & Experience
    'Jotform Product Designer',
    'Jotform Enterprise',
    '5 Years Experience',
    'SaaS Product Designer',
    'B2B Product Design',

    // Background
    'Physics Background Designer',
    'Career Change to Design',
    'Designer with Technical Background',
    'Systems Thinking Designer',

    // Specialization
    'Accessibility Designer',
    'Design Systems Designer',
    'Enterprise UX Designer',
    'Design to Code',
    'Frontend Design',

    // Skills & Interests
    'React Design Components',
    'Storybook',
    'Figma',
    'TypeScript',
    'Design Engineering',

    // Location & Work Style
    'Designer in Turkey',
    'Designer in Ankara',
    'Remote Product Designer',
    'Freelance Product Designer',

    // Side Projects
    'Kroma Accessibility',
    'Brifl Design System',
    'Open Source Designer',
    'Design Tools Creator',

    // Personal Interests
    'Accessibility Volunteer',
    'Braille Teacher',
    'Science Communication',
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
          Self-taught product designer, transitioning into design engineering. I build accessible
          SaaS products, design systems, and bridges between design and code. Currently at Jotform
          Enterprise.
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
            <b>Self-taught designer</b> with a physics background and systems thinking mindset
          </p>
          <p className="text-lg font-sans">
            <b>5+ years</b> designing complex SaaS B2B products
          </p>
          <p className="text-lg font-sans">
            Currently transitioning into <b>design engineering</b> — learning React, TypeScript, and
            modern frontend workflows
          </p>
          <p className="text-lg font-sans">
            Passionate about <b>accessibility, design systems, and AI-driven workflows</b>
          </p>
          <p className="text-lg font-sans">
            {' '}
            Built <b>Kroma</b> (free accessibility checker) and <b>Brifl Design System</b> (30+
            components)
          </p>
          <p className="text-lg font-sans">
            Based in <b>Ankara, Turkey</b> · Open to remote collaboration worldwide
          </p>
          <p className="text-lg font-sans">
            You can view my resume if you like:{' '}
            <a
              href="./assets/documents/oguzhan_ozcan_curriculum_vitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:text-blue-800 hover:underline"
            >
              View Resume →
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
            I started in science, studying <b>Physics at Middle East Technical University</b>.
            Though I didn&apos;t complete the degree, the problem-solving mindset, experimental
            rigor, and systems thinking I developed there continue to shape how I approach design
            challenges today.
          </p>
          <p className="text-lg font-sans">
            I taught myself design out of necessity in 2019—and stayed because I discovered it was
            the perfect intersection of <b>logic, creativity, and human behavior</b>. What began as
            self-learning turned into a career designing products used by millions.
          </p>
          <p className="text-lg font-sans">
            Since 2020, I&apos;ve been designing <b>SaaS B2B products</b>—first at Enocta (learning
            management systems), and now at <b>Jotform Enterprise</b>, where I work in the
            Enterprise Division designing secure, scalable experiences for large organizations and
            government institutions.
          </p>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">What I Do Now</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            At <b>Jotform Enterprise</b>, I design complex features used by thousands of enterprise
            users—from <b>two-factor authentication</b> (15K+ active users) to secure form
            encryption, account management, and analytics dashboards.
          </p>
          <p className="text-lg font-sans">
            I collaborate closely with researchers, developers, product managers, and stakeholders
            across the company to ship features that are both{' '}
            <b>thoughtful and technically feasible</b>. My role bridges product thinking, UX design,
            and technical implementation.
          </p>
          <p className="text-lg font-sans">
            Beyond UI, I&apos;m deeply interested in <b>how design systems scale</b>, how to
            automate design-to-code workflows with tools like Storybook and Chromatic, and how to
            integrate AI into human-centered products without losing sight of usability.
          </p>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">Beyond Work</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I&apos;m passionate about building tools that solve real problems. Side projects like{' '}
            <b>Kroma</b> (a free color blindness accessibility checker) and{' '}
            <b>Brifl Design System</b> (React component library) let me explore ideas outside of
            work constraints.
          </p>
          <p className="text-lg font-sans">
            I also volunteer in <b>accessibility causes</b>—I taught Braille to visually impaired
            students during university and continue advocating for inclusive design practices in the
            Turkish design community.
          </p>
          <p className="text-lg font-sans">
            I occasionally dream of reviving
            <b>
              {' '}
              <a
                href="./assets/documents/observare_scientia_issue.1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:text-blue-800 hover:underline"
              >
                ObserveraScientia
              </a>
            </b>
            , a science newsletter I started years ago when I was in university.
          </p>
          <p className="text-lg font-sans">
            Currently learning React, TypeScript, and modern frontend workflows to bridge the gap
            between design and code—because the best way to design for developers is to{' '}
            <b>think like one</b>.
          </p>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full md:h-60 text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex flex-col p-8 lg:p-32 grow-1 w-full h-auto items-center justify-center bg-amber-100 gap-4 border-stone-900">
          <p className="text-2xl font-medium font-sans">Let&apos;s Connect</p>
          <p className="text-lg text-center font-sans">
            I&apos;m always open to new conversations—whether it&apos;s about a collaboration, a
            freelance opportunity, or just sharing ideas about design, accessibility, or systems
            thinking. Connect with me on{' '}
            <a
              href="https://linkedin.com/in/ouzozcn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:text-blue-800 hover:underline"
            >
              LinkedIn
            </a>{' '}
            or send me an email at{' '}
            <a
              href="mailto:oguz@o10n.design"
              className="text-blue-600 font-bold hover:text-blue-800 hover:underline"
            >
              oguz@o10n.design
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
