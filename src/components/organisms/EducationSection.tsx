import { SectionHeader } from "@/components/atoms/SectionHeader";
import { education } from "@/data/portfolio";
import { EducationCard } from "@/components/molecules/EducationCard";

export function EducationSection() {
  return (
    <section id="education">
      <SectionHeader label="Education" title="The foundation." titleClassName="reveal" />
      <div className="edu-grid">
        {education.map((item) => (
          <EducationCard key={`${item.degree}-${item.year}`} item={item} />
        ))}
      </div>
    </section>
  );
}
