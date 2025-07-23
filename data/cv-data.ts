import type { CVData } from "../types/cv"

export const cvData: CVData = {
  contact: {
    name: "Votre Nom",
    title: "Développeur Full Stack",
    email: "votre.email@example.com",
    phone: "+33 6 12 34 56 78",
    linkedin: "https://linkedin.com/in/votre-profil",
    github: "https://github.com/votre-username",
    location: "Paris, France",
    photo: "/placeholder.svg?height=400&width=400",
  },
  about:
    "Développeur passionné avec plus de 5 ans d'expérience dans le développement web moderne. Spécialisé dans React, Node.js et les architectures cloud. J'aime créer des solutions élégantes et performantes qui résolvent des problèmes concrets.",
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Express",
    "Python/Django",
    "PostgreSQL/MongoDB",
    "AWS/Docker",
    "Git/CI/CD",
    "UI/UX Design",
  ],
  experiences: [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      period: "2022 - Présent",
      location: "Paris, France",
      missions: [
        "Développement d'applications web complexes avec React et Node.js",
        "Architecture et mise en place de microservices",
        "Encadrement d'une équipe de 3 développeurs junior",
        "Optimisation des performances et de l'expérience utilisateur",
      ],
    },
    {
      id: "2",
      title: "Développeur Full Stack",
      company: "StartupInnovante",
      period: "2020 - 2022",
      location: "Lyon, France",
      missions: [
        "Création d'une plateforme SaaS de A à Z",
        "Intégration d'APIs tierces et développement d'APIs REST",
        "Mise en place de tests automatisés et CI/CD",
        "Collaboration étroite avec l'équipe produit et design",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des stocks, paiements et analytics en temps réel.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      link: "https://github.com/votre-username/ecommerce-platform",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "Application de gestion de tâches collaborative avec notifications en temps réel et synchronisation multi-appareils.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/votre-username/task-manager",
    },
    {
      id: "3",
      title: "AI Content Generator",
      description: "Générateur de contenu alimenté par l'IA pour les créateurs de contenu.",
      technologies: ["React", "Python", "FastAPI", "OpenAI API"],
      link: "https://github.com/votre-username/ai-content-generator",
    },
  ],
  languages: {
    title: "Langues",
    items: ["Français (Natif)", "Anglais (Courant)", "Espagnol (Intermédiaire)"],
  },
  education: {
    title: "Formation",
    items: [
      "Master en Informatique - Université de Paris (2019)",
      "Licence en Informatique - Université de Lyon (2017)",
    ],
  },
  interests: {
    title: "Centres d'intérêt",
    items: ["Open Source", "Photographie", "Randonnée", "Cuisine", "Lecture tech"],
  },
  certifications: {
    title: "Certifications",
    items: ["AWS Certified Solutions Architect (2023)", "Google Cloud Professional Developer (2022)"],
  },
}
