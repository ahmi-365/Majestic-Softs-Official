import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
  color: string;
  bgColor: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  icon: Icon,
  title,
  description,
  number,
  color,
  bgColor
}) => {
  return (
    <div className="relative rounded-xl p-8 text-center bg-gray-50 dark:border-2 dark:bg-transparent p-8 text-center transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:border-gray-600">
      <div className={`absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full dark:border-2 ${bgColor}`}>
        <span className={`text-sm font-semibold ${color}`}>{number}</span>
      </div>
      <div className="mb-4 flex items-center gap-4">
        <Icon className={`h-6 w-6 ${color}`} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};
