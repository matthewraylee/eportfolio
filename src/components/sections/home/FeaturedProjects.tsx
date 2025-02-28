import Link from "next/link";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const FeaturedProjects = () => {
  const projects = getFeaturedProjects();

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 sm:mt-4">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
