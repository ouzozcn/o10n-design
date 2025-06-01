'use client';

import React from "react";

interface TopDividerProps {
  className?: string;
}

const TopDivider: React.FC<TopDividerProps> = ({ className = "" }) => {
  const containerClasses = [
    "w-full",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses} role="separator" aria-hidden="true">
      <div className="text-stone-900 text-lg text-center font-sans font-normal h-10 border-b border-stone-900" />
    </div>
  );
};

export default TopDivider;
