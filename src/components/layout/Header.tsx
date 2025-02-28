"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Different navigation setup for homepage vs other pages
  const isHomePage = pathname === "/";

  const mainNavigation = [
    { name: "Home", href: "#home", section: "home" },
    { name: "Skills", href: "#skills", section: "skills" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "About", href: "#about", section: "about" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  const pageNavigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  // Use the appropriate navigation based on current page
  const navigation = isHomePage ? mainNavigation : pageNavigation;

  // Function to handle smooth scrolling for main page navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    section?: string
  ) => {
    // Only handle internal page section navigation
    if (isHomePage && href.startsWith("#") && section) {
      e.preventDefault();

      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Optionally update URL hash
        window.history.pushState({}, "", href);

        // Close mobile menu after navigation
        if (isMenuOpen) setIsMenuOpen(false);
      }
    }
  };

  // Monitor scroll position to highlight active section on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = mainNavigation.map((nav) => nav.section);

      // Find the section that's currently most visible in the viewport
      const currentSection =
        sections.find((section) => {
          const element = document.getElementById(section);
          if (!element) return false;

          const rect = element.getBoundingClientRect();
          // Consider a section active when it's top is in the top half of the viewport
          return rect.top <= 150 && rect.bottom >= 150;
        }) || "home";

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize correct section on page load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, mainNavigation]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                YourName
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.section)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isHomePage
                    ? activeSection === item.section
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : pathname === item.href
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-current={
                  isHomePage
                    ? activeSection === item.section
                      ? "page"
                      : undefined
                    : pathname === item.href
                    ? "page"
                    : undefined
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isHomePage
                    ? activeSection === item.section
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : pathname === item.href
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-current={
                  isHomePage
                    ? activeSection === item.section
                      ? "page"
                      : undefined
                    : pathname === item.href
                    ? "page"
                    : undefined
                }
                onClick={(e) => {
                  handleNavClick(e, item.href, item.section);
                  if (!isHomePage || !item.href.startsWith("#")) {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
