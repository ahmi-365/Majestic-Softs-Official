import React from 'react';
import { Quote } from 'lucide-react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { testimonials } from './Testimonials';

export const TestimonialsAbout: React.FC = () => {{testimonials}
  return (
    <>
    <span className=''></span>
    <section className=" dark:bg-transparent  py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Quote className="mx-auto h-12 w-12 text-purple-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-600 dark:text-gray-200 sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-600 dark:text-purple-300 ">
            Hear from our valued partners about their experience working with us
          </p>
        </div>
        <div className="">
{/* Scrolling right */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          className="mb-7 mt-9"
        />      
          </div>
      </div>
    </section>
    </>
  );
};