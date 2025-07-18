import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/cvData';
import TagList from './TagList';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  if (projects.length === 0) return null;

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <h2 className="text-xl font-bold text-card-foreground mb-6 border-b border-border pb-2">
        Projets
      </h2>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  {project.link.includes('github') ? (
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </a>
              )}
            </div>
            
            <p className="text-sm text-card-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            {/* Ligne de séparation sauf pour le dernier projet */}
            {project.id !== projects[projects.length - 1].id && (
              <div className="border-b border-border mt-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;