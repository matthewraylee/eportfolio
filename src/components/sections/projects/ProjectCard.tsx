import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300">
      <div className="flex-shrink-0 h-48 w-full relative">
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
          {/* Placeholder for when no image is available */}
          {!project.image && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                No image available
              </span>
            </div>
          )}
        </div>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link href={`/projects/${project.slug}`} className="block mt-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              {project.title}
            </h3>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition"
              >
                GitHub
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            View Details
            <svg
              className="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
