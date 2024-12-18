import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { fetchBlogPosts } from '../services/api';
import type { BlogPost as BlogPostType } from '../types/blog';

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const posts = await fetchBlogPosts();
        console.log('Posts fetched:', posts);
  
        if (!Array.isArray(posts)) {
          console.error('Invalid response format:', posts);
          throw new Error('API did not return an array');
        }
  
        const foundPost = posts.find((p) => p.slug === slug);
        console.log('Found post:', foundPost);
        setPost(foundPost || null);
      } catch (error) {
        console.error('Error loading post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
  
    loadPost();
  }, [slug]);
  

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{post.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{format(new Date(post.created_at), 'MMMM dd, yyyy')}</span>
              </div>
            </div>
          </div>
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
              src={`https://source.unsplash.com/1200x800/?blog`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-800">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}