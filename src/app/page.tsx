import { Metadata } from "next";

// Home section imports
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import SkillsSection from "@/components/sections/home/SkillsSection";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import ContactSection from "@/components/sections/home/ContactSection";

// Enhanced SEO for homepage
export const metadata: Metadata = {
  title: "Your Name | Frontend Developer Portfolio",
  description:
    "Professional portfolio of Your Name, a frontend developer specializing in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Your Name | Frontend Developer Portfolio",
    description:
      "Professional portfolio showcasing my work as a frontend developer",
    url: "https://yourportfolio.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Your Name - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Each section has an id that matches navigation links */}
      <section id="home" className="scroll-mt-16">
        <HeroSection />
      </section>

      <section id="skills" className="scroll-mt-16">
        <SkillsSection />
      </section>

      <section id="projects" className="scroll-mt-16">
        <FeaturedProjects />
      </section>

      <section id="about" className="scroll-mt-16">
        <AboutSection />
      </section>

      <section id="contact" className="scroll-mt-16">
        <ContactSection />
      </section>
    </div>
  );
}
