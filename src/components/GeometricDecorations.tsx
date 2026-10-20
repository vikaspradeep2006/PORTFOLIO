import React from "react";

// The bold red 8-point cross/asterisk symbol behind Vikas's portrait (Reference Screenshot 3)
export function PortraitStarGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 8-pointed thick red cross geometry */}
      <g stroke="#ED4B35" strokeWidth="16" strokeLinecap="square" strokeLinejoin="miter">
        {/* Horizontal & Vertical main cross */}
        <line x1="20" y1="160" x2="300" y2="160" />
        <line x1="160" y1="20" x2="160" y2="300" />
        {/* Diagonal arms */}
        <line x1="60" y1="60" x2="260" y2="260" />
        <line x1="260" y1="60" x2="60" y2="260" />
      </g>
      {/* Secondary accent ring */}
      <circle cx="160" cy="160" r="70" stroke="#ED4B35" strokeWidth="8" fill="none" opacity="0.85" />
    </svg>
  );
}

// Top Right Red Chevron Outline (Reference Screenshots 1 & 3)
export function FrameTopRightChevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 15 15 L 145 15 L 145 145"
        stroke="#ED4B35"
        strokeWidth="10"
        strokeLinecap="square"
      />
      <path
        d="M 50 50 L 115 50 L 115 115"
        stroke="#ED4B35"
        strokeWidth="6"
        strokeLinecap="square"
        opacity="0.8"
      />
    </svg>
  );
}

// Bottom Left Red Concentric Quadrant & Arrows (Reference Screenshots 1 & 3)
export function FrameBottomLeftFan({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Deep charcoal inner quadrant */}
      <path d="M 0 200 A 70 70 0 0 1 70 200 Z" fill="#171615" />
      {/* Solid red outer fan arc */}
      <path
        d="M 0 200 L 0 70 A 130 130 0 0 1 130 200 Z"
        fill="#ED4B35"
      />
      {/* Chevron arrow overlay radiating outward */}
      <path
        d="M 40 100 L 80 140 L 40 180"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

// Bottom Right Red Geometric Block (Reference Screenshots 1 & 3)
export function FrameBottomRightBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-16 h-16 sm:w-24 sm:h-24 bg-[#ED4B35] pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 50% 0%, 50% 50%, 0% 50%)",
      }}
    />
  );
}
