import { Project } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    slug: "ecommerce-dashboard",
    description:
      "A comprehensive dashboard for e-commerce store owners with sales analytics, inventory management, and customer insights.",
    longDescription: `
      This e-commerce dashboard provides store owners with a complete overview of their business performance. 
      
      Key features include:
      - Real-time sales analytics and reporting
      - Inventory management system with low stock alerts
      - Customer segmentation and behavior analysis
      - Order processing and fulfillment tracking
      - Integration with popular payment gateways
      
      The dashboard was built with performance and scalability in mind, utilizing React Query for efficient data fetching and state management, along with a responsive design that works across all devices.
    `,
    image: "/images/projects/ecommerce-dashboard.jpg", // You'll need to add this image
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Chart.js"],
    featured: true,
    demoUrl: "https://ecommerce-dashboard-demo.example.com",
    repoUrl: "https://github.com/yourusername/ecommerce-dashboard",
    createdAt: "2023-06-15T00:00:00Z",
  },
  {
    id: "2",
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A collaborative task management application with real-time updates, customizable workflows, and team collaboration features.",
    longDescription: `
      This task management app helps teams stay organized and collaborate effectively. Users can create projects, assign tasks, track progress, and communicate in real-time.
      
      Key features include:
      - Drag-and-drop task board (Kanban style)
      - Task assignment and priority setting
      - Due date tracking and reminders
      - File attachments and comments
      - Team collaboration tools
      - Custom workflow creation
      
      The application uses WebSockets for real-time updates and features an offline mode that synchronizes when the connection is restored.
    `,
    image: "/images/projects/task-management.jpg", // You'll need to add this image
    tags: ["React", "TypeScript", "Redux", "Node.js", "WebSockets", "MongoDB"],
    featured: true,
    demoUrl: "https://task-management-demo.example.com",
    repoUrl: "https://github.com/yourusername/task-management-app",
    createdAt: "2023-04-10T00:00:00Z",
  },
  {
    id: "3",
    title: "Weather Forecast App",
    slug: "weather-forecast-app",
    description:
      "A weather forecast application providing accurate weather data with an elegant, easy-to-use interface.",
    longDescription: `
      This weather application provides users with accurate forecasts for any location worldwide. The app features a clean, intuitive interface with detailed weather information and visualizations.
      
      Key features include:
      - Current conditions and 7-day forecast
      - Hourly predictions with detailed metrics
      - Interactive weather maps with radar data
      - Location-based automatic forecasts
      - Favorite locations saving
      - Weather alerts and notifications
      
      The app uses multiple weather APIs to provide the most accurate data possible and implements a caching system to reduce API calls.
    `,
    image: "/images/projects/weather-app.jpg", // You'll need to add this image
    tags: ["React", "JavaScript", "CSS3", "REST API", "Geolocation"],
    featured: true,
    demoUrl: "https://weather-forecast-demo.example.com",
    repoUrl: "https://github.com/yourusername/weather-forecast-app",
    createdAt: "2023-02-23T00:00:00Z",
  },
  {
    id: "4",
    title: "Personal Finance Tracker",
    slug: "personal-finance-tracker",
    description:
      "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
    longDescription: `
      This personal finance tracker makes it easy to manage finances, track spending, and achieve financial goals. The app provides insightful analytics and practical budgeting tools.
      
      Key features include:
      - Expense and income tracking
      - Budget creation and monitoring
      - Spending categorization
      - Financial goal setting
      - Data visualization and reports
      - Bank account integration
      
      The app emphasizes privacy and security, with all financial data stored locally by default, with optional encrypted cloud backup.
    `,
    image: "/images/projects/finance-tracker.jpg", // You'll need to add this image
    tags: ["React", "Firebase", "Chart.js", "PWA", "Local Storage"],
    featured: false,
    demoUrl: "https://finance-tracker-demo.example.com",
    repoUrl: "https://github.com/yourusername/personal-finance-tracker",
    createdAt: "2022-11-18T00:00:00Z",
  },
  {
    id: "5",
    title: "Recipe Sharing Platform",
    slug: "recipe-sharing-platform",
    description:
      "A community-driven recipe sharing platform where food enthusiasts can discover, share, and save recipes.",
    longDescription: `
      This recipe sharing platform connects food lovers, allowing them to discover new recipes, share their creations, and interact with a community of culinary enthusiasts.
      
      Key features include:
      - Recipe creation with step-by-step instructions
      - Search and filtering by ingredients, cuisine, diet, etc.
      - User profiles and collections
      - Rating and review system
      - Social sharing features
      - Shopping list generation
      
      The platform prioritizes accessibility and includes features like voice commands for hands-free cooking guidance.
    `,
    image: "/images/projects/recipe-platform.jpg", // You'll need to add this image
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Authentication",
      "Responsive Design",
    ],
    featured: false,
    demoUrl: "https://recipe-platform-demo.example.com",
    repoUrl: "https://github.com/yourusername/recipe-sharing-platform",
    createdAt: "2022-09-05T00:00:00Z",
  },
  {
    id: "6",
    title: "Fitness Tracking App",
    slug: "fitness-tracking-app",
    description:
      "A comprehensive fitness application for tracking workouts, setting goals, and monitoring progress over time.",
    longDescription: `
      This fitness tracking app helps users stay on top of their fitness journey with powerful tracking tools, workout templates, and progress visualization.
      
      Key features include:
      - Workout planning and tracking
      - Exercise library with demonstrations
      - Progress tracking with charts and statistics
      - Goal setting and achievement tracking
      - Custom workout creation
      - Integration with fitness wearables
      
      The app is built as a Progressive Web App, allowing users to access it offline and install it on their home screen.
    `,
    image: "/images/projects/fitness-app.jpg", // You'll need to add this image
    tags: ["React", "IndexedDB", "PWA", "CSS Grid", "LocalStorage"],
    featured: false,
    demoUrl: "https://fitness-tracker-demo.example.com",
    repoUrl: "https://github.com/yourusername/fitness-tracking-app",
    createdAt: "2022-07-22T00:00:00Z",
  },
];

export const getAllProjects = () => {
  return projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

export const getFeaturedProjects = () => {
  return projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
};

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByTag = (tag: string) => {
  return projects
    .filter((project) => project.tags.includes(tag))
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
};

export const getAllTags = () => {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};
