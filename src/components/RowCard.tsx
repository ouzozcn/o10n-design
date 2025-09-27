'use client';

import React from 'react';
import Link from 'next/link';
import Tag from './Tag';
import { TagProps } from './Tag';

interface RowCardProps {
  direction: 'right' | 'left';
  cardTitle: string;
  cardContent?: React.ReactNode;
  swapContent?: React.ReactNode;
  tags?: TagProps[];
  onClick?: () => void;
  to?: string;
  className?: string;
}

const RowCard: React.FC<RowCardProps> = ({
  direction,
  cardTitle,
  cardContent,
  swapContent,
  tags = [],
  className,
  to,
}) => {
  const containerClasses = [
    'relative flex flex-col w-full h-auto lg:min-h-[600px] p-12 md:p-16',
    'hover:bg-amber-200 transition-all duration-300',
    'justify-start items-center gap-4 border-b border-stone-900',
    direction === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row',
    'lg:h-140 lg:gap-8',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {swapContent && (
        <div className="flex w-full h-auto justify-center items-center lg:h-full">
          <div className="flex max-w-[320px] md:max-w-[400px] lg:max-w-[480px] max-h-[320px] md:max-h-[400px] lg:max-h-[480px] w-full h-full  items-center justify-center">
            {swapContent}
          </div>
        </div>
      )}
      <div className="flex w-full flex-col justify-start items-start">
        <div className="flex flex-col items-start space-y-3">
          <h2 className="text-stone-900 text-xl font-sans font-normal lg:text-3xl">{cardTitle}</h2>
          {cardContent && (
            <p className="text-stone-900 text-sm font-normal font-sans lg:text-base">
              {cardContent}
            </p>
          )}
          {tags.length > 0 && (
            <div className="flex justify-start items-center gap-2 flex-wrap">
              {tags.map((tagProps, index) => (
                <Tag key={index} {...tagProps} />
              ))}
            </div>
          )}
        </div>
      </div>
      {to && (
        <Link
          href={to}
          className="absolute inset-0 w-full h-full"
          aria-label={`View details for ${cardTitle}`}
        />
      )}
    </div>
  );
};

export default RowCard;
