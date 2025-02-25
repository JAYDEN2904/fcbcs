export interface NavItem {
  title: string;
  href: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}