import React from "react";
import { Link, To } from "react-router";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "../css/custom.css";

export interface TextLinkProps {
  label: string;
  to?: string;
  className?: string;
  style?: "primary" | "secondary";
}

const styleClasses = {
  primary: "font-black",
  secondary: "font-normal",
};

const TextLink: React.FC<TextLinkProps> = ({
  label,
  to = "/",
  className,
  style = "secondary",
}) => {
  return (
    <Link
      to={to as To}
      className={`flex items-center text-stone-900 hover:text-blue-900 font-sans  text-lg gap-1 ${styleClasses[style]} ${className}`}
    >
      {label}
      <span className="ml-1 icon-hidden">
        <ArrowOutwardIcon fontSize="small" />
      </span>
    </Link>
  );
};

export default TextLink;
