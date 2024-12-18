import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-white hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={`https://blog.shockfit.hr/storage/${post.image}`}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 line-clamp-2 mb-4">{post.content}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{post.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{format(new Date(post.created_at), 'MMM dd, yyyy')}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}