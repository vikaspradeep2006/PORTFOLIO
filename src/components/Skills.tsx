import React from "react";
import SectionHeading from "./SectionHeading";

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Data",
    items: ["Python", "SQL", "Data Analysis"],
  },
  {
    category: "AI & Machine Learning",
    items: ["NLP", "LLMs", "Generative AI", "Deep Learning", "RAG"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 border-t border-[#282624]/20 bg-[#F2F0ED]">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* Centered Heading */}
        <SectionHeading
          title="Skills"
          subtitle="VERIFIED TECHNICAL COMPETENCIES"
        />

        {/* 3 Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 border border-[#171615] bg-[#F8F7F4] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#ED4B35] block mb-2">
                  CATEGORY 0{idx + 1}
                </span>
                <h3
                  className="text-lg font-bold text-[#171615] uppercase tracking-tight mb-6 pb-3 border-b border-[#282624]/20"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono font-bold tracking-wide uppercase bg-[#F2F0ED] text-[#171615] border border-[#171615] hover:bg-[#171615] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
