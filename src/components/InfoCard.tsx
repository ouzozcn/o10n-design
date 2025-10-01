'use client';

import React from 'react';
import Image from 'next/image';
import SimpleTab from './SimpleTab';
import { Tooltip } from 'react-tooltip';

interface InfoCardProps {
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = () => {
  return (
    <div className="w-full lg:w-[500px] h-full flex flex-col justify-start items-start border-b lg:border-r lg:border-b-0 border-stone-900">
      <div className="flex ml-4 mt-4 justify-start items-start">
        <Image
          src="/assets/images/braille_logo.svg"
          alt="The letters O and Ö in the Braille alphabet"
          width={140}
          height={140}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="  m-4"
          data-tooltip-id="braille-tooltip"
          data-tooltip-content="Braille letters O and Ö – initials of Oğuzhan Özcan"
        />
      </div>
      <Tooltip id="braille-tooltip" />
      <div className="p-4 ml-4 pb-1 self-stretch font-sans text-black text-3xl">
        Hi there, it&apos;s Oğuz.
      </div>
      <div className="p-4 mx-4 self-stretch font-sans text-stone-800 text-lg leading-normal [content-visibility:auto] [contain:content]">
        Product designer and design engineer bridging the gap between design vision and technical
        reality. I turn research insights into scalable systems, accessible interfaces, and
        developer-ready components—currently at Jotform Enterprise.
        <br />
        <br />
        Nice to meet you 👋
      </div>
      <div className="flex mt-auto w-full divide-x-1 border-t border-stone-900 gap-0">
        <SimpleTab
          icon={
            <Image src="/assets/images/LinkedinLogo.svg" alt="LinkedIn" width={24} height={24} />
          }
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
