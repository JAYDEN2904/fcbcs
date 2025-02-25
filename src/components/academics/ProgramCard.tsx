import React from 'react';
import { Program } from '../../types';
import { Check } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
        <p className="mt-2 text-gray-600">{program.description}</p>
        <ul className="mt-4 space-y-2">
          {program.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}