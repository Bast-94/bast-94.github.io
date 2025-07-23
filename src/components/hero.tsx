"use client"

import type { ContactInfo } from "../types/cv"
import { ArrowDown, Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"

interface HeroProps {
  contact: ContactInfo
}

export default function Hero({ contact }: HeroProps) {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-accent font-medium mb-2">Bonjour, je suis</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">{contact.name}</h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">{contact.title}</h2>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                {contact.email}
              </a>
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  {contact.phone}
                </a>
              )}
              {contact.location && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {contact.location}
                </span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToAbout}
                className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                En savoir plus
                <ArrowDown size={20} />
              </button>
              <a
                href={`mailto:${contact.email}`}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium hover:border-accent hover:text-accent dark:hover:border-accent transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Me contacter
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={contact.photo || "/placeholder.svg"}
                  alt={contact.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
