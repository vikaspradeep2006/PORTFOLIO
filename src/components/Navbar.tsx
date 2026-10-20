"use client";

import { useState, useEffect } from "react";
import Sunburst from "./Sunburst";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CAPABILITIES", href: "#capabilities" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "SKILLS", href: "#skills" },
  { name: "EDUCATION", href: "#education" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const whatsappUrl = CONTACT_CONFIG.getWhatsAppUrl();

  // Active section observer on scroll
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.substring(1));
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation: Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#282624]/20 bg-[#F2F0ED]/95 backdrop-blur-xs px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 transition-all">
      <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between">
        {/* Brand: Sunburst + VIKAS PRADEEP (smooth scroll to top) */}
        <a
          href="#"
          onClick={scrollToTop}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED4B35]"
          aria-label="Vikas Pradeep Portfolio Homepage"
        >
          <Sunburst
            size={20}
            color="#ED4B35"
            className="group-hover:rotate-45 transition-transform duration-300"
          />
          <span
            className="text-base sm:text-lg font-bold tracking-tight text-[#171615] uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            VIKAS PRADEEP
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-7"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-wider uppercase transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ED4B35] ${
                  isActive
                    ? "text-[#ED4B35]"
                    : "text-[#171615] hover:text-[#ED4B35]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ED4B35]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Far Right: Outlined LET'S TALK ↗ button (Direct to WhatsApp) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171615] bg-transparent text-[#171615] text-xs font-bold tracking-wider uppercase hover:bg-[#171615] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED4B35]"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 text-[#171615] hover:text-[#ED4B35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED4B35]"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden mt-4 pt-4 border-t border-[#282624]/20 bg-[#F8F7F4] p-5 shadow-xl animate-in slide-in-from-top-2"
        >
          <nav className="flex flex-col gap-3.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-wider py-1.5 transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#ED4B35]"
                      : "text-[#171615] hover:text-[#ED4B35]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="text-xs font-mono text-[#ED4B35]">
                      ● CURRENT
                    </span>
                  )}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#282624]/20 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#171615] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#ED4B35] transition-colors"
              >
                <span>CHAT ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_CONFIG.resumePath}
                download={CONTACT_CONFIG.resumeFilename}
                className="text-center text-xs font-mono text-[#77736F] hover:text-[#171615] py-1 uppercase"
              >
                DOWNLOAD RESUME (PDF) ↓
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
