'use client';

import React from "react";
import SimpleTab, { SimpleTabProps } from "./SimpleTab";

export interface ThankYouProps {
  message?: string;
  simpleTabs?: Array<SimpleTabProps>;
  exploreBlocks?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const ThankYou: React.FC<ThankYouProps> = ({
  message = "Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it.",
  simpleTabs = [],
  exploreBlocks,
  className = "",
}) => (
  <section className={`flex flex-col gap-0 w-full h-auto font-sans ${className}`}>
    <div className="flex w-full h-40 p-8 bg-pink-50 hover:bg-pink-100 border-t border-b border-stone-900 justify-center items-center gap-2 transition-all duration-300">
      <p className="text-center text-stone-800 text-xl md:text-2xl font-sans font-medium">
        This story ends here yet the journey continues...
      </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-0 w-full font-sans">
      {/* Thank You Section */}
      <div className="flex-1 flex flex-col border-r border-stone-900">
        <header className="px-8 py-4 bg-lime-100 border-b border-stone-900 flex items-center text-center lg:text-start">
          <h2 className="text-lg text-center lg:text-start font-sans">
            🎉 Thanks for Reading!
          </h2>
        </header>
        <div className="px-6 py-4 text-center lg:text-start text-base font-sans">
          {message}
        </div>
      </div>

      {/* Published On Section */}
      {simpleTabs.length > 0 && (
        <div className="flex-1 min-w-72 border-r border-stone-900 flex flex-col">
          <header className="px-6 py-4 bg-yellow-100 border-t lg:border-t-0 border-b border-stone-900 text-center lg:text-start">
            <h2 className="text-lg text-center lg:text-start font-sans">
              🌍 Also Published On
            </h2>
          </header>
          <div className="flex justify-center items-center h-full min-h-20">
            {simpleTabs.map((tabProps, idx) => (
              <SimpleTab key={idx} {...tabProps} />
            ))}
          </div>
        </div>
      )}

      {/* Explore More Section */}
      {exploreBlocks && (
        <div className="flex-1 flex flex-col lg:min-w-[700px]">
          <header className="px-6 py-4 bg-teal-100 border-b border-t lg:border-t-0 border-stone-900 text-center lg:text-start">
            <h2 className="text-lg text-center lg:text-start font-sans">
              🔍 Explore More
            </h2>
          </header>
          <div className="flex flex-col lg:flex-row text-center lg:text-start">
            {Array.isArray(exploreBlocks)
              ? exploreBlocks.map((block, idx) => (
                  <React.Fragment key={idx}>{block}</React.Fragment>
                ))
              : exploreBlocks}
          </div>
        </div>
      )}
    </div>
  </section>
);

export default ThankYou;
