import { User, Target } from 'lucide-react';

interface AboutSectionProps {
  about: string;
}

const AboutSection = ({ about }: AboutSectionProps) => {
  if (!about) return null;

  return (
    <section className="bg-card rounded-xl p-8 shadow-elegant border border-border/50 hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-card-foreground bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Objectif professionnel
        </h2>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1 ml-6"></div>
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <Target className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      <div className="relative">
        {/* Quote decoration */}
        <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">"</div>
        
        <div className="pl-8">
          <p className="text-lg text-card-foreground leading-relaxed relative">
            {about}
          </p>
          
          {/* Decorative elements */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Profil professionnel</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Quote decoration end */}
        <div className="absolute -bottom-2 -right-2 text-4xl text-primary/20 font-serif rotate-180">"</div>
      </div>
    </section>
  );
};

export default AboutSection;