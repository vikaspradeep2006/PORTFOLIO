import React from "react";
import Sunburst from "./Sunburst";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
  textColor?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  textColor = "text-[#171615]",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center text-center mb-12 sm:mb-16 ${className}`}>
      {/* Red Sunburst Emblem */}
      <Sunburst size={30} className="mb-4" />

      {/* Main Bold Title */}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${textColor} uppercase`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {title}
      </h2>

      {/* Uppercase Tracking Subtitle */}
      <p className="mt-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#77736F]">
        {subtitle}
      </p>
    </div>
  );
}
