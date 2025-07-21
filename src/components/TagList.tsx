import { Star, Zap, Code2 } from 'lucide-react';

interface TagListProps {
  tags: string[];
  title?: string;
  variant?: 'default' | 'skills' | 'technologies';
}

const TagList = ({ tags, title, variant = 'default' }: TagListProps) => {
  const getTagStyles = () => {
    switch (variant) {
      case 'skills':
        return 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 hover:from-primary/20 hover:to-primary/10 hover:scale-105 hover:shadow-lg hover:shadow-primary/25';
      case 'technologies':
        return 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 border border-border hover:border-primary/30';
      default:
        return 'bg-muted/50 text-muted-foreground hover:bg-muted/80 hover:text-card-foreground';
    }
  };

  const getSkillIcon = (skill: string) => {
    const lowerSkill = skill.toLowerCase();
    if (lowerSkill.includes('python') || lowerSkill.includes('javascript') || lowerSkill.includes('typescript')) {
      return <Code2 className="w-3 h-3" />;
    }
    if (lowerSkill.includes('react') || lowerSkill.includes('vue') || lowerSkill.includes('angular')) {
      return <Zap className="w-3 h-3" />;
    }
    return <Star className="w-3 h-3" />;
  };

  if (tags.length === 0) return null;

  return (
    <div className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
      {title && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-card-foreground mb-2 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            {title}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-300 cursor-default group
              ${getTagStyles()}
            `}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            {variant === 'skills' && (
              <span className="transition-transform duration-200 group-hover:scale-110">
                {getSkillIcon(tag)}
              </span>
            )}
            {tag}
          </span>
        ))}
      </div>
      
      {variant === 'skills' && (
        <div className="mt-6 pt-4 border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Technologies principales</span>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              <div className="w-1 h-1 bg-primary/70 rounded-full"></div>
              <div className="w-1 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagList;