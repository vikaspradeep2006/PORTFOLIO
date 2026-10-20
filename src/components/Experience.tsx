import React from "react";
import SectionHeading from "./SectionHeading";

interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const experiences: ExperienceEntry[] = [
  {
    role: "AI Intern",
    company: "GWC Data.AI",
    location: "Hosur, Karnataka",
    period: "3 Months",
    description:
      "Collaborated on applied AI and machine learning tasks within the engineering team. Handled dataset preparation, model evaluation workflows, and supported automation routines.",
  },
  {
    role: "IT Support Intern",
    company: "Kauvery Hospital",
    location: "Central IT Support",
    period: "Internship",
    description:
      "Provided hands-on technical support for central hospital hardware, software, and network-related issues. Diagnosed connectivity and maintained system uptime across mission-critical clinical infrastructure.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 border-t border-[#282624]/20 bg-[#F2F0ED]">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* Centered Heading */}
        <SectionHeading
          title="Experience"
          subtitle="LEARNING THROUGH PRACTICAL WORK"
        />

        {/* Structured Editorial List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 border border-[#171615] bg-[#F8F7F4] hover:bg-white transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-[#282624]/20">
                <div>
                  <h3
                    className="text-2xl font-bold tracking-tight text-[#171615] uppercase"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-[#ED4B35] tracking-wider uppercase font-mono mt-0.5">
                    {exp.company} — <span className="text-[#77736F]">{exp.location}</span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold tracking-widest text-white bg-[#171615] px-3 py-1 uppercase self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <p className="text-base text-[#3E3C38] leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
