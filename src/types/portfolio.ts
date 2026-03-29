export type ThemeMode = "dark" | "light";

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: "github" | "linkedin" | "instagram" | "facebook";
}

export interface Skill {
  icon: string;
  category: string;
  title: string;
  tags: string[];
}

export interface TimelineEntry {
  date: string;
  company: string;
  role: string;
  points: string[];
}

export interface ProjectItem {
  number: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
}

export interface EducationItem {
  year: string;
  degree: string;
  stream: string;
  university: string;
  streamTone: "accent" | "accent2" | "muted";
}

export interface ContactItem {
  label: string;
  text: string;
  href: string;
  iconText: string;
}

export interface StatItem {
  value: string;
  label: string;
  tone: "accent" | "accent2" | "accent3";
}
