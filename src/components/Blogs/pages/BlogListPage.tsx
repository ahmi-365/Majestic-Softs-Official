import { BlogGrid } from '../components/blog/BlogGrid';
import { Header } from '../components/layout/Header';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { useBlogPosts } from '../hooks/useBlogPosts';

export function BlogListPage() {
  const { posts, loading, error } = useBlogPosts();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Header />
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}