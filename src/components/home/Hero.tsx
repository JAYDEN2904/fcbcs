import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Students studying"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Welcome to Faith Community Baptist Complex Of Schools
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-300">
          Nurturing minds, fostering creativity, and building tomorrow's leaders
          through exceptional education and innovative learning.
        </p>
        <div className="mt-10 flex gap-x-6">
          <Link
            to="/admissions"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Apply Now
          </Link>
          <Link
            to="/about"
            className="group flex items-center gap-2 text-sm font-semibold text-white"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}