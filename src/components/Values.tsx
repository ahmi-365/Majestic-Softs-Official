import React from 'react';
import { Shield, Target, Zap, File, Lightbulb, Handshake  } from 'lucide-react';
import { ValueCard } from './Cards/ValueCard';



const values = [
  {
    icon: File,
    title: 'Technical Excellence',
    description: 'We maintain the highest standards of code quality and technical innovation, ensuring scalable and maintainable solutions.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Constantly pushing boundaries and exploring new technologies to solve complex challenges in unique ways.'
  },
  {
    icon: Handshake,
    title: 'Client Partnership',
    description: 'Building lasting relationships through transparent communication and dedicated collaboration.'
  },
  {
    icon: Shield,
    title: 'Security Focus',
    description: 'Implementing robust security measures to protect our clients\' valuable assets and data.'
  },
  {
    icon: Target,
    title: 'Result Driven',
    description: 'Focusing on delivering measurable results that directly impact our clients\' business objectives.'
  },
  {
    icon: Zap,
    title: 'Agile Methodology',
    description: 'Embracing adaptive planning and evolutionary development to ensure project success.'
  }
];


export const Values: React.FC = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-700 dark:text-indigo-300 text-gray-600">
            The principles that guide our work and shape our culture
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};