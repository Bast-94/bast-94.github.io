import { InfoSectionData } from '../data/cvData';

interface InfoSectionProps {
  data: InfoSectionData;
  variant?: 'default' | 'compact';
}

const InfoSection = ({ data, variant = 'default' }: InfoSectionProps) => {
  if (!data.items || data.items.length === 0) return null;

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <h2 className="text-lg font-semibold text-card-foreground mb-4 border-b border-border pb-2">
        {data.title}
      </h2>
      
      <div className={variant === 'compact' ? 'space-y-2' : 'space-y-3'}>
        {data.items.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 text-sm text-card-foreground"
          >
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span className="leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;