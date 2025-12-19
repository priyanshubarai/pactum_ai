type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-md text-neutral-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
