// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
        About Me
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        This is the about page. We'll build this out in the next steps.
      </p>
    </div>
  );
}

// src/app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
        Projects
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        This is the projects page. We'll build this out in the next steps.
      </p>
    </div>
  );
}

// src/app/projects/[slug]/page.tsx
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
        Project: {params.slug}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        This is the project detail page for {params.slug}. We'll build this out
        in the next steps.
      </p>
    </div>
  );
}

// src/app/experience/page.tsx
export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
        Experience
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        This is the experience page. We'll build this out in the next steps.
      </p>
    </div>
  );
}

// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
        Contact
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        This is the contact page. We'll build this out in the next steps.
      </p>
    </div>
  );
}
