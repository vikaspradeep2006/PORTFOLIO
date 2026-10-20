"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, AlertTriangle, Layers, X, MessageCircle } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

interface ProjectItem {
  id: string;
  number: string;
  category: string;
  filterTag: string;
  title: string;
  description: string;
  technologies: string;
  image: string;
  imageAlt: string;
  prototypeNote?: string;
  imageOnLeft: boolean;
  detailedSpecs: string[];
}

const projects: ProjectItem[] = [
  {
    id: "smart-farming",
    number: "01",
    category: "IOT & AUTOMATION",
    filterTag: "IOT",
    title: "Smart Farming Automation",
    description:
      "An IoT- and AI-based smart farming system designed to automate irrigation, monitor soil and environmental conditions, and provide crop health insights.",
    technologies: "Python / IoT Sensors / Arduino or ESP32 / MQTT / Data Analytics",
    image: "/images/smart-farming.jpg",
    imageAlt: "Smart farming automation sensor hardware in soil",
    imageOnLeft: true,
    detailedSpecs: [
      "Soil moisture and ambient temperature sensor telemetry via Arduino/ESP32",
      "Automated relay pump triggering when moisture levels drop below dynamic thresholds",
      "MQTT lightweight messaging protocol for low-bandwidth rural farm deployments",
      "Python data analytics pipeline summarizing weekly environmental stability",
    ],
  },
  {
    id: "aeb-system",
    number: "02",
    category: "COMPUTER VISION",
    filterTag: "VISION",
    title: "Autonomous Emergency Braking System",
    description:
      "A prototype exploring obstacle, pedestrian, and vehicle detection using sensors and computer vision to identify potential collision risks and trigger a braking response.",
    technologies: "Python / OpenCV / Machine Learning / Ultrasonic Sensors or LiDAR",
    image: "/images/aeb-system.jpg",
    imageAlt: "Autonomous emergency braking LiDAR and camera detection simulation",
    prototypeNote:
      "Academic Prototype Notice: Developed strictly as an experimental laboratory proof-of-concept for sensor-fusion collision avoidance; not certified for road-ready deployment.",
    imageOnLeft: false,
    detailedSpecs: [
      "Real-time video stream ingestion processed using OpenCV edge & contour recognition",
      "Bounding box estimation and distance calculation from camera frame coordinates",
      "Ultrasonic proximity sensor telemetry integration for near-field obstacle verification",
      "Threshold-based collision detection logic generating simulated deceleration triggers",
    ],
  },
  {
    id: "jarvis-assistant",
    number: "03",
    category: "PERSONAL AI",
    filterTag: "AI",
    title: "JARVIS AI Assistant",
    description:
      "A Python-based personal assistant designed to process commands, support voice interaction, retrieve information, and automate selected computer tasks.",
    technologies: "Python / Speech Recognition / Text-to-Speech",
    image: "/images/jarvis-assistant.jpg",
    imageAlt: "JARVIS voice AI audio waveform and speech interface",
    imageOnLeft: true,
    detailedSpecs: [
      "Microphone audio capture utilizing Python speech recognition engines",
      "Intent parsing and command dispatch routing for operating system utilities",
      "Text-to-speech feedback synthesis for seamless hands-free audio confirmation",
      "Automated system tasks including application launching and web information lookups",
    ],
  },
  {
    id: "sql-analyst",
    number: "04",
    category: "DATA & AUTOMATION",
    filterTag: "DATA",
    title: "SQL Analyst & Python Automation",
    description:
      "A data analysis workflow for processing datasets, querying and filtering records, cleaning information, and generating summarized reports.",
    technologies: "SQL / Python / Pandas / Data Analysis",
    image: "/images/sql-analytics.jpg",
    imageAlt: "SQL database queries and analytics reporting dashboard",
    imageOnLeft: false,
    detailedSpecs: [
      "Complex relational SQL queries including multi-table joins, subqueries, and aggregations",
      "Automated ETL pipelines powered by Python and Pandas for data cleaning",
      "Anomaly detection and missing data reconciliation across multi-thousand row datasets",
      "Automated generation of summary tables and business trend reports",
    ],
  },
];

