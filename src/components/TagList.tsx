interface TagListProps {
  tags: string[];
  title?: string;
  variant?: 'default' | 'skills' | 'technologies';
}

const TagList = ({ tags, title, variant = 'default' }: TagListProps) => {
  const getTagStyles = () => {
    switch (variant) {
      case 'skills':
        return 'bg-gradient-primary text-primary-foreground hover:scale-105 shadow-elegant';
      case 'technologies':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border';
      default:
        return 'bg-muted text-muted-foreground hover:bg-muted/80';
    }
  };

  if (tags.length === 0) return null;

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      {title && (
        <h2 className="text-lg font-semibold text-card-foreground mb-4 border-b border-border pb-2">
          {title}
        </h2>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`
              inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200 cursor-default
              ${getTagStyles()}
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;