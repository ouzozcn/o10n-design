import React from "react";

export interface SimpleTabProps {
  state: "idle" | "hover" | "disabled";
  icon?: React.ReactNode;
  to?: string;
  className?: string;
}

const iconClasses = {
  idle: "text-stone-900",
  hover: "text-amber-900",
  disabled: "text-stone-500",
};

const SimpleTab: React.FC<SimpleTabProps> = ({
  state,
  icon,
  to,
  className,
}) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex w-full h-20 items-center justify-center border-r border-stone-900 hover:bg-amber-200 ${className}`}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 ${iconClasses[state]}`}
      >
        {icon}
      </div>
    </a>
  );
};

export default SimpleTab;
