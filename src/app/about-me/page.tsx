import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import Button from '@/components/Button';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
export const metadata: Metadata = {
  title: 'About Me | Senior Product Designer & Design Engineer | Oğuzhan Özcan',
  description:
    'Senior Product Designer transitioning to design engineering. 7+ years designing enterprise SaaS products at Jotform and Enocta. Building accessible, data-driven products with React, TypeScript, and design systems. From research to production code.',
  alternates: {
    canonical: 'https://o10n.design/about-me',
  },
  openGraph: {
    title: 'About Oğuzhan Özcan | Senior Product Designer & Design Engineer',
    description:
      'Senior Product Designer transitioning to design engineering. 7+ years designing enterprise SaaS products at Jotform and Enocta. Building accessible, data-driven products with React, TypeScript, and design systems. From research to production code.',
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
    title: 'About Oğuzhan Özcan | Senior Product Designer → Design Engineer',
    description:
      'Senior Product Designer transitioning to design engineering. 7+ years designing enterprise SaaS products at Jotform and Enocta. Building accessible, data-driven products with React, TypeScript, and design systems. From research to production code.',
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
    'Senior Product Designer',
    'Product Designer',
    'Design Engineer',
    'UX Designer',
    'Self-Taught Designer',

    // Company & Experience
    'Jotform Senior Product Designer',
    'Jotform Product Designer',
    'Jotform Enterprise',
    '7 Years Experience',
    'SaaS Product Designer',
    'B2B Product Design',
    'Enterprise Product Design',

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
          Senior Product Designer at Jotform. I started in physics, taught myself design, and
          somewhere along the way started writing production code too.
        </h2>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Nice to meet you.
        </h2>
      </div>

      {/* TL;DR */}
      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full md:w-1/4 h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">TL;DR</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full md:w-3/4 h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            <b>Senior Product Designer</b> with 7+ years designing enterprise SaaS — currently at
            Jotform, previously at Enocta.
          </p>
          <p className="text-lg font-sans">
            I work across the full product lifecycle: research, strategy, design systems, usability
            testing, and increasingly — <b>writing the code myself</b> with React, TypeScript,
            Next.js, and Storybook. This portfolio is built with Next.js 15.
          </p>
          <p className="text-lg font-sans">
            I&apos;ve shipped features used by <b>millions of people</b>: two-factor authentication,
            OAuth integrations, internal operations platforms, growth experiments across 430,000
            users.
          </p>
          <p className="text-lg font-sans">
            On the side: <b>Kroma</b>, a free color blindness checker for designers. The{' '}
            <b>Brifl Design System</b>, 30+ components with Storybook docs. And a published article
            on designing components for JavaScript frameworks.
          </p>
          <p className="text-lg font-sans">
            Based in <b>Ankara, Turkey.</b> Open to remote work worldwide.
          </p>
        </div>
      </div>
      {/* Resume Promo */}
      <div className="PageContent flex flex-col md:flex-row w-full h-auto text-stone-900 border-stone-900 bg-orange-100">
        <div className="SectionTitle flex flex-col grow-1 p-4 md:p-8 w-full h-auto items-center justify-center border-b gap-4 md:gap-8 border-stone-900">
          <p className="text-lg md:text-xl text-center font-sans">
            Would you like to see my resume?
          </p>
          <Button
            label="Resume - Oğuzhan Özcan"
            type="primary"
            size="medium"
            endIcon={<ArrowOutwardRoundedIcon />}
            target="_blank"
            to="./assets/documents/oguzhan_ozcan_curriculum_vitae.pdf"
          />
        </div>
      </div>
      {/* My Story */}
      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full md:w-1/4 h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">My Story</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full md:w-3/4 h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I studied <b>Physics at Middle East Technical University</b> — optics concentration, 203
            credits deep. I never finished the degree, but I came away with something more useful
            than a diploma: a stubborn habit of asking why things work the way they do.
          </p>
          <p className="text-lg font-sans">
            I taught myself design in 2019, mostly out of curiosity. I had no portfolio, no formal
            training, and no obvious reason to believe it would go anywhere. But design turned out
            to be the exact intersection of <b>logic, creativity, and human behavior</b> I had been
            looking for without knowing it. So I kept going.
          </p>
          <p className="text-lg font-sans">
            My first real product role was at Enocta, designing a learning platform used by over 2
            million people across 374 enterprise clients — as the only designer on the team. That
            forced a kind of ownership I&apos;m grateful for. In 2023 I joined Jotform Enterprise,
            and in January 2026 I was promoted to <b>Senior Product Designer</b>.
          </p>
          <p className="text-lg font-sans">
            The physics background never really left. It just showed up differently — in how I model
            information architecture, structure experiments, and refuse to stop at the first answer
            that seems to work.
          </p>
        </div>
      </div>

      {/* What I Do Now */}
      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full md:w-1/4 h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">What I Do Now</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full md:w-3/4 h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            At <b>Jotform</b>, I currently split my time between two things I care about equally.
          </p>
          <p className="text-lg font-sans">
            The first is <b>Zeus</b> — an internal revenue operations platform I designed and
            product-managed from scratch. It processes millions of user records, powers the CRM and
            sales workflow for a 65-person team, and has contributed to significant enterprise
            revenue growth. Building something that your colleagues depend on every single day is a
            different kind of responsibility than designing for end users. I like that.
          </p>
          <p className="text-lg font-sans">
            The second is <b>growth experimentation</b> — running A/B tests across Jotform&apos;s
            core user flows to improve conversion, onboarding, and enterprise lead generation. This
            is where I get to be the most data-driven: forming hypotheses, designing variants,
            reading results, and iterating fast.
          </p>
          <p className="text-lg font-sans">
            Across both, my workflow looks like this: research and SQL analysis, Figma for design,
            Storybook for documentation, Chromatic for visual regression testing, and increasingly —{' '}
            <b>React and TypeScript</b> to ship the thing myself. I am not trying to replace
            engineers. I am trying to close the gap.
          </p>
        </div>
      </div>

      {/* Beyond Work */}
      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900 lg:min-h-96">
        <div className="SectionTitle flex grow-1 w-full md:w-1/4 h-auto items-center justify-center md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">Beyond Work</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full md:w-3/4 h-auto p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I build things when something bothers me enough. <b>Kroma</b> started because
            accessibility tools were either paywalled or frustrating to use — so I built a free,
            no-limit color blindness simulator with React and Vite and put it online. It supports 8
            vision deficiency types and has no upload limits. That&apos;s it. Simple problems
            deserve simple solutions.
          </p>
          <p className="text-lg font-sans">
            Accessibility is not a checklist item for me. During university, I taught Braille to
            visually impaired students. That experience made inclusive design feel personal in a way
            that a WCAG spec sheet never could. I integrate accessibility from the start — not as a
            pass at the end.
          </p>
          <p className="text-lg font-sans">
            I also wrote a science newsletter during my physics years called{' '}
            <b>
              <a
                href="./assets/documents/observare_scientia_issue.1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:text-blue-800 hover:underline"
              >
                ObservareScientia
              </a>
            </b>
            . It never reached many readers, but it taught me something I still use: complex ideas
            deserve clear explanations, not impressive-sounding ones.
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
