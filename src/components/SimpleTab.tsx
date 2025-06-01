'use client';

import React from "react";
import Link from "next/link";

export interface SimpleTabProps {
  state: "idle" | "hover" | "disabled";
  icon?: React.ReactNode;
  to?: string;
  className?: string;
}

const iconClasses = {
  idle: "text-stone-900",
  hover: "text-amber-900",
  disabled: "text-stone-500",
};

const isExternal = (url?: string) => url && /^https?:\/\//.test(url);

const SimpleTab: React.FC<SimpleTabProps> = ({
  state,
  icon,
  to,
  className,
}) => {
  const content = (
    <div
      className={`flex items-center justify-center w-12 h-12 ${iconClasses[state]}`}
    >
      {icon}
    </div>
  );

  if (!to) {
    return (
      <div
        className={`relative flex w-full h-20 items-center justify-center border-r border-stone-900 hover:bg-amber-200 ${className}`}
      >
        {content}
      </div>
    );
  }

  if (isExternal(to)) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex w-full h-20 items-center justify-center border-r border-stone-900 hover:bg-amber-200 ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={to}
      className={`relative flex w-full h-20 items-center justify-center border-r border-stone-900 hover:bg-amber-200 ${className}`}
    >
      {content}
    </Link>
  );
};

export default SimpleTab;
