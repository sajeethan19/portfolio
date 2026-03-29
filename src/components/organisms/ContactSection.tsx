import { SectionHeader } from "@/components/atoms/SectionHeader";
import { contactItems, socialLinks } from "@/data/portfolio";
import { ContactItem } from "@/components/molecules/ContactItem";
import { SocialCard } from "@/components/molecules/SocialCard";

export function ContactSection() {
  return (
    <>
      <section className="contact-transition-scroll" aria-hidden="true">
        <div className="contact-transition-stage">
          <div className="contact-transition-green" />
          <div className="contact-transition-black-focus" />
          <div className="contact-transition-black" />
          <div className="contact-transition-inner">
            <h3 className="contact-intro-heading">LET'S BUILD</h3>
            <p className="contact-intro-guide">Collaboration or freelance.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <SectionHeader label="Contact" title="Let us build something." titleClassName="reveal" />
        <div className="contact-grid reveal">
          <div className="contact-info">
            <p>
              I am open to full-time roles, freelance projects, and interesting collaborations. If you have something in mind, even half-baked, reach out.
            </p>
            {contactItems.map((item) => (
              <ContactItem key={item.label} item={item} />
            ))}
          </div>
          <div>
            <p className="social-caption">// Find me online</p>
            <div className="social-grid">
              {socialLinks.map((social) => (
                <SocialCard key={social.href} social={social} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
