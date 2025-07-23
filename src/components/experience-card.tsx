import type { Experience } from "../types/cv"

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
          <p className="text-accent font-medium">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-600 mt-1 md:mt-0 md:text-right">
          <p>{experience.period}</p>
          <p>{experience.location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
        {experience.missions.map((mission, index) => (
          <li key={index}>{mission}</li>
        ))}
      </ul>
    </div>
  )
}
