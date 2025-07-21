import { Star, Zap, Code2, Database, Globe, Wrench } from 'lucide-react';

interface TagListProps {
  tags: string[];
  title?: string;
  variant?: 'default' | 'skills' | 'technologies';
}

const TagList = ({ tags, title, variant = 'default' }: TagListProps) => {
  const getTagStyles = () => {
    switch (variant) {
      case 'skills':
        return 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 font-mono';
      case 'technologies':
        return 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 border border-primary/20 hover:border-primary/40 font-mono';
      default:
        return 'bg-muted/50 text-muted-foreground hover:bg-muted/80 hover:text-card-foreground font-mono';
    }
  };

  const getSkillIcon = (skill: string) => {
    const lowerSkill = skill.toLowerCase();
    if (lowerSkill.includes('python') || lowerSkill.includes('javascript') || lowerSkill.includes('typescript') || lowerSkill.includes('c++') || lowerSkill.includes('java') || lowerSkill.includes('scala')) {
      return <Code2 className="w-3 h-3" />;
    }
    if (lowerSkill.includes('react') || lowerSkill.includes('vue') || lowerSkill.includes('fastapi') || lowerSkill.includes('docker')) {
      return <Zap className="w-3 h-3" />;
    }
    if (lowerSkill.includes('sql') || lowerSkill.includes('mongodb') || lowerSkill.includes('redis')) {
      return <Database className="w-3 h-3" />;
    }
    if (lowerSkill.includes('aws') || lowerSkill.includes('azure')) {
      return <Globe className="w-3 h-3" />;
    }
    if (lowerSkill.includes('torch') || lowerSkill.includes('tensorflow') || lowerSkill.includes('scikit')) {
      return <Wrench className="w-3 h-3" />;
    }
    return <Star className="w-3 h-3" />;
  };

  if (tags.length === 0) return null;

  return (
    <div className="bg-card rounded-lg border-2 border-primary/20 p-6 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:border-primary/40 terminal-border">
      {title && (
        <div className="mb-6">
          {/* Terminal-style header */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary/20">
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">{title.toLowerCase().replace(' ', '_')}.ts</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          
          {/* Array declaration */}
          <div className="font-mono text-sm mb-4">
            <span className="text-primary">const</span>{' '}
            <span className="text-foreground">{title.toLowerCase().replace(' ', '_')}</span>
            <span className="text-primary">:</span>{' '}
            <span className="text-blue-400">string[]</span>{' '}
            <span className="text-primary">=</span>{' '}
            <span className="text-primary">[</span>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center"
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            <span
              className={`
                inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium
                transition-all duration-300 cursor-default group
                ${getTagStyles()}
              `}
            >
              {variant === 'skills' && (
                <span className="transition-transform duration-200 group-hover:scale-110">
                  {getSkillIcon(tag)}
                </span>
              )}
              <span className="font-mono">"{tag}"</span>
            </span>
            {index < tags.length - 1 && (
              <span className="text-primary font-mono ml-1 mr-2">,</span>
            )}
          </div>
        ))}
      </div>
      
      {title && (
        <div className="mt-6 pt-4 border-t border-primary/20">
          <div className="font-mono text-sm">
            <span className="text-primary">];</span>
          </div>
          
          {variant === 'skills' && (
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <span className="text-muted-foreground">// Skills count</span>
              <div className="flex items-center gap-2">
                <span className="text-primary">{tags.length}</span>
                <span className="text-muted-foreground">technologies</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TagList;