'use client';

import React from 'react';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../styles/custom.css';

export interface TextLinkProps {
  label: string;
  to?: string;
  className?: string;
  style?: 'primary' | 'secondary';
}

const styleClasses = {
  primary: 'font-black',
  secondary: 'font-normal',
};

const isExternal = (url?: string) => url && /^https?:\/\//.test(url);

const TextLink: React.FC<TextLinkProps> = ({ label, to = '/', className, style = 'secondary' }) => {
  const content = <>{label}</>;

  if (isExternal(to)) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center text-stone-900 hover:text-blue-900 hover:underline font-sans text-lg gap-1 ${styleClasses[style]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={to}
      className={`flex items-center text-stone-900 hover:text-blue-900 hover:underline font-sans text-lg gap-1 ${styleClasses[style]} ${className}`}
    >
      {content}
    </Link>
  );
};

export default TextLink;
