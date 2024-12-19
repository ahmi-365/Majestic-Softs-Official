import React from 'react';
import {
  Database,
  Cloud,
  Smartphone,
  Globe,
  Component,
  ChartLine,
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
    technologies: ['Java', 'Unity', '.NET'],
    description: 'Robust enterprise applications and system integration.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    technologies: ['React Native', 'Flutter/Dart', 'XML', 'Java', 'Kotlin', 'Xamarine'],
    description: 'Cross-platform and native mobile applications.'
  },
  {
    icon: Component,
    title: 'Ui/UX Design',
    technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Rive'],
    description: 'Design beautiful user interfaces and experiences using the best tools in the industry.'

  },
  {
    icon: Globe,
    title: 'Web Applications',
    technologies: ['React','Next.js','PHP Laravel/LiveWire', 'MERN | MEAN','WordPress','Joomla','Shopify' ],
    description: 'Modern web applications and progressive web apps.'
  },
  {
    icon: ChartLine,
    title: 'SEO Services',
    technologies: ['Seo Audits', 'Analysis', 'Keyword Research', 'Digital Marketing Strategy'],
    description: 'Comprehensive security solutions and consulting.'
  }
];

export const Expertise: React.FC = () => {
  return (
    <section className=" py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-200 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
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