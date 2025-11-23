import { Code, Smartphone, Palette, Megaphone } from 'lucide-react';
import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'AI Query', href: '#query' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, responsive, and high-performance websites built with modern frameworks like React, Next.js, and Tailwind CSS.',
    icon: Code
  },
  {
    id: 'app-dev',
    title: 'Web & Mobile Applications',
    description: 'Scalable mobile apps for iOS and Android, and robust web applications designed for enterprise-grade performance.',
    icon: Smartphone
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Crafting unique brand identities, logos, and visual languages that resonate with your target audience and stand out.',
    icon: Palette
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Data-driven SEO, social media strategies, and content marketing to elevate your online presence and drive growth.',
    icon: Megaphone
  }
];

export const COMPANY_INFO = {
  name: "TechNova IT Solutions",
  address: "123 Innovation Drive, Silicon Valley, CA 94025",
  email: "contact@technovait.com",
  phone: "+1 (555) 123-4567",
  mission: "To empower businesses through innovative digital solutions that drive efficiency, growth, and sustainable success in a rapidly evolving technological landscape.",
  vision: "To be the global leader in digital transformation, recognized for our commitment to excellence, creativity, and customer-centric value."
};
