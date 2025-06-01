import React from "react";

export interface TagProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size: "small" | "medium" | "large";
  type: "outline" | "lime" | "amber" | "red" | "teal" | "purple";
}

const sizeClasses = {
  small: "px-2 py-1 text-xs",
  medium: "px-3 py-2 text-sm",
  large: "px-4 py-3 text-base",
} as const;

const typeClasses = {
  outline: "bg-transparent rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex",
  lime: "bg-lime-100 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex",
  amber: "bg-amber-100 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex",
  red: "bg-red-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex",
  teal: "bg-teal-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex",
  purple: "bg-purple-200 rounded-full border border-stone-900 justify-center items-center gap-0 inline-flex",
} as const;

const Tag: React.FC<TagProps> = ({ label, startIcon, endIcon, size, type }) => {
  const commonClassNames = `h-[34px] px-4 py-2 inline-flex items-center justify-center rounded ${sizeClasses[size]} ${typeClasses[type]} font-sans`;

  return (
    <span className={commonClassNames}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      <span>{label}</span>
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </span>
  );
};

export default Tag;
