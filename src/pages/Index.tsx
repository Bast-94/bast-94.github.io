import { useEffect, useState } from 'react';
import { cvData } from '../data/cvData';
import ContactInfo from '../components/ContactInfo';
import AboutSection from '../components/AboutSection';
import TagList from '../components/TagList';
import Experience from '../components/Experience';
import ProjectList from '../components/ProjectList';
import InfoSection from '../components/InfoSection';
import { Moon, Sun, Download, Mail, Github, Linkedin, Terminal, Code } from 'lucide-react';
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
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [darkMode]);

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-x-hidden">
      {/* Matrix-like background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-none blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-96 h-96 bg-primary/3 rounded-none blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/4 rounded-none blur-3xl animate-pulse delay-500"></div>
        
        {/* Code rain effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary text-xs font-mono animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '01' : '10'}
            </div>
          ))}
        </div>
      </div>

      {/* Fixed terminal-style header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-primary/20 terminal-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4 font-mono">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-primary">$</span>
            <span className="text-lg font-bold text-foreground code-style">{cvData.contact.name.toLowerCase().replace(' ', '_')}</span>
            <span className="text-primary">:</span>
            <span className="text-sm text-primary font-medium code-style">{cvData.contact.title.toLowerCase().replace(' ', '_')}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="hidden sm:flex items-center space-x-2 font-mono border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Download className="w-4 h-4" />
              <span>download_cv.pdf</span>
            </Button>
            
            <div className="flex items-center space-x-2 bg-muted/50 rounded-md p-1">
              <Sun className={`w-4 h-4 transition-opacity ${darkMode ? 'opacity-50' : 'opacity-100 text-primary'}`} />
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 bg-muted hover:bg-muted/80 border border-primary/20"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-primary shadow-lg transition-transform duration-300 ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <Moon className={`w-4 h-4 transition-opacity ${darkMode ? 'opacity-100 text-primary' : 'opacity-50'}`} />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className={`pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          
          {/* Terminal-style Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg border-2 border-primary/30 shadow-elegant p-8 terminal-border">
                {/* Terminal header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">~/developer_profile</span>
                </div>

                {/* Terminal content */}
                <div className="text-left font-mono text-sm mb-6">
                  <div className="mb-2">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground ml-2">cat developer.info</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <div><span className="text-primary">name:</span> <span className="text-foreground">"{cvData.contact.name}"</span></div>
                    <div><span className="text-primary">role:</span> <span className="text-foreground">"{cvData.contact.title}"</span></div>
                    <div><span className="text-primary">status:</span> <span className="text-green-400">"available_for_hire"</span></div>
                    <div><span className="text-primary">location:</span> <span className="text-foreground">"{cvData.contact.location}"</span></div>
                  </div>
                </div>

                {cvData.contact.photo && (
                  <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl relative group">
                    <img
                      src={cvData.contact.photo}
                      alt={`Photo de ${cvData.contact.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-mono">
                  <span className="text-primary">&lt;</span>
                  {cvData.contact.name}
                  <span className="text-primary">/&gt;</span>
                </h1>
                
                <p className="text-lg md:text-xl text-primary font-semibold mb-6 font-mono">
                  // {cvData.contact.title}
                </p>
                
                <div className="bg-muted/30 rounded-md p-4 mb-8 text-left">
                  <div className="text-xs text-muted-foreground mb-2 font-mono">/* About */</div>
                  <p className="text-sm text-foreground leading-relaxed font-mono">
                    {cvData.about}
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow font-mono bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={`mailto:${cvData.contact.email}`}>
                      <Mail className="w-5 h-5 mr-2" />
                      contact()
                    </a>
                  </Button>
                  
                  {cvData.contact.linkedin && (
                    <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow font-mono border-primary/30 hover:border-primary hover:bg-primary/10">
                      <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        linkedin.connect()
                      </a>
                    </Button>
                  )}
                  
                  {cvData.contact.github && (
                    <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow font-mono border-primary/30 hover:border-primary hover:bg-primary/10">
                      <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        github.explore()
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
                  title="Tech Stack"
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
              <section className="bg-card rounded-lg p-8 shadow-elegant border-2 border-primary/20 hover:shadow-2xl transition-shadow duration-500 terminal-border">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-foreground font-mono">
                    <span className="text-primary">class</span> WorkExperience <span className="text-primary">&#123;</span>
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="space-y-6 ml-4">
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
                <div className="mt-8 text-primary font-mono">&#125;</div>
              </section>

              <ProjectList projects={cvData.projects} />
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="mt-16 bg-card/50 backdrop-blur-sm border-t border-primary/20">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-2xl mx-auto">
            {randomColor && (
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded border border-primary/20 text-sm font-mono mb-4">
                <span className="animate-pulse mr-2">🎨</span>
                random_color_mode: true
              </div>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              // Built with React & TypeScript
              <br />
              // Designed for optimal developer experience
            </p>
            <div className="mt-4">
              <a 
                href="https://github.com/Bast-94/bast-94.github.io" 
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-mono"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                view_source_code()
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
