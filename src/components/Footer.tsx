'use client';

import React from 'react';
import SimpleTab from './SimpleTab';
import TextLink from './TextLink';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <div className="Footer flex flex-col w-full">
      <div className="FooterTop flex flex-col md:flex-row lg:px-20 w-full md:justify-between items-center bg-teal-50 border-t border-b border-stone-900">
        <div className="FooterTitle flex flex-col gap-2 md:gap-2 p-6 pb-0 md:p-8 items-center md:items-start">
          <div className="text-stone-900 text-2xl text-center md:text-left font-normal font-sans">
            Oğuzhan Özcan
          </div>
          <div className="text-stone-600 text-lg text-center md:text-left font-normal font-sans">
            Product Designer & Design Engineer
          </div>
        </div>
        <div className="FooterSocial flex w-auto lg:w-1/3 justify-start items-center py-4 px-4 md:px-8 gap-2">
          <SimpleTab
            icon={
              <Image src="/assets/images/LinkedinLogo.svg" alt="LinkedIn" width={24} height={24} />
            }
            className="border-none rounded-full hover:bg-teal-200"
            state="idle"
            to="https://linkedin.com/in/ouzozcn/"
          />
          <SimpleTab
            icon={<Image src="/assets/images/behance.svg" alt="Behance" width={24} height={24} />}
            className="border-none rounded-full hover:bg-teal-200"
            state="idle"
            to="https://www.behance.net/oguzhanozcan"
          />
          <SimpleTab
            icon={<Image src="/assets/images/github.svg" alt="GitHub" width={24} height={24} />}
            className="border-none rounded-full hover:bg-teal-200"
            state="idle"
            to="https://github.com/ouzozcn"
          />
          <SimpleTab
            icon={<Image src="/assets/images/dribbble.svg" alt="Dribbble" width={24} height={24} />}
            className="border-none rounded-full hover:bg-teal-200"
            state="idle"
            to="https://dribbble.com/ouzozcn"
          />
          <SimpleTab
            icon={<Image src="/assets/images/medium.svg" alt="Medium" width={24} height={24} />}
            className="border-none rounded-full hover:bg-teal-200"
            state="idle"
            to="https://medium.com/@ouzozcn"
          />
          <SimpleTab
            icon={<MailIcon sx={{ fontSize: '1.5rem' }} />}
            className="border-none rounded-full hover:bg-teal-200"
            state="idle"
            to="mailto:oguz@o10n.design"
          />
        </div>
      </div>

      <div className="FooterSitemap flex flex-col md:flex-row py-6 px-8 md:px-32 gap-8 md:gap-0 md:justify-between items-center md:items-start border-b border-stone-900 bg-teal-100">
        <div className="ColumnHome flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Home" to="/" />
          <TextLink label="About Me" to="/about-me" />
          <TextLink label="Tech Stack" to="/tech-stack" />
          <TextLink label="Contact" to="/contact" />
          <TextLink label="</docs>" to="/docs" />
          <TextLink label="Playground" to="/playground" />
          <TextLink label="Sandbox" to="/sandbox" />
          <TextLink label="LLMs" to="/llms.txt" />
        </div>

        <div className="ColumnProduct flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Products" to="/product" />
          <TextLink label="Kroma" to="/product/kroma" />
          <TextLink label="Brifl Design System" to="/product/brifl-design-system" />
        </div>

        <div className="ColumnCaseStudy flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Case Studies" to="/case-study" />
          <TextLink label="Jotform 2FA" to="/case-study/jotform-2fa" />
        </div>

        <div className="ColumnIdeas flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Ideas" to="/ideas" />
          <TextLink label="Brifl" to="/ideas/brifl" />
          <TextLink label="Jotform Logbook" to="/ideas/jotform-logbook" />
        </div>

        <div className="Column__Articles flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Articles" to="/articles" />
          <TextLink
            label="Component Design for JavaScript Frameworks"
            to="/articles/component-design-for-javascript-frameworks"
          />
        </div>
      </div>

      <div className="FooterBottom">
        <div className="FooterBottomText text-stone-900 text-lg text-center font-sans font-normal p-4">
          Designed and developed with love in Ankara | Oğuzhan Özcan © 2025
        </div>
      </div>
    </div>
  );
};

export default Footer;
