import React from 'react';
import {
  Database,
  Cloud,
  Smartphone,
  Bot,
  Globe,
  Shield,
} from 'lucide-react';
import { ExpertiseCard } from './Cards/ExpertiseCard';

const expertiseAreas = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'],
    description: 'Scalable cloud infrastructure and microservices architecture.'
  },
  {
    icon: Database,
    title: 'Enterprise Software',
    technologies: ['Java', 'Spring', '.NET', 'Node.js'],
    description: 'Robust enterprise applications and system integration.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
    description: 'Cross-platform and native mobile applications.'
  },
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    technologies: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    description: 'Intelligent solutions and predictive analytics.'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    technologies: ['React', 'Angular', 'Vue.js', 'Next.js'],
    description: 'Modern web applications and progressive web apps.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    technologies: ['Penetration Testing', 'Security Audits', 'Compliance'],
    description: 'Comprehensive security solutions and consulting.'
  }
];

export const Expertise: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Comprehensive solutions across the technology spectrum
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
              technologies={area.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};