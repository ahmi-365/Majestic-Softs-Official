import { useEffect, useState } from 'react';
import { BlogGrid } from '../components/BlogGrid/BlogGrid';
import { Header } from '../components/Header/Header';
import { fetchBlogPosts } from '../services/api';
import type { BlogPost } from '../types/blog';

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchBlogPosts();
      setPosts(data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Header />
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}