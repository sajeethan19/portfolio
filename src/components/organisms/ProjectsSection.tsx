import { SectionHeader } from "@/components/atoms/SectionHeader";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <>
      <section className="projects-transition-scroll" aria-hidden="true">
        <div className="projects-transition-stage">
          <div className="projects-transition-green" />
          <div className="projects-transition-black-focus" />
          <div className="projects-transition-black" />
          <div className="projects-transition-inner">
            <h3 className="projects-intro-heading">WHAT I SHIPPED</h3>
            <p className="projects-intro-guide">Projects that matter.</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <SectionHeader label="Projects" title="Things I have shipped." titleClassName="reveal" />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
