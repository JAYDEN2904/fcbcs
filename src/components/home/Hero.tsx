import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/IMG_2903.jpg';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="image of students"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 sm:pt-80 sm:pb-205 lg:px-10 flex min-h-screen">
        <div>
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
              className="rounded-md bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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

      {/* Bouncing Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}