import React from 'react';
import BlogCard from '../components/blog/BlogCard';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'The Importance of STEM Education in Modern Learning',
    author: 'Dr. Jennifer Wilson',
    date: 'March 15, 2024',
    excerpt: 'Exploring how STEM education prepares students for future challenges...',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Education',
  },
  {
    id: 2,
    title: 'Fostering Creativity Through Arts Programs',
    author: 'Sarah Martinez',
    date: 'March 10, 2024',
    excerpt: 'How our arts program helps develop well-rounded students...',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Arts',
  },
  {
    id: 3,
    title: 'Student Success Stories: Class of 2024',
    author: 'Michael Chen',
    date: 'March 5, 2024',
    excerpt: 'Celebrating the achievements of our graduating class...',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Student Life',
  },
];

export default function Blog() {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              School Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay updated with the latest news, events, and insights from our
              school community.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}