const filterOptions = [
  { label: "ALL WORK", value: "ALL" },
  { label: "IOT & AUTOMATION", value: "IOT" },
  { label: "COMPUTER VISION", value: "VISION" },
  { label: "PERSONAL AI", value: "AI" },
  { label: "DATA & SQL", value: "DATA" },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedFilter === "ALL"
      ? projects
      : projects.filter((p) => p.filterTag === selectedFilter);

  return (
    <section
      id="projects"
      className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 border-t border-[#282624]/20 bg-[#F2F0ED]"
    >
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Centered Section Heading matching Reference Screenshot 2 */}
        <SectionHeading
          title="Portfolio"
          subtitle="SELECTED WORK & TECHNICAL EXPLORATIONS"
        />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                selectedFilter === opt.value
                  ? "bg-[#171615] text-white border-[#171615]"
                  : "bg-[#F8F7F4] text-[#171615] border-[#171615] hover:bg-[#ED4B35] hover:text-white hover:border-[#ED4B35]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Alternating Project Rows */}
        <div className="space-y-16 md:space-y-24">
          {filteredProjects.map((project, idx) => {
            const projectWhatsAppUrl = CONTACT_CONFIG.getWhatsAppUrl(
              `Hello Vikas, I am reviewing your portfolio and would like to discuss your "${project.title}" project.`
            );

            return (
              <article
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                  idx !== 0 ? "pt-16 border-t border-[#282624]/20" : ""
                }`}
              >
                {/* Media Column */}
                <div
                  className={`lg:col-span-7 ${
                    project.imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative aspect-[16/10] w-full overflow-hidden border-2 border-[#171615] bg-[#171615] shadow-md group cursor-pointer"
                    title="Click to view full technical specification"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className="object-cover object-center filter grayscale contrast-[1.08] group-hover:filter-none transition-all duration-500 ease-out"
                    />
                    {/* Project Number Watermark */}
                    <div className="absolute top-3 right-4 font-mono font-bold text-2xl text-white/50 select-none">
                      {project.number}
                    </div>

                    {/* Quick inspect overlay button on hover */}
                    <div className="absolute inset-0 bg-[#171615]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-[#171615] font-mono text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                        <span>VIEW TECHNICAL SPECS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text / Specification Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    project.imageOnLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Red Category Badge matching reference */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#ED4B35] text-white text-xs font-bold font-mono tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171615] uppercase leading-tight mb-4"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-[#3E3C38] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Academic Prototype Notice if applicable */}
                  {project.prototypeNote && (
                    <div className="flex items-start gap-2.5 p-3.5 mb-6 border border-[#282624]/20 bg-[#F8F7F4] text-xs text-[#77736F] leading-snug">
                      <AlertTriangle className="w-4 h-4 text-[#ED4B35] shrink-0 mt-0.5" />
                      <span>{project.prototypeNote}</span>
                    </div>
                  )}

                  {/* Technologies String */}
                  <div className="mb-6 pt-4 border-t border-[#282624]/20">
                    <span className="text-[11px] font-mono font-semibold uppercase text-[#77736F] tracking-wider block mb-1">
                      TECH STACK
                    </span>
                    <p className="text-xs sm:text-sm font-mono text-[#171615] font-medium">
                      {project.technologies}
                    </p>
                  </div>

                  {/* Action Links: Inquire on WhatsApp + View Specs */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={projectWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#171615] text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#ED4B35] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire via WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#171615] hover:text-[#ED4B35] underline underline-offset-4 decoration-[#ED4B35] decoration-2 transition-colors cursor-pointer"
                    >
                      <span>Full Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Technical Spec Dialog Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl bg-[#F8F7F4] border-2 border-[#171615] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 p-2 text-[#171615] hover:bg-[#171615] hover:text-white transition-colors cursor-pointer border border-[#171615]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category */}
            <span className="inline-block px-3 py-1 bg-[#ED4B35] text-white text-xs font-bold font-mono tracking-widest uppercase mb-3">
              {activeModalProject.category}
            </span>

            {/* Modal Title */}
            <h4
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold uppercase text-[#171615] mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {activeModalProject.title}
            </h4>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#3E3C38] leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Prototype notice if applicable */}
            {activeModalProject.prototypeNote && (
              <div className="flex items-start gap-2.5 p-3.5 mb-6 border border-[#282624]/20 bg-[#F2F0ED] text-xs text-[#77736F]">
                <AlertTriangle className="w-4 h-4 text-[#ED4B35] shrink-0 mt-0.5" />
                <span>{activeModalProject.prototypeNote}</span>
              </div>
            )}

            {/* Detailed Architecture Highlights */}
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171615] flex items-center gap-1.5 mb-3">
                <Layers className="w-4 h-4 text-[#ED4B35]" />
                <span>TECHNICAL ARCHITECTURE &amp; IMPLEMENTATION</span>
              </span>
              <ul className="space-y-2.5 border-l-2 border-[#ED4B35] pl-4">
                {activeModalProject.detailedSpecs.map((spec, sIdx) => (
                  <li key={sIdx} className="text-xs sm:text-sm text-[#171615]">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8 pt-4 border-t border-[#282624]/20">
              <span className="text-[11px] font-mono font-bold uppercase text-[#77736F] tracking-wider block mb-1">
                TECHNOLOGIES APPLIED
              </span>
              <p className="text-xs sm:text-sm font-mono text-[#171615] font-semibold">
                {activeModalProject.technologies}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#282624]/20">
              <a
                href={CONTACT_CONFIG.getWhatsAppUrl(
                  `Hello Vikas, I am interested in discussing your "${activeModalProject.title}" project.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#ED4B35] text-white text-xs font-bold font-mono uppercase tracking-widest hover:bg-[#d63f2b] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>DISCUSS VIA WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-3 border border-[#171615] text-[#171615] text-xs font-mono font-bold uppercase hover:bg-[#171615] hover:text-white transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
