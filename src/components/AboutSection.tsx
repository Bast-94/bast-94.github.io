interface AboutSectionProps {
  about: string;
}

const AboutSection = ({ about }: AboutSectionProps) => {
  if (!about) return null;

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <h2 className="text-xl font-bold text-card-foreground mb-4 border-b border-border pb-2">
        À propos
      </h2>
      <p className="text-card-foreground leading-relaxed text-base">
        {about}
      </p>
    </div>
  );
};

export default AboutSection;