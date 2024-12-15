import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialCard } from './Cards/TestimonialCard';

const testimonials = [
  {
    quote: "Their innovative approach to software development transformed our business operations completely. The team's expertise and dedication are unmatched.",
    author: "David Miller",
    position: "CTO, TechCorp Global",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
  },
  {
    quote: "Working with this team has been an absolute pleasure. They consistently deliver high-quality solutions while maintaining excellent communication.",
    author: "Jennifer Chang",
    position: "CEO, InnovateTech",
    company: "InnovateTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974"
  },
  {
    quote: "Their expertise in cloud solutions helped us scale our platform seamlessly. They're not just vendors; they're true technology partners.",
    author: "Marcus Johnson",
    position: "Head of Engineering",
    company: "CloudScale Inc",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Quote className="mx-auto h-12 w-12 text-indigo-600 opacity-20" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Hear from our valued partners about their experience working with us
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};