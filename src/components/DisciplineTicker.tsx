import React from "react";
import Sunburst from "./Sunburst";

const disciplines = [
  "ARTIFICIAL INTELLIGENCE",
  "ROBOTICS",
  "COMPUTER VISION",
  "MACHINE LEARNING",
  "AUTOMATION",
  "DATA ANALYTICS",
  "PYTHON SYSTEMS",
  "DEEP LEARNING",
];

export default function DisciplineTicker() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#171615] border-y border-[#282624] py-3.5 my-8 select-none"
      aria-label="Disciplines and Focus Areas"
    >
      <div className="animate-ticker flex items-center">
        {/* First repetition */}
        <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap">
          {disciplines.map((item, idx) => (
            <React.Fragment key={`rep1-${idx}`}>
              <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono">
                {item}
              </span>
              <Sunburst size={14} color="#ED4B35" />
            </React.Fragment>
          ))}
        </div>

        {/* Second repetition for seamless infinite marquee loop */}
        <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap ml-6 sm:ml-8" aria-hidden="true">
          {disciplines.map((item, idx) => (
            <React.Fragment key={`rep2-${idx}`}>
              <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono">
                {item}
              </span>
              <Sunburst size={14} color="#ED4B35" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
