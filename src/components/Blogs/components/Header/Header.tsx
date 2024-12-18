import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold">Our Blog</h1>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Discover our latest thoughts, ideas, and insights about technology,
        development, and innovation.
      </p>
    </div>
  );
}