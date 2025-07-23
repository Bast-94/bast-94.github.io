interface AboutSectionProps {
  about: string
  skills: string[]
}

export default function AboutSection({ about, skills }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">À propos de moi</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{about}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Compétences</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 px-4 py-3 rounded-lg text-center text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
