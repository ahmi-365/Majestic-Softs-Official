import React from 'react';
import { Code2, Users, Building2, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: '100+',
    label: 'Projects Completed',
    description: 'Successfully delivered over 100 projects, transforming businesses through digital solutions.',
  },
  {
    icon: Users,
    value: '20+',
    label: 'Team Members',
    description: 'A dedicated team of over 20 talented professionals working collaboratively towards excellence.',
  },
  {
    icon: Building2,
    value: '10+',
    label: 'Global Offices',
    description: 'With offices across 10+ cities worldwide, we bring innovation to businesses on a global scale.',
  },
  {
    icon: Trophy,
    value: '25+',
    label: 'Industry Awards',
    description: 'Recognized for excellence, we have earned over 25 prestigious industry awards for innovation.',
  },
];

export const Stats: React.FC = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
          Driving Digital Innovation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-700 dark:text-indigo-300 text-gray-600 mb-[120px]">
          Our commitment to excellence and innovation drives everything we do, empowering businesses to thrive.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div    
            key={index}
            className="flex flex-col items-center space-y-2 rounded-lg bg-gray-50 dark:border-2 dark:bg-transparent p-8 text-center transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:border-gray-600 "
          >
            <stat.icon className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold font-bold text-gray-900 dark:text-gray-400">{stat.value}</span>
            <span className="text-center text-sm text-gray-600 dark:text-gray-300">{stat.label}</span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
