import { Tag } from "@/components/atoms/Tag";
import type { Skill } from "@/types/portfolio";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="skill-card reveal">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-category">{skill.category}</div>
      <h3>{skill.title}</h3>
      <div className="skill-tags">
        {skill.tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
}
