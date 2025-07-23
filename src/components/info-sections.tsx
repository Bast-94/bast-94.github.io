import type { InfoSectionData } from "../types/cv"

interface InfoSectionsProps {
  languages: InfoSectionData
  education: InfoSectionData
  interests: InfoSectionData
  certifications?: InfoSectionData
}

export default function InfoSections({ languages, education, interests, certifications }: InfoSectionsProps) {
  const sections = [education, languages, interests, certifications].filter(Boolean) as InfoSectionData[]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-black rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-accent">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
