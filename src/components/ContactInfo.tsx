import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { ContactInfo as ContactInfoType } from '../data/cvData';

interface ContactInfoProps {
  contact: ContactInfoType;
}

const ContactInfo = ({ contact }: ContactInfoProps) => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'text-blue-500',
    },
    contact.phone && {
      icon: Phone,
      label: 'Téléphone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: 'text-green-500',
    },
    contact.location && {
      icon: MapPin,
      label: 'Localisation',
      value: contact.location,
      color: 'text-red-500',
    },
    contact.linkedin && {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: contact.linkedin,
      external: true,
      color: 'text-blue-600',
    },
    contact.github && {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub',
      href: contact.github,
      external: true,
      color: 'text-gray-600',
    },
  ].filter(Boolean);

  return (
    <div className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
      {/* Simplified contact info - photo moved to hero section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
          Contact
        </h2>
      </div>

      {/* Contact items */}
      <div className="space-y-3">
        {contactItems.map((item, index) => {
          if (!item) return null;
          
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/50 hover:scale-[1.02] group border border-transparent hover:border-primary/20">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className={`w-5 h-5 ${item.color} group-hover:text-primary transition-colors duration-300`} />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors duration-300 truncate">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.label}
                </p>
              </div>
              
              {item.external && (
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100" />
              )}
            </div>
          );

          return item.href ? (
            <a
              key={index}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block transform hover:scale-[1.01] transition-transform duration-200"
              aria-label={`${item.label}: ${item.value}`}
            >
              {content}
            </a>
          ) : (
            <div key={index} className="block">
              {content}
            </div>
          );
        })}
      </div>
      
      {/* Decorative element */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;