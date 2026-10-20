import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DisciplineTicker from "@/components/DisciplineTicker";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { FrameTopRightChevron } from "@/components/GeometricDecorations";

export default function Home() {
  return (
    <div className="min-h-[100svh] w-full bg-[#F2F0ED] relative overflow-x-hidden flex flex-col">
      {/* Decorative Red Geometric Top-Right Accent on page perimeter */}
      <div
        className="hidden lg:block absolute top-4 right-4 xl:top-6 xl:right-6 w-28 h-28 xl:w-36 xl:h-36 pointer-events-none select-none z-30 opacity-85"
        aria-hidden="true"
      >
        <FrameTopRightChevron className="w-full h-full" />
      </div>

      {/* Full-width sticky Navigation */}
      <Navbar />

      {/* Full-width Main Content */}
      <main id="main-content" className="flex-1 w-full">
        <Hero />
        <DisciplineTicker />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Full-width Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
