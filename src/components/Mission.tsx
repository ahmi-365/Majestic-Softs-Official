import React from 'react';
import { Code, Globe, Users, Rocket, Clipboard, Cloud } from 'lucide-react';

const missions = [
  {
    icon: Code,
    title: 'Innovative Development',
    description: 'We strive to create the most innovative software solutions by combining creativity and cutting-edge technology. Our goal is to develop products that are not just functional, but transformative, pushing the boundaries of what’s possible.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Our vision extends beyond borders. We aim to deliver software solutions that have a positive impact on a global scale, helping businesses navigate complex challenges with digital tools that transcend geographical boundaries.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'At the heart of our process lies a deep commitment to understanding and meeting our clients’ unique needs. We partner with businesses to co-create solutions that are tailored, efficient, and scalable for long-term success.',
  },
  {
    icon: Rocket,
    title: 'Accelerating Growth',
    description: 'We empower businesses to accelerate their growth by providing digital solutions that streamline operations and foster innovation. Our software drives productivity, enabling companies to scale efficiently and lead their industries.',
  },
  {
    icon: Clipboard,
    title: 'Agile Execution',
    description: 'With agility at our core, we adapt swiftly to changing demands and challenges. Our teams use cutting-edge project management methodologies to deliver high-quality solutions on time, every time, without compromise.',
  },
  {
    icon: Cloud,
    title: 'Future-Ready Infrastructure',
    description: 'Our commitment to future-proof technology ensures that all our solutions are built with scalability and flexibility in mind. We leverage the power of cloud-based systems, ensuring that our products grow with your business in the ever-changing digital landscape.',
  },
];



export const Mission: React.FC = () => {
  return (
    <section className=" py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
            Driving Digital Innovation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-700 dark:text-indigo-300 text-gray-600">
            Our commitment to excellence and innovation drives everything we do
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {missions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-gray-50 dark:border-2 dark:bg-transparent p-8 text-center transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:border-gray-600"
            >
              <item.icon className="mb-4 h-12 w-12 text-purple-600 " />
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-400">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};