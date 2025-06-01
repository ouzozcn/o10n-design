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
  return (
    <div className="MetaInfoItem flex flex-col gap-1 justify-start items-center md:items-start">
      <div className="firstMeta text-stone-600 text-base font-bold font-sans">
        {title}
      </div>
      <div className="secondMeta text-stone-900 text-base font-normal font-sans">
        {firstMeta}
      </div>
      <div className="secondMeta text-stone-900 text-base font-normal font-sans">
        {secondMeta}
      </div>
      <div className="thirdMeta text-stone-900 text-base font-normal font-sans">
        {thirdMeta}
      </div>
      <div className="fourthMeta text-stone-900 text-base font-normal font-sans">
        {fourthMeta}
      </div>
      <div className="fifthMeta text-stone-900 text-base font-normal font-sans">
        {fifthMeta}
      </div>
    </div>
  );
};

export default MetaInfo;
