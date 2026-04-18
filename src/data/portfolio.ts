import type {
  ContactItem,
  EducationItem,
  NavItem,
  ProjectItem,
  Skill,
  SocialLink,
  StatItem,
  TimelineEntry
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/sajeethan19", label: "GitHub", icon: "github" },
  { href: "https://www.linkedin.com/in/sajeethan/", label: "LinkedIn", icon: "linkedin" },
  { href: "https://www.instagram.com/sajeethan_gg/", label: "Instagram", icon: "instagram" },
  { href: "https://web.facebook.com/WoodySajee", label: "Facebook", icon: "facebook" }
];

export const skills: Skill[] = [
  {
    icon: "⚡",
    category: "Frontend",
    title: "UI and Web",
    tags: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    icon: "🔧",
    category: "Backend",
    title: "Server and APIs",
    tags: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "WebSockets"]
  },
  {
    icon: "🗄️",
    category: "Databases",
    title: "Data Layer",
    tags: ["PostgreSQL", "MongoDB", "SQL"]
  },
  {
    icon: "☁️",
    category: "Infrastructure",
    title: "DevOps and Cloud",
    tags: ["Linux", "Nginx", "Cloudflare", "PM2", "Git", "CI/CD"]
  },
  {
    icon: "💻",
    category: "Languages",
    title: "Code",
    tags: ["JavaScript", "Python", "C++", "Java"]
  },
  {
    icon: "🏗️",
    category: "Architecture",
    title: "System Design",
    tags: ["API Design", "Microservices", "Data Structures", "Algorithms"]
  }
];

export const experience: TimelineEntry[] = [
  {
    date: "Mar 2024 - Present",
    company: "Smartzi",
    role: "Software Engineer",
    points: [
      "Building scalable web apps with React.js and Node.js",
      "Designing RESTful APIs and real-time systems via WebSockets",
      "Integrating third-party services including WhatsApp Business API",
      "Optimizing application performance and system reliability",
      "Working in Agile cross-functional teams"
    ]
  },
  {
    date: "Jan 2023 - Jul 2023",
    company: "South Asia Gateway Terminal (SAGT)",
    role: "Trainee Electrical Engineer",
    points: [
      "Developed PLC-based monitoring systems integrated with web interfaces",
      "Built real-time dashboards for industrial system data visualization",
      "Worked with automation systems and industrial communication protocols"
    ]
  },
  {
    date: "Dec 2020 - Jun 2022",
    company: "Eureka Innovation",
    role: "Full Stack Web Developer",
    points: [
      "Developed web apps using React.js and Node.js",
      "Designed REST APIs and integrated ML models",
      "Built responsive UI components and optimized frontend performance"
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    number: "01",
    tag: "Personal - 2025",
    title: "Snapics - Self-Hosted Cloud",
    description:
      "A full-stack self-hosted cloud storage service with secure auth, file storage via MinIO, and a production-grade deployment using Nginx and Cloudflare.",
    stack: ["React.js", "Node.js", "PostgreSQL", "MinIO", "Nginx"]
  },
  {
    number: "02",
    tag: "Smartzi - 2024",
    title: "WhatsApp Business Integration",
    description:
      "Real-time messaging platform integrating WhatsApp Business API with a React frontend via WebSockets and MongoDB-backed persistent storage.",
    stack: ["Node.js", "WebSockets", "React.js", "MongoDB"]
  },
  {
    number: "03",
    tag: "SAGT Internship - 2023",
    title: "PLC Web Monitoring System",
    description:
      "Industrial real-time monitoring dashboard that pulls live PLC data into web-based visualizations, bridging physical machinery with software interfaces.",
    stack: ["Node-RED", "JavaScript", "PLC", "Dashboards"]
  },
  {
    number: "04",
    tag: "Eureka Innovation - 2021",
    title: "AirPlate - Food Allergen Detector",
    description:
      "ML-powered web app that detects food allergens from images in real-time, using TensorFlow.js in the browser with a clean, responsive UI.",
    stack: ["React.js", "TensorFlow.js", "ML", "Node.js"]
  }
];

export const education: EducationItem[] = [
  {
    year: "Jan 2026 - Present",
    degree: "MSc in Computer Science",
    stream: "Software Architecture",
    university: "University of Moratuwa, Sri Lanka",
    streamTone: "accent"
  },
  {
    year: "Jan 2020 - May 2024",
    degree: "BSc Engineering (Hons)",
    stream: "Electrical Engineering",
    university: "University of Moratuwa, Sri Lanka",
    streamTone: "accent2"
  },
  {
    year: "2018",
    degree: "G.C.E A/L",
    stream: "Physics A | Maths A | Chemistry B",
    university: "J/Jaffna Central College, Jaffna",
    streamTone: "muted"
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    text: "sajeethangg@gmail.com",
    href: "mailto:sajeethangg@gmail.com",
    iconText: "@"
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/sajeethan",
    href: "https://www.linkedin.com/in/sajeethan/",
    iconText: "in"
  }
];

export const aboutStats: StatItem[] = [
  { value: "4+", label: "Years Experience", tone: "accent" },
  { value: "10+", label: "Projects Shipped", tone: "accent2" },
  { value: "2", label: "Degrees", tone: "accent3" },
  { value: "∞", label: "Curiosity", tone: "accent" }
];
