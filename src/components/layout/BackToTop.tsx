"use client";

import { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    const showOnScroll = () => {
      const button = document.getElementById("back-to-top");
      if (!button) return;

      if (window.scrollY > 500) {
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

  return null; // This component doesn't render anything, it just adds the scroll listener
};

export default BackToTop;
