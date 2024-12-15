import React from 'react';
import { Search, Code2, TestTube, Rocket, Headphones, BarChart } from 'lucide-react';
import { ProcessStep } from './Cards/ProcessStep';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Understanding your business needs and objectives through in-depth consultation.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-black'
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Crafting innovative solutions using cutting-edge technologies and best practices.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-black'
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'Rigorous quality assurance to ensure robust and reliable solutions.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-black'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Smooth and efficient deployment with minimal disruption.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-black'
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '24/7 technical support and maintenance for peace of mind.',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-black'
  },
  {
    icon: BarChart,
    title: 'Optimization',
    description: 'Continuous monitoring and optimization for peak performance.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-black'
  }
];

export const Process: React.FC = () => {
  return (
    <section className=" py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
            Our Development Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-700 dark:text-indigo-300 text-gray-600">
            A systematic approach to delivering exceptional results
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};