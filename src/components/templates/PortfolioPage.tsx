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
        // About transition
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
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            invalidateOnRefresh: true
          }
        });

        aboutContentTimeline
          .to(
            ".about-content-left",
            { x: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
            0
          )
          .to(
            ".about-content-right",
            { x: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
            0
          );

        // Skills transition
        const skillsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".skills-transition-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.05,
            invalidateOnRefresh: true
          }
        });

        skillsTimeline
          .fromTo(
            ".skills-transition-green",
            { scaleY: 0.14, autoAlpha: 0.7 },
            { scaleY: 1, autoAlpha: 1, duration: 0.6, ease: "none" }
          )
          .fromTo(
            ".skills-intro-heading",
            { xPercent: -100, autoAlpha: 0 },
            { xPercent: 0, autoAlpha: 1, duration: 1.25, ease: "power3.out" },
            ">-0.05"
          )
          .fromTo(
            ".skills-intro-guide",
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" },
            "<0.18"
          )
          .to(
            ".skills-intro-heading",
            { autoAlpha: 1, duration: 1.2, ease: "none" },
            ">"
          )
          .fromTo(
            ".skills-transition-black-focus",
            { autoAlpha: 0, scale: 0.05 },
            { autoAlpha: 1, scale: 20, duration: 2.15, ease: "power3.in" },
            ">+0.05"
          )
          .to(
            ".skills-intro-heading",
            { scale: 2.6, autoAlpha: 0.05, transformOrigin: "50% 50%", duration: 1, ease: "power2.in" },
            "<"
          )
          .to(
            ".skills-intro-guide",
            { autoAlpha: 0, y: -10, duration: 0.45, ease: "power2.in" },
            "<0.12"
          )
          .to(
            ".skills-transition-black",
            { autoAlpha: 1, duration: 0.5, ease: "none" },
            "<0.25"
          )
          .to(
            ".skills-transition-inner",
            { autoAlpha: 0, duration: 0.35, ease: "power1.out" },
            ">-0.12"
          );

        // Experience transition
        const experienceTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".experience-transition-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.05,
            invalidateOnRefresh: true
          }
        });

        experienceTimeline
          .fromTo(
            ".experience-transition-green",
            { scaleY: 0.14, autoAlpha: 0.7 },
            { scaleY: 1, autoAlpha: 1, duration: 0.6, ease: "none" }
          )
          .fromTo(
            ".experience-intro-heading",
            { xPercent: -100, autoAlpha: 0 },
            { xPercent: 0, autoAlpha: 1, duration: 1.25, ease: "power3.out" },
            ">-0.05"
          )
          .fromTo(
            ".experience-intro-guide",
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" },
            "<0.18"
          )
          .to(
            ".experience-intro-heading",
            { autoAlpha: 1, duration: 1.2, ease: "none" },
            ">"
          )
          .fromTo(
            ".experience-transition-black-focus",
            { autoAlpha: 0, scale: 0.05 },
            { autoAlpha: 1, scale: 20, duration: 2.15, ease: "power3.in" },
            ">+0.05"
          )
          .to(
            ".experience-intro-heading",
            { scale: 2.6, autoAlpha: 0.05, transformOrigin: "50% 50%", duration: 1, ease: "power2.in" },
            "<"
          )
          .to(
            ".experience-intro-guide",
            { autoAlpha: 0, y: -10, duration: 0.45, ease: "power2.in" },
            "<0.12"
          )
          .to(
            ".experience-transition-black",
            { autoAlpha: 1, duration: 0.5, ease: "none" },
            "<0.25"
          )
          .to(
            ".experience-transition-inner",
            { autoAlpha: 0, duration: 0.35, ease: "power1.out" },
            ">-0.12"
          );

        // Projects transition
        const projectsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".projects-transition-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.05,
            invalidateOnRefresh: true
          }
        });

        projectsTimeline
          .fromTo(
            ".projects-transition-green",
            { scaleY: 0.14, autoAlpha: 0.7 },
            { scaleY: 1, autoAlpha: 1, duration: 0.6, ease: "none" }
          )
          .fromTo(
            ".projects-intro-heading",
            { xPercent: -100, autoAlpha: 0 },
            { xPercent: 0, autoAlpha: 1, duration: 1.25, ease: "power3.out" },
            ">-0.05"
          )
          .fromTo(
            ".projects-intro-guide",
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" },
            "<0.18"
          )
          .to(
            ".projects-intro-heading",
            { autoAlpha: 1, duration: 1.2, ease: "none" },
            ">"
          )
          .fromTo(
            ".projects-transition-black-focus",
            { autoAlpha: 0, scale: 0.05 },
            { autoAlpha: 1, scale: 20, duration: 2.15, ease: "power3.in" },
            ">+0.05"
          )
          .to(
            ".projects-intro-heading",
            { scale: 2.6, autoAlpha: 0.05, transformOrigin: "50% 50%", duration: 1, ease: "power2.in" },
            "<"
          )
          .to(
            ".projects-intro-guide",
            { autoAlpha: 0, y: -10, duration: 0.45, ease: "power2.in" },
            "<0.12"
          )
          .to(
            ".projects-transition-black",
            { autoAlpha: 1, duration: 0.5, ease: "none" },
            "<0.25"
          )
          .to(
            ".projects-transition-inner",
            { autoAlpha: 0, duration: 0.35, ease: "power1.out" },
            ">-0.12"
          );

        // Contact transition
        const contactTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".contact-transition-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.05,
            invalidateOnRefresh: true
          }
        });

        contactTimeline
          .fromTo(
            ".contact-transition-green",
            { scaleY: 0.14, autoAlpha: 0.7 },
            { scaleY: 1, autoAlpha: 1, duration: 0.6, ease: "none" }
          )
          .fromTo(
            ".contact-intro-heading",
            { xPercent: -100, autoAlpha: 0 },
            { xPercent: 0, autoAlpha: 1, duration: 1.25, ease: "power3.out" },
            ">-0.05"
          )
          .fromTo(
            ".contact-intro-guide",
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" },
            "<0.18"
          )
          .to(
            ".contact-intro-heading",
            { autoAlpha: 1, duration: 1.2, ease: "none" },
            ">"
          )
          .fromTo(
            ".contact-transition-black-focus",
            { autoAlpha: 0, scale: 0.05 },
            { autoAlpha: 1, scale: 20, duration: 2.15, ease: "power3.in" },
            ">+0.05"
          )
          .to(
            ".contact-intro-heading",
            { scale: 2.6, autoAlpha: 0.05, transformOrigin: "50% 50%", duration: 1, ease: "power2.in" },
            "<"
          )
          .to(
            ".contact-intro-guide",
            { autoAlpha: 0, y: -10, duration: 0.45, ease: "power2.in" },
            "<0.12"
          )
          .to(
            ".contact-transition-black",
            { autoAlpha: 1, duration: 0.5, ease: "none" },
            "<0.25"
          )
          .to(
            ".contact-transition-inner",
            { autoAlpha: 0, duration: 0.35, ease: "power1.out" },
            ">-0.12"
          );
      });
    } else {
      document.querySelectorAll<HTMLElement>(
        ".about-transition-scroll, .skills-transition-scroll, .experience-transition-scroll, .projects-transition-scroll, .contact-transition-scroll"
      ).forEach((section) => {
        section.style.display = "none";
      });

      document.querySelectorAll<HTMLElement>(
        ".about-content-left, .about-content-right"
      ).forEach((element) => {
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
