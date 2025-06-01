'use client';

import React, { useEffect } from "react";
import MenuItem from "@/components/MenuItem";
import RowCard from "@/components/RowCard";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Products() {
  useEffect(() => {
    console.info(
      "Greetings, I m Oğuzhan, a product designer that is presently working toward a front-end learning path with the goal of serving as a bridge between developers and designers. "
    );
  }, []);

  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <div className="md:sticky md:top-0 md:z-10 flex flex-col md:flex-row w-auto border-b border-stone-900 bg-theme-primary">
        <MenuItem
          to="/"
          className="flex-1 md:border-b-0 border-r-0 md:border-r border-stone-900 text-center"
          title="Home"
        />
        <MenuItem
          to="/product"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-red-200 hover:bg-red-200 cursor-default"
          title="Products"
        />
        <MenuItem
          to="/case-study"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Case Studies"
        />
        <MenuItem
          to="/ideas"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Ideas"
        />
        <MenuItem
          to="/experiment"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="Experiments"
        />
      </div>

      <div className="PageHero flex flex-col p-8 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Products
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Here are some of the products I&apos;ve worked on.
        </h2>
      </div>

      <div className="PageContent flex flex-col w-full h-full border-stone-900">
        <RowCard
          direction="left"
          cardTitle="Kroma | Color Blindness Accessibility Checker for User Interfaces"
          cardContent="Kroma is a free color accessibility checker for those who works on the user interface. It&apos;s the only free tool which offer limitless color accessibility checks."
          tags={[
            {
              label: "Product",
              type: "red",
              size: "large",
            },
            {
              label: "Accessibility (a11y)",
              type: "outline",
              size: "large",
            },
          ]}
          to="/product/kroma"
          swapContent={
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/img/thumbs/thumb-kroma2.svg"
                alt="Kroma Color Accessibility Checker"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
        />
        <RowCard
          direction="right"
          cardTitle="Brifl Design System"
          cardContent="Allowing users to manage their integrations in one place by building an integration hub which increased user retention by 40% within six months."
          tags={[
            {
              label: "Product",
              type: "red",
              size: "large",
            },
            {
              label: "Design System",
              type: "outline",
              size: "large",
            },
          ]}
          to="/product/brifl-design-system"
          swapContent={
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/img/thumbs/thumb-briflds.svg"
                alt="Brifl Design System"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
          className="border-b-0"
        />
      </div>

      <Footer />
    </div>
  );
}
