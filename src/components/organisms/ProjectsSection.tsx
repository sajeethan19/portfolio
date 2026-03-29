import { SectionHeader } from "@/components/atoms/SectionHeader";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeader label="Projects" title="Things I have shipped." titleClassName="reveal" />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
