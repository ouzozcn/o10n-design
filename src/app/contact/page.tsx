import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import MailIcon from '@mui/icons-material/Mail';

export const metadata: Metadata = {
  title: 'Contact | Oğuzhan Özcan',
  description:
    'Get in touch with Oğuzhan Özcan, Analytics and Data-Driven Product Designer. Connect on LinkedIn, send an email, or follow on social media.',
  alternates: {
    canonical: 'https://o10n.design/contact',
  },
  openGraph: {
    title: 'Contact | Oğuzhan Özcan',
    description:
      'Get in touch with Oğuzhan Özcan, Analytics and Data-Driven Product Designer. Connect on LinkedIn, send an email, or follow on social media.',
    url: 'https://o10n.design/contact',
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

      <div className="PageHero flex flex-col p-8 md:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Contact
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          I&apos;m always open to new conversations.
        </h2>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Feel free to reach out to me on LinkedIn or email.
        </h2>
      </div>

      <div className="PageContent flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <a
          href="https://www.linkedin.com/in/ouzozcn/"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 w-full h-auto items-center justify-center font-sans bg-blue-100 hover:bg-blue-200 md:border-r border-stone-900 cursor-pointer"
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
          <p className="text-lg text-center text-stone-900">Connect on LinkedIn</p>
        </a>
        <a
          href="mailto:oguz@o10n.design"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 w-full h-auto items-center justify-center font-sans bg-orange-100 hover:bg-orange-200 md:border-r border-stone-900 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <MailIcon className="w-6 h-6 mb-2" />
          </div>
          <p className="text-lg text-center text-stone-900">Send me an email</p>
        </a>
        <a
          href="https://github.com/ouzozcn"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 w-full h-auto items-center justify-center font-sans bg-lime-100 hover:bg-lime-200 md:border-r border-stone-900 cursor-pointer"
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
        </a>
        <a
          href="https://www.behance.net/oguzhanozcan"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 w-full h-auto items-center justify-center font-sans bg-violet-100 hover:bg-violet-200 md:border-r border-stone-900 cursor-pointer"
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
        </a>
        <a
          href="https://dribbble.com/ouzozcn"
          target="_blank"
          rel="noopener noreferrer"
          className="ContactBox flex flex-col grow-1 p-8 md:p-16 w-full h-auto items-center justify-center font-sans bg-pink-100 hover:bg-pink-200 cursor-pointer"
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
        </a>
      </div>

      <Footer />
    </div>
  );
}
