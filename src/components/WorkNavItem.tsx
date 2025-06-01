import React from "react";
import Cloud from "@mui/icons-material/Cloud";
import Icon from "@mui/material/Icon";

type WorkNavItemProps = {
  order: number;
  label: string;
  isActive?: boolean;
  hasEndIcon?: boolean;
  endIcon?: string;
};

const WorkNavItem: React.FC<WorkNavItemProps> = ({
  order,
  label,
  isActive = false,
  hasEndIcon = false,
  endIcon = "cloud",
}) => {
  return (
    <div
      className={`StateDefault h-24 px-6 py-8 bg-amber-200 hover:bg-amber-300 justify-start items-center gap-1 inline-flex ${
        isActive
          ? "bg-stone-800 hover:bg- text-white"
          : "bg-amber-50 text-stone-900"
      } justify-start items-center gap-1 inline-flex`}
    >
      <div className="w-10 h-9 text-xl font-sans font-medium leading-loose">
        {order < 10 ? `0${order}` : order}
      </div>
      <div className="text-2xl font-sans font-normal leading-loose tracking-wide">
        {label}
      </div>
      {hasEndIcon && (
        <div className="w-8 h-8 p-1 justify-center items-center flex">
          {endIcon === "cloud" ? <Cloud /> : <Icon>{endIcon}</Icon>}
        </div>
      )}
    </div>
  );
};

export default WorkNavItem;
