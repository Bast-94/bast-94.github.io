export interface ContactInfo {
  name: string
  title: string
  tagline: string
  email: string
  phone?: string
  linkedin?: string
  github?: string
  twitter?: string
  location?: string
  photo?: string
  resume?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  image: string
  gallery?: string[]
  link?: string
  github?: string
  featured: boolean
  year: string
  status: "completed" | "in-progress" | "concept"
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "design"
}

export interface PortfolioData {
  contact: ContactInfo
  about: {
    intro: string
    story: string
    values: string[]
  }
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
  testimonials?: {
    name: string
    role: string
    company: string
    content: string
    avatar?: string
  }[]
}
