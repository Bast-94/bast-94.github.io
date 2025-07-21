import { InfoSectionData } from '../data/cvData';
import { GraduationCap, Globe, Heart, Award } from 'lucide-react';

interface InfoSectionProps {
  data: InfoSectionData;
  variant?: 'default' | 'compact';
}

const InfoSection = ({ data, variant = 'default' }: InfoSectionProps) => {
  if (!data.items || data.items.length === 0) return null;

  const getSectionIcon = () => {
    const title = data.title.toLowerCase();
    if (title.includes('formation') || title.includes('education')) {
      return <GraduationCap className="w-4 h-4 text-primary" />;
    }
    if (title.includes('langue') || title.includes('language')) {
      return <Globe className="w-4 h-4 text-primary" />;
    }
    if (title.includes('intérêt') || title.includes('interest') || title.includes('centres')) {
      return <Heart className="w-4 h-4 text-primary" />;
    }
    if (title.includes('certification')) {
      return <Award className="w-4 h-4 text-primary" />;
    }
    return <div className="w-4 h-4 bg-primary rounded-full" />;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-card-foreground mb-2 flex items-center">
          <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
            {getSectionIcon()}
          </span>
          {data.title}
        </h2>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent ml-11"></div>
      </div>
      
      <div className={`ml-11 ${variant === 'compact' ? 'space-y-3' : 'space-y-4'}`}>
        {data.items.map((item, index) => (
          <div 
            key={index}
            className="group flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-200"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200"></div>
            </div>
            <span className="text-sm text-card-foreground leading-relaxed group-hover:text-primary/90 transition-colors duration-200">
              {item}
            </span>
          </div>
        ))}
      </div>
      
      {/* Decorative bottom element */}
      <div className="mt-6 pt-4 border-t border-border/30">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-100"></div>
            <div className="w-1 h-1 bg-primary/70 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;