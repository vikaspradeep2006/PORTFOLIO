import React from "react";
import SectionHeading from "./SectionHeading";
import Sunburst from "./Sunburst";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 border-t border-[#282624]/20 bg-[#F2F0ED]">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* Centered Section Heading */}
        <SectionHeading
          title="About Me"
          subtitle="THE PERSON BEHIND THE PROJECTS"
        />

        {/* Editorial Body Content */}
        <div className="max-w-5xl mx-auto space-y-6 text-lg sm:text-xl md:text-2xl text-[#171615] leading-relaxed font-normal">
          <p className="border-l-4 border-[#ED4B35] pl-6 font-medium">
            I&apos;m Vikas Pradeep, an undergraduate student pursuing a{" "}
            <strong className="font-bold underline decoration-[#ED4B35]/40 decoration-2 underline-offset-4">
              B.Tech in Artificial Intelligence &amp; Data Science
            </strong>{" "}
            at Mahendra Engineering College in Karnataka (2023–2027), where I maintain an 8.1/10 GPA.
          </p>

          <p className="text-base sm:text-lg text-[#3E3C38] pl-6 leading-relaxed">
            I am driven by the tangible intersection of software and the physical world. Rather than keeping machine learning in theoretical notebooks, I focus on applying Python, computer vision, sensor telemetry, and automation algorithms to solve practical, measurable problems—such as autonomous farming irrigation, driver safety braking prototypes, and voice command agents.
          </p>

          <p className="text-base sm:text-lg text-[#3E3C38] pl-6 leading-relaxed">
            My experience includes an AI internship at <strong className="font-semibold text-[#171615]">GWC Data.AI</strong> working on data pipelines and machine learning workflows, and central IT systems support at <strong className="font-semibold text-[#171615]">Kauvery Hospital</strong> diagnosing hardware, networking, and critical system infrastructure.
          </p>
        </div>

        {/* Highlighted Metrics Strip */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-[#282624]/20">
          <div className="p-4 border border-[#282624]/20 bg-[#F8F7F4]">
            <span className="text-xs font-mono font-semibold uppercase text-[#77736F] block mb-1">
              DEGREE
            </span>
            <span className="text-base sm:text-lg font-bold text-[#171615] font-heading block">
              B.Tech AI &amp; DS
            </span>
            <span className="text-xs text-[#77736F] font-mono">2023 – 2027</span>
          </div>

          <div className="p-4 border border-[#282624]/20 bg-[#F8F7F4]">
            <span className="text-xs font-mono font-semibold uppercase text-[#77736F] block mb-1">
              ACADEMIC GPA
            </span>
            <span className="text-2xl font-bold text-[#ED4B35] font-mono block">
              8.1 / 10
            </span>
            <span className="text-xs text-[#77736F] font-mono">Mahendra Engg</span>
          </div>

          <div className="p-4 border border-[#282624]/20 bg-[#F8F7F4]">
            <span className="text-xs font-mono font-semibold uppercase text-[#77736F] block mb-1">
              LOCATION
            </span>
            <span className="text-base sm:text-lg font-bold text-[#171615] font-heading block">
              Bangalore, India
            </span>
            <span className="text-xs text-[#77736F] font-mono">Karnataka</span>
          </div>

          <div className="p-4 border border-[#282624]/20 bg-[#F8F7F4]">
            <span className="text-xs font-mono font-semibold uppercase text-[#77736F] block mb-1">
              STATUS
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <Sunburst size={12} color="#ED4B35" />
              <span className="text-xs sm:text-sm font-bold text-[#171615] font-mono uppercase">
                Open to Roles
              </span>
            </div>
            <span className="text-xs text-[#77736F] font-mono">Internships &amp; Labs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
