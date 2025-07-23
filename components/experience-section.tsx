import type { Experience } from "../types/cv"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Expérience professionnelle</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mon parcours professionnel et les missions que j'ai accomplies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{experience.title}</h3>
                  <p className="text-xl text-accent font-medium mb-1">{experience.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{experience.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                    {experience.period}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Missions principales :</h4>
                <ul className="space-y-3">
                  {experience.missions.map((mission, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
