import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-square w-full h-full max-w-md mx-auto lg:max-w-none relative rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                  Your profile image will go here
                </span>
              </div>
              {/* When you have an actual image, uncomment this: */}
              {/* <Image
                src="/images/profile.jpg"
                alt="Your Name - Profile Picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              /> */}
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-span-7">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>

            <div className="mt-6 text-gray-600 dark:text-gray-300 space-y-6">
              <p>
                I'm a frontend developer passionate about creating beautiful,
                functional, and user-friendly web applications. With a strong
                foundation in React, Next.js, and modern JavaScript, I
                specialize in building responsive interfaces that provide
                exceptional user experiences.
              </p>

              <p>
                My background in design allows me to bridge the gap between
                aesthetics and functionality, ensuring that applications not
                only work flawlessly but also look great and feel intuitive to
                use.
              </p>

              <p>
                I'm constantly learning and exploring new technologies to stay
                at the forefront of web development, with a particular interest
                in performance optimization, accessibility, and interactive user
                interfaces.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
              >
                More About Me
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
