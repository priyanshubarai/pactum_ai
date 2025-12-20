type SectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-3">
      {/* Section Title */}
      <h3 className="text-lg font-semibold text-white uppercase tracking-wide">
        {title}
      </h3>

      {/* Section Content */}
      <div className="text-md text-neutral-300 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

