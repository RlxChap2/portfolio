export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'development' | 'security';
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedDate: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId: string;
  verificationUrl?: string;
  category: 'development' | 'security';
  imageUrl?: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'security' | 'tools' | 'soft';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}

export type Theme = 'developer' | 'security';