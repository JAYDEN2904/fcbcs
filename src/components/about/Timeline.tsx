import React from 'react';

const milestones = [
  {
    year: '1989',
    title: 'Foundation',
    description: 'Faith Community Baptist Complex of Schools was established with a vision to provide quality education.',
  },
  {
    year: '2005',
    title: 'Campus Expansion',
    description: 'Added new facilities including science labs and sports complex.',
  },
  {
    year: '2015',
    title: 'National Recognition',
    description: 'Received the National School of Excellence Award.',
  },
  {
    year: '2019',
    title: 'Digital Innovation',
    description: 'Launched state-of-the-art ICT laboratory and E-Library.',
  },
];

export default function Timeline() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A timeline of significant milestones in our school's history
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-24">
                    <span className="font-bold text-red-600">{milestone.year}</span>
                  </div>
                  <div className="flex-grow pl-8 border-l-2 border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}