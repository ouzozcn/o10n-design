import React from "react";
import Button, { ButtonProps } from "./Button";
import MetaInfo from "./MetaInfo";
import SimpleTab from "./SimpleTab";
import TextLink from "./TextLink";
import { ReactComponent as LinkedinLogo } from "../assets/img/LinkedinLogo.svg";
import { ReactComponent as MediumLogo } from "../assets/img/medium.svg";
import { ReactComponent as BehanceLogo } from "../assets/img/behance.svg";
import { ReactComponent as DribbbleLogo } from "../assets/img/dribbble.svg";
import { ReactComponent as GithubLogo } from "../assets/img/github.svg";
import MailIcon from "@mui/icons-material/Mail";
export const Footer: React.FC = () => {
  return (
    <div className="Footer flex flex-col w-full ">
      <div className="FooterTop flex flex-col md:flex-row w-full md:justify-between items-center bg-teal-50 border-t border-b border-stone-900 ">
        <div className="FooterTitle  flex flex-col md:flex-row gap-2 md:gap-6 p-6 pb-0 md:p-8 items-center md:items-center">
          <div className="text-stone-900 text-2xl text-center md:text-left font-normal font-sans">
            Oğuzhan Özcan
          </div>
          <div className="text-stone-600 text-lg text-center md:text-left font-normal font-sans">
            Product Designer
          </div>
        </div>
        <div className="FooterSocial flex  w-auto lg:w-1/3 justify-start items-center py-4 px-4 md:px-8 gap-2">
          <SimpleTab
            icon={<LinkedinLogo />}
            className="border-none hover:bg-blue-200"
            state="idle"
            to="https://linkedin.com/in/ouzozcn/"
          />
          <SimpleTab
            icon={<BehanceLogo />}
            className="border-none  hover:bg-gray-200"
            state="idle"
            to="https://www.behance.net/oguzhanozcan"
          />
          <SimpleTab
            icon={<GithubLogo />}
            className="border-none  hover:bg-lime-200"
            state="idle"
            to="https://github.com/ouzozcn"
          />
          <SimpleTab
            icon={<DribbbleLogo />}
            className="border-none  hover:bg-pink-200"
            state="idle"
            to="https://dribbble.com/ouzozcn"
          />
          <SimpleTab
            icon={<MediumLogo />}
            className="border-none  hover:bg-teal-200"
            state="idle"
            to="https://medium.com/@ouzozcn"
          />
          <SimpleTab
            icon={<MailIcon sx={{ fontSize: "2rem" }} />}
            className="border-none hover:bg-violet-200"
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
        </div>

        <div className="ColumnProduct flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Products" to="/product" />
          {/*  <TextLink label="Zeus" to="/product/zeus" /> */}
          <TextLink label="Kroma" to="/product/kroma" />
          {/*   <TextLink label="Enocta LXP" to="/product/enocta-lxp" /> */}
          <TextLink
            label="Brifl Design System"
            to="/product/brifl-design-system"
          />
        </div>

        <div className="ColumnCaseStudy flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Case Studies" to="/case-study" />
          <TextLink label="Jotform 2FA" to="/case-study/jotform-2fa" />
          {/*  <TextLink label="SMTP" to="/case-study/smtp" />
          <TextLink label="Infra Dashboard" to="/case-study/infra-dashboard" />
          <TextLink label="Design to Dev" to="/case-study/design-to-dev" />
          <TextLink label="Design to UXR" to="/case-study/design-to-uxr" />
          <TextLink label="UI Localization" to="/case-study/ui-localization" />
          <TextLink label="Integration Hub" to="/case-study/integration-hub" /> */}
        </div>

        <div className="ColumnIdeas flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Ideas" to="/ideas" />
          <TextLink label="Brifl" to="/ideas/brifl" />
          <TextLink label="Jotform Logbook" to="/ideas/jotform-logbook" />
        </div>

        <div className="ColumnExperiment flex flex-col gap-2 items-center md:items-start">
          <TextLink style="primary" label="Experiments" to="/experiment" />
          <TextLink label="Solart" to="/experiment/solart" />
          {/* <TextLink label="AI Playground" to="/experiment/ai-playground" /> */}
        </div>
      </div>

      <div className="FooterBottom ">
        <div className="FooterBottomText text-stone-900 text-lg text-center font-sans font-normal p-4">
          Designed and developed with love in Ankara | Oğuzhan Özcan © 2025
        </div>
      </div>
    </div>
  );
};

export default Footer;
