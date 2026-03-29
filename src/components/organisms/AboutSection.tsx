import { aboutStats } from "@/data/portfolio";
import { StatCard } from "@/components/molecules/StatCard";

export function AboutSection() {
  return (
    <>
      <section className="about-transition-scroll" aria-hidden="true">
        <div className="about-transition-stage">
          <div className="about-transition-green" />
          <div className="about-transition-black-focus" />
          <div className="about-transition-black" />
          <div className="about-transition-inner">
            <h3 className="about-intro-heading">WHO AM I</h3>
            <p className="about-intro-guide">Scroll a little more to find out.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-grid about-core">
          <div className="about-content-left">
            <div className="section-label">About Me</div>
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
          <div className="about-stats-grid about-content-right">
            {aboutStats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
