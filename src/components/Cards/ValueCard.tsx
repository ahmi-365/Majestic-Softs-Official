import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-xl p-8 shadow-lg hover:shadow-xl bg-gray-50 dark:border-2 dark:bg-transparent text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:border-gray-600 flex flex-col items-center">
    <div className="mb-4 flex items-center justify-center">
      <Icon className="h-8 w-8 text-purple-600" />
    </div>
    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-400">{title}</h3>
    <p className="text-gray-600 dark:text-gray-500">{description}</p>
  </div>
  
  );
};