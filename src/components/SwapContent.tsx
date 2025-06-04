'use client';

import React from "react";

interface SwapContentProps {
  className?: string;
  label?: string;
}

const SwapContent: React.FC<SwapContentProps> = ({ 
  label,
  className = "" 
}) => {
  const containerClasses = [
    "w-full h-full px-16 py-28",
    "bg-cyan-200 rounded-2xl border border-cyan-600",
    "flex-col justify-center items-center gap-2 inline-flex",
    "overflow-hidden",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      {label && (
        <p className="self-stretch text-center text-cyan-950 text-2xl font-normal font-sans">
        {label}
        </p>
      )}
    </div>
  );
};

export default SwapContent;
