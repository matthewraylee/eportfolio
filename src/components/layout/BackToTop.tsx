"use client";
import { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    const showOnScroll = () => {
      const button = document.getElementById("back-to-top");
      if (!button) return;
      if (window.scrollY > 100) {
        button.style.opacity = "1";
        button.style.transform = "scale(1)";
      } else {
        button.style.opacity = "0";
        button.style.transform = "scale(0)";
      }
    };

    window.addEventListener("scroll", showOnScroll);
    return () => window.removeEventListener("scroll", showOnScroll);
  }, []);

  return (
    <a
      href="#"
      id="back-to-top"
      className="fixed bottom-8 right-8 p-2 rounded-full bg-indigo-600 text-white shadow-lg transform transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-50"
      aria-label="Back to top"
      style={{ opacity: 1, transform: "scale(1)" }} // Make it visible for testing
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </a>
  );
};

export default BackToTop;
