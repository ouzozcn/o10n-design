'use client';

import React from "react";
import Link from "next/link";

export interface MenuItemProps {
  title: string;
  svg?: React.ReactNode;
  className?: string;
  to?: string;
  titleClassName?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, svg, className, to, titleClassName }) => {
  const content = (
    <div
      className={`w-full min-h-[200px] p-8   lg:p-12 bg-neutral hover:bg-amber-200 border-b border-r border-stone-900 flex flex-col h-full justify-between ${
        className?.includes("flex-1") ? "!min-h-0 !p-6 h-full" : ""
      } ${className}`}
    >
      <div className="flex items-start justify-start">{svg}</div>
      <div
        className={`text-stone-900 font-sans font-medium self-start text-left ${
          className?.includes("flex-1") ? "text-xl" : "text-xl lg:text-2xl"
        } ${titleClassName}`}
      >
        {title}
      </div>
    </div>
  );

  if (to) {
    return (
      <Link href={to} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default MenuItem;
