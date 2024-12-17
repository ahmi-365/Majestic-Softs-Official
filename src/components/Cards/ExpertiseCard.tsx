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
    <div className="rounded-xl dark:border-2  hover:border-gray-700 p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
<div className="flex justify-center">
  <Icon className="mb-4 h-8 w-8 text-purple-600" />
</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="rounded-full px-3 py-1 text-sm text-purple-900 bg-gray-100 dark:text-purple-900 dark:bg-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};