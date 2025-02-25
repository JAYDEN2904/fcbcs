import React from 'react';
import { StaffMember } from '../../types';

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'Mrs. Kate Hand Oduro Osafo',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Dr. Wilson brings over 20 years of educational leadership experience.',
  },
  {
    id: 2,
    name: 'Mrs. Evelyn Ama Oduro',
    role: 'Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Leading our science department with innovative teaching methods.',
  },
  {
    id: 3,
    name: 'Mrs. Carolyn Oduro',
    role: 'Manager, Early Childhood',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Fostering creativity and artistic expression in our students.',
  },
  {
    id: 4,
    name: 'Mr. Hillary Ampoh',
    role: 'Headmaster, Senior High School',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Fostering creativity and artistic expression in our students.',
  },
  {
    id: 5,
    name: 'Mr. Ben Boampong',
    role: 'Headmaster, Basic School',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Fostering creativity and artistic expression in our students.',
  },
  {
    id: 6,
    name: 'Mr. Phillip Addo',
    role: 'Headmaster, Junior High School',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Fostering creativity and artistic expression in our students.',
  },
  {
    id: 7,
    name: 'Mrs. Cecilia',
    role: 'Headmistress, Early Childhood',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Fostering creativity and artistic expression in our students.',
  },
];

export default function Staff() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Meet the dedicated educators shaping the future of Excellence Academy
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {staffMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-600">{member.role}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}