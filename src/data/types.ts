import type { IconType } from "react-icons";

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  heroTagline: string;
  aboutDetail: string;
  resumeUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface ContactDetail {
  icon: IconType;
  label: string;
  value: string;
  href: string | null;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  note?: string;
}

export interface SkillGroup {
  category: string;
  description?: string;
  items: Skill[];
}

export interface Project {
  title: string;
  context: string;
  problem: string;
  contribution: string;
  challenges?: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface ExperienceGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  intro?: string;
  groups: ExperienceGroup[];
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
}

export interface Certification {
  name: string;
  relevance?: "primary" | "secondary";
  badge?: boolean;
  issuer?: string;
  credentialUrl?: string;
}