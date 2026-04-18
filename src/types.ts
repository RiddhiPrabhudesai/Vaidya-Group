export type ProjectStatus = 'Ongoing' | 'Upcoming' | 'Completed';
export type ProjectCategory = 'Living' | 'Investment' | 'Future Growth';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory[];
  location: string;
  image: string;
  units?: number;
  highlight?: string;
  configuration?: string;
  deliveredLine?: string;
  timeline?: { time: string; place: string; desc: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  story: {
    before: string;
    decision: string;
    after: string;
  };
  quote: string;
}

export type Page = 'home' | 'projects' | 'project-detail' | 'about' | 'about-us' | 'services' | 'testimonials' | 'contact' | 'privacy-policy' | 'accessibility';
