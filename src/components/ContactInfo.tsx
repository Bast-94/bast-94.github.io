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
    },
    contact.phone && {
      icon: Phone,
      label: 'Téléphone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    contact.location && {
      icon: MapPin,
      label: 'Localisation',
      value: contact.location,
    },
    contact.linkedin && {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: contact.linkedin,
      external: true,
    },
    contact.github && {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub',
      href: contact.github,
      external: true,
    },
  ].filter(Boolean);

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      {/* Photo et nom */}
      <div className="text-center mb-6">
        {contact.photo && (
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
            <img
              src={contact.photo}
              alt={`Photo de ${contact.name}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-2xl font-bold text-card-foreground mb-2">
          {contact.name}
        </h1>
        <p className="text-primary font-semibold text-lg">
          {contact.title}
        </p>
      </div>

      {/* Informations de contact */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-card-foreground mb-4 border-b border-border pb-2">
          Contact
        </h2>
        {contactItems.map((item, index) => {
          if (!item) return null;
          
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-muted group">
              <Icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-card-foreground group-hover:text-primary transition-colors">
                {item.value}
              </span>
              {item.external && (
                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
              )}
            </div>
          );

          return item.href ? (
            <a
              key={index}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block hover:scale-[1.02] transition-transform"
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
    </div>
  );
};

export default ContactInfo;