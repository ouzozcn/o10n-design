'use client';

import React from 'react';
import Link from 'next/link';

export type IconButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  icon: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({ type, size, icon, onClick, to, className }) => {
  const typeClasses = {
    primary:
      'w-[58px] h-[58px] p-4 bg-stone-800 hover:bg-stone-900 text-neutral-50 rounded-md justify-center items-center inline-flex',
    secondary:
      'w-[58px] h-[58px] p-4 rounded-md border-2 text-stone-900 hover:bg-amber-100 border-stone-900 justify-center items-center inline-flex',
    tertiary: 'w-[58px] h-[58px] p-4 justify-center hover:bg-amber-200 items-center inline-flex',
  };

  const sizeClasses = {
    small: 'p-1',
    medium: 'p-2',
    large: 'p-3',
  };

  const commonClassNames = `rounded-full flex items-center justify-center ${typeClasses[type]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link href={to} className={commonClassNames}>
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonClassNames}>
      {icon}
    </button>
  );
};

export default IconButton;
