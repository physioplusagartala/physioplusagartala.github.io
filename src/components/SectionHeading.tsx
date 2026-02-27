interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => (
  <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
    <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
