'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  startIcon?: React.ReactNode;
  className?: string;
  sectionID?: string;
  zIndex?: number;
  color?:
    | 'lime'
    | 'pink'
    | 'amber'
    | 'teal'
    | 'emerald'
    | 'red'
    | 'cyan'
    | 'orange'
    | 'neutral'
    | 'violet';
}
const colorClasses = {
  lime: 'bg-lime-100',
  pink: 'bg-pink-100',
  amber: 'bg-amber-100',
  teal: 'bg-teal-100',
  emerald: 'bg-emerald-100',
  red: 'bg-red-100',
  cyan: 'bg-cyan-100',
  orange: 'bg-orange-100',
  neutral: 'bg-amber-50',
  violet: 'bg-violet-100',
};
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  startIcon,
  className = '',
  color = 'teal',
  sectionID,
  zIndex = 1,
}) => {
  const containerClasses = [
    'flex w-full h-20',
    colorClasses[color],
    'border-t border-b border-stone-900',
    'justify-center items-center gap-2',
    'transition-all duration-300',
    className,
    className,
    sectionID ? `section-${sectionID}` : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <header className={containerClasses} style={{ zIndex: zIndex }}>
      {startIcon && (
        <div
          className="text-center text-stone-800 text-2xl font-sans font-medium"
          aria-hidden="true"
        >
          {startIcon}
        </div>
      )}
      <h2 className="text-center text-stone-800 text-2xl font-sans font-medium">{title}</h2>
    </header>
  );
};

export default SectionTitle;
