import { SectionHeader } from "@/components/atoms/SectionHeader";
import { TimelineItem } from "@/components/molecules/TimelineItem";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeader label="Experience" title="Where I have built things." titleClassName="reveal" />
      <div className="timeline">
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.date}`} item={item} />
        ))}
      </div>
    </section>
  );
}
