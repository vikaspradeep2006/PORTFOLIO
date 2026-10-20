import React from "react";

interface SunburstProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Sunburst({
  className = "",
  size = 24,
  color = "#ED4B35",
}: SunburstProps) {
  // 16 sharp radial rays
  const rays = Array.from({ length: 16 }, (_, i) => i * (360 / 16));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <g transform="translate(50, 50)">
        {rays.map((angle, idx) => (
          <path
            key={idx}
            d="M -3 0 L 0 -48 L 3 0 Z"
            fill={color}
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="10" fill={color} />
      </g>
    </svg>
  );
}
