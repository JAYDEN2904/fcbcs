import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/AnimationComponents.tsx';

export default function Home() {
  const stats = [
    { label: 'Years of Excellence', value: '20+' },
    { label: 'Students', value: '1000+' },
    { label: 'Qualified Teachers', value: '50+' },
    { label: 'Academic Excellence', value: '95%' },
  ];

  return (
    <div>
      <Hero />
      <Features />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#E53935] sm:text-4xl mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join a community of excellence where students thrive academically and spiritually.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#E53935] mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#E53935] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Join Our Community of Excellence
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Give your child the gift of quality education in a nurturing, Christ-centered environment.
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