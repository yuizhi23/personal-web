export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface OrganizationItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  date: string;
}

export interface AchievementItem {
  title: string;
  date: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}