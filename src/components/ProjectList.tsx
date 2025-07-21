import { ExternalLink, Github, Code, Lightbulb } from 'lucide-react';
import { Project } from '../data/cvData';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  if (projects.length === 0) return null;

  return (
    <section className="bg-card rounded-xl p-8 shadow-elegant border border-border/50 hover:shadow-2xl transition-shadow duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-card-foreground bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Projets
        </h2>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1 ml-6"></div>
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <Code className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-gradient-to-br from-background to-muted/20 rounded-lg p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Project header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  {project.link.includes('github') ? (
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  ) : (
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </a>
              )}
            </div>
            
            {/* Project description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 group-hover:text-card-foreground transition-colors duration-300">
              {project.description}
            </p>
            
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            )}
            
            {/* Project link indicator */}
            {project.link && (
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1 text-xs text-primary">
                  <span>Voir le projet</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            )}
            
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
          </div>
        ))}
      </div>
      
      {/* Show all projects indicator */}
      {projects.length > 6 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Et bien d'autres projets sur mon{' '}
            <a 
              href="https://github.com/Bast-94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors font-medium"
            >
              GitHub
            </a>
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectList;