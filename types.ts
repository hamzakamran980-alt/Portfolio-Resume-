
export enum ExperienceCategory {
  Finance = 'Finance',
  Research = 'Research',
  CleanEnergy = 'Clean Energy',
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  category: ExperienceCategory[];
}

export interface Skill {
    name: string;
}

export interface Course {
    id: string;
    title: string;
}
