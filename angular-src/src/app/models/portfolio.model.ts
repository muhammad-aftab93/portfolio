export type ExpertiseLevel = 'Mastery' | 'Expert' | 'Advanced';

export type SkillCategory = 'Frontend' | 'Backend & Architecture' | 'DevOps & Cloud' | 'Databases & Testing';

export type ProjectCategory = 'All' | 'Cloud/Backend' | 'Frontend architectures' | 'Open Source';

export interface SkillItem {
  readonly id: string;
  readonly name: string;
  readonly category: SkillCategory;
  readonly level: ExpertiseLevel;
  readonly yearsOfExperience: number;
  readonly coreStack: boolean;
  readonly description: string;
}

export interface CareerMilestone {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly type: 'Full-time' | 'Contract' | 'Advisory';
  readonly summary: string;
  readonly accomplishments: readonly string[];
  readonly technologies: readonly string[];
  readonly metrics: readonly {
    readonly label: string;
    readonly value: string;
  }[];
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly category: 'Cloud/Backend' | 'Frontend architectures' | 'Open Source';
  readonly featured: boolean;
  readonly tagline: string;
  readonly summary: string;
  readonly architectureOverview: string;
  readonly keyArchitecturalDecisions: readonly string[];
  readonly technologies: readonly string[];
  readonly githubUrl: string;
  readonly demoUrl: string;
  readonly metrics: readonly string[];
  readonly thumbnailGradient: string;
}

export interface TestimonialItem {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly avatarUrl: string;
  readonly relationship: string;
  readonly recommendationText: string;
  readonly linkedinVerified: boolean;
  readonly highlightPhrase: string;
  readonly date: string;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export interface ProfileMetadata {
  readonly name: string;
  readonly title: string;
  readonly level: string;
  readonly yearsOfExperience: number;
  readonly location: string;
  readonly availability: string;
  readonly bio: string;
  readonly socialLinks: {
    readonly github: string;
    readonly linkedin: string;
    readonly medium: string;
    readonly email: string;
  };
  readonly metrics: readonly {
    readonly label: string;
    readonly value: string;
    readonly caption: string;
  }[];
}
