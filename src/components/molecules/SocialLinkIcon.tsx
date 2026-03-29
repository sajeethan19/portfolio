import { SocialIcon } from "@/components/icons/SocialIcons";
import type { SocialLink } from "@/types/portfolio";

export function SocialLinkIcon({ social }: { social: SocialLink }) {
  return (
    <a href={social.href} target="_blank" rel="noreferrer" className="social-link" title={social.label} aria-label={social.label}>
      <SocialIcon icon={social.icon} className="social-link-icon" />
    </a>
  );
}
