import React from 'react';
import { StaffMember } from '../../types';
import kateHand from '../../../assets/IMG_2922.jpg'
import amaOduro from '../../../assets/IMG_2811.jpg'
import carolyn from '../../../assets/IMG_2928.jpg'
import ben from '../../../assets/IMG_2813.jpg'
import phillip from '../../../assets/IMG_2926.jpg'
import cecilia from '../../../assets/IMG_2895.jpg'

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'Mrs. Kate Hand Oduro Osafo',
    role: 'Director',
    image: kateHand,
    bio: 'Mrs. Kate Hand Oduro Osafo is a visionary leader with a deep commitment to academic excellence and holistic development. With a wealth of experience in school administration, she continues to steer the school with integrity, passion, and a student-first philosophy.',
  },
  {
    id: 2,
    name: 'Mrs. Evelyn Ama Oduro',
    role: 'Manager',
    image: amaOduro,
    bio: 'A dynamic administrator and lifelong learner, Mrs. Evelyn Ama Oduro brings structure and heart to school operations. She believes that strong systems and supportive environments are the backbone of student success.',
  },
  {
    id: 3,
    name: 'Mrs. Carolyn Oduro',
    role: 'Manager, Early Childhood',
    image: carolyn,
    bio: 'Mrs. Carolyn Oduro has a gentle yet firm approach to nurturing young minds. Her leadership in the early childhood department reflects her dedication to creating warm, safe, and imaginative learning spaces for our youngest learners.',
  },
  // {
  //   id: 4,
  //   name: 'Mr. Hillary Ampoh',
  //   role: 'Headmaster, Senior High School',
  //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  //   bio: 'Mr. Hillary Ampoh is a passionate educator who leads the Senior High School with clarity and compassion. His mission is to cultivate academic discipline and character in students, preparing them to excel in life beyond the classroom.',
  // },
  {
    id: 5,
    name: 'Mr. Ben Boampong',
    role: 'Headmaster, Basic School',
    image: ben,
    bio: 'With a calm presence and a love for foundational learning, Mr. Ben Boampong ensures that students in the basic school build strong academic roots. He champions curiosity, confidence, and kindness in every classroom.',
  },
  {
    id: 6,
    name: 'Mr. Phillip Addo',
    role: 'Headmaster, Junior High School',
    image: phillip,
    bio: 'Mr. Phillip Addo brings structure, innovation, and high expectations to the Junior High School. He works closely with students and teachers to foster independence, leadership, and readiness for the future.',
  },
  {
    id: 7,
    name: 'Mrs. Cecilia',
    role: 'Headmistress, Early Childhood',
    image: cecilia,
    bio: 'Mrs. Cecilia has a natural gift for working with young children, guiding them with patience and joy. Her leadership ensures that the early childhood program remains playful, purposeful, and rich in foundational learning. With years of experience in early education, she believes that every child deserves a safe, loving, and stimulating environment where curiosity is encouraged and confidence is built from the start.',
  },
];

export default function Staff() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Meet the dedicated educators shaping the future of Faith Community Baptist School
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {staffMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-70 w-full object-cover"
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