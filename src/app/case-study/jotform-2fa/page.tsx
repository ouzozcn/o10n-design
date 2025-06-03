'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import MetaInfo from "@/components/MetaInfo";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ThankYou from "@/components/ThankYou";
import Button from "@/components/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TopDivider from "@/components/TopDivider";
import LanguageIcon from "@mui/icons-material/Language";
import ContentCard from "@/components/ContentCard";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/styles/swiper.css";

export default function Jotform2FA() {
  const [enableThumbsSwiper, setEnableThumbsSwiper] = useState<SwiperType | null>(null);
  const [loginThumbsSwiper, setLoginThumbsSwiper] = useState<SwiperType | null>(null);
  const [adminThumbsSwiper, setAdminThumbsSwiper] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const cardContents: Array<{
    title: string;
    content: string;
    icon?: React.ReactNode;
    color: "lime" | "pink" | "amber" | "teal" | "emerald" | "red" | "cyan" | "orange";
  }> = [
    {
      title: "Task #1",
      icon: <AssignmentRoundedIcon />,
      content: "Design a user-friendly 2FA experience for both B2C and B2B users.",
      color: "lime",
    },
    {
      title: "Task #2",
      icon: <AssignmentRoundedIcon />,
      content: "Design a management dashboard for enterprise clients.",
      color: "pink",
    },
    {
      title: "Task #3",
      icon: <AssignmentRoundedIcon />,
      content: "Implement a recovery mechanism for users who lose access to their authenticator app.",
      color: "teal",
    },
    {
      title: "Task #4",
      icon: <AssignmentRoundedIcon />,
      content: "Monitor usage, define event tracking, and iterate on experience post-launch.",
      color: "orange",
    },
  ];



  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            Enhancing Security Through Two-Factor Authentication
          </h1>
          <Button
            label="See Jotform 2FA"
            type="secondary"
            size="medium"
            endIcon={<ArrowOutwardIcon />}
            to="https://www.jotform.com/help/how-to-enable-two-factor-authentication/"
            target="_blank"
          />
        </div>
      </div>
      <div className="PageImage flex p-8 w-full h-60 md:h-auto bg-cyan-50 border-b border-stone-900 justify-center items-center gap-4">
        <Image
          src="/img/hero/hero-2fa.svg"
          alt="Jotform 2FA Hero"
          width={1200}
          height={600}
          className="drop-shadow-lg"
        />
      </div>
      <div className="PageContent flex flex-col w-full h-full gap-4 p-8 border-b border-stone-900">
        <div className="PageMeta flex flex-col w-full h-full gap-2">
          <div className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans">
            Enhancing Security Through Two-Factor Authentication
          </div>
          <div className="PageDescription px-12 py-2 items-center justify-center text-center text-stone-900 text-lg font-normal font-sans">
            Designing a secure and frictionless 2FA experience for 25M Jotform users
          </div>
          <div className="MetaInfoRow flex flex-col md:flex-row w-full px-24 py-4 gap-4 lg:gap-24 justify-center items-center md:items-start text-center md:text-start">
            <MetaInfo
              title="My Roles"
              firstMeta="Product Designer"
              secondMeta="UX Researcher"
            />
            <MetaInfo
              title="Team"
              firstMeta="1 Back-end Dev"
              secondMeta="1 Front-end Dev"
              thirdMeta="1 Product Manager"
              fourthMeta="2 QA Engineers"
            />
            <MetaInfo title="Timeline" firstMeta="February - June 2023" />
            <MetaInfo
              title="Toolstack"
              firstMeta="Figma"
              secondMeta="UserTesting"
              thirdMeta="FullStory"
            />
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="BodyContainer flex flex-col gap-0 font-sans">
        <div className="p-4 md:px-16 md:py-8 text-xl text-center font-medium text-stone-900">
          As a product designer in Jotform&apos;s Enterprise Division, I led the design and rollout of a platform-wide Two-Factor Authentication (2FA) feature—addressing 2,000+ user requests and fulfilling enterprise-grade security needs without compromising usability.
        </div>

        <SectionTitle title="The Challenge" />
        <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
          <div className="SectionContent w-2/3 items-center justify-center text-start text-stone-900 text-lg gap-4">
            <p>
              Our goal was to improve account security with an additional layer of authentication—without creating friction or drop-off in user experience. We needed a solution that served both our individual (B2C) users and our enterprise clients with scalable and customizable options.
            </p>
          </div>
          <div className="flex flex-col w-1/3 items-center justify-center">
          <div className="SwipeCards   items-center justify-center font-sans">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              onSwiper={(swiper: SwiperType) => {
                swiperRef.current = swiper;
              }}
              onClick={() => {
                if (swiperRef.current) {
                  const swiper = swiperRef.current;
                  if (swiper.isEnd) {
                    swiper.slideTo(0);
                  } else {
                    swiper.slideNext();
                  }
                }
              }}
            >
              {cardContents.map((card, index) => (
                <SwiperSlide key={index}>
                  <ContentCard
                    title={card.title}
                    content={card.content}
                    icon={card.icon}
                    color={card.color}
                    className="h-[250px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="text-md mt-[-24px] text-stone-500"><i>Tasks I worked on</i></p>
          </div>
        </div>

        <SectionTitle title="My Contributions" />
        <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8">
          <div className="SectionContent flex flex-col w-full md:w-2/3 items-center justify-center text-center md:text-start text-stone-900 text-lg gap-4">
            <p>
             I got chance to work on a wide range of tasks, from research to design to development to launch and growth.
            </p>
            <ul className="list-disc pl-8 md:pl-0 space-y-1 text-left">
              <li>Spearheaded UX design from concept to launch across Web, Mobile App, and Enterprise Servers</li>
              <li>Conducted competitive and user research to align security practices with user expectations</li>
              <li>Defined user flows and edge cases including account recovery and enforcement scenarios</li>
              <li>Collaborated with engineering and QA teams to ensure a smooth, bug-free rollout</li>
              <li>Monitored usage, defined event tracking, and iterated on experience post-launch</li>
              <li>Initiated a growth strategy to boost adoption after initial release</li>
            </ul>
          </div>
          <div className="RoleBlocks flex flex-wrap md:flex-row w-auto md:w-1/3 md:flex-wrap p-4 items-center justify-center gap-4">
            <div className="flex h-16 w-auto md:w-auto p-4 font-sans text-stone-900 text-lg items-center justify-center bg-lime-100 border border-stone-900 rounded-lg">
              Research
            </div>
            <div className="flex h-16 w-auto p-4 font-sans text-stone-900 text-lg items-center justify-center bg-teal-100 border border-stone-900 rounded-lg">
              Analysis
            </div>
            <div className="flex h-16 w-auto p-4 font-sans text-stone-900 text-lg items-center justify-center bg-orange-100 border border-stone-900 rounded-lg">
              Design
            </div>
            <div className="flex h-16 w-auto p-4 font-sans text-stone-900 text-lg items-center justify-center bg-amber-100 border border-stone-900 rounded-lg">
              User Testing
            </div>
            <div className="flex h-16 w-auto p-4 font-sans text-stone-900 text-lg items-center justify-center bg-pink-100 border border-stone-900 rounded-lg">
              Quality Assurance
            </div>
            <div className="flex h-16 w-auto p-4 font-sans text-stone-900 text-lg items-center justify-center bg-violet-100 border border-stone-900 rounded-lg">
              Growth
            </div>
            <div className="flex h-16 w-auto p-4 font-sans text-stone-900 text-lg items-center justify-center bg-green-100 border border-stone-900 rounded-lg">
              Support
            </div>
          </div>
        </div>

        <SectionTitle title="Research & Strategy" />
        <div className="SectionContent p-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            I explored authentication practices used by industry leaders (GitHub, Google, etc.) and internalized concepts such as MFA, SSO, and recovery mechanisms. I analyzed:
          </p>
          <br />
          <ul className="list-disc pl-8 space-y-1 text-left">
            <li>
              <b>Authentication Methods:</b> Authenticator App, SMS, Security Keys, Passkeys, GitHub Mobile, Recovery Codes
            </li>
            <li>
              <b>UX Pitfalls:</b> QR code confusion, device recovery, friction points in sign-in flows
            </li>
            <li>
              <b>User Personas:</b> From casual form builders to healthcare, legal, and fintech professionals requiring HIPAA and SOC 2 compliance
            </li>
          </ul>
          <br />
          <p>I proposed a phased implementation plan prioritizing:</p>
          <br />
          <ul className="list-disc pl-8 space-y-1 text-left">
            <li>Authenticator App</li>
            <li>Recovery Codes</li>
            <li>SMS and mobile app methods as future considerations</li>
          </ul>
        </div>

        <SectionTitle title="User Flows" />
        <div className="SectionContent font-normal m-8 items-center justify-center text-center text-stone-900 text-lg gap-4">
          <p>I designed a user-friendly 2FA experience for both B2C and B2B users.</p>
        </div>

        <div className="BlockContainer flex flex-col md:flex-row h-auto font-normal items-start justify-center text-start text-stone-900 text-lg border-t border-stone-900">
          <div className="SectionBlock w-full h-full flex-1 p-6 bg-lime-50 flex flex-col justify-start gap-2 md:border-r border-b lg:border-b-none border-stone-900">
            <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
              B2C - Regular User Flow
            </div>
            <div className="self-stretch justify-center text-stone-900 text-md">
              <ul className="list-disc pl-8 space-y-1">
                <li>Users enable 2FA via Account → Settings</li>
                <li>Authentication starts with password or social login re-verification</li>
                <li>Users scan a QR code or enter a secret key manually</li>
                <li>Users receive Recovery Codes and a confirmation email</li>
              </ul>
            </div>
          </div>
          <div className="SectionBlock w-full flex-1 p-6 bg-pink-50 flex flex-col h-full justify-start gap-2">
            <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
              B2B - Enterprise User Flow
            </div>
            <div className="self-stretch justify-center text-stone-900 text-md">
              <ul className="list-disc pl-8 space-y-1">
                <li>Enterprise Admins can enforce or disable 2FA at a team or user level</li>
                <li>Dedicated UI built into the Admin Console</li>
                <li>Users are prompted to set up 2FA upon login if enforcement is active</li>
                <li>Custom UI developed for white-labeled Enterprise Servers</li>
              </ul>
            </div>
          </div>
        </div>

        <SectionTitle title="High Fidelity Designs" />
        <div className="HiFiContainer1 flex flex-col md:flex-row gap-4 md:h-[760px] items-center justify-center border-b border-stone-900">
          <div className="SectionContent flex w-full md:w-1/3 h-full p-4 md:px-16 md:py-8 flex-col items-center justify-center text-center text-stone-900 text-lg bg-amber-100 md:border-r border-stone-900">
            <p className="text-2xl font-bold">Flow: Enabling 2FA</p>
            <br />
            <p>Both regular and enterprise users can enable 2FA via their account settings</p>
          </div>
          <div className="ImageSlider w-full h-auto items-center justify-center lg:max-w-4xl mx-auto p-4 md:px-16 md:py-8">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: enableThumbsSwiper && !enableThumbsSwiper.destroyed ? enableThumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-swiper rounded-lg mb-4"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SwiperSlide key={num} className="h-[600px]">
                  <Image
                    src={`/img/twofa/2fa-enable-0${num}.png`}
                    alt={`Jotform 2FA Enable Flow Step ${num}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setEnableThumbsSwiper}
              spaceBetween={20}
              slidesPerView={6}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-thumbs"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SwiperSlide key={num}>
                  <Image
                    src={`/img/twofa/2fa-enable-0${num}.png`}
                    alt={`Jotform 2FA Enable Flow Step ${num} thumbnail`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover rounded cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="HifiContainer2 flex flex-col md:flex-row gap-4 md:h-[760px] items-center justify-center">
          <div className="ImageSlider w-full h-auto items-center justify-center lg:max-w-4xl mx-auto p-4 md:px-16 md:py-8">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: loginThumbsSwiper && !loginThumbsSwiper.destroyed ? loginThumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-swiper rounded-lg mb-4"
            >
              {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num} className="h-[600px]">
                  <Image
                    src={`/img/twofa/2fa-login-0${num}.png`}
                    alt={`Jotform 2FA Login Flow Step ${num}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setLoginThumbsSwiper}
              spaceBetween={20}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-thumbs"
            >
              {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num}>
                  <Image
                    src={`/img/twofa/2fa-login-0${num}.png`}
                    alt={`Jotform 2FA Login Flow Step ${num} thumbnail`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover rounded cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="SectionContent flex w-full md:w-1/3 h-full p-4 md:px-16 md:py-8 flex-col items-center justify-center text-center text-stone-900 text-lg bg-lime-100 md:border-l border-stone-900">
            <p className="text-2xl font-bold">Flow: Login with 2FA</p>
            <br />
            <p>
              After typing credentials or prompting a social login, users are prompted to enter a 2FA code. Users can choose to use an authenticator app or recovery code.
            </p>
          </div>
        </div>
        <SectionTitle title="Event Tracking & Monitoring" />
        <div className="SectionContent px-4 py-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            To improve performance and usability, I worked with developers to
            define <b>29 unique eventListeners</b> for 2FA-specific
            interactions. A few examples are shown below:
          </p>
          <Image
            src={'/img/twofa/TargetListener.png'}
            className="mx-auto my-4 max-w-full h-auto"
            alt="Jotform 2FA Configuration Events"
            width={1200}
            height={800}
          />
          <p>
            In FullStory, I implemented <b>24 CSS selectors</b> to monitor
            behavior within:
          </p>
          <br />
          <ul className="list-disc pl-8 space-y-1">
            <li>Security Settings</li>
            <li>Modals & QR Screens</li>
            <li>Recovery & Error States</li>
            <li>Email Verification Screens</li>
          </ul>
          <br />
          <p>
            This allowed us to detect issues like <b>QR code mis-scanning </b>
            and <b>drop-offs during setup</b>.
          </p>
        </div>
        <SectionTitle title="Launch & Communication" />
        <div className="flex flex-col md:flex-row px-4 py-4 md:px-16 md:py-8 gap-4 lg:gap-12 items-center justify-center">
          <div className="SectionContent   items-center justify-center text-start text-stone-900 text-lg gap-4">
            <p>
              To drive adoption, I created a cross-platform launch strategy:
            </p>
            <br />
            <ul className="list-disc pl-8 space-y-1">
              <li>
                {" "}
                <b>Announcement Modal</b> on user dashboard
              </li>
              <li>
                {" "}
                <b>Email Campaign</b> to all users
              </li>
              <li>Feature Inclusion in the April Newsletter</li>
              <li>
                FullStory Dashboard to <b>monitor usage in real-time</b>
              </li>
              <li>
                <b>BDM Training and Support</b> for Enterprise Clients
              </li>
            </ul>
          </div>
          <div className="VideoPlayer flex w-3/5 h-full items-center justify-center border border-stone-900 rounded-lg">
            <video src={'/img/twofa/2fa-animation.mp4'} controls autoPlay muted loop />
          </div>
        </div>
        <SectionTitle title="Enterprise Customization" />
        <div className="flex flex-col md:flex-row p-4 md:px-16 md:py-8 gap-4 items-center justify-center">
          <div className="SectionContent items-center justify-center text-start text-stone-900 text-lg gap-4">
            <p>Enterprise users demanded more advanced controls:</p>
            <br />
            <ul className="list-disc pl-8 space-y-1">
              <li>Admin toggle for <b>2FA enforcement</b></li>
              <li>Per-user config for <b>enable / disable / reset</b></li>
              <li><b>Custom login</b> interfaces and error handling</li>
              <li>Special request flow for <b>2FA reset</b> (in collaboration with Legal & Support teams)</li>
            </ul>
            <br />
            <p>All of these were scoped and designed with compliance and scalability in mind.</p>
          </div>
          <div className="ImageSlider w-full h-auto items-center justify-center lg:max-w-4xl mx-auto">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: adminThumbsSwiper && !adminThumbsSwiper.destroyed ? adminThumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-swiper rounded-lg mb-4"
            >
              {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num} className="h-[600px]">
                  <Image
                    src={`/img/twofa/2fa-admin-0${num}.png`}
                    alt={`Jotform 2FA Admin Flow Step ${num}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setAdminThumbsSwiper}
              spaceBetween={20}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-thumbs"
            >
              {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num}>
                  <Image
                    src={`/img/twofa/2fa-admin-0${num}.png`}
                    alt={`Jotform 2FA Admin Flow Step ${num} thumbnail`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover rounded cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <SectionTitle title="After Launch: User Feedback & Iteration" />
        <div className="SectionContent p-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            I tracked <b>~15K 2FA enablements</b> post-launch, with 10K users continuing use. We uncovered two key UX issues:
          </p>
          <br />
          <ul className="list-decimal pl-8 space-y-1">
            <li>
              <b>Lost Devices</b> → Created secure, verifiable recovery process
            </li>
            <li>
              <b>QR Confusion</b> → Redesigned QR screens to guide users to open the Authenticator App before scanning
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row p-4 md:px-16 md:py-8 gap-4 items-center justify-center">
          <div className="IframeGraph flex h-[400px] w-full justify-center items-center">
            <iframe
              src="https://visualize.graphy.app/view/83816ffb-cf3a-4a45-aada-54b73b3a19d5"
              className="w-full h-[400px] object-contain"
            />
          </div>
          <div className="IframeGraph flex h-[400px] w-full justify-center items-center">
            <iframe
              src="https://visualize.graphy.app/view/fac68f14-890e-4a8e-b2b3-6da6b3b0a26e"
              className="w-full h-[400px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-4 md:px-16 gap-4 items-center justify-center">
          <div className="IframeGraph flex h-auto w-full justify-center items-center">
            <iframe
              src="https://visualize.graphy.app/view/770630e2-170d-4d41-a48a-f1b08cf6283c"
              className="w-full h-[600px] object-contain"
            />
          </div>
        </div>

        <SectionTitle title="Driving Adoption: Action-Based Triggers" />
        <div className="flex flex-col md:flex-row  p-4 md:px-16 md:py-8 gap-4 items-center justify-center">
          <div className="SectionContent md:w-1/2 items-center justify-center text-start text-stone-900 text-lg gap-4">
            <p>
              After noticing a decline in 2FA activations, I hypothesized that security-conscious users would respond better to timely nudges. I defined a set of <b>Action-Based Email Triggers</b> to promote 2FA:
            </p>
            <br />
            <ul className="list-disc pl-8 space-y-1">
              <li><b>isPasswordChanged</b> → Triggered when a user changes their password</li>
              <li><b>hasGeneratedAPIKey</b> → Triggered when a user generates an API key</li>
              <li><b>isBackupEmailVerified</b> → Triggered when a user verifies their backup email</li>
              <li><b>isPhoneVerified</b> → Triggered when a user verifies their phone number</li>
              <li><b>hasEncryptedAsset</b> → Triggered when a user encrypts their form</li>
              <li><b>hasExportedData</b> → Triggered when a user exports their data</li>
            </ul>
          </div>
          <div className="flex w-1/2 justify-center">
            <Image
              src="/img/twofa/2fa-growth-mail.png"
              alt="Jotform 2FA Email Triggers"
              width={600}
              height={400}
              
            />
          </div>
        </div>

        <SectionTitle title="Summary & Impact" />
        <div className="SectionContent p-4 md:px-16 md:py-8 items-center justify-center text-center text-stone-900 text-lg gap-4">
          <ul className="list-none space-y-4 mx-auto max-w-2xl">
            <li className="text-center">Rolled out Jotform&apos;s first 2FA system across Web, Mobile, and Enterprise</li>
            <li className="text-center"><b>10,000+ active 2FA users</b> post-launch within first months</li>
            <li className="text-center">Adopted by 40+ Enterprise clients</li>
            <li className="text-center"><b>95% retention rate</b> for 2FA users</li>
            <li className="text-center">Launched a scalable recovery system and admin control interface</li>
            <li className="text-center">Increased security usage through targeted growth emails</li>
          </ul>
        </div>

        <ThankYou
          message="Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it."
          exploreBlocks={[
            <Link key="jotform-logbook" href="/ideas/jotform-logbook" className="flex-1 h-full">
              <div className="SectionBlock h-full p-6 flex flex-col justify-start items-start gap-2 cursor-pointer hover:bg-orange-200 transition sm:border-b lg:border-b-0 lg:border-r border-stone-900">
                <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                  Jotform Logbook
                </div>
                <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                  An internal tool for better company awareness
                </div>
              </div>
            </Link>,
            <Link key="kroma" href="/product/kroma" className="flex-1 h-full">
              <div className="SectionBlock h-full p-6  flex flex-col justify-start items-start gap-2 cursor-pointer hover:bg-pink-200 transition">
                <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                  Kroma
                </div>
                <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                  Color Blindness Accessibility Checker for User Interfaces
                </div>
              </div>
            </Link>,
          ]}
          simpleTabs={[
            {
              icon: <LanguageIcon />,
              state: "idle",
              to: "https://www.jotform.com/blog/announcing-new-two-factor-authentication-for-your-jotform-account/?jtm_source=2024-april-regular-a__19&jtm_medium=blog&jtm_content=section_id_6_title&jtm_campaign=2024-april-newsletter",
              className: "h-full md:border-r-0 hover:bg-emerald-100",
            },
          ]}
        />
        <Footer />
      </div>
    </div>
  );
}
