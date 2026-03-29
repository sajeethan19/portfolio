import { SectionHeader } from "@/components/atoms/SectionHeader";
import { TimelineItem } from "@/components/molecules/TimelineItem";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <>
      <section className="experience-transition-scroll" aria-hidden="true">
        <div className="experience-transition-stage">
          <div className="experience-transition-green" />
          <div className="experience-transition-black-focus" />
          <div className="experience-transition-black" />
          <div className="experience-transition-inner">
            <h3 className="experience-intro-heading">WHERE I BUILT</h3>
            <p className="experience-intro-guide">My journey across teams.</p>
          </div>
        </div>
      </section>

      <section id="experience">
        <SectionHeader label="Experience" title="Where I have built things." titleClassName="reveal" />
        <div className="timeline">
          {experience.map((item) => (
            <TimelineItem key={`${item.company}-${item.date}`} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
