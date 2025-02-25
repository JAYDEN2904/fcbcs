import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsItem } from '../../types';

const news: NewsItem[] = [
  {
    id: 1,
    title: 'Excellence Academy Wins National Science Competition',
    date: 'March 15, 2024',
    excerpt: 'Our students showcased exceptional talent and innovation...',
    image: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
  },
  {
    id: 2,
    title: 'New STEM Lab Opening Ceremony',
    date: 'March 10, 2024',
    excerpt: 'State-of-the-art facilities to enhance learning experience...',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
  },
  {
    id: 3,
    title: 'Annual Arts Festival Announcement',
    date: 'March 5, 2024',
    excerpt: 'Join us for a celebration of creativity and talent...',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
  },
];

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prev = () => {
    setCurrentIndex((current) => (current === 0 ? news.length - 1 : current - 1));
  };

  const next = () => {
    setCurrentIndex((current) => (current === news.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Latest News & Events
        </h2>

        <div className="relative mt-10">
          <div className="relative h-96 overflow-hidden rounded-lg">
            {news.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm">{item.date}</p>
                  <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-200">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}