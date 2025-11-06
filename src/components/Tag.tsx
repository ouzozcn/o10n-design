'use client';

import Link from 'next/link';
import React from 'react';

export interface TagProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type:
    | 'outline'
    | 'lime'
    | 'amber'
    | 'red'
    | 'teal'
    | 'purple'
    | 'emerald'
    | 'violet'
    | 'indigo'
    | 'pink'
    | 'rose';
  className?: string;
  to?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const sizeClasses = {
  small: 'px-2 py-1 text-xs',
  medium: 'px-3 py-2 text-sm',
  large: 'px-4 py-3 text-base',
} as const;

const typeClasses = {
  outline:
    'bg-transparent rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  lime: 'bg-lime-100 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  amber:
    'bg-amber-100 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  red: 'bg-red-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  teal: 'bg-teal-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  purple:
    'bg-purple-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  emerald:
    'bg-emerald-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  violet:
    'bg-violet-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  indigo:
    'bg-indigo-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  pink: 'bg-pink-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
  rose: 'bg-rose-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex',
} as const;

const Tag: React.FC<TagProps> = ({
  label,
  startIcon,
  endIcon,
  size,
  type,
  className = '',
  to,
  target,
}) => {
  const classes = [
    'min-h-[34px] w-auto px-4 py-2 inline-flex items-center justify-center rounded',
    sizeClasses[size],
    typeClasses[type],
    'font-sans',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {startIcon && (
        <span className="mr-2" aria-hidden="true">
          {startIcon}
        </span>
      )}
      <span>{label}</span>
      {endIcon && (
        <span className="ml-2" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        href={to}
        target={target || '_self'}
        className={classes}
        role="status"
        aria-label={label}
      >
        {content}
      </Link>
    );
  }

  return (
    <span className={classes} role="status" aria-label={label}>
      {content}
    </span>
  );
};

export default Tag;
