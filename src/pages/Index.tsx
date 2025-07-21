import { useEffect, useState } from 'react';
import { cvData } from '../data/cvData';
import ContactInfo from '../components/ContactInfo';
import AboutSection from '../components/AboutSection';
import TagList from '../components/TagList';
import Experience from '../components/Experience';
import ProjectList from '../components/ProjectList';
import InfoSection from '../components/InfoSection';
import { Moon, Sun, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [randomColor, setRandomColor] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate page entrance
    setIsVisible(true);
    
    // Check for random color parameter
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('random_color')) {
      setRandomColor(true);
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
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Fixed header with controls */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-bold text-foreground">{cvData.contact.name}</h1>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-primary font-medium">{cvData.contact.title}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="hidden sm:flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger CV</span>
            </Button>
            
            <div className="flex items-center space-x-2">
              <Sun className={`w-4 h-4 transition-opacity ${darkMode ? 'opacity-50' : 'opacity-100'}`} />
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 bg-primary/20 hover:bg-primary/30"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-primary shadow-lg transition-transform duration-300 ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <Moon className={`w-4 h-4 transition-opacity ${darkMode ? 'opacity-100' : 'opacity-50'}`} />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className={`pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                {cvData.contact.photo && (
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative group">
                    <img
                      src={cvData.contact.photo}
                      alt={`Photo de ${cvData.contact.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {cvData.contact.name}
                </h1>
                
                <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                  {cvData.contact.title}
                </p>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                  {cvData.about}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                    <a href={`mailto:${cvData.contact.email}`}>
                      <Mail className="w-5 h-5 mr-2" />
                      Me contacter
                    </a>
                  </Button>
                  
                  {cvData.contact.linkedin && (
                    <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                      <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  
                  {cvData.contact.github && (
                    <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                      <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 space-y-6">
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
            </aside>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <AboutSection about={cvData.about} />

              {/* Experiences Section */}
              <section className="bg-card rounded-xl p-8 shadow-elegant border border-border/50 hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-card-foreground bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Expériences professionnelles
                  </h2>
                  <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1 ml-6"></div>
                </div>
                <div className="space-y-6">
                  {cvData.experiences.map((experience, index) => (
                    <div
                      key={experience.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <Experience experience={experience} showShortVersion={false} />
                    </div>
                  ))}
                </div>
              </section>

              <ProjectList projects={cvData.projects} />
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="mt-16 bg-card/50 backdrop-blur-sm border-t border-border/50">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-2xl mx-auto">
            {randomColor && (
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <span className="animate-pulse mr-2">🎨</span>
                Mode couleur aléatoire activé
              </div>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed">
              CV généré avec React & TypeScript, conçu avec passion pour une expérience utilisateur moderne.
            </p>
            <div className="mt-4">
              <a 
                href="https://github.com/Bast-94/bast-94.github.io" 
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Voir le code source
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
