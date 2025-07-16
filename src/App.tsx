import TagList from './components/TagList';
import ContactInfo from './components/ContactInfo';
import Experience from './components/Experience';
import ProjectList from './components/ProjectList';
import InfoSection from './components/InfoSection';


const App = () => {
  return (
    <div className="container">
      <aside className="left-column">
        <h1>Bastien Hoorelbeke</h1>
        <ContactInfo
          email="bastien.hoorelbeke@epita.fr"
          github="https://github.com/Bast-94"
          linkedin="https://www.linkedin.com/in/bastien-hoorelbeke-01423b15b/"
        />
        <TagList tags={['Python', 'FastAPI', 'Torch', 'Tensorflow', 'C++', 'Docker', 'Azure']} />
        <InfoSection title="Langues" items={['Français : Natif', 'Anglais : Compétences professionnelles (TOEIC 860)']} />
        <InfoSection title="Diplômes" items={['TOEIC (860)', 'PSC1']} />
        <InfoSection title="Centres d’intérêt" items={['Course à pied', 'Cinéma', 'Musique']} />
      </aside>

      <main className="right-column">
        <section>
          <h2>À propos de moi</h2>
          <p>Récemment diplômé de l'EPITA, je suis à la recherche d'un poste...</p>
        </section>

        <section>
          <h2>Expériences</h2>
          <Experience
            title="Data Engineer"
            company="Nexaforward"
            date="Mars - Avril 2025"
            location="Paris 10e"
            tasks={[
              "Déploiement d'API sur Azure",
              "Authentification via Keycloak",
              "CI/CD",
              "Optimisation de la scalabilité"
            ]}
          />
          {/* ... autres expériences ... */}
        </section>

        <ProjectList
          projects={[
            { title: "Initiation aux réseaux de neurones", description: "Classification d’images avec Tensorflow" },
            { title: "Python pour le Big Data", description: "Analyse du Bitcoin" },
          ]}
        />
      </main>
    </div>
  );
};

export default App;
