"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

interface CapabilityCard {
  id: string;
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Exploring practical AI applications, language models, and intelligent systems that help solve real-world problems.",
  },
  {
    id: "robotics",
    title: "Robotics & Automation",
    description:
      "Interested in sensor-based systems, embedded technology, and automation that connects software with the physical world.",
  },
  {
    id: "vision",
    title: "Computer Vision",
    description:
      "Exploring image processing, visual perception, and object detection with Python and OpenCV.",
  },
  {
    id: "data",
    title: "Data & SQL Analytics",
    description:
      "Working with structured data, SQL queries, Python-based data processing, and analytical reporting.",
  },
];

export default function Capabilities() {
  // Pre-select the 3rd card ("Computer Vision") to echo the black inverted card from Screenshot 1,
  // while allowing user hover or click to select any card dynamically!
  const [activeCard, setActiveCard] = useState<string>("vision");

  return (
    <section id="capabilities" className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 border-t border-[#282624]/20 bg-[#F2F0ED]">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* Centered Heading matching Reference Screenshot 1 */}
        <SectionHeading
          title="What I Work On"
          subtitle="AREAS OF INTEREST & TECHNICAL CAPABILITIES"
        />

        {/* 2x2 Grid matching Reference Screenshot 1 ("Services") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap) => {
            const isSelected = activeCard === cap.id;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setActiveCard(cap.id)}
                onClick={() => setActiveCard(cap.id)}
                className={`p-8 sm:p-10 border transition-all duration-300 cursor-pointer min-h-[190px] flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#171615] text-white border-[#171615] shadow-lg"
                    : "bg-[#F8F7F4] text-[#171615] border-[#171615] hover:bg-[#171615] hover:text-white hover:border-[#171615]"
                }`}
              >
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight uppercase mb-4"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isSelected ? "text-neutral-300" : "text-[#55524E]"
                    }`}
                  >
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-current/20 flex items-center justify-between text-xs font-mono uppercase tracking-wider opacity-80">
                  <span>CAPABILITY FOCUS</span>
                  <span>{isSelected ? "● ACTIVE" : "○ SELECT"}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
