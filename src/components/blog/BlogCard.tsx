import React from 'react';
import { BlogPost } from '../../types';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </span>
        </div>
        <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
          {post.category}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{post.title}</h3>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-500">
          Read more →
        </button>
      </div>
    </div>
  );
}