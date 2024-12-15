import React from 'react';

const milestones = [
  {
    year: '2022',
    title: 'Majestic Softs Established',
    description: 'Began with a dedicated team of 5 visionary developers, igniting innovation.',
  },
  {
    year: '2023',
    title: 'Expansion Across Pakistan',
    description: 'Expanded operations to dynamic hubs in Okara and Lahore, strengthening our footprint.',
  },
  {
    year: '2023',
    title: 'Innovation Excellence Award',
    description: 'Honored for groundbreaking AI-driven solutions revolutionizing industries.',
  },
  {
    year: '2024',
    title: 'Enterprise Revolution',
    description: 'Launched an enterprise solutions division to meet complex global demands.',
  },
  {
    year: '2024',
    title: 'Worldwide Recognition',
    description: 'Ranked among the Top 10 Tech Companies globally by industry leaders.',
  },
];


export const Journey: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-transparent py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our Transformative Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-700 dark:text-indigo-300 text-gray-600">
          A decade of innovation, growth, and shaping tomorrow's digital future.          </p>
        </div>
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-indigo-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } items-center justify-center gap-8`}
                >
                  <div className="w-1/2 text-right">
                    <div
                      className={`inline-block rounded-lg p-6 shadow-lg bg-gray-50 dark:border-2 dark:bg-transparent p-8 text- transition-all hover:-translate-y-1 hover:shadow-lg hover:border-gray-600 ${
                        index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                      }`}
                    >
                      <span className="text-xl font-bold text-purple-600">
                        {milestone.year}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-400">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-500">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <div className="absolute h-4 w-4 rounded-full bg-purple-600" />
                  </div>
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};