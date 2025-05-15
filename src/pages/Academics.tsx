import React from 'react';
import AcademicDivisions from '../components/academics/AcademicDivisions';
import TeachingMethods from '../components/academics/TeachingMethods';

export default function Academics() {
  return (
    <div className="pt-20">
      <div className="bg-[#E53935]  text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Academic Philosophy
            </h1>
            <p className="mt-6 text-lg leading-8">
              We believe that every child is uniquely gifted by God. Our teaching model combines academic 
              rigor with moral instruction to nurture intelligent, creative, and spiritually grounded 
              individuals. We aim to develop students who are not only ready for exams—but ready for life.
            </p>
          </div>
        </div>
      </div>

      <AcademicDivisions />
      <TeachingMethods />
    </div>
  );
}