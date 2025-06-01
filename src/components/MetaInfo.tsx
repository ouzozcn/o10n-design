'use client';

import React from "react";

export interface MetaInfoProps {
  title?: string;
  firstMeta?: string;
  secondMeta?: string;
  thirdMeta?: string;
  fourthMeta?: string;
  fifthMeta?: string;
}

export const MetaInfo: React.FC<MetaInfoProps> = ({
  title,
  firstMeta,
  secondMeta,
  thirdMeta,
  fourthMeta,
  fifthMeta,
}) => {
  const metaItems = [firstMeta, secondMeta, thirdMeta, fourthMeta, fifthMeta].filter(Boolean);

  return (
    <div className="flex flex-col gap-1 justify-start items-center md:items-start">
      {title && (
        <div className="text-stone-600 text-base font-bold font-sans">
          {title}
        </div>
      )}
      {metaItems.map((meta, index) => (
        <div key={index} className="text-stone-900 text-base font-normal font-sans">
          {meta}
        </div>
      ))}
    </div>
  );
};

export default MetaInfo;
