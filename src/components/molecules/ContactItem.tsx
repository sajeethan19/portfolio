import type { ContactItem as ContactItemType } from "@/types/portfolio";

export function ContactItem({ item }: { item: ContactItemType }) {
  return (
    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-item">
      <div className="contact-item-icon">{item.iconText}</div>
      <div>
        <div className="contact-item-label">{item.label}</div>
        <div className="contact-item-text">{item.text}</div>
      </div>
    </a>
  );
}
