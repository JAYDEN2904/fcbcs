import React from 'react';
import { Award, GraduationCap, Trophy, Users } from 'lucide-react';

export default function Message() {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Excellent performance in BECE and WASSCE",
      icon: GraduationCap
    },
    {
      title: "University Admissions",
      description: "Alumni accepted into top tertiary institutions",
      icon: Award
    },
    {
      title: "Competition Success",
      description: "National and regional awards in sports, debate, and STEM",
      icon: Trophy
    },
    {
      title: "Community Impact",
      description: "Community service projects led by our students",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Head of School Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Head of School"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Message from the Director of School
            </h2>
            <blockquote className="text-lg text-gray-600 italic">
              "At FCBCS, we see each student as a divine gift—full of purpose, potential, and promise. 
              Our educators are not just teachers; they are mentors and role models who guide our 
              students with compassion and excellence. We aim to graduate students who are not only 
              academically equipped but morally sound, spiritually aware, and socially responsible."
            </blockquote>
            <div className="pt-4">
              <p className="font-semibold text-gray-900">[Head of School Name]</p>
              <p className="text-gray-600">Head of School, FCBCS</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our success and impact in education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
                <achievement.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 