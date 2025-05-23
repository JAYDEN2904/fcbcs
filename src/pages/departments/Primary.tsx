import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../../components/animations/AnimationComponents';
import AdmissionRequirements from '../../components/admissions/AdmissionRequirements';
import ben from '../../../assets/IMG_2813.jpg'

export default function Primary() {
  const features = [
    "Strong foundation in core subjects",
    "Christian values and character development",
    "Interactive and engaging learning methods",
    "Regular assessments and progress tracking",
    "Extracurricular activities and sports"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#E53935] text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E53935]/90 to-[#E53935]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Primary Department
            </h1>
            <p className="text-xl max-w-3xl">
              Building a strong foundation for academic excellence and character development in a Christ-centered environment.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Message from Head of Department */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <img
                  src= {ben}
                  alt="Mr. Ben Boampong"
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
                Education is not the filling of a pail, but the lighting of a fire.” – William Butler Yeats
                </blockquote>
                <blockquote className="text-xl text-gray-600 italic">
                Our Primary School is a vibrant community where students begin to truly discover the world — and themselves — through learning.
                These foundational years are about more than academics. They are about nurturing curiosity, instilling values, and helping children become independent thinkers and responsible citizens. In every classroom, we emphasize literacy, numeracy, and problem-solving while encouraging creativity, teamwork, and resilience.
                Our curriculum is dynamic and interactive, incorporating hands-on projects, faith-based principles, and real-life applications. We create a learning atmosphere where students feel confident to ask questions, explore ideas, and learn from both successes and challenges.
                We work closely with families to ensure each child is supported and encouraged on their unique journey. We believe every child has incredible potential, and our goal is to help them unlock it — one joyful day at a time.
                </blockquote>
                <div className="text-gray-900">
                  <p className="font-semibold">Mr. Ben Boampong</p>
                  <p>Head of Primary Department</p>
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
                Our Primary Department provides a comprehensive education that balances academic rigor with character development. We focus on building strong foundations in core subjects while nurturing Christian values and personal growth.
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
      <AdmissionRequirements department="Primary Department" />

      {/* Call to Action */}
      <section className="py-16 bg-[#E53935] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Join Our Primary Department
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Give your child the gift of a quality education in a nurturing, Christ-centered environment.
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