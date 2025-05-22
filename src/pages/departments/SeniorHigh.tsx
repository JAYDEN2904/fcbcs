import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../../components/animations/AnimationComponents';
import AdmissionRequirements from '../../components/admissions/AdmissionRequirements';
import ben from '../../../assets/IMG_2813.jpg'

export default function SeniorHigh() {
  const features = [
    "Rigorous WASSCE preparation",
    "Advanced science and mathematics programs",
    "University and career counseling",
    "Leadership and character development",
    "Extensive extracurricular opportunities"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#E53935] text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E53935]/90 to-[#E53935]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Senior High School Department
            </h1>
            <p className="text-xl max-w-3xl">
              Preparing students for university success and future leadership through advanced education and character development.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Message from Head of Department */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-[650px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
                  alt="Mr. Emmanuel Owusu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white">
                  <span className="text-xl">👨‍🏫</span>
                </div>
                <h2 className="text-3xl font-bold text-[#E53935]">
                  Message from the Head of Department
                </h2>
                <blockquote className="text-xl text-gray-600 italic">
                  "John Mensah Oduro for his foresight in establishing this institution and his quest to shape the future os our nation using education as the foundation. We continue to execute our code mandate by offering quality education to students from all backgrounds and academic standards.
                  Our hardworking teachers have over the years not relented on their oars to give off their best even under trying circumstances. Candidates presented for the WASSCE examination have proven themselves strong against all odds and produced good grades necessary to qualify them for universities and other professional institutions.
                  It is always a pleasant experience to observe students who have been educated under our tutelage gain admission to various tertiary institutions after successfully going through our grooming and scrutiny.
                  At Faith Community Baptist Senior High School, we focus on individual student's academic progression and potential. No student is left out in our academic grooming process. From the day of admission to the last day a student leaves the school,
                  frantic measures are taken term after term to prepare them adequately for their final examination. We pride ourselves with the fact that, our final WASSCE results have been impressive and this has culminated into a study increase in enrollment especially in the General Arts department. 
                  Our best advertisement continues to be the various testimonies given about us by parents and students who have experienced our excellent services."
                </blockquote>
                <div className="text-gray-900">
                  <p className="font-semibold">Mr. Hillary Ampoh</p>
                  <p>Head of Senior High School Department</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#E53935] sm:text-4xl mb-4">
                About the Department
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Senior High School Department provides a challenging and supportive environment where students develop academically, socially, and spiritually. We prepare them for the West African Senior School Certificate Examination (WASSCE) while nurturing their leadership potential and Christian character.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E53935]/10 flex items-center justify-center">
                        <span className="text-[#E53935] text-xl">✨</span>
                      </div>
                      <p className="text-gray-900 font-medium">{feature}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <AdmissionRequirements department="Senior High Department" />

      {/* Call to Action */}
      <section className="py-16 bg-[#E53935] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Begin Your Journey to University Success
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our Senior High School program and prepare for a successful future in a supportive, Christ-centered environment.
            </p>
            <a
              href="/admissions"
              className="inline-block bg-white text-[#E53935] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Apply Now
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
} 