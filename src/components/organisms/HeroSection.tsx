import { ButtonLink } from "@/components/atoms/ButtonLink";
import { ProfileIllustration } from "@/components/icons/ProfileIllustration";
import { SocialLinkIcon } from "@/components/molecules/SocialLinkIcon";
import type { SocialLink } from "@/types/portfolio";

export function HeroSection({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <section id="hero">
      <div className="hero-grid-bg" />

      <div className="hero-left">
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-name">
          Sajeethan
          <br />
          <span>Gulendran</span>
        </h1>
        <p className="hero-subtitle">
          <em>Software Engineer</em> | Full Stack | <em>MSc CS</em> @ UoM
        </p>
        <p className="hero-tagline">
          <span className="highlight">Electrical Engineer</span> by Degree,
          <br />
          <span className="highlight2">Software Engineer</span> by Passion.
        </p>
        <div className="hero-cta">
          <ButtonLink href="#projects" label="View My Work" tone="primary" />
          <ButtonLink href="#contact" label="Get in Touch" tone="secondary" />
        </div>
        <div className="hero-socials">
          {socialLinks.map((social) => (
            <SocialLinkIcon key={social.href} social={social} />
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-frame">
          <div className="photo-decoration" />
          <div className="photo-inner">
            <ProfileIllustration />
          </div>
          <div className="photo-badge">SWE | MSc CS</div>
        </div>
      </div>
    </section>
  );
}
