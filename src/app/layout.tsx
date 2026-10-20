import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F2F0ED",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vikaspradeep.dev"),
  title: "Vikas Pradeep | AI Engineer",
  description:
    "Portfolio of Vikas Pradeep, an Artificial Intelligence & Data Science student and developer focused on practical AI applications, computer vision, and intelligent automation.",
  keywords: [
    "Vikas Pradeep",
    "AI Engineer",
    "Artificial Intelligence",
    "Robotics",
    "Computer Vision",
    "Python",
    "Machine Learning",
    "Data Science",
  ],
  authors: [{ name: "Vikas Pradeep", url: "mailto:vikaspradeep2006@gmail.com" }],
  creator: "Vikas Pradeep",
  openGraph: {
    title: "Vikas Pradeep | AI Engineer",
    description:
      "Explore the projects, technical capabilities, and experience of Vikas Pradeep, AI Engineer.",
    url: "https://vikaspradeep.dev",
    siteName: "Vikas Pradeep Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/vikas-portrait.jpg",
        width: 800,
        height: 1067,
        alt: "Vikas Pradeep - AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Pradeep | AI Engineer",
    description:
      "Portfolio of Vikas Pradeep, an Artificial Intelligence & Data Science student and developer.",
    images: ["/images/vikas-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans min-h-screen bg-[#F2F0ED] text-[#171615] antialiased selection:bg-[#ED4B35] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
