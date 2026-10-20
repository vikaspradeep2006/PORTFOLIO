"use client";

import React from "react";
import { CONTACT_CONFIG } from "@/config/contact";

export default function FloatingWhatsApp() {
  const whatsappUrl = CONTACT_CONFIG.getWhatsAppUrl();

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Vikas on WhatsApp"
        title="Contact Vikas on WhatsApp"
        className="group relative flex items-center justify-center bg-[#171615] text-white border-2 border-[#ED4B35] p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-[#ED4B35] hover:border-white transition-all duration-300 transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ED4B35]/50"
      >
        {/* Subtle pulsing status dot */}
        <span
          className="absolute -top-1 -right-1 flex h-3.5 w-3.5"
          aria-hidden="true"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ED4B35] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#ED4B35] border-2 border-[#171615]" />
        </span>

        {/* WhatsApp Vector Icon (Standard, official SVG geometry) */}
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12"
          aria-hidden="true"
        >
          <path d="M12.031 0C5.397 0 0 5.396 0 12.032c0 2.115.553 4.181 1.602 6.002L.068 24l6.16-1.614c1.748.955 3.73 1.458 5.803 1.458 6.635 0 12.032-5.397 12.032-12.032C24.063 5.396 18.666 0 12.031 0zm0 22.04c-1.79 0-3.535-.48-5.06-1.39l-.363-.216-3.76.986 1.003-3.667-.238-.378a9.98 9.98 0 0 1-1.536-5.343c0-5.523 4.492-10.015 10.014-10.015 5.522 0 10.014 4.492 10.014 10.015 0 5.522-4.492 10.009-10.014 10.009zm5.485-7.487c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.176.201-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.526-.075-.151-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517l-.577-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.912 1.23 3.113.15.201 2.122 3.24 5.14 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352z" />
        </svg>

        {/* Expandable text banner on desktop hover */}
        <span className="hidden md:group-hover:inline-block pl-2 text-xs font-mono font-bold uppercase tracking-wider text-white whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-200">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
