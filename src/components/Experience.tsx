import { useState } from 'react';
import { MapPin, Calendar, Building, ChevronDown, ChevronUp } from 'lucide-react';
import { Experience as ExperienceType } from '../data/cvData';

interface ExperienceProps {
  experience: ExperienceType;
  showShortVersion?: boolean;
}

const Experience = ({ experience, showShortVersion = false }: ExperienceProps) => {
  const [showDetails, setShowDetails] = useState(!showShortVersion);

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-elegant transition-shadow duration-300 flex flex-col">
      {/* En-tête de l'expérience */}
      {
        showDetails ?
          // empty
          (
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
          ) :

          (
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
              <h3 className="text-xl font-bold text-card-foreground mb-2 line-clamp-1">
                {experience.title}
              </h3>
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

          )
      }

      {/* Description courte */}

      {/* Missions */}
      {showDetails && (
        <div className="mb-4">
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
      )}

      {/* Bouton toggle en bas */}
      <div className="mt-auto pt-2 flex justify-center">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-1 text-sm text-primary hover:underline transition"
        >
          {showDetails ? (
            <>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Experience;
