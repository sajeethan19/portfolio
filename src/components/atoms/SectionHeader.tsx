interface SectionHeaderProps {
  label: string;
  title: string;
  titleClassName?: string;
}

export function SectionHeader({ label, title, titleClassName }: SectionHeaderProps) {
  return (
    <>
      <div className="section-label">{label}</div>
      <h2 className={`section-title ${titleClassName ?? ""}`.trim()}>{title}</h2>
    </>
  );
}
