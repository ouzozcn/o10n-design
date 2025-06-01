'use client';

import React from "react";
import Image from "next/image";
import SimpleTab from "./SimpleTab";
import { Tooltip } from "react-tooltip";

interface InfoCardProps {
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = () => {
  return (
    <div className="w-full lg:w-[500px] h-full flex flex-col justify-start items-start border-b lg:border-r lg:border-b-0 border-stone-900">
      <Image
        src="/assets/images/braille_logo.svg"
        alt="O and Ö letter in Braille Alphabet"
        width={48}
        height={48}
        className="ml-2 p-4 mt-4"
        data-tooltip-id="braille-tooltip"
        data-tooltip-content="Braille letters O and Ö – initials of Oğuzhan Özcan"
      />
      <Tooltip id="braille-tooltip" />
      <div className="p-4 ml-2 pb-1 self-stretch font-sans text-black text-3xl">
        Hello there, it&apos;s Oğuz.
      </div>
      <div className="p-4 ml-2 self-stretch font-sans text-stone-800 text-lg leading-normal [content-visibility:auto] [contain:content]">
        Analytics and data-driven product designer who prioritizes
        research-based methodologies, accessibility, user-centered designs, and
        developer friendliness.
        <br />
        <br />
        Currently working at Jotform.
      </div>
      <div className="flex mt-auto w-full divide-x-1 border-t border-stone-900 gap-0">
        <SimpleTab
          icon={<Image src="/assets/images/LinkedinLogo.svg" alt="LinkedIn" width={24} height={24} />}
          state="idle"
          to="https://linkedin.com/in/ouzozcn/"
        />
        <SimpleTab
          icon={<Image src="/assets/images/behance.svg" alt="Behance" width={24} height={24} />}
          state="idle"
          to="https://www.behance.net/oguzhanozcan"
        />
        <SimpleTab
          icon={<Image src="/assets/images/github.svg" alt="GitHub" width={24} height={24} />}
          state="idle"
          to="https://github.com/ouzozcn"
        />
        <SimpleTab
          icon={<Image src="/assets/images/dribbble.svg" alt="Dribbble" width={24} height={24} />}
          state="idle"
          to="https://dribbble.com/ouzozcn"
        />
        <SimpleTab
          icon={<Image src="/assets/images/medium.svg" alt="Medium" width={24} height={24} />}
          className="border-r-none border-collapse"
          state="idle"
          to="https://medium.com/@ouzozcn"
        />
      </div>
    </div>
  );
};

export default InfoCard;
