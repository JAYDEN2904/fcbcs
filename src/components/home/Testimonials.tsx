import React from 'react';
import { TestimonialType } from '../../types';

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Parent',
    content: 'Faith Community Baptist School has provided my child with an exceptional education experience. The teachers are dedicated and the curriculum is challenging yet engaging.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Student',
    content: "The supportive environment and amazing facilities have helped me grow both academically and personally. I'm proud to be part of this school.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Alumni',
    content: 'The foundation I received at Faith Community Baptist School prepared me well for university and beyond. The memories and friendships I made here will last a lifetime.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hear from our students, parents, and alumni about their experiences at Excellence Academy.
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              >
                <div>
                  <p className="text-lg leading-6 text-gray-600">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full bg-gray-50"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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