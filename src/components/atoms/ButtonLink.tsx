interface ButtonLinkProps {
  href: string;
  label: string;
  tone: "primary" | "secondary";
}

export function ButtonLink({ href, label, tone }: ButtonLinkProps) {
  return (
    <a href={href} className={tone === "primary" ? "btn-primary" : "btn-secondary"}>
      {label}
    </a>
  );
}
