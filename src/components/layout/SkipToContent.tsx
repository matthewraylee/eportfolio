"use client";

/**
 * Accessibility component that allows keyboard users to skip navigation
 * and go directly to the main content
 */
const SkipToContent = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.tabIndex = -1;
      mainContent.focus();
      // Reset tabIndex after focus to prevent issues with normal navigation
      setTimeout(() => {
        if (mainContent) mainContent.tabIndex = 0;
      }, 1000);
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:py-2 focus:px-4 focus:bg-indigo-600 focus:text-white focus:rounded focus:outline-none focus:shadow-md"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;
