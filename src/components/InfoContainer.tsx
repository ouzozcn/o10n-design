import React from 'react';
import SquareIcon from '@mui/icons-material/Square';
import Link from 'next/link';
import { vi } from 'vitest';
interface InfoContainerProps {
  content: string;
  color:
    | 'lime'
    | 'pink'
    | 'amber'
    | 'teal'
    | 'emerald'
    | 'red'
    | 'cyan'
    | 'orange'
    | 'violet'
    | 'neutral';
  icon?: React.ReactNode;
  className?: string;
  to: string;
  target?: string;
}

const colorClasses = {
  lime: 'bg-lime-50 hover:bg-lime-100',
  pink: 'bg-pink-50 hover:bg-pink-100',
  amber: 'bg-amber-50 hover:bg-amber-100',
  teal: 'bg-teal-50 hover:bg-teal-100',
  emerald: 'bg-emerald-50 hover:bg-emerald-100',
  red: 'bg-red-50 hover:bg-red-100',
  cyan: 'bg-cyan-50 hover:bg-cyan-100',
  orange: 'bg-orange-50 hover:bg-orange-100',
  neutral: 'bg-stone-50 hover:bg-stone-100',
  violet: 'bg-violet-50 hover:bg-violet-100',
};

const InfoContainer: React.FC<InfoContainerProps> = ({
  content,
  icon = <SquareIcon sx={{ fontSize: 24 }} />,
  className,
  color,
  to,
  target,
}) => {
  return (
    <Link href={to} target={target} className="w-full">
      <article
        className={`w-full flex flex-col h-auto border border-stone-900 ${colorClasses[color]} rounded-lg transition-colors duration-200 ${className}`}
      >
        <div className="flex items-center border-stone-900">
          <div
            className="h-auto inline-flex self-stretch items-center justify-center px-4 py-2 border-r border-stone-900"
            aria-hidden="true"
          >
            {icon}
          </div>
          <p className="px-4 py-3 text-stone-900 text-md font-sans">{content}</p>
        </div>
      </article>
    </Link>
  );
};

export default InfoContainer;
