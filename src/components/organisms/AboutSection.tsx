import { aboutStats } from "@/data/portfolio";
import { StatCard } from "@/components/molecules/StatCard";

export function AboutSection() {
  return (
    <section id="about">
      <div className="section-label">About Me</div>
      <div className="about-grid reveal">
        <div>
          <h2 className="section-title">
            Crafting software
            <br />
            that <em className="accent-italic">actually scales.</em>
          </h2>
          <p className="about-copy">
            I am Sajeethan, a Software Engineer from Sri Lanka with roots in Electrical Engineering. What started with PLCs and industrial automation led me deep into full-stack web development.
          </p>
          <p className="about-copy">
            Currently building scalable systems at <span className="text-strong">Smartzi</span> while pursuing an MSc in Computer Science (Software Architecture) at the <span className="text-strong">University of Moratuwa</span>. My stack revolves around Node.js, React and Next.js, PostgreSQL, and Spring Boot with a strong focus on system design, performance, and reliability.
          </p>
        </div>
        <div className="about-stats-grid">
          {aboutStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
