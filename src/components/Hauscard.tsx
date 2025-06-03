'use client';

import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { TagProps } from "./Tag";

type HauscardProps = {
  title: string;
  children?: React.ReactNode;
  hasBackgroundImage?: boolean;
  backgroundImageUrl?: string;
  tags?: TagProps[];
};

const Hauscard: React.FC<HauscardProps> = ({
  title,
  children,
  hasBackgroundImage = false,
  backgroundImageUrl,
  tags = [],
}) => {
  return (
    <div className="relative w-full min-h-[400px] h-[400px] flex flex-col justify-end items-start gap-2">
      {hasBackgroundImage && backgroundImageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImageUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      {!hasBackgroundImage && (
        <div className="absolute inset-0 bg-red-200" />
      )}
      <div className="relative z-10 w-full">
      <div className="bg-amber-50 w-full">{children}</div>
      <div className="h-[147px] p-8 flex flex-col justify-start items-start gap-2">
          <h2 className="w-full text-wrap text-stone-900 text-[32px] font-sans font-normal">
          {title}
          </h2>
          <div className="flex flex-wrap justify-start items-center gap-4">
          {tags.map((tagProps, index) => (
            <Tag key={index} {...tagProps} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hauscard;
