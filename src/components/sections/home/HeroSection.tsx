import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <h1>
              <span className="block text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                Frontend Developer
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900 dark:text-white">
                  Hi, I&apos;m
                </span>
                <span className="block text-indigo-600 dark:text-indigo-400">
                  Your Name
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              I build modern, responsive, and accessible web applications with
              React, Next.js, and TailwindCSS. Focusing on clean code,
              performance, and user experience.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Link
                href="/projects"
                className="rounded-md shadow px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-5 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent font-medium hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                {/* Replace with your actual image */}
                <div className="w-full h-80 relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                      Your profile image will go here
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
