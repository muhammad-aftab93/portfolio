export type ExpertiseLevel = 'Mastery' | 'Expert' | 'Advanced';

export type SkillCategory =
  | 'Languages'
  | 'Frameworks & Libraries'
  | 'Cloud & DevOps'
  | 'Databases & Testing'
  | 'Industrial & Protocols'
  | 'AI & Agentic Development'
  | 'Architecture & Leadership';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: ExpertiseLevel;
  yearsOfExperience: number;
  coreStack: boolean;
  iconName?: string;
  description: string;
}

export interface CareerMilestone {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Advisory';
  summary: string;
  accomplishments: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export type ProjectCategory = 'All' | 'Cloud/Backend' | 'Frontend architectures' | 'Open Source';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Cloud/Backend' | 'Frontend architectures' | 'Open Source';
  featured: boolean;
  tagline: string;
  summary: string;
  architectureOverview: string;
  keyArchitecturalDecisions: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  metrics: string[];
  thumbnailGradient: string;
  architectureDiagramType?: 'kafka-pipeline' | 'micro-frontend' | 'distributed-cache' | 'signal-mesh';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  relationship: string;
  recommendationText: string;
  linkedinVerified: boolean;
  highlightPhrase: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormFieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ProfileMetadata {
  name: string;
  title: string;
  level: string;
  yearsOfExperience: number;
  location: string;
  availability: string;
  bio: string;
  avatarUrl?: string;
  phone?: string;
  education?: {
    degree: string;
    institution: string;
    period: string;
    location?: string;
    details?: string;
    thesis?: string;
    grade?: string;
  }[];
  services?: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    medium: string;
    email: string;
  };
  metrics: {
    label: string;
    value: string;
    caption: string;
  }[];
}
