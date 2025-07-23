import type { ContactInfo } from "../types/cv"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

interface HeaderProps {
  contact: ContactInfo
}

export default function Header({ contact }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {contact.photo && (
            <img
              src={contact.photo || "/placeholder.svg"}
              alt={contact.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-accent"
            />
          )}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{contact.name}</h1>
            <h2 className="text-xl text-accent font-medium mb-4">{contact.title}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-1 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                {contact.email}
              </a>
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  {contact.phone}
                </a>
              )}
              {contact.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {contact.location}
                </span>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              )}
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
