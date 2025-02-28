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
        This is the project detail page for {params.slug}.
      </p>
    </div>
  );
}
