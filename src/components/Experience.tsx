import { MapPin, Calendar, Building } from 'lucide-react';
import { Experience as ExperienceType } from '../data/cvData';

interface ExperienceProps {
  experience: ExperienceType;
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-elegant transition-shadow duration-300">
      {/* En-tête de l'expérience */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-card-foreground mb-2">
          {experience.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Building className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">{experience.company}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Missions */}
      <div>
        <h4 className="text-sm font-semibold text-card-foreground mb-3 uppercase tracking-wide">
          Missions principales
        </h4>
        <ul className="space-y-2">
          {experience.missions.map((mission, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-sm text-card-foreground leading-relaxed"
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>{mission}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;