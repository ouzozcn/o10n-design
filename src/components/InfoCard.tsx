'use client';

import React from 'react';
// import Image from 'next/image';
// import SimpleTab from './SimpleTab';
// import { Tooltip } from 'react-tooltip';
import TextType from './TextType';
interface InfoCardProps {
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = () => {
  return (
    <div className="Info__Card w-full  h-full flex flex-col justify-start items-start border-b lg:border-r lg:border-b-0 border-stone-900">
      {/* Logomark
      <div className="Info__Card__Image flex ml-4 mt-4 justify-start items-start">
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
      */}
      <div className="Info__Card__Content flex flex-col h-72 lg:h-full px-8 py-12 md:py-12 md:pr-0 md:pl-12 gap-4 justify-center items-start my-auto">
        <div className=" self-stretch font-sans text-black text-3xl md:text-4xl">
          Hi there, it&apos;s Oğuz.
        </div>
        <div className="Animated__Text flex flex-col lg:flex-row gap-2 lg:justify-center lg:items-center justify-start items-start">
          <div className="font-sans text-black text-xl md:text-2xl flex flex-col gap-4">
            <p>Product designer who</p>
          </div>
          <TextType
            text={[
              'designs systems that ship.',
              'runs experiments that convert.',
              'builds tools that save hours.',
              'turns data into decisions.',
              'tests assumptions, not hunches.',
              'writes components that scale.',
              'works at Jotform.',
            ]}
            typingSpeed={100}
            pauseDuration={1200}
            showCursor
            cursorCharacter="|"
            deletingSpeed={100}
            variableSpeed={{ min: 60, max: 100 }}
            cursorBlinkDuration={0.5}
            className="font-sans text-black text-xl md:text-2xl [content-visibility:auto] [contain:content] "
          />
        </div>
      </div>
      {/* SocialTabs
      <div className="Social__Tabs hidden min-[500px]:flex mt-auto w-full divide-x-1 border-t border-stone-900 gap-0">
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
      */}
    </div>
  );
};

export default InfoCard;
