import React from "react";
import brailleLogo from "../assets/img/braille_logo.svg";
import SimpleTab from "./SimpleTab";
import Cloud from "@mui/icons-material/Cloud";
import { ReactComponent as LinkedinLogo } from "../assets/img/LinkedinLogo.svg";
import { ReactComponent as MediumLogo } from "../assets/img/medium.svg";
import { ReactComponent as BehanceLogo } from "../assets/img/behance.svg";
import { ReactComponent as DribbbleLogo } from "../assets/img/dribbble.svg";
import { ReactComponent as GithubLogo } from "../assets/img/github.svg";
import { Tooltip } from "react-tooltip";

interface InfoCardProps {
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = () => {
  return (
    <div className="w-full lg:w-[500px] h-full flex flex-col justify-start items-start border-b lg:border-r lg:border-b-0 border-stone-900">
      <img
        src={brailleLogo}
        alt="O and Ö letter in Braille Alphabet"
        className="ml-2 p-4 mt-4"
        data-tooltip-id="braille-tooltip"
        data-tooltip-content="Braille letters O and Ö – initials of Oğuzhan Özcan"
      />
      <Tooltip id="braille-tooltip" />
      <div className="p-4 ml-2 pb-1 self-stretch font-sans text-black text-3xl">
        Hello there, it's Oğuz.
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
          icon={<LinkedinLogo />}
          state="idle"
          to="https://linkedin.com/in/ouzozcn/"
        />
        <SimpleTab
          icon={<BehanceLogo />}
          state="idle"
          to="https://www.behance.net/oguzhanozcan"
        />
        <SimpleTab
          icon={<GithubLogo />}
          state="idle"
          to="https://github.com/ouzozcn"
        />
        <SimpleTab
          icon={<DribbbleLogo />}
          state="idle"
          to="https://dribbble.com/ouzozcn"
        />
        <SimpleTab
          icon={<MediumLogo />}
          className="border-r-none border-collapse"
          state="idle"
          to="https://medium.com/@ouzozcn"
        />
      </div>
    </div>
  );
};

export default InfoCard;
