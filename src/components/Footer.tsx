"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Sunburst from "./Sunburst";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#171615] text-[#F2F0ED] border-t border-[#282624] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-8">
      <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-2.5">
          <Sunburst size={16} color="#ED4B35" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span
              className="font-bold text-sm tracking-wider uppercase text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              VIKAS PRADEEP
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="text-xs font-mono uppercase text-[#77736F]">
              AI ENGINEER
            </span>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-[#77736F]">
            &copy; {year} VIKAS PRADEEP
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F2F0ED] hover:text-[#ED4B35] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
