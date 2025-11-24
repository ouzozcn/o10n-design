'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/Menu';
import { Footer } from '@/components/Footer';
import ThankYou from '@/components/ThankYou';
import TopDivider from '@/components/TopDivider';
import SectionTitle from '@/components/SectionTitle';
import MetaInfo from '@/components/MetaInfo';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '@/styles/swiper.css';

export default function JotformLogbookClient() {
  const [showSecondHero, setShowSecondHero] = useState(false);
  const [sketchThumbsSwiper, setSketchThumbsSwiper] = useState<SwiperType | null>(null);
  const [uiThumbsSwiper, setUiThumbsSwiper] = useState<SwiperType | null>(null);

  const toggleHero = () => {
    setShowSecondHero(!showSecondHero);
  };

  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">
            Jotform Logbook: An internal tool for better company awareness
          </h1>
        </div>
      </div>

      <div
        className="PageImage flex w-full items-center justify-center p-8 h-60 md:h-auto bg-cyan-50 border-b border-stone-900 cursor-pointer"
        onClick={toggleHero}
      >
        <Image
          src={showSecondHero ? '/img/hero/hero-logbook2.svg' : '/img/hero/hero-logbook.svg'}
          alt="Jotform Logbook Hero"
          width={1200}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      <div className="PageContent flex flex-col w-full h-full gap-4 p-8 border-b border-stone-900">
        <div className="PageMeta flex flex-col w-full h-full gap-2">
          <div className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans">
            Jotform Logbook
          </div>
          <div className="PageDescription px-12 py-2 items-center justify-center text-center text-stone-900 text-lg font-normal font-sans">
            An internal tool for better company awareness
          </div>
          <div className="MetaInfoRow flex flex-col md:flex-row w-full px-24 py-4 gap-4 lg:gap-24 justify-center items-center md:items-start">
            <MetaInfo title="My Role" firstMeta="Product Designer" />
            <MetaInfo title="Timeline" firstMeta="October 2024" />
            <MetaInfo title="Toolstack" firstMeta="Figma" />
          </div>
        </div>
      </div>

      <div className="BodyContainer flex flex-col gap-0 font-sans">
        <div className="p-4 md:px-16 md:py-8 text-xl text-center font-medium text-stone-900">
          Jotform Logbook is an internal tool designed to enhance company awareness and
          collaboration. It allows teams to log their work in progress (WIP) and completed works
          (LOG), track affected products, collaborate with other teams, and provide rich-text
          descriptions and screenshots. The tool is designed to reduce duplicated work, improve
          visibility across departments, and facilitate smoother collaboration.
        </div>

        <SectionTitle title="Problem Discovery" />
        <div className="SectionContent font-normal p-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            At Jotform, we face a common challenge seen in many large multi-product tech companies.
            With over 600 employees and a broad range of products — including Form, AI Agent,
            Workflow, E-Sign, and App — multiple teams are working simultaneously on the same
            platform
          </p>
          <br />
          <p>
            Over time, I identified several inefficiencies in how work is communicated and tracked:
          </p>
          <br />
          <ul className="list-disc pl-2 space-y-1 text-left">
            <li>
              <p>
                Teams were often developing <b>similar or overlapping</b> features without knowing
                it.
              </p>
            </li>
            <li>
              <p>
                <b>Email loops were the primary method of announcements </b>, which proved
                ineffective — especially in a workplace where many white-collar professionals tend
                to avoid reading non-essential emails.
              </p>
            </li>
            <li>
              <p>
                <b>Cross-team collaborations were increasing</b>, yet there was no clear way to
                document or track these shared efforts across teams.
              </p>
            </li>
          </ul>
        </div>

        <SectionTitle title="Solution Approach" />
        <div className="SectionContent font-normal p-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
          <p>
            To address these challenges, I initiated the design of an internal tool called{' '}
            <b>Jotform Logbook</b> — a centralized, searchable space where teams can:
          </p>
          <br />
          <ul className="list-disc pl-2 space-y-1 text-left">
            <li>
              <b>Log works in progress (WIP)</b> and completed <b>Logs (LOG)</b>
            </li>
            <li>
              Mention <b>affected products</b>
            </li>
            <li>
              Tag <b>collaborating teams or individuals</b>
            </li>
            <li>
              Add <b>rich-text descriptions and screenshots</b>
            </li>
            <li>
              Provide <b>direct links</b> to relevant resources (GitHub, Storybook, Figma, internal
              tools, etc.)
            </li>
            <li>
              <b>Search and filter</b> through all logs for transparency and alignment
            </li>
          </ul>
          <br />
          <p>
            This tool is designed to reduce duplicated work, improve visibility across departments,
            and facilitate smoother collaboration.
          </p>

          <div className="flex w-full items-center justify-center">
            <div className="ImageSlider w-full items-center justify-center lg:max-w-4xl m-4">
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: sketchThumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="showcase-swiper rounded-lg mb-4"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <SwiperSlide key={num} className="h-[600px]">
                    <Image
                      src={`/img/logbook/sketch-logbook-${num}.png`}
                      alt={`Jotform Logbook Sketch ${num}`}
                      width={1200}
                      height={800}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setSketchThumbsSwiper}
                spaceBetween={20}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="showcase-thumbs w-full items-center justify-center"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <SwiperSlide key={num}>
                    <Image
                      src={`/img/logbook/sketch-logbook-${num}.png`}
                      alt={`Jotform Logbook Thumb ${num}`}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover rounded cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle title="How It Works" />
      <div className="SectionContent font-sans p-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
        <p>The design process was iterative, with frequent feedback loops and design iterations.</p>
      </div>

      <div className="SectionContent flex flex-col w-auto font-sans items-center justify-center text-stone-900 text-lg gap-4">
        <div className="SectionBlocksContainer flex flex-col lg:flex-row md:w-full gap-0 flex-1 h-[650px] border-t border-stone-900">
          <div className="SectionBlock flex-1 p-16 bg-lime-50 flex flex-col justify-start gap-2 border-b lg:border-r border-stone-900">
            <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
              <b>1.</b> Work In Progress (WIP) Entry
            </div>
            <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
              <ul className="list-disc pl-4 space-y-1 text-left">
                <li>When a team begins a new feature, they log it as a WIP.</li>
                <li>
                  This includes: description, affected products, collaborators, screenshots, and
                  URLs.
                </li>
                <li>
                  A system email is automatically sent to relevant people, linking directly to the
                  log entry.
                </li>
              </ul>
            </div>
          </div>

          <div className="SectionBlock flex-1 p-16 bg-red-50 flex flex-col justify-start items-start gap-2 border-b lg:border-r border-stone-900">
            <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
              <b>2.</b> Completed Work (LOG) Entry
            </div>
            <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
              <ul className="list-disc pl-4 space-y-1 text-left">
                <li>Once the work is complete, the team logs it as a final entry.</li>
                <li>Similar fields apply, but often with more finalized context and outcomes.</li>
                <li>This entry is also emailed internally for visibility.</li>
              </ul>
            </div>
          </div>

          <div className="SectionBlock flex-1 p-16 bg-purple-50 flex flex-col justify-start items-start gap-2 border-b lg:border-r-0 border-stone-900">
            <div className="self-stretch justify-center text-stone-900 text-lg font-medium font-sans leading-normal">
              <b>3.</b> Search & Discover
            </div>
            <div className="self-stretch justify-center text-stone-900 text-md font-normal font-sans">
              <ul className="list-disc pl-4 space-y-1 text-left">
                <li>
                  Employees can browse all WIP and LOG entries via tags, filters, collaborators, and
                  product mentions.
                </li>
                <li>
                  This keeps everyone informed without the noise of excessive meetings or emails.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="SectionContent font-sans p-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
        <div className="flex w-full items-center justify-center">
          <div className="ImageSlider w-full items-center justify-center lg:max-w-4xl m-4">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: uiThumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-swiper rounded-lg mb-4"
            >
              {[1, 2, 3, 4].map(num => (
                <SwiperSlide key={num} className="h-[600px]">
                  <Image
                    src={`/img/logbook/ui-logbook-${num}.png`}
                    alt={`Jotform Logbook UI ${num}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setUiThumbsSwiper}
              spaceBetween={20}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="showcase-thumbs"
            >
              {[1, 2, 3, 4].map(num => (
                <SwiperSlide key={num}>
                  <Image
                    src={`/img/logbook/ui-logbook-${num}.png`}
                    alt={`Jotform Logbook UI Thumb ${num}`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover rounded cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <SectionTitle title="Result" />
      <div className="SectionContent font-sans p-4 md:px-16 md:py-8 items-center justify-center text-start text-stone-900 text-lg gap-4">
        <p>
          The Jotform Logbook fosters a culture of{' '}
          <b>transparency, accountability, and cross-team awareness.</b> It serves as a living
          documentation layer between teams, aimed at reducing friction and improving product
          development velocity. In a fast-moving organization with an expanding array of products
          and contributors, such internal infrastructure is essential for scalability.
        </p>
        <br />
        <p>
          This project was initiated and designed by me, addressing pain points I encountered
          firsthand. From problem discovery to solution design, I led the product thinking and UX
          design, collaborating closely with engineering stakeholders to plan the implementation.
          While <b>we did not build the final product,</b> this initiative reflects my commitment to
          solving real internal challenges through lightweight yet scalable design principles.
        </p>
      </div>

      <ThankYou
        message="Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it."
        exploreBlocks={[
          <Link href="/case-study/jotform-2fa" key="2fa" className="flex-1 h-full">
            <div className="SectionBlock h-full p-6 flex flex-col justify-start items-start gap-2 cursor-pointer hover:bg-orange-200 transition sm:border-b lg:border-b-0 lg:border-r border-stone-900">
              <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                Jotform 2FA
              </div>
              <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                A simple and secure 2FA solution for Jotform
              </div>
            </div>
          </Link>,
          <Link href="/product/kroma" key="kroma" className="flex-1 h-full">
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
  );
}
