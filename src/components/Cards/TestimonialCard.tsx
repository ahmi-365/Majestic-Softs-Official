import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  image,
}) => {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <blockquote className="flex-1">
        <p className="text-gray-600 leading-relaxed">"{quote}"</p>
      </blockquote>
      <div className="mt-8 flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">
            {position} • {company}
          </div>
        </div>
      </div>
    </div>
  );
};