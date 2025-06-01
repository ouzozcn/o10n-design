import React from "react";
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
    <div
      className={`min-w-[695px] min-h-[400px] h-[400px] flex flex-col justify-end items-start gap-2  ${
        hasBackgroundImage ? "" : "bg-red-200"
      }`}
      style={
        hasBackgroundImage && backgroundImageUrl
          ? {
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="bg-amber-50 w-full">{children}</div>
      <div className="h-[147px] p-8 flex flex-col justify-start items-start gap-2">
        <div className="w-full text-wrap text-stone-900 text-[32px] font-sans font-normal">
          {title}
        </div>
        <div className="flex justify-start items-center gap-4">
          {tags.map((tagProps, index) => (
            <Tag key={index} {...tagProps} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hauscard;
