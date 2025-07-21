import { ExternalLink, Github, Code, Folder, GitBranch } from 'lucide-react';
import { Project } from '../data/cvData';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  if (projects.length === 0) return null;

  return (
    <section className="bg-card rounded-lg border-2 border-primary/20 p-8 shadow-elegant hover:shadow-2xl transition-shadow duration-500 terminal-border">
      {/* Terminal-style header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/20">
        <div className="flex items-center space-x-2">
          <Folder className="w-5 h-5 text-primary" />
          <span className="text-lg font-mono text-primary">projects/</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Class declaration */}
      <div className="mb-6 font-mono text-sm">
        <span className="text-primary">class</span>{' '}
        <span className="text-foreground">ProjectPortfolio</span>{' '}
        <span className="text-primary">&#123;</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-muted/20 rounded-lg p-6 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 terminal-border"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Project header with terminal styling */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <GitBranch className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-1">
                    // Repository
                  </div>
                  <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}
                  </h3>
                </div>
              </div>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-primary/10 transition-colors duration-200 opacity-0 group-hover:opacity-100"
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
            
            {/* Project description with comment styling */}
            <div className="mb-4 font-mono text-sm">
              <div className="text-muted-foreground mb-2">/*</div>
              <div className="ml-2 text-muted-foreground leading-relaxed">
                {project.description}
              </div>
              <div className="text-muted-foreground">*/</div>
            </div>
            
            {/* Technologies as imports */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4 font-mono text-sm">
                <div className="text-muted-foreground mb-2">// Dependencies</div>
                <div className="space-y-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2">
                      <span className="text-primary">import</span>
                      <span className="text-foreground">*</span>
                      <span className="text-primary">from</span>
                      <span className="text-green-400">'{tech.toLowerCase()}'</span>
                    </div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div className="text-muted-foreground">
                      // ... and {project.technologies.length - 4} more dependencies
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Status and stats */}
            <div className="flex items-center justify-between pt-4 border-t border-primary/20 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary">active</span>
              </div>
              
              {project.link && (
                <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-colors">
                  <Code className="w-3 h-3" />
                  <span>view_code()</span>
                </div>
              )}
            </div>
            
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Class closing and footer */}
      <div className="mt-8 font-mono text-sm">
        <div className="text-primary mb-4">&#125;</div>
        
        {/* Export statement */}
        <div className="flex items-center justify-between pt-4 border-t border-primary/20">
          <div>
            <span className="text-primary">export default</span>{' '}
            <span className="text-foreground">ProjectPortfolio</span>
            <span className="text-primary">;</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{projects.length} projects</span>
            <span>•</span>
            <a 
              href="https://github.com/Bast-94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors"
            >
              view_all_repositories()
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;