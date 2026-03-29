import { SectionHeader } from "@/components/atoms/SectionHeader";
import { SkillCard } from "@/components/molecules/SkillCard";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <>
      <section className="skills-transition-scroll" aria-hidden="true">
        <div className="skills-transition-stage">
          <div className="skills-transition-green" />
          <div className="skills-transition-black-focus" />
          <div className="skills-transition-black" />
          <div className="skills-transition-inner">
            <h3 className="skills-intro-heading">MY ARSENAL</h3>
            <p className="skills-intro-guide">Technologies I master.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <SectionHeader label="Technical Skills" title="The stack I live in." titleClassName="reveal" />
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>
    </>
  );
}
