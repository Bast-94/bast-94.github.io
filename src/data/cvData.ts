export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  location?: string;
  photo?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  missions: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export interface InfoSectionData {
  title: string;
  items: string[];
}

export interface CVData {
  contact: ContactInfo;
  about: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[];
  languages: InfoSectionData;
  education: InfoSectionData;
  interests: InfoSectionData;
  certifications?: InfoSectionData;
}

export const cvData: CVData = {
  contact: {
    name: "Bastien Hoorelbeke",
    title: "Data/ML Engineer",
    email: "bastien.hoorelbeke@epita.fr",
    phone: "",
    linkedin: "https://www.linkedin.com/in/bastien-hoorelbeke-01423b15b",
    github: "https://github.com/bast-94",
    location: "Paris, France",
    photo: "https://media.licdn.com/dms/image/v2/C4E03AQGlbJ8VM5MzXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662469087103?e=1755734400&v=beta&t=x3HhrN7EvUUVIVh-14PT_L2s7Z5xT8tGMvGvlUtdmZY"
  },
  about: "Récemment diplômé à l'EPITA , je suis à la recherche d'un poste dans le domaine du Machine Learning, du DataEngineering ou du Devops",
  skills: ["Python",
    "FastAPI",
    "Torch",
    "Tensorflow",
    "Scikit-learn",
    "Pandas",
    "Numpy",
    "C",
    "C++",
    "C#",
    "JavaScript",
    "Docker",
    "Scala",
    "Java",
    "SQL",
    "MongoDB",
    "Redis",
    "React",
    "AWS",
    "VueJS",
    "Azure"],
  experiences: [
    {
      id: "1",
      title: "Data Engineer",
      company: "Nexaforward",
      period: "Mars - Avril 2025",
      location: "Paris",
      missions: [
        "Déploiement d'API et de plateformes conteneurisées (Docker) sur le cloud Azure.",
        "Intégration d'une authentification via Keycloak sur les API (FastAPI).",
        "Mise en place de workflows CI/CD.",
        "Optimisation de la scalabilité et de la résilience des services déployés."
      ]
    },
    {
      id: "2",
      title: "DevOps",
      company: "Radar",
      period: "Février 2024 - Février 2025",
      location: "Paris",
      missions: [
        "Déploiement et implémentation d'API (Python FastAPI) et de services conteneurisés sur AWS ECS.",
        "Gestion réseau des services conteneurisés dans le cloud AWS.",
        "Implémentation d'une première version du site de l'entreprise ainsi que d'une plateforme interne en Vue JS.",
        "Recherche en Machine Learning sur l'usage de l'AB testing et création d'algorithme Python avec Numpy.",
        "Implémentation de pipeline de scrapping en Python, dans le but d'enrichir une base de données en graphe sur AWS Neptune.",
      ]
    },
    {
      id: "3",
      title: "Développeur MLOps",
      company: "Nexaforward",
      period: "Septembre 2022 - Janvier 2023",
      location: "Paris",
      missions: [
        "Création de pipeline de déploiement d'algorithmes de Machine Learning conteneurisés sur AWS ECS.",
        "Automatisation des procédures de lancement des conteneurs coordonnées avec les requêtes de la plateforme avec Crontab.",
        "Publication et obfuscation des librairies en Python de l'entreprise pour des développeurs tiers avec Pyarmor."
      ]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Initiation aux réseaux de neurones",
      description: "Implémentation d'un réseau de neurones reconnaissant et classifiant des images de navires avec Tensorflow.",
      technologies: ["Python", "Tensorflow", "Jupyter"],
      link: "https://github.com/Bast-94/IREN-BOATS"
    },
    {
      id: "2",
      title: "Python Pour le Big Data",
      description: "Etude statistique  sur l'évolution du Bitcoin avec Pandas, Matplotlib et Numpy.",
      technologies: ["Python", "Pandas", "Matplotlib", "Numpy", "Jupyter"],
      link: "https://github.com/Bast-94/DefiEGC2024-RM-BH"
    },
    {
      id: "3",
      title: "42sh",
      description: "Projet consistant à réimplémenter Bash en C.",
      technologies: ["C", "Make"]
    },
    {
      id: "4",
      title: "Fashion Scraping",
      description: "Projet de scraping de sites de mode en Python dans le but de créer un dataset d'images de vêtement pour un modèle de Deep Learning.",
      technologies: ["Python", "BeautifulSoup", "Requests", "Redis", "MongoDB", "Docker"],
    },
    {
      id: "5",
      title: "Fondements théoriques du Machine Learning",
      description: "Projet collectif de mise en pratique des concepts théoriques du Machine Learning avec Scikit-learn ainsi que des bases mathématiques sous-jacentes.",
      technologies: ["Python", "Numpy", "Scikit-learn", "Matplotlib", "Jupyter"],
      link: "https://github.com/Bast-94/FTML-project"
    },
    {
      id: "6",
      title: "Very Large Graph",
      description: "Projet collectif de parallélisation et d'optimisation de calcul de clique maximale de graphe",
      technologies: ["Python", "Pyspark", "NetworkX", "Matplotlib", "Jupyter"],
      link: "https://github.com/Bast-94/VLAG-PW"
    },
    {
      id: "7",
      title: "Restaurant-Recommander-System",
      description: "Implémentation d'un système de recommandation de restaurants à partir de jeux de données d'une application de livraison de plats cuisinés.",
      technologies: ["Python", "Jupyter", "Pandas", "Numpy", "Scikit-learn", "Matplotlib", "PySpark"],
      link: "https://github.com/Bast-94/Restaurant-Recommander-System"
    },
    {
      id: "8",
      title: "Etude du traitement du langage naturel",
      description: "Séries de travaux pratiques sur les bases du traitement du langage naturel en python",
      technologies: ["Python", "Torch", "Transformers", "Jupyter", "Pandas", "Numpy", "Scikit-learn"],
      link: "https://github.com/Bast-94/NLP-2023"
    },
    {
id: "9",
      title: "Apprentissage par renforcement",
      description: "Projet de reinforcement learning consistant à implémenter un agent capable de jouer au casse brique d'Atari.",
      technologies: ["Python", "Torch", "Jupyter"],
      
link:"https://github.com/Bast-94/RL-DQN"
    }

  ],
  languages: {
    title: "Langues",
    items: [
      "Français (Natif)",
      "Anglais ",

    ]
  },
  education: {
    title: "Formation",
    items: [
      "EPITA promotion 2024 - Ingénieur en Informatique",

    ]
  },
  interests: {
    title: "Centres d'intérêt",
    items: [
      "Course à pied",
      "Musique",
      "Cinéma",
    ]
  },

};