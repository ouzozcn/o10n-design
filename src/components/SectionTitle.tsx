import React from "react";

type SectionTitleProps = {
  title: string;
  startIcon?: React.ReactNode;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  startIcon,
  className,
}) => {
  return (
    <div
      className={`flex w-full h-20 bg-teal-100 border-t border-b border-stone-900 justify-center items-center gap-2 transition-all duration-300 ${className}`}
    >
      <div className="text-center text-stone-800 text-2xl font-sans font-medium">
        {startIcon}
      </div>
      <div className="text-center text-stone-800 text-2xl font-sans font-medium  ">
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;
