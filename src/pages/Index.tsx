import { cvData } from "../data/cv-data"
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import AboutSection from "../components/about-section"
import ExperienceSection from "../components/experience-section"
import ProjectsSection from "../components/projects-section"
import InfoSections from "../components/info-sections"
import { ThemeProvider } from "../contexts/theme-context"
import LoadingScreen from "../components/loading-screen"

export default function CVPage() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navigation />

        <main>
          <div id="home">
            <Hero contact={cvData.contact} />
          </div>

          <AboutSection about={cvData.about} skills={cvData.skills} />

          <ExperienceSection experiences={cvData.experiences} />

          <ProjectsSection projects={cvData.projects} />

          <InfoSections
            languages={cvData.languages}
            education={cvData.education}
            interests={cvData.interests}
            certifications={cvData.certifications}
          />

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-black dark:bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">


              <a
                href={`mailto:${cvData.contact.email}`}
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors text-lg"
              >
                Me contacter
              </a>
            </div>
          </section>
        </main>



      </div>
    </ThemeProvider>
  )
}
