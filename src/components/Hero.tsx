import Image from "next/image";
import Sunburst from "./Sunburst";
import { PortraitStarGraphic } from "./GeometricDecorations";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

export default function Hero() {
  const whatsappUrl = CONTACT_CONFIG.getWhatsAppUrl();

  return (
    <section className="relative px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pt-8 pb-12 md:py-16 xl:py-20 overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column (approx 58% width) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Small uppercase eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#ED4B35]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#77736F] font-mono">
                AI ENGINEER
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#171615] leading-[0.98] uppercase mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              HI, I&apos;M VIKAS.
              <br />
              I BUILD{" "}
              <span className="inline-flex items-center align-middle mx-1">
                <Sunburst size={34} color="#ED4B35" />
              </span>
              <br />
              INTELLIGENT SYSTEMS.
            </h1>

            {/* Supporting line with starburst dividers */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-[#171615] mb-6 font-mono">
              <span>AI ENGINEERING</span>
              <Sunburst size={12} color="#ED4B35" />
              <span>ROBOTICS</span>
              <Sunburst size={12} color="#ED4B35" />
              <span>DATA ANALYTICS</span>
            </div>

            {/* Short introduction */}
            <p className="text-base sm:text-lg text-[#3E3C38] leading-relaxed mb-8 max-w-xl font-normal">
              I&apos;m an Artificial Intelligence &amp; Data Science student
              focused on building practical AI applications, intelligent
              automation, and technology that solves real-world problems.
            </p>

            {/* Action Buttons Box (Dual button styling matching reference) */}
            <div className="flex flex-wrap items-stretch gap-0 border border-[#171615] w-fit shadow-xs">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171615] text-white text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#ED4B35] transition-colors focus-visible:outline-none"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Directly wired to WhatsApp with prefilled message */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Vikas on WhatsApp"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-[#F2F0ED] text-[#171615] text-xs sm:text-sm font-bold tracking-wider uppercase border-l border-[#171615] hover:bg-[#ED4B35] hover:text-white transition-colors focus-visible:outline-none"
              >
                <MessageCircle className="w-4 h-4" />
                <span>LET&apos;S TALK</span>
              </a>
            </div>
          </div>

          {/* Right Column (approx 42% width): Real Portrait + Red Geometric Graphic */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[430px] xl:max-w-[470px]">
              {/* Bold red geometric cross/starburst symbol behind portrait */}
              <div className="absolute -top-8 -right-8 w-64 h-64 sm:w-80 sm:h-80 -z-0 pointer-events-none opacity-90 select-none">
                <PortraitStarGraphic className="w-full h-full" />
              </div>

              {/* Monochromatic portrait frame */}
              <div className="relative z-10 border-2 border-[#171615] bg-[#171615] overflow-hidden shadow-lg">
                <div className="aspect-[3/4] relative w-full overflow-hidden bg-neutral-900">
                  <Image
                    src="/images/vikas-portrait.jpg"
                    alt="Vikas Pradeep - AI Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    className="object-cover object-top filter grayscale contrast-[1.08] brightness-[0.98] hover:filter-none transition-all duration-700 ease-out"
                  />
                </div>

                {/* Subtitle tag below portrait */}
                <div className="bg-[#171615] text-white px-4 py-2.5 flex items-center justify-between border-t border-[#282624] text-xs font-mono">
                  <span className="uppercase tracking-wider text-[#F2F0ED] font-bold">
                    VIKAS PRADEEP
                  </span>
                  <span className="text-[#ED4B35] font-semibold">
                    BANGALORE, INDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
