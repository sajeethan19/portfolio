import { SectionHeader } from "@/components/atoms/SectionHeader";
import { SkillCard } from "@/components/molecules/SkillCard";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeader label="Technical Skills" title="The stack I live in." titleClassName="reveal" />
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  );
}
