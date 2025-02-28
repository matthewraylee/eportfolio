export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  repoUrl?: string;
  createdAt: string; // ISO date string
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string; // ISO date string
  endDate?: string; // ISO date string (undefined for current positions)
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  description?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools" | "languages" | "other";
  level?: 1 | 2 | 3 | 4 | 5; // 1-5 scale (optional)
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
