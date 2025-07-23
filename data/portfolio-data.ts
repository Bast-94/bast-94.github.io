import type { PortfolioData } from "../types/portfolio"

export const portfolioData: PortfolioData = {
  contact: {
    name: "Votre Nom",
    title: "Développeur Full Stack",
    tagline: "Je crée des expériences numériques exceptionnelles",
    email: "votre.email@example.com",
    phone: "+33 6 12 34 56 78",
    linkedin: "https://linkedin.com/in/votre-profil",
    github: "https://github.com/votre-username",
    twitter: "https://twitter.com/votre-username",
    location: "Paris, France",
    photo: "/placeholder.svg?height=400&width=400",
    resume: "/cv.pdf",
  },
  about: {
    intro:
      "Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes et performantes.",
    story:
      "Mon parcours a commencé par une fascination pour la technologie et l'envie de résoudre des problèmes complexes. Aujourd'hui, je combine créativité et expertise technique pour donner vie à des idées innovantes.",
    values: ["Innovation", "Qualité", "Collaboration", "Apprentissage continu"],
  },
  skills: [
    { name: "React", level: 95, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Next.js", level: 88, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "PostgreSQL", level: 82, category: "backend" },
    { name: "AWS", level: 75, category: "tools" },
    { name: "Docker", level: 78, category: "tools" },
    { name: "Figma", level: 70, category: "design" },
  ],
  experiences: [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      period: "2022 - Présent",
      location: "Paris, France",
      description: "Lead developer sur des projets d'envergure avec une équipe de 8 développeurs.",
      achievements: [
        "Augmentation de 40% des performances des applications",
        "Mise en place d'une architecture microservices",
        "Formation et encadrement de 3 développeurs junior",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      id: "2",
      title: "Développeur Full Stack",
      company: "StartupInnovante",
      period: "2020 - 2022",
      location: "Lyon, France",
      description: "Développement d'une plateforme SaaS de A à Z avec plus de 10k utilisateurs actifs.",
      achievements: [
        "Création complète de la plateforme (0 à 10k utilisateurs)",
        "Intégration de 15+ APIs tierces",
        "Mise en place de tests automatisés (95% de couverture)",
      ],
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Stripe"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec gestion avancée des stocks et analytics temps réel",
      longDescription:
        "Une solution e-commerce complète développée pour une chaîne de magasins, incluant la gestion des stocks, les paiements sécurisés, et un dashboard d'analytics en temps réel. L'application gère plus de 1000 produits et traite en moyenne 500 commandes par jour.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
      category: "Web Application",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://demo-ecommerce.com",
      github: "https://github.com/votre-username/ecommerce-platform",
      featured: true,
      year: "2023",
      status: "completed",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Application collaborative de gestion de tâches avec synchronisation temps réel",
      longDescription:
        "Une application de productivité moderne permettant aux équipes de collaborer efficacement. Fonctionnalités avancées incluant les notifications push, la synchronisation multi-appareils, et l'intégration avec les outils populaires comme Slack et Google Calendar.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS", "Vercel"],
      category: "SaaS",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://taskapp-demo.com",
      github: "https://github.com/votre-username/task-manager",
      featured: true,
      year: "2023",
      status: "completed",
    },
    {
      id: "3",
      title: "AI Content Generator",
      description: "Générateur de contenu alimenté par l'IA pour les créateurs de contenu",
      longDescription:
        "Un outil innovant qui utilise l'intelligence artificielle pour aider les créateurs à générer du contenu de qualité. Intégration avec GPT-4 et interface utilisateur intuitive.",
      technologies: ["React", "Python", "FastAPI", "OpenAI API", "PostgreSQL"],
      category: "AI/ML",
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/votre-username/ai-content-generator",
      featured: false,
      year: "2024",
      status: "in-progress",
    },
  ],
  testimonials: [
    {
      name: "Marie Dubois",
      role: "Product Manager",
      company: "TechCorp",
      content:
        "Un développeur exceptionnel qui allie expertise technique et vision produit. Ses solutions sont toujours élégantes et performantes.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Thomas Martin",
      role: "CTO",
      company: "StartupInnovante",
      content:
        "Grâce à son travail, nous avons pu scaler notre plateforme de 0 à 10k utilisateurs en moins de 2 ans. Un vrai talent !",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
}
