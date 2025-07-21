import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, User } from 'lucide-react';
import { ContactInfo as ContactInfoType } from '../data/cvData';

interface ContactInfoProps {
  contact: ContactInfoType;
}

const ContactInfo = ({ contact }: ContactInfoProps) => {
  const contactItems = [
    {
      icon: Mail,
      label: 'email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'text-blue-400',
      type: 'string',
    },
    contact.phone && {
      icon: Phone,
      label: 'phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: 'text-green-400',
      type: 'string',
    },
    contact.location && {
      icon: MapPin,
      label: 'location',
      value: contact.location,
      color: 'text-red-400',
      type: 'string',
    },
    contact.linkedin && {
      icon: Linkedin,
      label: 'linkedin',
      value: 'profile_url',
      href: contact.linkedin,
      external: true,
      color: 'text-blue-500',
      type: 'url',
    },
    contact.github && {
      icon: Github,
      label: 'github',
      value: 'repositories',
      href: contact.github,
      external: true,
      color: 'text-gray-400',
      type: 'url',
    },
  ].filter(Boolean);

  return (
    <div className="bg-card rounded-lg border-2 border-primary/20 p-6 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:border-primary/40 terminal-border">
      {/* Terminal-style header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/20">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-primary">contact_info.json</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* JSON-style contact info */}
      <div className="font-mono text-sm space-y-2">
        <div className="text-primary">&#123;</div>
        {contactItems.map((item, index) => {
          if (!item) return null;
          
          const Icon = item.icon;
          const isLast = index === contactItems.length - 1;
          
          const content = (
            <div className="ml-4 flex items-start gap-3 py-2 rounded-md transition-all duration-300 hover:bg-primary/5 group">
              <div className="flex-shrink-0 mt-0.5">
                <Icon className={`w-4 h-4 ${item.color} group-hover:text-primary transition-colors duration-300`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-primary">"{item.label}":</span>
                  <span className="text-muted-foreground">// {item.type}</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-foreground truncate">"{item.value}"</span>
                  {item.external && (
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100" />
                  )}
                </div>
              </div>
            </div>
          );

          return (
            <div key={index}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block hover:scale-[1.01] transition-transform duration-200"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {content}
                </a>
              ) : (
                <div className="block">
                  {content}
                </div>
              )}
              {!isLast && <span className="ml-4 text-primary">,</span>}
            </div>
          );
        })}
        <div className="text-primary">&#125;</div>
      </div>
      
      {/* Status indicator */}
      <div className="mt-6 pt-4 border-t border-primary/20">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-muted-foreground">// Status</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary">online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;