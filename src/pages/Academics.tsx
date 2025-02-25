import React from 'react';
import ProgramCard from '../components/academics/ProgramCard';
import { Program } from '../types';

const programs: Program[] = [
  {
    id: 1,
    title: 'Pre School',
    description: 'A nurturing environment focused on early childhood development, fostering creativity, social skills, and curiosity through play-based learning.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Play-based learning activities',
      'Social and emotional development',
      'Introduction to basic literacy and numeracy',
      'Arts and music programs',
    ],
  },
  {
    id: 2,
    title: 'Basic School',
    description: 'Comprehensive curriculum preparing students for advanced academic challenges.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Core curriculum covering math, science, language arts, and social studies',
      'Science laboratories',
      'Interactive learning methods',
      'Technology and digital literacy integration',
    ],
  },
  {
    id: 3,
    title: 'Senior High School',
    description: 'An academically rigorous program preparing students for higher education and career paths.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Specialized eelctive courses',
      'Career and college counselling services',
      'Extracurricular activities',
      'Leadership opportunities',
    ],
  },
];

export default function Academics() {
  return (
    <div className="pt-20">
      <div className="bg-blue-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Academic Programs
            </h1>
            <p className="mt-6 text-lg leading-8">
              Discover our comprehensive educational programs designed to nurture
              intellectual curiosity and academic excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}