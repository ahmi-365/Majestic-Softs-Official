import { useParams } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { formatDate } from '../lib/utils';

export function BlogPostPage() {
  const { slug } = useParams();
  const { posts, loading, error } = useBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!post) return <ErrorMessage message="Post not found" />;

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
                <span>{formatDate(post.created_at)}</span>
              </div>
            </div>
          </div>
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
            src={`https://blog.shockfit.hr/storage/${post.image}`}
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