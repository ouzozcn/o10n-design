import React from "react";
import { Link, To } from "react-router";
import Tag from "./Tag";
import { TagProps } from "./Tag";

interface RowCardProps {
  direction: "right" | "left";
  cardTitle: string;
  cardContent?: string;
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
  return (
    <div
      className={`relative flex flex-col w-full h-auto lg:min-h-[600px] p-12 md:p-16 hover:bg-amber-200 transition-all duration-300 justify-start items-center gap-4 border-b border-stone-900 ${
        direction === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${className} lg:h-140 lg:gap-8`}
    >
      {swapContent && (
        <div className="flex w-full h-auto justify-center items-center lg:h-full">
          {swapContent}
        </div>
      )}
      <div className="flex w-full flex-col justify-start items-start">
        <div className="flex flex-col items-start space-y-3">
          <div className="text-stone-900 text-xl font-sans font-normal lg:text-3xl">
            {cardTitle}
          </div>
          <div className="text-stone-900 text-sm font-normal font-sans lg:text-base">
            {cardContent}
          </div>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {tags.map((tagProps, index) => (
              <Tag key={index} {...tagProps} />
            ))}
          </div>
        </div>
      </div>
      {to && <Link to={to} className="absolute inset-0 w-full h-full" />}
    </div>
  );
};

export default RowCard;
