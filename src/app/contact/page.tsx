import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import MailIcon from '@mui/icons-material/Mail';

export const metadata: Metadata = {
  title: "Contact | Oğuzhan Özcan | Let's Work Together",
  description:
    'Get in touch with Oğuzhan Özcan, Product Designer & Design Engineer at Jotform Enterprise. Available for collaborations, freelance projects, speaking opportunities, and design consultations. Connect via LinkedIn, email, or explore my work on GitHub, Behance, and Dribbble.',
  alternates: {
    canonical: 'https://o10n.design/contact',
  },
  openGraph: {
    title: 'Contact Oğuzhan Özcan | Product Designer & Design Engineer',
    description:
      'Connect with me for collaborations, freelance work, or design consultations. 5+ years in SaaS product design, design systems, and accessibility. Based in Ankara, Turkey.',
    url: 'https://o10n.design/contact',
    images: [
      {
        url: 'https://o10n.design/img/og_images/contact_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Contact Oğuzhan Özcan - Product Designer & Design Engineer',
      },
    ],
    siteName: 'o10n.design',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Oğuzhan Özcan | Let's Work Together",
    description:
      'Product designer & design engineer. Available for collaborations, freelance projects, and consultations. Connect via LinkedIn or email.',
    images: ['https://o10n.design/img/og_images/contact_open_graph.png'],
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
    // Contact Intent
    'Contact Oğuzhan Özcan',
    'Hire Product Designer',
    'Freelance Product Designer',
    'Design Consultation',
    'UX Design Services',

    // Services
    'SaaS Product Design',
    'Design System Consulting',
    'Accessibility Design Services',
    'Enterprise UX Design',
    'Design to Code Services',

    // Collaboration Types
    'Design Collaboration',
    'Freelance Design Work',
    'Remote Product Designer',
    'Design Engineer for Hire',
    'Contract Product Designer',

    // Platforms
    'LinkedIn Oğuzhan Özcan',
    'GitHub ouzozcn',
    'Behance Oğuzhan Özcan',
    'Dribbble ouzozcn',

    // Location
    'Product Designer Turkey',
    'Designer in Ankara',
    'Remote Designer Turkey',

    // Personal Brand
    'Oğuzhan Özcan',
    'Oguzhan Ozcan',
    'ouzozcn',
    'o10n',
    'o10n.design',

    // Work Type
    'Speaking Opportunities Design',
    'Design Workshop Facilitator',
    'Design Mentorship',
    'Portfolio Review',
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
export default function Contact() {
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
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Tech Stack"
        />
        <MenuItem
          to="/contact"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-emerald-200 hover:bg-emerald-200 cursor-default"
          title="Contact"
        />
        <MenuItem
          to="/docs"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="</docs>"
        />
      </div>

      <div className="PageHero flex flex-col p-8 md:p-32 w-full md:h-[600px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Let&apos;s Work Together
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          I&apos;m always open to new conversations—whether it&apos;s about collaborations,
          freelance projects, speaking opportunities, or just sharing ideas.
        </h2>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Product Designer & Design Engineer · Based in Ankara, Turkey
        </h2>
      </div>
      <div className="PageContent flex flex-col w-full border-b border-stone-900 bg-orange-50">
        <div className="SectionHeader p-6 md:p-8 border-b border-stone-900">
          <h2 className="text-2xl font-sans font-medium text-stone-900 text-center">
            What I Can Help With
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:h-[600px] w-full">
          <div className="p-6 md:p-8 border-b md:border-r border-stone-900">
            <h3 className="text-lg font-sans font-medium text-stone-900 mb-2">🎨 Product Design</h3>
            <p className="text-base font-sans text-stone-700">
              End-to-end product design for SaaS B2B applications, from research and strategy to
              high-fidelity UI and user testing.
            </p>
          </div>
          <div className="p-6 md:p-8 border-b lg:border-r border-stone-900">
            <h3 className="text-lg font-sans font-medium text-stone-900 mb-2">🧩 Design Systems</h3>
            <p className="text-base font-sans text-stone-700">
              Building scalable design systems with Figma, Storybook, and React components.
              Documentation and developer handoff included.
            </p>
          </div>
          <div className="p-6 md:p-8 border-b md:border-r lg:border-r-0 border-stone-900">
            <h3 className="text-lg font-sans font-medium text-stone-900 mb-2">
              ♿ Accessibility Audits
            </h3>
            <p className="text-base font-sans text-stone-700">
              WCAG compliance reviews, color contrast testing, and inclusive design recommendations
              for your products.
            </p>
          </div>
          <div className="p-6 md:p-8 border-b lg:border-b-0  lg:border-r border-stone-900">
            <h3 className="text-lg font-sans font-medium text-stone-900 mb-2">
              💻 Design Engineering
            </h3>
            <p className="text-base font-sans text-stone-700">
              Bridging design and code with React, TypeScript, and Tailwind CSS. I can help
              implement design systems in production.
            </p>
          </div>
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-stone-900">
            <h3 className="text-lg font-sans font-medium text-stone-900 mb-2">
              🎤 Speaking & Workshops
            </h3>
            <p className="text-base font-sans text-stone-700">
              Available for talks on accessibility, design systems, design-to-code workflows, and
              career transitions in design.
            </p>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-lg font-sans font-medium text-stone-900 mb-2">🤝 Mentorship</h3>
            <p className="text-base font-sans text-stone-700">
              Portfolio reviews, career guidance, and design mentorship for designers transitioning
              into tech or design engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <a
          href="https://www.linkedin.com/in/ouzozcn/"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 gap-2 w-full h-auto items-center justify-center font-sans hover:bg-blue-200 md:border-r border-stone-900 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/img/LinkedinLogo.svg"
              alt="LinkedIn Logo"
              width={24}
              height={24}
              className="w-6 h-6 mb-2"
            />
          </div>
          <p className="text-lg text-center text-stone-900"> Connect on LinkedIn</p>
          <p className="text-md font-light text-center text-stone-900">
            {' '}
            Best for professional inquiries, collaborations, and networking.
          </p>
        </a>
        <a
          href="mailto:oguz@o10n.design"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 gap-2 w-full h-auto items-center justify-center font-sans  hover:bg-orange-200 md:border-r border-stone-900 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <MailIcon className="w-6 h-6 mb-2" />
          </div>
          <p className="text-lg text-center text-stone-900">Send me an email</p>
          <p className="text-md font-light text-center text-stone-900">
            {' '}
            oguz@o10n.design · For project inquiries and detailed discussions.
          </p>
        </a>
        <a
          href="https://github.com/ouzozcn"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 gap-2 md:p-16 w-full h-auto items-center justify-center font-sans  hover:bg-lime-200 md:border-r border-stone-900 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/img/github.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
              className="w-6 h-6 mb-2"
            />
          </div>
          <p className="text-lg text-center text-stone-900">Connect on GitHub</p>
          <p className="text-md font-light text-center text-stone-900">
            {' '}
            Code & open-source projects
          </p>
        </a>
        <a
          href="https://www.behance.net/oguzhanozcan"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 gap-2 w-full h-auto items-center justify-center font-sans  hover:bg-violet-200 md:border-r border-stone-900 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/img/behance.svg"
              alt="Behance Logo"
              width={24}
              height={24}
              className="w-6 h-6 mb-2"
            />
          </div>
          <p className="text-lg text-center text-stone-900">Connect on Behance</p>
          <p className="text-md font-light text-center text-stone-900">
            {' '}
            Case studies & design work
          </p>
        </a>
        <a
          href="https://dribbble.com/ouzozcn"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 gap-2 w-full h-auto items-center justify-center font-sans  hover:bg-pink-200 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/img/dribbble.svg"
              alt="Dribbble Logo"
              width={24}
              height={24}
              className="w-6 h-6 mb-2"
            />
          </div>
          <p className="text-lg text-center text-stone-900">Connect on Dribbble</p>
          <p className="text-md font-light text-center text-stone-900"> UI shots & explorations</p>
        </a>
      </div>
      <div className="PageContent flex flex-col md:flex-row w-full h-full lg:h-[600px]  border-t border-stone-900">
        <div className="SectionBlock flex-1 p-8 md:p-12 bg-amber-50 md:border-r border-b md:border-b-0 border-stone-900 content-center">
          <h3 className="text-xl font-sans font-medium text-stone-900 mb-3 text-center md:text-left">
            ⏱️ Response Time
          </h3>
          <p className="text-base font-sans text-stone-700 text-center md:text-left">
            I typically respond within 24-48 hours on weekdays. For urgent inquiries, LinkedIn
            messages are fastest.
          </p>
        </div>
        <div className="SectionBlock flex-1 p-8 md:p-12 bg-lime-50 md:border-r border-b md:border-b-0 border-stone-900 content-center">
          <h3 className="text-xl font-sans font-medium text-stone-900 mb-3 text-center md:text-left">
            🌍 Availability
          </h3>
          <p className="text-base font-sans text-stone-700 text-center md:text-left">
            Based in Ankara, Turkey (GMT+3). Available for remote work worldwide and occasional
            on-site collaborations.
          </p>
        </div>
        <div className="SectionBlock flex-1 p-8 md:p-12 bg-teal-50 content-center">
          <h3 className="text-xl font-sans font-medium text-stone-900 mb-3 text-center md:text-left">
            💼 Work Status
          </h3>
          <p className="text-base font-sans text-stone-700 text-center md:text-left">
            Currently at Jotform Enterprise. Open to freelance projects, consultations, and speaking
            engagements.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
