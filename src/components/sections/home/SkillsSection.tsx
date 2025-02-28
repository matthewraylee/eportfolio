import { motion } from "framer-motion";

// You may want to move this to your data folder later
const skills = [
  { name: "React", category: "frontend", level: 5 },
  { name: "Next.js", category: "frontend", level: 4 },
  { name: "TypeScript", category: "languages", level: 4 },
  { name: "JavaScript", category: "languages", level: 5 },
  { name: "TailwindCSS", category: "frontend", level: 5 },
  { name: "CSS/SCSS", category: "frontend", level: 4 },
  { name: "HTML", category: "frontend", level: 5 },
  { name: "Node.js", category: "backend", level: 3 },
  { name: "Express", category: "backend", level: 3 },
  { name: "MongoDB", category: "backend", level: 3 },
  { name: "Git", category: "tools", level: 4 },
  { name: "REST API", category: "backend", level: 4 },
  { name: "Redux", category: "frontend", level: 4 },
  { name: "Figma", category: "tools", level: 3 },
  { name: "Responsive Design", category: "frontend", level: 5 },
  { name: "Accessibility", category: "frontend", level: 4 },
];

const skillsByCategory = {
  frontend: skills.filter((skill) => skill.category === "frontend"),
  backend: skills.filter((skill) => skill.category === "backend"),
  languages: skills.filter((skill) => skill.category === "languages"),
  tools: skills.filter((skill) => skill.category === "tools"),
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const percentage = (level / 5) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {level}/5
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 sm:mt-4">
            Technologies and tools I use to bring products to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h3>
            {skillsByCategory.frontend.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h3>
            {skillsByCategory.backend.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
              Programming Languages
            </h3>
            {skillsByCategory.languages.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
              Tools & Platforms
            </h3>
            {skillsByCategory.tools.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
