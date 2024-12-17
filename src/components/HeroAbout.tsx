import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-indigo-900 dark:bg-transparent text-white">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
      alt="Technology Background"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Content Container */}
  <div className="relative flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="">
      <h1 className="mb-6 text-4xl font-bold  sm:text-5xl lg:text-6xl">
        Transforming Ideas into
        <span className="block text-indigo-300">Digital Excellence</span>
      </h1>
      <p className="mx-auto max-w-2xl text-xl leading-relaxed text-purple-100">
        Since 2010, we've been at the forefront of digital innovation, 
        crafting sophisticated software solutions that empower businesses 
        to thrive in the digital age.
      </p>
    </div>
    {/* Lamp Section */}
    <div className=" flex justify-center mt-[-70px] lg:mb-0">
            {/* <Lamp /> */}
          </div>
  </div>
</section>

  );
};
