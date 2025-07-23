export interface ContactInfo {
  name: string
  title: string
  email: string
  phone?: string
  linkedin?: string
  github?: string
  location?: string
  photo?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  location: string
  missions: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies?: string[]
  link?: string
}

export interface InfoSectionData {
  title: string
  items: string[]
}

export interface CVData {
  contact: ContactInfo
  about: string
  skills: string[]
  experiences: Experience[]
  projects: Project[]
  languages: InfoSectionData
  education: InfoSectionData
  interests: InfoSectionData
  certifications?: InfoSectionData
}
