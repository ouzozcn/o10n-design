import Link from "next/link";
import React from "react";

interface SurfaceTileProps {
    className?: string;
    label?: string;
    type?: "primary" | "secondary" | "tertiary" | "quaternary";
    link?: string;
    colSpan?: number; // 1, 2, or 3
}

const primary = "hover:bg-amber-100 transition duration-300 ease-in-out";
const secondary = "hover:bg-pink-100 transition duration-300 ease-in-out";
const tertiary = "hover:bg-lime-100 transition duration-300 ease-in-out";
const quaternary = "hover:bg-cyan-100 transition duration-300 ease-in-out";

export default function SurfaceTile({ className, label, type="primary", link, colSpan=1 }: SurfaceTileProps) {
    const bgColor = type === "primary" ? primary : type === "secondary" ? secondary : type === "tertiary" ? tertiary : quaternary;
    const colSpanMap = {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
    };
    const colSpanClass = label ? colSpanMap[colSpan as keyof typeof colSpanMap] || "col-span-1" : "";
    // Responsive min sizes and padding
    const sizeClasses = label
      ? "w-auto h-auto px-6 py-3 text-base"
      : "aspect-square min-w-[80px] min-h-[80px]";
    const baseClasses = `box-border flex items-center justify-center border-b border-r border-stone-400 ${bgColor} ${colSpanClass} ${className || ''}`;

    const content = (
        <div className="flex items-center justify-center w-full h-full">
            {label && (
                <span className="text-sm md:text-base font-sans text-center text-stone-900">{label}</span>
            )}
        </div>
    );

    if (link) {
        return (
            <Link
                href={link}
                className={`${baseClasses} ${sizeClasses} block`}
                style={label ? {} : { minWidth: 0, minHeight: 0 }}
            >
                {content}
            </Link>
        );
    }

    return (
        <div className={`${baseClasses} ${sizeClasses}`}>
            {content}
        </div>
    );
}