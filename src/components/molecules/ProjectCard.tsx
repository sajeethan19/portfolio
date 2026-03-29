import { Tag } from "@/components/atoms/Tag";
import type { ProjectItem } from "@/types/portfolio";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="project-card reveal">
      <div className="project-number">{project.number}</div>
      <div className="project-tag">{project.tag}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-stack">
        {project.stack.map((item) => (
          <Tag key={item} text={item} />
        ))}
      </div>
    </div>
  );
}
