'use client';

import React, { useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import MetaInfo from "@/components/MetaInfo";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ThankYou from "@/components/ThankYou";
import Button from "@/components/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LanguageIcon from "@mui/icons-material/Language";
import ContentCard from "@/components/ContentCard";
import PaletteIcon from "@mui/icons-material/Palette";
import TopDivider from "@/components/TopDivider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "@/styles/swiper.css";

export default function Kroma() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    console.info(
      "Welcome to Kroma 🎨 A free tool for designers and developers to upload UI screens and instantly preview how they appear to users with various types of color vision deficiency. No paywalls, no upload limits. Built to promote accessible, inclusive design."
    );
  }, []);

  const cardContents: Array<{
    title: string;
    content: string;
    icon?: React.ReactNode;
    color: "lime" | "pink" | "amber" | "teal" | "emerald" | "red" | "cyan" | "orange";
  }> = [
    {
      title: "Protanomaly",
      icon: <PaletteIcon />,
      content: "Reduced sensitivity to red light; reds appear weaker and more greenish.",
      color: "red",
    },
    {
      title: "Deuteranomaly",
      icon: <PaletteIcon />,
      content: "Reduced sensitivity to green light; greens appear weaker and more red-like. Most common type.",
      color: "lime",
    },
    {
      title: "Protanopia",
      icon: <PaletteIcon />,
      content: "No red cone cells; reds appear dark and are often confused with black or dark gray.",
      color: "orange",
    },
    {
      title: "Tritanomaly",
      icon: <PaletteIcon />,
      content: "Reduced sensitivity to blue light; blues and greens are harder to distinguish. Very rare.",
      color: "cyan",
    },
    {
      title: "Deuteranopia",
      icon: <PaletteIcon />,
      content: "No green cone cells; greens and reds are hard to tell apart.",
      color: "pink",
    },
    {
      title: "Tritanopia",
      icon: <PaletteIcon />,
      content: "No blue cone cells; blues and yellows are hard to distinguish. Very rare.",
      color: "emerald",
    },
    {
      title: "Monochromacy",
      icon: <PaletteIcon />,
      content: "Complete color blindness; only shades of gray are seen.",
      color: "pink",
    },
    {
      title: "Achromatopsia",
      icon: <PaletteIcon />,
      content: "Total absence of color vision, often with light sensitivity and poor visual acuity.",
      color: "amber",
    },
  ];

  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            Kroma | Color Blindness Accessibility Checker for User Interfaces
          </h1>
          <Button
            label="Use Kroma"
            type="secondary"
            size="medium"
            endIcon={<ArrowOutwardIcon />}
            to="https://usekroma.com/"
            target="_blank"
          />
        </div>
      </div>
      <div className="PageImage flex p-8 w-full h-60 md:h-auto bg-cyan-50 border-b border-stone-900 justify-center items-center gap-4">
        <Image
          src="/img/hero/hero-kroma.svg"
          alt="Kroma Hero"
          width={1200}
          height={600}
          className="drop-shadow-lg"
        />
      </div>
      <div className="PageContent flex flex-col w-full h-full gap-4 p-8 border-b border-stone-900">
        <div className="PageMeta flex flex-col w-full h-full gap-2">
          <div className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans">
            Kroma
          </div>
          <div className="PageDescription px-12 py-2 items-center justify-center text-center text-stone-900 text-lg font-normal font-sans">
            Color Blindness Accessibility Checker for User Interfaces
          </div>
          <div className="MetaInfoRow flex flex-col md:flex-row w-full px-24 py-4 gap-4 lg:gap-24 justify-center items-center md:items-start">
            <MetaInfo title="My Role" firstMeta="Product Designer" />
            <MetaInfo
              title="Team"
              firstMeta="1 Product Designer"
              secondMeta="1 Front-end Dev"
            />
            <MetaInfo title="Timeline" firstMeta="April - July 2023" />
            <MetaInfo
              title="Toolstack"
              firstMeta="Figma"
              secondMeta="React Vite"
            />
          </div>
        </div>
      </div>

      <div className="BodyContainer flex flex-col gap-0 font-sans">
        <div className="m-8 text-xl text-center font-medium text-stone-900">
          Kroma is a free and intuitive color blindness accessibility checker designed for product and UI/UX designers. It allows users to upload their UI screens and instantly see how they appear to individuals with various types of color vision deficiencies. By removing paywalls and upload limits, Kroma aims to promote accessible design practices within the design community, ensuring that visual communication is inclusive for everyone.
        </div>

        <SectionTitle title="Problem" />
        <div className="SectionContent font-normal px-4 py-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            As a product designer, I often struggled to validate how my UI designs appeared to users with color blindness. While existing tools like Stark and AXE Tools offered simulation features, they were usually locked behind paywalls or had limitations like 10-screen caps on free plans. I needed something faster, more accessible, and limitless — not just for myself, but for the broader design community.
          </p>
        </div>

        <SectionTitle title="Idea" />
        <div className="SectionContent font-normal px-4 py-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            So I teamed up with a developer friend and built Kroma, a free and simple color blindness accessibility checker. The idea was to provide an easy way for designers to upload their UI screens and see how they look for people with different types of color vision deficiency — without any paywalls or upload limits.
          </p>
        </div>

        <SectionTitle title="Users & Research" />
        <div className="flex flex-col w-full lg:flex-row gap-0">
          <div className="SectionContent w-full font-normal px-4 py-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 font-sans text-lg gap-4">
            <p>Before building Kroma, I researched various types of color blindness and discovered:</p>
            <br />
            <ul className="list-disc space-y-2">
              <li>Color blindness affects approximately 1 in 12 men (8%) and 1 in 200 women globally.</li>
              <li>Protanomaly and deuteranomaly are among the most common forms, followed by tritanomaly and total color blindness.</li>
              <li>Current design trends rely heavily on color for visual communication, often ignoring accessibility.</li>
            </ul>
          </div>
          <div className="PageBreakerContainer w-full flex flex-col border-l border-stone-900 gap-0">
            <div className="SectionBlock w-full p-6 bg-lime-50 flex flex-col justify-start gap-2 border-b border-stone-900">
              <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                1. Product Designers
              </div>
              <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                <p className="mb-4">
                  Product designers often work on multi-platform experiences where visual consistency and clarity are crucial. Kroma helps them ensure that UI elements (like buttons, alerts, and graphs) remain distinguishable and functional for color-blind users.
                </p>
              </div>
            </div>
            <div className="SectionBlock w-full p-6 bg-pink-50 flex flex-col justify-start gap-2 border-b border-stone-900">
              <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                2. UX/UI Designers
              </div>
              <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                <p className="mb-4">
                  These designers are responsible for creating visually intuitive and user-friendly interfaces. Kroma allows them to spot potential accessibility issues early in the design process, preventing poor user experiences for people with vision impairments.
                </p>
              </div>
            </div>
            <div className="SectionBlock w-full p-6 bg-amber-50 flex flex-col justify-start gap-2 border-b border-stone-900">
              <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                3. Design Educators
              </div>
              <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                <p className="mb-4">
                  Instructors teaching accessibility, human-centered design, or visual communication can use Kroma as a classroom tool to demonstrate the real-world impact of color choices on usability.
                </p>
              </div>
            </div>
            <div className="SectionBlock w-full p-6 bg-teal-50 flex flex-col justify-start gap-2">
              <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                4. Accessibility Testers
              </div>
              <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                <p className="mb-4">
                  These professionals are tasked with auditing and ensuring products meet accessibility standards (like WCAG). Kroma provides a fast and free way to visually verify that color contrast and UI clarity are sufficient for users with various color vision deficiencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SectionTitle title="What We Built?" />
        <div className="SectionContent flex flex-col md:flex-row font-normal px-4 py-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <div className="flex flex-col w-full gap-2">
            <p>In just three weeks, we released the MVP of Kroma with the following features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upload a single UI screen</li>
              <li>Automatically generate and download simulations for: Protanomaly, Deuteranomaly, Protanopia, Tritanomaly, Deuteranopia, Tritanopia, Monochromacy, and Achromatopsia.</li>
            </ul>
          </div>
          <div className="ColorCards flex w-full m-4">
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
                      className="h-[200px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <SectionTitle title="What's Next?" />
        <div className="SectionContent font-normal m-8 items-center justify-center text-center text-stone-900 text-lg gap-4">
          <p>We have a roadmap in place for upcoming features:</p>
        </div>
        <div className="BlockContainer flex flex-col md:flex-row h-auto font-normal items-start justify-center text-start text-stone-900 text-lg border-t border-stone-900">
          <div className="SectionBlock w-full h-full flex-1 p-6 bg-lime-50 flex flex-col justify-start gap-2 border-r border-b lg:border-b-none border-stone-900">
            <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
              Phase 2:
            </div>
            <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
              <ul className="list-disc pl-6 space-y-2">
                <li>Google login</li>
                <li>Personal dashboard</li>
                <li>Bulk upload</li>
                <li>Paste image via URL</li>
              </ul>
            </div>
          </div>
          <div className="SectionBlock w-full flex-1 p-6 bg-pink-50 flex flex-col h-full justify-start gap-2">
            <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
              Phase 3:
            </div>
            <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
              <ul className="list-disc pl-6 space-y-2">
                <li>Educational guides and best practices for accessible UI design</li>
                <li>Resources for designing in monochrome modes</li>
              </ul>
            </div>
          </div>
        </div>

        <SectionTitle title="Outcome: What I have learned?" />
        <div className="SectionContent font-normal px-4 py-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Designing for accessibility is not just a feature—it&apos;s a responsibility.</li>
            <li>Many designers underestimate how many users are affected by visual impairments.</li>
            <li>Current design aesthetics often ignore color accessibility; designing with fewer colors or offering monochrome alternatives can be game-changing.</li>
            <li>Working on this project helped me improve my understanding of front-end development handoff, product scoping, and collaborative iteration.</li>
          </ul>
        </div>

        <ThankYou
          message="Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it."
          exploreBlocks={[
            <Link key="jotform-logbook" href="/ideas/jotform-logbook" className="flex-1 h-full">
              <div className="SectionBlock h-full p-6 flex flex-col justify-start items-start gap-2 cursor-pointer bg-orange-100 hover:bg-orange-200 transition border-r border-stone-900">
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
              icon: <LanguageIcon />,
              state: "idle",
              to: "https://usekroma.com/",
              className: "h-full hover:bg-blue-100 border-r-0",
            },
          ]}
        />
        <Footer />
      </div>
    </div>
  );
}
