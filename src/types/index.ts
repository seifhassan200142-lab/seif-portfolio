export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  detail?: string;
  date?: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  date: string;
  url?: string;
}
