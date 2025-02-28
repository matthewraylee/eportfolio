"use client";

import { useEffect } from "react";

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

/**
 * Component for adding additional SEO elements to specific pages
 * that aren't handled by Next.js Metadata API
 */
const Seo = ({
  title,
  description,
  canonicalUrl,
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      script.id = "structured-data";

      // Remove any existing structured data
      const existingScript = document.getElementById("structured-data");
      if (existingScript) {
        existingScript.remove();
      }

      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const scriptToRemove = document.getElementById("structured-data");
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [structuredData]);

  return <>{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}</>;
};

export default Seo;
