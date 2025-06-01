'use client';

import React from "react";
import Cloud from "@mui/icons-material/Cloud";
import Icon from "@mui/material/Icon";

interface WorkNavItemProps {
  order: number;
  label: string;
  isActive?: boolean;
  hasEndIcon?: boolean;
  endIcon?: string;
  className?: string;
}

const WorkNavItem: React.FC<WorkNavItemProps> = ({
  order,
  label,
  isActive = false,
  hasEndIcon = false,
  endIcon = "cloud",
  className = "",
}) => {
  const containerClasses = [
    "h-24 px-6 py-8",
    "justify-start items-center gap-1 inline-flex",
    isActive
      ? "bg-stone-800 hover:bg-stone-700 text-white"
      : "bg-amber-50 hover:bg-amber-100 text-stone-900",
    "transition-colors duration-200",
    className
  ].filter(Boolean).join(" ");

  return (
    <div 
      className={containerClasses}
      role="button"
      tabIndex={0}
      aria-current={isActive ? "page" : undefined}
    >
      <div 
        className="w-10 h-9 text-xl font-sans font-medium leading-loose"
        aria-hidden="true"
      >
        {order < 10 ? `0${order}` : order}
      </div>
      <div className="text-2xl font-sans font-normal leading-loose tracking-wide">
        {label}
      </div>
      {hasEndIcon && (
        <div 
          className="w-8 h-8 p-1 justify-center items-center flex"
          aria-hidden="true"
        >
          {endIcon === "cloud" ? <Cloud /> : <Icon>{endIcon}</Icon>}
        </div>
      )}
    </div>
  );
};

export default WorkNavItem;
