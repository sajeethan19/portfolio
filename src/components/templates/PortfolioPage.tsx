"use client";

import { useEffect } from "react";
import { navItems, socialLinks } from "@/data/portfolio";
import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";
import { CustomCursor } from "@/components/organisms/CustomCursor";

export function PortfolioPage() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const trail = document.getElementById("cursorTrail");

    const onMouseMove = (event: MouseEvent) => {
      if (!cursor || !trail) {
        return;
      }

      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      window.setTimeout(() => {
        trail.style.left = `${event.clientX}px`;
        trail.style.top = `${event.clientY}px`;
      }, 60);
    };

    document.addEventListener("mousemove", onMouseMove);

    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 80);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((element) => observer.observe(element));

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const links = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.id;
        }
      });

      links.forEach((link) => {
        link.style.color = link.getAttribute("href") === `#${current}` ? "var(--text)" : "";
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleThemeToggle = () => {
    const html = document.documentElement;
    const nextTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", nextTheme);
  };

  return (
    <>
      <CustomCursor />
      <Navbar navItems={navItems} onThemeToggle={handleThemeToggle} />
      <main>
        <HeroSection socialLinks={socialLinks} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
