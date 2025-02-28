import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import { Metadata } from "next";

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
    <div className="flex flex-col space-y-20">
      <HeroSection />
      <FeaturedProjects />
    </div>
  );
}
