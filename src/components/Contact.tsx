"use client";

import { useState } from "react";
import Sunburst from "./Sunburst";
import { CONTACT_CONFIG } from "@/config/contact";
import {
  ArrowUpRight,
  Copy,
  Check,
  FileDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const whatsappUrl = CONTACT_CONFIG.getWhatsAppUrl();
  const mailtoUrl = CONTACT_CONFIG.getMailtoUrl();
  const telUrl = CONTACT_CONFIG.getTelUrl();

  return (
    <section
      id="contact"
      className="relative px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28 bg-[#171615] text-[#F2F0ED] border-t border-[#282624]"
    >
      {/* Decorative red geometric accent in corner */}
      <div
        className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#ED4B35] pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1720px] mx-auto text-center">
        {/* Top Sunburst */}
        <div className="flex justify-center mb-6">
          <Sunburst size={34} color="#ED4B35" />
        </div>

        {/* Big Bold Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          LET&apos;S BUILD SOMETHING MEANINGFUL.
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#A8A4A0] leading-relaxed max-w-2xl mx-auto mb-12">
          I&apos;m interested in connecting with people working on AI, robotics,
          software engineering, and practical technology projects.
        </p>

        {/* Primary CTA Buttons Box */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Top Priority: WhatsApp Click-to-Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get in touch with Vikas on WhatsApp"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#ED4B35] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#d63f2b] transition-all transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-md"
          >
            {/* WhatsApp Mini Icon */}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.031 0C5.397 0 0 5.396 0 12.032c0 2.115.553 4.181 1.602 6.002L.068 24l6.16-1.614c1.748.955 3.73 1.458 5.803 1.458 6.635 0 12.032-5.397 12.032-12.032C24.063 5.396 18.666 0 12.031 0zm0 22.04c-1.79 0-3.535-.48-5.06-1.39l-.363-.216-3.76.986 1.003-3.667-.238-.378a9.98 9.98 0 0 1-1.536-5.343c0-5.523 4.492-10.015 10.014-10.015 5.522 0 10.014 4.492 10.014 10.015 0 5.522-4.492 10.009-10.014 10.009zm5.485-7.487c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.176.201-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.526-.075-.151-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517l-.577-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.912 1.23 3.113.15.201 2.122 3.24 5.14 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352z" />
            </svg>
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          {/* Download Verified Resume */}
          <a
            href={CONTACT_CONFIG.resumePath}
            download={CONTACT_CONFIG.resumeFilename}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#F2F0ED]/40 text-[#F2F0ED] text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#171615] transition-all w-full sm:w-auto"
          >
            <FileDown className="w-4 h-4" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>

          {/* View in Browser link */}
          <a
            href={CONTACT_CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#A8A4A0] hover:text-[#ED4B35] transition-colors py-2 flex items-center gap-1 uppercase tracking-wider"
          >
            <span>Preview in Browser</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Direct Contact Cards Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-12 border-t border-[#282624]">
          {/* Direct Email */}
          <div className="p-6 border border-[#282624] bg-[#1F1E1C] flex flex-col justify-between hover:border-[#ED4B35]/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ED4B35]">
                  DIRECT EMAIL
                </span>
                <Mail className="w-4 h-4 text-[#77736F]" />
              </div>
              <a
                href={mailtoUrl}
                className="text-sm sm:text-base font-bold text-white hover:text-[#ED4B35] truncate block transition-colors"
                title="Send Email"
              >
                {CONTACT_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#282624]">
              <button
                type="button"
                onClick={() => copyToClipboard(CONTACT_CONFIG.email, "email")}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#A8A4A0] hover:text-white transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#ED4B35]" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
              <a
                href={mailtoUrl}
                className="text-xs font-mono text-[#ED4B35] hover:underline flex items-center gap-0.5 uppercase"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Chat */}
          <div className="p-6 border border-[#282624] bg-[#1F1E1C] flex flex-col justify-between hover:border-[#ED4B35]/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ED4B35]">
                  WHATSAPP CHAT
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  ● ACTIVE
                </span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-white hover:text-[#ED4B35] block transition-colors font-mono"
              >
                {CONTACT_CONFIG.displayPhone}
              </a>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#282624]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#ED4B35] hover:underline font-bold"
              >
                <span>OPEN CHAT NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] font-mono text-[#77736F]">
                +91 (India)
              </span>
            </div>
          </div>

          {/* Direct Telephone Dial & Location */}
          <div className="p-6 border border-[#282624] bg-[#1F1E1C] flex flex-col justify-between hover:border-[#ED4B35]/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ED4B35]">
                  PHONE &amp; LOCATION
                </span>
                <Phone className="w-4 h-4 text-[#77736F]" />
              </div>
              <a
                href={telUrl}
                className="text-sm sm:text-base font-bold text-white hover:text-[#ED4B35] block transition-colors font-mono"
              >
                {CONTACT_CONFIG.displayPhone}
              </a>
              <div className="flex items-center gap-1.5 text-xs text-[#A8A4A0] mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#ED4B35]" />
                <span>{CONTACT_CONFIG.location}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#282624]">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(CONTACT_CONFIG.displayPhone, "phone")
                }
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#A8A4A0] hover:text-white transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#ED4B35]" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
              <a
                href={telUrl}
                className="text-xs font-mono text-[#ED4B35] hover:underline uppercase"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
