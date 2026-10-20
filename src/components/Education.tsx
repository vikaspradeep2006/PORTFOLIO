import React from "react";
import SectionHeading from "./SectionHeading";

const coursework = [
  "Python Programming",
  "Machine Learning",
  "Artificial Intelligence",
  "Operating Systems",
  "Computer Networks",
  "Cloud Computing",
];

export default function Education() {
  return (
    <section id="education" className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 border-t border-[#282624]/20 bg-[#F2F0ED]">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* Centered Heading */}
        <SectionHeading
          title="Education"
          subtitle="ACADEMIC FOUNDATION & COURSEWORK"
        />

        {/* Education Editorial Box */}
        <div className="max-w-5xl mx-auto p-8 sm:p-12 border border-[#171615] bg-[#F8F7F4]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#282624]/20">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#ED4B35] block mb-1">
                DEGREE PROGRAM
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171615] uppercase"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                B.Tech in Artificial Intelligence &amp; Data Science
              </h3>
              <p className="text-base font-semibold text-[#171615] mt-1">
                Mahendra Engineering College, Namakkal
              </p>
            </div>

            <div className="flex flex-col sm:items-end">
              <span className="text-xs font-mono font-bold text-white bg-[#171615] px-3 py-1 uppercase tracking-widest">
                2023 – 2027
              </span>
              <div className="text-sm font-mono font-bold text-[#ED4B35] mt-2">
                GPA: 8.1 / 10.0
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="pt-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#77736F] block mb-3">
              RELEVANT COURSEWORK
            </span>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 text-xs font-mono font-medium text-[#171615] bg-[#F2F0ED] border border-[#282624]/30"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
