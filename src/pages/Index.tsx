import { useEffect, useState } from 'react';
import { cvData } from '../data/cvData';
import ContactInfo from '../components/ContactInfo';
import AboutSection from '../components/AboutSection';
import TagList from '../components/TagList';
import Experience from '../components/Experience';
import ProjectList from '../components/ProjectList';
import InfoSection from '../components/InfoSection';

const Index = () => {
  const [randomColor, setRandomColor] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Vérifier si ?random_color est dans l'URL
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('random_color')) {
      setRandomColor(true);
      // Générer une couleur aléatoire et l'appliquer
      const hue = Math.floor(Math.random() * 360);
      const saturation = 70;
      const lightness = 50;

      document.documentElement.style.setProperty(
        '--primary',
        `${hue} ${saturation}% ${lightness}%`
      );
      document.documentElement.style.setProperty(
        '--primary-glow',
        `${hue} 85% 65%`
      );
    }
    if (darkMode) {
      // Activer le mode sombre
      console.log('Activating dark mode');
      document.body.classList.add('dark');
    } else {
      // Désactiver le mode sombre
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (

    <div className="min-h-screen bg-gradient-subtle" >

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="fixed top-4 right-4 z-50 flex items-center space-x-3">
          <span className="text-sm">{darkMode ? '🌙' : '☀️'}</span>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
          </button>
        </div>
        {/* Layout en deux colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Colonne gauche - Informations personnelles */}
          <div className="lg:col-span-1 space-y-6">
            <ContactInfo contact={cvData.contact} />
            <TagList
              tags={cvData.skills}
              title="Compétences"
              variant="skills"
            />
            <InfoSection data={cvData.languages} variant="compact" />
            <InfoSection data={cvData.education} />
            {cvData.certifications && (
              <InfoSection data={cvData.certifications} variant="compact" />
            )}
            <InfoSection data={cvData.interests} variant="compact" />
          </div>

          {/* Colonne droite - Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            <AboutSection about={cvData.about} />

            {/* Section Expériences */}
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <h2 className="text-xl font-bold text-card-foreground mb-6 border-b border-border pb-2">
                Expériences professionnelles
              </h2>
              <div className="space-y-6">
                {cvData.experiences.map((experience) => (
                  <Experience key={experience.id} experience={experience} />
                ))}
              </div>
            </div>

            <ProjectList projects={cvData.projects} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {randomColor && (
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-md mr-2">
                🎨 Mode couleur aléatoire activé
              </span>
            )}
            CV généré avec React & TypeScript
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
