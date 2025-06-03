'use client';

import React from "react";

interface SectionTitleProps {
  title: string;
  startIcon?: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  startIcon,
  className = "",
}) => {
  const containerClasses = [
    "flex w-full h-20 bg-teal-100",
    "border-t border-b border-stone-900",
    "justify-center items-center gap-2",
    "transition-all duration-300",
    className
  ].filter(Boolean).join(" ");

  return (
    <header className={containerClasses}>
      {startIcon && (
    <div
          className="text-center text-stone-800 text-2xl font-sans font-medium"
          aria-hidden="true"
    >
        {startIcon}
      </div>
      )}
      <h2 className="text-center text-stone-800 text-2xl font-sans font-medium">
        {title}
      </h2>
    </header>
  );
};

export default SectionTitle;
