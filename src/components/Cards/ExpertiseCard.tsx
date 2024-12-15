import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon: Icon,
  title,
  description,
  technologies,
}) => {
  return (
    <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <Icon className="mb-4 h-8 w-8 text-indigo-600" />
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};