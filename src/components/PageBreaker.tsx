import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

type PageBreakerProps = {
  sectionNumber: number;
  sectionTitle: string;
  children?: React.ReactNode;
  className?: string;
};

const PageBreaker: React.FC<PageBreakerProps> = ({
  sectionNumber,
  sectionTitle,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const formattedSectionNumber =
    sectionNumber < 10 ? `0${sectionNumber}` : sectionNumber;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="PageBreaker">
      <div
        className={`PageBreakerTop flex w-full h-20 px-10 py-2 border-b border-stone-900 flex-col justify-center items-start group cursor-pointer ${
          isOpen
            ? "bg-stone-800 hover:bg-stone-900"
            : "bg-amber-50 hover:bg-stone-800"
        }`}
        onClick={toggleOpen}
      >
        <div className="flex w-full justify-start items-center gap-4">
          <div
            className={`w-10 h-[38px] ${
              isOpen ? "text-amber-50" : "text-stone-900"
            } group-hover:text-amber-50 text-2xl font-sans font-medium leading-[34px]`}
          >
            {formattedSectionNumber}
          </div>
          <div
            className={`flex-grow text-left h-[38px] ${
              isOpen ? "text-amber-50" : "text-stone-900"
            } group-hover:text-amber-50 text-2xl font-sans font-normal leading-[34px] tracking-wide`}
          >
            {sectionTitle}
          </div>
          <div className="w-10 h-10 flex justify-center items-center">
            {isOpen ? (
              <KeyboardArrowUpRoundedIcon className="text-amber-50 group-hover:text-amber-50" />
            ) : (
              <KeyboardArrowDownRoundedIcon className="text-stone-900 group-hover:text-amber-50" />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`PageBreakerBottom flex w-full px-8 py-6 bg-teal-50 border-b border-stone-900 flex-col justify-center items-start font-sans text-lg ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default PageBreaker;
