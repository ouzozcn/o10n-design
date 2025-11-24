'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation, EffectCards } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import ThankYou from '@/components/ThankYou';
import SectionTitle from '@/components/SectionTitle';
import TopDivider from '@/components/TopDivider';
import ContentCard from '@/components/ContentCard';
import PageBreaker from '@/components/PageBreaker';
import MetaInfo from '@/components/MetaInfo';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ContactEmergencyRoundedIcon from '@mui/icons-material/ContactEmergencyRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '@/styles/swiper.css';

export default function BriflClient() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info(
      '🎨 Welcome to brifl - A collaborative form-building platform designed to bridge the gap between creators and clients. This project showcases how specialized form tools can streamline creative workflows and improve client communication across different disciplines: design, development, writing, and photography.'
    );
  }, []);

  const cardContents: Array<{
    title: string;
    content: string;
    icon?: React.ReactNode;
    color: 'lime' | 'pink' | 'amber' | 'teal' | 'emerald' | 'red' | 'cyan' | 'orange';
  }> = [
    {
      title: 'Diverse Form Blocks',
      icon: <DashboardIcon />,
      content: 'Over 30 customizable blocks catering to various creative needs.',
      color: 'lime',
    },
    {
      title: 'Recipient Management',
      icon: <ContactEmergencyRoundedIcon />,
      content: 'Efficiently organize and manage form recipients.',
      color: 'pink',
    },
    {
      title: 'Third-Party Integrations',
      icon: <IntegrationInstructionsRoundedIcon />,
      content: 'Seamless integration with over 20 tools for enhanced functionality.',
      color: 'teal',
    },
    {
      title: 'Open-Source',
      icon: <PublicRoundedIcon />,
      content: 'Community-driven development promoting transparency and collaboration.',
      color: 'orange',
    },
  ];

  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            brifl: Empowering Creators with Collaborative Form Building
          </h1>
        </div>
      </div>
      <div className="PageImage flex p-8 w-full h-60 md:h-auto bg-cyan-50 border-b border-stone-900 justify-center items-center gap-4">
        <Image
          src="/img/BriflDashboard.svg"
          alt="Brifl Dashboard"
          width={1200}
          height={600}
          className="drop-shadow-lg w-[120%]"
        />
      </div>
      <div className="PageContent flex flex-col w-full h-full gap-4 p-8 border-b border-stone-900">
        <div className="PageMeta flex flex-col w-full h-full gap-2">
          <div className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans">
            brifl: Empowering Creators with Collaborative Form Building
          </div>
          <div className="PageDescription px-12 py-2 items-center justify-center text-center text-stone-900 text-lg font-normal font-sans">
            An open-source tool designed for designers, developers, writers, and photographers to
            create, share, and analyze forms seamlessly.
          </div>
          <div className="MetaInfoRow flex flex-col md:flex-row w-full px-24 py-4 gap-4 lg:gap-24 justify-center items-center md:items-start">
            <MetaInfo title="My Roles" firstMeta="Product Designer" secondMeta="User Researcher" />
            <MetaInfo title="Methodologies" firstMeta="Double Diamond" />
            <MetaInfo title="Timeline" firstMeta="January - December 2022" />
            <MetaInfo title="Toolstack" firstMeta="Figma" thirdMeta="maze" />
          </div>
        </div>
      </div>

      <div className="SectionTitleContainer flex flex-col gap-0 font-sans">
        <div className="m-8 text-xl text-center font-medium text-stone-900">
          brifl is an open-source, collaborative form-building tool tailored for creators across
          various disciplines such as designers, developers, writers. It enables users to design
          surveys, briefs, quizzes, and polls, facilitating seamless communication and feedback.
        </div>

        {/* Problem and Approach Section */}
        <div className="flex flex-col md:flex-row w-full gap-0">
          <div className="flex flex-col w-full gap-0">
            <SectionTitle title="Problem" />
            <div className="SectionContent font-normal m-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
              <p>
                Creators often struggle with generic form tools that lack customization and fail to
                address specific needs, leading to inefficient workflows and miscommunication.
              </p>
            </div>
            <SectionTitle title="Approach" />
            <div className="SectionContent font-normal m-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
              <p>
                Develop a form-building application that offers unique blocks, communication channel
                between form creators and respondents, and recipient management.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full border-t  md:border-l border-stone-900 items-center justify-center">
            <div className="PageImage flex  w-full items-center justify-center h-auto p-4">
              <Image
                src="/img/brifl/bri-block-samples.svg"
                alt="Brifl Sample Blocks"
                width={1}
                height={1}
                className="align-center justify-center w-[70%] h-auto my-4"
              />
            </div>
            <div className="flex w-full p-4">
              <p className="text-stone-900 text-md text-center italic font-normal font-sans">
                brifl offers a range of customizable niche blocks, including typography, color
                palettes, and board.
              </p>
            </div>
          </div>
        </div>

        {/* Market Analysis Section */}
        <SectionTitle title="Market Analysis: Learning from the Big Players" />
        <div className="SectionContent font-normal m-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            To shape brifl&apos;s product direction, I studied popular form-building tools with a
            strong foothold in professional workflows. The goal wasn&apos;t to replicate their
            feature sets, but to understand how they solve (or fail to solve) problems for creatives
            — especially in the early stages of project communication.
          </p>
          <br />
          <p>
            While tools like Jotform, SurveyMonkey, and Typeform offer comprehensive and
            enterprise-grade features, they often fall short in creating a streamlined and
            empathetic space for creative collaboration. For brifl&apos;s MVP, I made a conscious
            decision to deprioritize complexity and instead focus on shared understanding between
            creatives and their clients.
          </p>
          <br />
          <p>
            The benchmark analysis also reveals opportunities for future improvements — features
            that could be layered into brifl thoughtfully and gradually, as the product evolves.
          </p>
        </div>

        {/* Market Analysis Cards */}
        <div className="SectionContent flex mx-8 mb-8 items-start justify-center flex-col md:flex-row gap-4">
          <ContentCard
            title="Jotform"
            to="https://www.jotform.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
            target="_blank"
            icon={<SearchIcon />}
            color="orange"
            content={
              <div>
                <ul className="list-disc pl-2 space-y-1 text-left">
                  <li>Multiple layout options (classic, card-based)</li>
                  <li>Drag-and-drop builder with strong UI flexibility</li>
                  <li>Powerful widget and plugin ecosystem</li>
                  <li>Digital signature field (legal sign)</li>
                  <li>Easy form importing from existing URLs or PDFs</li>
                  <li>Deep integrations with payment systems, CRMs, and productivity tools</li>
                  <li>Ecosystem of other products (Jotform Tables, Apps, Approvals)</li>
                </ul>
              </div>
            }
          />
          <ContentCard
            title="SurveyMonkey"
            to="https://www.surveymonkey.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
            target="_blank"
            icon={<SearchIcon />}
            color="lime"
            content={
              <div>
                <ul className="list-disc pl-2 space-y-1 text-left">
                  <li>Integrated audience recruiting for surveys and research</li>
                  <li>A/B testing and performance analytics</li>
                  <li>Drag-and-drop editor with conditional logic</li>
                  <li>Form-as-conversation option for surveys</li>
                  <li>Smart suggestions for question types</li>
                  <li>Customizable layouts for branded feel</li>
                </ul>
              </div>
            }
          />
          <ContentCard
            title="Typeform"
            to="https://www.typeform.com/?utm_source=o10n-design&utm_medium=referral&utm_campaign=o10n-component-design-for-js-frameworks&utm_id=2510001"
            target="_blank"
            icon={<SearchIcon />}
            color="pink"
            content={
              <div>
                <ul className="list-disc pl-2 space-y-1 text-left">
                  <li>Conversational, humanized form experience</li>
                  <li>Strong visual hierarchy and minimal UI</li>
                  <li>Theme and layout customization</li>
                  <li>Logic jumps and conditional paths</li>
                  <li>Gamified UX keeps engagement high</li>
                  <li>Redirect options after form submission</li>
                </ul>
              </div>
            }
          />
        </div>

        {/* Features Section */}
        <SectionTitle title="Features" />
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="SectionContent flex w-full m-8 items-center justify-center text-center md:text-start text-stone-900 text-lg">
            <p>
              Brifl empowers creators with versatile forms built from over 30 different block types
              and seamless third-party integrations, all while fostering communication through
              unique sender-responder links. It simplifies recipient management and benefits from a
              community-driven, open-source platform.
            </p>
          </div>
          <div className="SwipeCards flex w-full items-center justify-center font-sans">
            <Swiper
              effect={'cards'}
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
        </div>

        {/* User Understanding Section */}
        <SectionTitle title="Understanding the Users: From Personas to Archetypes" />
        <div className="flex flex-col w-full lg:flex-row gap-0">
          <div className="SectionContent w-full font-normal m-8 items-center justify-center text-start text-stone-900 font-sans text-lg gap-4">
            <p>
              Unlike traditional form tools that target narrow user personas, brifl was designed for
              multidisciplinary creatives who often juggle multiple roles or work across different
              industries. To reflect this diversity, I took an archetype-driven approach rather than
              relying on rigid personas.
            </p>
            <br />
            <p>
              By researching online communities and conducting interviews with creative
              professionals, I identified four key archetypes that brifl aims to support: Designer,
              Developer, Writer, and Photographer.
            </p>
            <br />
            <p>
              Each of these archetypes has specific workflows and pain points that current form
              tools fail to address — particularly around client onboarding, brief gathering, and
              scope alignment. brifl&apos;s design decisions were rooted in surfacing and solving
              these unmet needs.
            </p>
          </div>
          <div className="PageBreakerContainer w-full flex flex-col border-l border-stone-900 gap-0">
            <PageBreaker sectionNumber={1} sectionTitle="🖌️ Designer">
              <div className="PageBreakerContent">
                <p className="mb-4">
                  Designers often struggle with scattered communication and vague project
                  expectations. brifl helps by enabling:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reviewing existing branding or assets</li>
                  <li>Clarifying project goals, audience, and medium</li>
                  <li>Establishing project timelines early</li>
                  <li>Sharing moodboards or pre-made works</li>
                  <li>Managing specialized briefs (e.g., for web, branding, or social)</li>
                  <li>Centralizing Q&A threads with clients</li>
                </ul>
              </div>
            </PageBreaker>
            <PageBreaker sectionNumber={2} sectionTitle="💻 Developer">
              <div className="PageBreakerContent">
                <p className="mb-4">
                  Developers need alignment with technical realities before jumping in. brifl
                  supports this by capturing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Information on existing front-end/back-end stacks.</li>
                  <li>Access needs like GitHub repos or APIs.</li>
                  <li>Preferred methodologies (Scrum, Kanban, etc.).</li>
                  <li>Post-launch support expectations.</li>
                </ul>
              </div>
            </PageBreaker>
            <PageBreaker sectionNumber={3} sectionTitle="✍️ Content Writer">
              <div className="PageBreakerContent">
                <p className="mb-4">
                  Writers are often brought in late or given limited context. brifl resolves that by
                  asking:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>What&apos;s the brand voice or tone of the content?</li>
                  <li>Who is the content for, and what type of content is needed?</li>
                  <li>What product/service is being written about?</li>
                  <li>Are there specific content requirements (length, links, keywords)?</li>
                </ul>
              </div>
            </PageBreaker>
            <PageBreaker sectionNumber={4} sectionTitle="📷 Photographer">
              <div className="PageBreakerContent">
                <p className="mb-4">
                  Photographers need alignment on both creative and legal fronts. brifl makes room
                  for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Preferred style or visual direction.</li>
                  <li>Shoot locations and logistics.</li>
                  <li>Required gear and deliverables.</li>
                  <li>Production plans and moodboards.</li>
                  <li>Usage rights and copyright agreements.</li>
                </ul>
              </div>
            </PageBreaker>
          </div>
        </div>

        {/* Design Process Section */}
        <SectionTitle title="Design Process" />
        <div className="SectionContent flex flex-col h-auto lg:flex-row font-sans items-center justify-center text-stone-900 text-lg gap-4">
          <div className="SectionBlocksContainer flex flex-col md:w-screen gap-0  lg:min-h-[700px] border-r border-stone-900">
            <div className="SectionBlock flex-1 p-6 bg-lime-50 flex flex-col justify-start gap-2 border-b border-stone-900">
              <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                Information Architecture
              </div>
              <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                Structured the application for intuitive navigation and usability.
              </div>
            </div>
            <div className="SectionBlock flex-1 p-6 bg-red-50 flex flex-col justify-start items-start gap-2 border-b border-stone-900">
              <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                User Flows
              </div>
              <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                Mapped out scenarios ensuring a seamless user experience.
              </div>
            </div>
            <div className="SectionBlock flex-1 p-6 bg-purple-50 flex flex-col justify-start items-start gap-2 border-b border-stone-900">
              <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                Sketches & Wireframes
              </div>
              <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                Developed low-fidelity prototypes to visualize layout and functionality.
              </div>
            </div>
            <div className="SectionBlock flex-1 p-6 bg-emerald-50 flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                High-Fidelity Designs
              </div>
              <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                Created detailed designs incorporating feedback and usability testing results.
              </div>
            </div>
          </div>
          <div className="ImageSlider w-full lg:max-w-4xl m-4 flex-1">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-swiper rounded-lg mb-4"
            >
              {[
                'bri-infoarch',
                'bri-user-flow',
                'bri-sketch',
                'bri-wireframe-1',
                'bri-hifi',
                'bri-builder-Palette',
                'bri-builder-Typography',
                'bri-view-Palette',
              ].map((image, index) => (
                <SwiperSlide key={index} className="h-[600px]">
                  <Image
                    src={`/img/brifl/${image}.png`}
                    alt={`Brifl ${image.replace('bri-', '').replace(/-/g, ' ')}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={20}
              slidesPerView={9}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-thumbs"
            >
              {[
                'bri-infoarch',
                'bri-user-flow',
                'bri-sketch',
                'bri-wireframe-1',
                'bri-hifi',
                'bri-builder-Palette',
                'bri-builder-Typography',
                'bri-view-Palette',
              ].map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={`/img/brifl/${image}.png`}
                    alt={`Brifl ${image.replace('bri-', '').replace(/-/g, ' ')} thumbnail`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover rounded cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Outcome Section */}
        <SectionTitle title="Outcome: What I have learned?" />
        <div className="SectionContent font-sans m-8 items-center justify-center text-center text-stone-900 text-lg gap-4">
          <p>
            Although brifl was never launched — primarily due to the lack of a developer and my
            limited knowledge of JavaScript at the time — the project became one of the most
            formative experiences in my product design journey. What started as a side hustle grew
            into a meaningful learning process, and a clear step forward in my transition toward
            systems thinking and user-centered design.
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="OutcomeContainers flex flex-col md:flex-row w-full border-t border-stone-900">
          <div className="OutcomeContainerLeft flex w-full">
            <div className="SectionBlocksContainer flex flex-col gap-0 flex-1 h-auto border-r border-stone-900">
              <div className="SectionBlock flex-1 p-6 bg-amber-50 flex flex-col justify-start gap-2 border-b border-stone-900">
                <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                  🧭 Problem-first approach
                </div>
                <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                  brifl was born out of a recurring pain I noticed among creatives — the messy,
                  inconsistent ways they communicate with clients. It taught me that even niche,
                  everyday problems can become the foundation of impactful product ideas.
                </div>
              </div>
              <div className="SectionBlock flex-1 p-6 bg-amber-100 flex flex-col justify-start items-start gap-2 border-b border-stone-900">
                <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                  🤝 First touch with the open-source community
                </div>
                <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                  While I couldn&apos;t develop the product myself, my intention to make it
                  open-source connected me with like-minded people from the open-source space. It
                  planted a seed for future collaborative projects.
                </div>
              </div>
              <div className="SectionBlock flex-1 p-6 bg-amber-50 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                  🧱 My first Design System
                </div>
                <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                  I designed a full-fledged atomic design system with foundations like typography,
                  color, spacing, and grid — plus 30+ core components, each with necessary states
                  and variants. This became my starting point for systems thinking in UI design.
                </div>
              </div>
            </div>
          </div>
          <div className="OutcomeContainerRight flex w-full">
            <div className="SectionBlocksContainer flex flex-col gap-0 flex-1 h-auto">
              <div className="SectionBlock flex-1 p-6 bg-amber-100 flex flex-col justify-start gap-2 border-b border-stone-900">
                <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                  🗣️ Real interviews with real creatives
                </div>
                <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                  I conducted short-form interviews with friends and colleagues across various
                  creative disciplines. These conversations helped me form clear archetypes instead
                  of personas and gave the product a sharper focus.
                </div>
              </div>
              <div className="SectionBlock flex-1 p-6 bg-amber-50 flex flex-col justify-start items-start gap-2 border-b border-stone-900">
                <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                  🖌️ Figma fluency
                </div>
                <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                  brifl was the first full product I designed entirely in Figma. I learned how to
                  structure pages, components, and workflows professionally — a skill that became
                  foundational in my later projects.
                </div>
              </div>
              <div className="SectionBlock flex-1 p-6 bg-amber-100 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
                  🧩 Understanding diverse user flows
                </div>
                <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
                  Designing for designers, developers, writers, and photographers pushed me to think
                  beyond a single use case. It helped me embrace complexity and learn how to distill
                  it into intuitive flows.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <ThankYou
          message="Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it."
          exploreBlocks={[
            <Link key="jotform-logbook" href="/ideas/jotform-logbook" className="flex-1 h-full">
              <div className="SectionBlock h-full p-6 flex flex-col justify-start items-start gap-2 cursor-pointer  hover:bg-orange-200 transition sm:border-b lg:border-b-0 lg:border-r border-stone-900">
                <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                  Jotform Logbook
                </div>
                <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                  An internal tool for better company awareness
                </div>
              </div>
            </Link>,
            <Link key="kroma" href="/product/kroma" className="flex-1 h-full">
              <div className="SectionBlock h-full p-6 flex flex-col justify-start items-start gap-2 cursor-pointer hover:bg-pink-200 transition">
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
              icon: <Image src="/img/behance.svg" alt="Behance" width={24} height={24} />,
              state: 'idle',
              to: 'https://www.behance.net/gallery/158941869/brifl-Open-Source-Form-Application',
              className: 'h-full hover:bg-blue-100',
            },
            {
              icon: <Image src="/img/dribbble.svg" alt="Dribbble" width={24} height={24} />,
              state: 'idle',
              to: 'https://dribbble.com/shots/19994696-brifl-open-source-form-application-landing-page',
              className: 'h-full hover:bg-pink-100 border-r-0',
            },
          ]}
        />
        <Footer />
      </div>
    </div>
  );
}
