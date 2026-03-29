import type { NavItem } from "@/types/portfolio";

interface NavbarProps {
  navItems: NavItem[];
  onThemeToggle: () => void;
}

export function Navbar({ navItems, onThemeToggle }: NavbarProps) {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        Sajeethan G.
      </a>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <button className="theme-toggle" id="themeToggle" title="Toggle theme" aria-label="Toggle theme" onClick={onThemeToggle} />
    </nav>
  );
}
