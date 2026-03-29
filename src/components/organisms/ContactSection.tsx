import { SectionHeader } from "@/components/atoms/SectionHeader";
import { contactItems, socialLinks } from "@/data/portfolio";
import { ContactItem } from "@/components/molecules/ContactItem";
import { SocialCard } from "@/components/molecules/SocialCard";

export function ContactSection() {
  return (
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
  );
}
