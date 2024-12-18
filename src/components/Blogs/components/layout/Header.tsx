import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <>
    <span className='contact'></span>
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <BookOpen className="w-8 h-8 text-purple-600" />
        <h1 className="text-4xl font-bold">Our Blog</h1>
      </div>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Discover our latest thoughts, ideas, and insights about technology,
        development, and innovation.
      </p>
    </div>
    </>
  );
}