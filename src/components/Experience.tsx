import { useState } from 'react';
import { MapPin, Calendar, Building, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../data/cvData';

interface ExperienceProps {
  experience: ExperienceType;
  showShortVersion?: boolean;
}

const Experience = ({ experience, showShortVersion = false }: ExperienceProps) => {
  const [showDetails, setShowDetails] = useState(!showShortVersion);

  return (
    <div className="group relative">
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/20 group-hover:from-primary group-hover:to-primary/50 transition-all duration-500"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 group-hover:shadow-primary/25 transition-all duration-300">
        <div className="absolute inset-1 bg-background rounded-full group-hover:bg-primary transition-colors duration-300"></div>
      </div>

      <div className="ml-16 bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-2xl transition-all duration-500 hover:border-primary/20 hover:translate-x-1">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {experience.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-medium text-primary">{experience.company}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{experience.period}</span>
                </div>

                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Missions */}
        {showDetails && (
          <div className="mb-6 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
              <h4 className="text-sm font-semibold text-card-foreground uppercase tracking-wider">
                Missions principales
              </h4>
            </div>
            
            <div className="space-y-3 pl-4">
              {experience.missions.map((mission, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200 group/mission"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover/mission:scale-125 transition-transform duration-200"></div>
                  </div>
                  <p className="text-sm text-card-foreground leading-relaxed group-hover/mission:text-primary/90 transition-colors duration-200">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Toggle button */}
        <div className="flex justify-center pt-2 border-t border-border/30">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-primary hover:text-primary-glow hover:bg-primary/5 rounded-full transition-all duration-200 group/btn"
          >
            {showDetails ? (
              <>
                <span className="font-medium">Réduire</span>
                <ChevronUp className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
              </>
            ) : (
              <>
                <span className="font-medium">Voir plus</span>
                <ChevronDown className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
