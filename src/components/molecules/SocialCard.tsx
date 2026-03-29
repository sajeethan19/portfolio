import { SocialIcon } from "@/components/icons/SocialIcons";
import type { SocialLink } from "@/types/portfolio";

export function SocialCard({ social }: { social: SocialLink }) {
  return (
    <a href={social.href} target="_blank" rel="noreferrer" className="social-card">
      <SocialIcon icon={social.icon} className="social-card-icon" />
      {social.label}
    </a>
  );
}
