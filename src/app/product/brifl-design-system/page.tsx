'use client';

import React, { useRef, useState } from "react";
import { useEffect } from "react";
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
import TopDivider from "@/components/TopDivider";
import ContentCard from "@/components/ContentCard";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";
import HexagonIcon from "@mui/icons-material/Hexagon";
import PentagonIcon from "@mui/icons-material/Pentagon";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/styles/swiper.css";

export default function BriflDS() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const cardContents: Array<{
    title: string;
    content: string;
    icon?: React.ReactNode;
    color: "lime" | "pink" | "amber" | "teal" | "emerald" | "red" | "cyan" | "orange";
  }> = [
    {
      title: "IBM Carbon",
      icon: <SquareIcon />,
      content: "IBM Carbon offers 50+ components and extensive documentation for IBM products, ensuring design consistency across thousands of applications.",
      color: "cyan",
    },
    {
      title: "Atlassian Design System",
      icon: <HexagonIcon />,
      content: "The Atlassian DS features over 30 components, used by millions in tools like Jira and Confluence, developed by 100+ contributors.",
      color: "amber",
    },
    {
      title: "Orbit by Kiwi",
      icon: <CircleIcon />,
      content: "Orbit by Kiwi includes 50+ UI components for travel apps, impacting millions of users with comprehensive design guidelines.",
      color: "emerald",
    },
    {
      title: "Ant Design",
      icon: <PentagonIcon />,
      content: "Ant Design boasts 60+ components, widely adopted by enterprises and developers, with 70,000+ GitHub stars showcasing strong community support.",
      color: "pink",
    },
  ];

  useEffect(() => {
    console.info(
      "🎨 Welcome to Brifl Design System - A modular, React-friendly component library built on atomic design principles. This project showcases how a well-structured design system can provide a solid foundation for consistent, accessible, and high-fidelity UI design across a product ecosystem."
    );
  }, []);

  return (
    <div className="w-[calc(100%-4rem)] mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            brifl Design System
          </h1>
        </div>
      </div>
      <div className="PageImage flex p-8 w-full h-60 md:h-auto bg-cyan-50 border-b border-stone-900 justify-center items-center gap-4">
        <Image
          src="/img/hero/hero-briflds.svg"
          alt="Brifl Design System Hero"
          width={1200}
          height={600}
          className="drop-shadow-lg"
        />
      </div>
      <div className="PageContent flex flex-col w-full h-full gap-4 p-8 border-b border-stone-900">
        <div className="PageMeta flex flex-col w-full h-full gap-2">
          <div className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans">
            brifl Design System
          </div>
          <div className="PageDescription px-12 py-2 items-center justify-center text-center text-stone-900 text-lg font-normal font-sans">
            Designing a Scalable and Modular UI Foundation
          </div>
          <div className="MetaInfoRow flex flex-col md:flex-row w-full px-24 py-4 gap-4 lg:gap-24 justify-center items-center md:items-start">
            <MetaInfo title="My Roles" firstMeta="UI Designer" />
            <MetaInfo title="Timeline" firstMeta="August - December 2021" />
            <MetaInfo title="Toolstack" firstMeta="Figma" secondMeta="miro" />
          </div>
        </div>
      </div>

      <div className="BodyContainer flex flex-col gap-0 font-sans">
        <div className="mx-16 my-8 text-xl text-center font-medium text-stone-900">
          Before designing the Brifl Form Application, I created the Brifl Design System — a modular, React-friendly component library based on atomic design principles. It contains over 30 components and 200+ states and variants. This system provided the foundation for consistent, accessible, and high-fidelity UI design across the Brifl product.
        </div>

        <SectionTitle title="Project Overview" />
        <div className="SectionContent font-normal mx-16 my-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            Before designing the Brifl Form Application, I decided to design a complete system that would allow me to create a consistent user interface. So, I designed a design system after studying <b>atomic design principles</b> and React-friendly component design, named the Brifl Design System. I also used this system for designing the high-fidelity user interfaces of the Brifl product.
          </p>
          <br />
          <p>
            The Brifl Design System consists of <b>30 different UI components</b> and more than <b>200 states and variants.</b> It defines the foundational elements such as:
          </p>
          <br />
          <ul className="list-disc pl-8 space-y-1 text-left">
            <li>Color palette</li>
            <li>Typography</li>
            <li>Icon library</li>
            <li>Grid & structure</li>
          </ul>
        </div>

        <SectionTitle title="Research & Inspiration" />
        <div className="flex flex-col md:flex-row gap-0">
          <div className="SectionContent font-normal mx-16 my-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
            <p>
              Before starting to design the Brifl Design System, I studied Atomic Design Principles by Brad Frost and examined well-defined systems such as:
            </p>
            <ul className="list-disc pl-8 space-y-1 text-left">
              <li>IBM Carbon</li>
              <li>Atlassian Design System</li>
              <li>Orbit by Kiwi</li>
              <li>Ant Design</li>
            </ul>
            <p>
              These references helped me define a structure that is both scalable and React-compatible.
            </p>
          </div>
          <div className="SwipeCards flex w-full items-center justify-center font-sans">
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
        </div>

        <SectionTitle title="Design System Components" />
        <div className="SectionContent font-normal mx-16 my-8 items-center justify-center text-start text-stone-900 text-lg gap-12">
          <div className="flex flex-col text-center w-full">
            <p>
              The Brifl Design System consists of <b>30 different UI components</b> and more than <b>200 states and variants.</b>
            </p>
          </div>

          <div className="ImageSlider max-w-4xl mt-4 mx-auto">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-swiper rounded-lg mb-4"
            >
              <SwiperSlide className="h-[600px]">
                <Image
                  src="/img/briflds/bds-inputs.png"
                  alt="Brifl Inputs Component"
                  width={1200}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[600px]">
                <Image
                  src="/img/briflds/bds-button.png"
                  alt="Brifl Buttons Component"
                  width={1200}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[600px]">
                <Image
                  src="/img/briflds/bds-select.png"
                  alt="Brifl Select Component"
                  width={1200}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[600px]">
                <Image
                  src="/img/briflds/bds-controls.png"
                  alt="Brifl Controls Component"
                  width={1200}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[600px]">
                <Image
                  src="/img/briflds/bds-nav.png"
                  alt="Brifl Navigation Component"
                  width={1200}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[600px]">
                <Image
                  src="/img/briflds/bds-banner.png"
                  alt="Brifl Banner Component"
                  width={1200}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[600px]">
                <Image
                  src="/img/briflds/bds-empty.png"
                  alt="Brifl Empty State Component"
                  width={1200}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={20}
              slidesPerView={7}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-thumbs"
            >
              <SwiperSlide>
                <Image
                  src="/img/briflds/bds-inputs.png"
                  alt="Brifl Inputs Component"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/briflds/bds-button.png"
                  alt="Brifl Buttons Component"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/briflds/bds-select.png"
                  alt="Brifl Select Component"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/briflds/bds-controls.png"
                  alt="Brifl Controls Component"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/briflds/bds-nav.png"
                  alt="Brifl Navigation Component"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/briflds/bds-banner.png"
                  alt="Brifl Banner Component"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/briflds/bds-empty.png"
                  alt="Brifl Empty State Component"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <SectionTitle title="Reflections & Learnings" />
        <div className="SectionContent font-normal mx-16 my-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            This project allowed me to understand the requirements for designing a modern, user-friendly, customizable, interactive, and responsive design system.
          </p>
          <br />
          <ul className="list-disc pl-8 space-y-1 text-left">
            <li>
              When I first began designing this system, I was unfamiliar with Figma&apos;s advanced auto-layout features, which made some components less structured than they could have been.
            </li>
            <li>
              The system lacks the modern component property structure (booleans, strings, nested instances) introduced later in Figma.
            </li>
            <li>
              After this project, I began learning about tokenization (for color, text, spacing, etc.) to future-proof design systems.
            </li>
          </ul>
        </div>

        <SectionTitle title="Would you like to try Figma Prototype?" className="bg-pink-200" />
        <div className="FigmaFrame flex flex-col mx-8 my-8 items-center justify-center border border-stone-900 rounded-lg w-auto h-full gap-4">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="600"
            src="https://embed.figma.com/proto/aMOKQQLXwtObAXD8UFikdV/brifl-Design-System?page-id=1%3A7&node-id=1-27&viewport=1130%2C1553%2C0.36&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A27&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>

        <ThankYou
          message="Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it."
          exploreBlocks={[
            <Link key="jotform-logbook" href="/ideas/jotform-logbook" className="flex-1 h-full">
              <div className="SectionBlock h-full p-6 flex flex-col justify-start items-start gap-2 cursor-pointer bg-orange-100 hover:bg-orange-200 transition border-b lg:border-r lg:border-b-0 border-stone-900">
                <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                  Jotform Logbook
                </div>
                <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                  An internal tool for better company awareness
                </div>
              </div>
            </Link>,
            <Link key="kroma" href="/product/kroma" className="flex-1 h-full">
              <div className="SectionBlock h-full p-6 bg-pink-100 flex flex-col justify-start items-start gap-2 cursor-pointer hover:bg-pink-200 transition">
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
              state: "idle",
              to: "https://www.behance.net/gallery/140029891/brifl-design-system",
              className: "h-full hover:bg-blue-100",
            },
            {
              icon: <Image src="/img/dribbble.svg" alt="Dribbble" width={24} height={24} />,
              state: "idle",
              to: "https://dribbble.com/shots/19824696-brifl-Design-System",
              className: "h-full hover:bg-pink-100 border-r-0",
            },
          ]}
        />
        <Footer />
      </div>
    </div>
  );
}
