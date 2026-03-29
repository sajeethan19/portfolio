"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    gsap.registerPlugin(ScrollTrigger);

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

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let gsapContext: gsap.Context | null = null;

    if (!prefersReducedMotion) {
      gsapContext = gsap.context(() => {
        const transitionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-transition-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.05,
            invalidateOnRefresh: true
          }
        });

        transitionTimeline
          .fromTo(
            ".about-transition-green",
            { scaleY: 0.14, autoAlpha: 0.7 },
            { scaleY: 1, autoAlpha: 1, duration: 0.6, ease: "none" }
          )
          .fromTo(
            ".about-intro-heading",
            { xPercent: -100, autoAlpha: 0 },
            { xPercent: 0, autoAlpha: 1, duration: 1.25, ease: "power3.out" },
            ">-0.05"
          )
          .fromTo(
            ".about-intro-guide",
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" },
            "<0.18"
          )
          .to(
            ".about-intro-heading",
            { autoAlpha: 1, duration: 1.2, ease: "none" },
            ">"
          )
          .fromTo(
            ".about-transition-black-focus",
            { autoAlpha: 0, scale: 0.05 },
            { autoAlpha: 1, scale: 20, duration: 2.15, ease: "power3.in" },
            ">+0.05"
          )
          .to(
            ".about-intro-heading",
            { scale: 2.6, autoAlpha: 0.05, transformOrigin: "50% 50%", duration: 1, ease: "power2.in" },
            "<"
          )
          .to(
            ".about-intro-guide",
            { autoAlpha: 0, y: -10, duration: 0.45, ease: "power2.in" },
            "<0.12"
          )
          .to(
            ".about-transition-black",
            { autoAlpha: 1, duration: 0.5, ease: "none" },
            "<0.25"
          )
          .to(
            ".about-transition-inner",
            { autoAlpha: 0, duration: 0.35, ease: "power1.out" },
            ">-0.12"
          );

        const aboutContentTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top 100%",
            end: "top 0%",
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true
          }
        });

        aboutContentTimeline
          .fromTo(
            ".about-content-left",
            { x: '-100%', autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 2.8, ease: "power3.out" }
          )
          .fromTo(
            ".about-content-right",
            { x: '100%', autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 2.8, ease: "power3.out" },
            "<"
          );
      });
    } else {
      const transitionSection = document.querySelector<HTMLElement>(".about-transition-scroll");
      if (transitionSection) {
        transitionSection.style.display = "none";
      }

      document.querySelectorAll<HTMLElement>(".about-content-left, .about-content-right").forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
    }

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
      gsapContext?.revert();
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
