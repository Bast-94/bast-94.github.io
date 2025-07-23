interface AboutSectionProps {
  about: string
  skills: string[]
}

export default function AboutSection({ about, skills }: AboutSectionProps) {
  const getSkillColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    ]
    return colors[index % colors.length]
  }
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div >
          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">À propos de moi</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{about}</p>
          </div>

          {/* Skills */}

          <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Compétences Techniques
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <span key={index} className={`px-6 py-3 rounded-full font-medium text-lg transition-transform hover:scale-105 ${getSkillColor(index)}`}>
                    {skill}
                  </span>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
