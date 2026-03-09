'use client';

import React from 'react';
import Link from 'next/link';

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
      className={`Menu__Item w-full   bg-neutral hover:bg-amber-200 border-b border-r border-stone-900 flex flex-col h-full   ${
        className?.includes('flex-1') ? '!min-h-0 !p-6 h-full' : ''
      } ${className}`}
    >
      <div className="Menu__Item__Icon  hidden min-[500px]:flex items-start justify-start">
        {svg}
      </div>
      <div
        className={`Menu__Item__Title text-stone-900 font-sans font-medium  ${
          className?.includes('flex-1') ? 'text-md lg:text-xl' : 'text-md lg:text-2xl'
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
