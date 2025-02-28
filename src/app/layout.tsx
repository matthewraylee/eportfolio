import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import BackToTop from "@/components/layout/BackToTop";

// Load Inter font with Latin subset for better performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during font loading
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description:
    "Professional portfolio showcasing projects and experience in web development.",
  keywords: ["portfolio", "web developer", "frontend", "react", "next.js"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
