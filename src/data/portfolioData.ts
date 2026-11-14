import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiBootstrap,
  SiJira,
  SiAxios,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdAccessibility, MdEmail } from "react-icons/md";
import { HiPhone, HiLocationMarker } from "react-icons/hi";

import type {
  PersonalInfo,
  SocialLink,
  ContactDetail,
  NavLink,
  SkillGroup,
  Project,
  Experience,
  Education,
  Certification,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Sidharth S",
  title: "Frontend Engineer",
  subtitle: "Hurix Digital | Chennai",
  location: "Chennai, Tamil Nadu",
  phone: "+91 7358501018",
  email: "sidharthspvt@gmail.com",
  summary:
    "I build and maintain React applications for Hurix Digital's education products — from real-time course authoring tools to accessibility validation workflows. My work sits at the intersection of component architecture, API integration, and WCAG-minded UI.",
  aboutDetail:
    "I studied Electrical & Electronics Engineering at Rajalakshmi Engineering College and moved into frontend engineering through hands-on product work. I care about interfaces that are fast, legible, and usable for more people — not just demos that look good in a screenshot.",
  heroTagline:
    "Production React for education products — component systems, REST and WebSocket integrations, and accessibility built into the UI from the start.",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sidharthsc01",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sidharths1",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:sidharthspvt@gmail.com",
    icon: MdEmail,
  },
];

export const contactDetails: ContactDetail[] = [
  {
    icon: MdEmail,
    label: "Email",
    value: "sidharthspvt@gmail.com",
    href: "mailto:sidharthspvt@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 7358501018",
    href: "tel:+917358501018",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Chennai, Tamil Nadu",
    href: null,
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "REST APIs", icon: SiAxios },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Jira", icon: SiJira },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
      { name: "WCAG 2.2", icon: MdAccessibility },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Dictera Course Builder",
    context: "Hurix Digital · Education platform",
    featured: true,
    problem:
      "Authors need to create and update course content without page reloads, with UI patterns that stay consistent across a large product surface.",
    contribution:
      "Frontend engineering on the course management experience: reusable React components, CRUD flows wired to REST APIs, and live updates over WebSockets so editors see changes as they work.",
    challenges:
      "Keeping state predictable across nested editors and real-time events, while preserving responsive layouts on smaller viewports.",
    highlights: [
      "Component library shared across course authoring screens",
      "WebSocket-driven updates alongside REST CRUD",
      "Tailwind-based responsive layouts",
    ],
    tags: ["React", "Tailwind CSS", "WebSockets", "REST"],
  },
  {
    title: "React Game Builder",
    context: "Hurix Digital · Interactive content",
    problem:
      "Instructional games need configurable UIs backed by services that expose game data and configuration through APIs.",
    contribution:
      "Built responsive React interfaces and integrated backend REST services — focusing on state management, form flows, and layouts that work across devices.",
    highlights: [
      "API-driven game configuration UI",
      "State management for multi-step builder flows",
      "Responsive layouts for tablet and desktop authors",
    ],
    tags: ["React", "REST APIs", "State management"],
  },
  {
    title: "Accessibility Validation Tool",
    context: "Hurix Digital · WCAG compliance",
    problem:
      "Manual accessibility audits are slow and inconsistent; teams need automated signals on semantic structure, ARIA usage, and contrast.",
    contribution:
      "Developed the React and Node tooling that scans pages, surfaces WCAG-oriented issues, and helps engineers fix problems before release — part of a broader quality workflow.",
    challenges:
      "Balancing depth of DOM analysis with clear, actionable reporting in the UI.",
    highlights: [
      "Automated checks across semantic HTML, ARIA, and contrast",
      "React UI for surfacing validation results",
      "Supports WCAG 2.2-oriented review workflows",
    ],
    tags: ["React", "Node.js", "WCAG 2.2", "Accessibility"],
  },
  {
    title: "HR Sourcing Bot",
    context: "Internal tooling",
    problem:
      "Recruiters needed faster ways to filter and shortlist candidates from large pools.",
    contribution:
      "Contributed to the React frontend for search, filters, and ranking views — integrating with backend services for real-time query results.",
    highlights: [
      "Search and filter UI connected to backend APIs",
      "Real-time result updates",
    ],
    tags: ["React", "Node.js", "Search UI"],
  },
];

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Hurix Digital",
    location: "Chennai",
    period: "June 2023 — Present",
    intro:
      "Frontend-focused engineer on education and publishing products — shipping React features with design, QA, and backend teams.",
    groups: [
      {
        title: "Product UI",
        items: [
          "Ship responsive React features for course and content authoring tools.",
          "Build reusable components so new screens inherit the same interaction patterns.",
          "Work with UI/UX on layout, hierarchy, and handoff from Figma.",
        ],
      },
      {
        title: "Accessibility & quality",
        items: [
          "Apply WCAG-minded patterns in components and page structure.",
          "Contribute to accessibility validation tooling used before release.",
          "Improve cross-browser behavior and reduce regressions on critical flows.",
        ],
      },
      {
        title: "Integration & performance",
        items: [
          "Connect UIs to REST APIs with Axios; use WebSockets where live updates matter.",
          "Profile rendering and loading behavior on heavy authoring screens.",
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.E. Electrical & Electronics Engineering",
    institution: "Rajalakshmi Engineering College",
    institutionUrl: "https://www.rajalakshmi.org/about#our-story",
    period: "2019 — 2023",
  },
];

export const certifications: Certification[] = [
  {
    name: "Claude Certified Developer — Foundations",
    issuer: "Anthropic",
    relevance: "primary",
    badge: true,
  },
  {
    name: "Complete Web Development Bootcamp (Udemy)",
    relevance: "primary",
  },
  {
    name: "UI/UX Design Figma Course",
    relevance: "primary",
  },
  {
    name: "Pega Certified Senior System Architect (CSSA) v8.7",
    relevance: "secondary",
  },
  {
    name: "Pega Certified System Architect (CSA) v8.7",
    relevance: "secondary",
  },
];

export const awards: string[] = [
  "Top Scorer in Capstone Evaluation — recognized by VP of Engineering for full-stack capstone work.",
];