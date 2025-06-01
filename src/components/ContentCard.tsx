import React from "react";
import SquareIcon from "@mui/icons-material/Square";

interface ContentCardProps {
  title: string;
  content: React.ReactNode;
  color:
    | "lime"
    | "pink"
    | "amber"
    | "teal"
    | "emerald"
    | "red"
    | "cyan"
    | "orange";
  icon?: React.ReactNode;
  className?: string;
}

const colorClasses = {
  lime: "bg-lime-100 hover:bg-lime-200",
  pink: "bg-pink-100 hover:bg-pink-200",
  amber: "bg-amber-100 hover:bg-amber-200",
  teal: "bg-teal-100 hover:bg-teal-200",
  emerald: "bg-emerald-100 hover:bg-emerald-200",
  red: "bg-red-100 hover:bg-red-200",
  cyan: "bg-cyan-100 hover:bg-cyan-200",
  orange: "bg-orange-100 hover:bg-orange-200",
};

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  content,
  icon = <SquareIcon sx={{ fontSize: 32 }} />,
  className,
  color,
}) => {
  return (
    <div
      className={`w-full flex flex-col border border-stone-900 ${colorClasses[color]} rounded-lg ${className}`}
    >
      <div className="flex items-center border-b border-stone-900">
        <div className="h-auto inline-flex  self-stretch items-center justify-center p-4 border-r border-stone-900">
          {icon}
        </div>
        <div className="p-4 text-stone-900 text-2xl font-sans font-medium">
          {title}
        </div>
      </div>
      <div className="p-6 text-stone-900 text-lg font-sans">{content}</div>
    </div>
  );
};

export default ContentCard;
