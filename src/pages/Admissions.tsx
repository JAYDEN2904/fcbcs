import React from 'react';
import FAQSection from '../components/admissions/FAQSection';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Admissions() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <div className="bg-[#E53935] text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Join Our Community
            </h1>
            <p className="mt-6 text-lg leading-8">
              Begin your journey at Faith Community Baptist Complex of Schools. We welcome students who are
              eager to learn, grow, and contribute to our diverse community.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                How to Apply
              </h2>
              <div className="mt-8 space-y-8">
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#E53935] text-white">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Submit Application
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Complete our online application form with all required
                    information and documentation.
                  </p>
                </div>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#E53935] text-white">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Assessment
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Schedule and complete the required entrance assessment and
                    interview.
                  </p>
                </div>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#E53935] text-white">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Decision & Enrollment
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Receive admission decision and complete enrollment process if
                    accepted.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => navigate('/admissions/apply')}
                  className="inline-flex items-center gap-2 rounded-md bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                >
                  Start Application
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-8">
                <FAQSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}