import type { Project } from "../types/cv"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6 last:mb-0 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-gray-900 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
      <p className="text-gray-700 mb-4">{project.description}</p>
      {project.technologies && (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-accent text-white text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
