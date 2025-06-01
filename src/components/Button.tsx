import React from "react";
import Link from "next/link";

export interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  to?: string;
  className?: string;
  target?: string;
}

const typeClasses = {
  primary:
    "h-auto  bg-stone-800 text-neutral-50 hover:bg-stone-900 rounded-md justify-center items-center gap-1 inline-flex",
  secondary:
    "h-auto  bg-transparent rounded-md border-2 border-stone-900 hover:bg-amber-100 justify-center items-center gap-1 inline-flex",
  tertiary:
    "h-auto bg-transparent rounded-md  hover:bg-amber-100 justify-center items-center gap-1 inline-flex",
};

const sizeClasses = {
  small: "px-2 py-2 text-sm",
  medium: "px-3 py-3 text-md",
  large: "px-6 py-3 text-lg",
};

const isExternal = (url?: string) => url && /^https?:\/\//.test(url);

const Button: React.FC<ButtonProps> = ({
  label,
  type = "primary",
  size = "medium",
  startIcon,
  endIcon,
  isDisabled = false,
  isLoading = false,
  fullWidth = false,
  onClick,
  to,
  className = "",
  target,
}) => {
  const getClassNames = () => {
    return `
      inline-flex items-center justify-center rounded
      ${fullWidth ? "w-full" : "w-auto"}
      ${typeClasses[type]}
      ${sizeClasses[size]}
      ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
      ${isLoading ? "cursor-wait" : ""}
      font-sans
      ${className}
    `
      .trim()
      .replace(/\s+/g, " ");
  };

  const renderContent = () => (
    <>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {isLoading ? <span>Loading...</span> : <span>{label}</span>}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </>
  );

  if (to && isExternal(to)) {
    // External link
    return (
      <a
        href={to}
        target={target || "_blank"}
        rel="noopener noreferrer"
        onClick={onClick}
        className={getClassNames()}
      >
        {renderContent()}
      </a>
    );
  } else if (to) {
    // Internal link using Next.js Link
    return (
      <Link href={to} onClick={onClick} className={getClassNames()}>
        {renderContent()}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={getClassNames()}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
