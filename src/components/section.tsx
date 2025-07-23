import type React from "react"
interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-accent">{title}</h2>
      {children}
    </section>
  )
}
