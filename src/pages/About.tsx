import React from 'react';
import Timeline from '../components/about/Timeline';
import Staff from '../components/about/Staff';

export default function About() {
  return (
    <div className="pt-20">
      <div className="bg-blue-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Faith Community Baptist School
            </h1>
            <p className="mt-6 text-lg leading-8">
              Our mission is to provide exceptional education that empowers students to achieve their full potential and become responsible global citizens.
            </p>
          </div>
        </div>
      </div>
      <Timeline />
      <Staff />
    </div>
  );
}