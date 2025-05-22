import React from 'react';
import { FadeIn } from '../animations/AnimationComponents';

interface AdmissionRequirementsProps {
  department: string;
}

export default function AdmissionRequirements({ department }: AdmissionRequirementsProps) {
  const requirements = [
    {
      title: "Application Form",
      description: "Complete and submit the official application form with all required information."
    },
    {
      title: "Previous School Records",
      description: "Submit academic records and transcripts from previous school(s)."
    },
    {
      title: "Birth Certificate",
      description: "Provide a copy of the student's birth certificate."
    },
    {
      title: "Passport Photos",
      description: "Submit recent passport-sized photographs."
    },
    {
      title: "Assessment",
      description: "Complete the required entrance assessment and interview."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#E53935] sm:text-4xl mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To join our {department}, please ensure you meet the following requirements and prepare the necessary documents.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((requirement, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E53935]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#E53935] text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-gray-600">
                      {requirement.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/admissions"
            className="inline-block bg-[#E53935] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E53935]/90 transition-colors"
          >
            Learn More About Admissions
          </a>
        </div>
      </div>
    </section>
  );
} 