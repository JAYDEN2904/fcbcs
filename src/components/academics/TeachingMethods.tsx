import React from 'react';
import { BookOpen, Users, Award, Cross, Heart, Shield } from 'lucide-react';
import girlsGuide from '../../../assets/IMG_2923.jpg'
import cadet from '../../../assets/IMG_2924.jpg'

export default function TeachingMethods() {
  const methods = [
    {
      title: "Project-Based Learning",
      description: "Students engage in hands-on projects that develop critical thinking and problem-solving skills.",
      icon: BookOpen
    },
    {
      title: "Peer Collaboration",
      description: "Group work and peer learning foster teamwork and communication skills.",
      icon: Users
    },
    {
      title: "Continuous Assessment",
      description: "Regular feedback and evaluation to track progress and guide improvement.",
      icon: Award
    },
    {
      title: "Scriptural Integration",
      description: "Biblical principles woven into subject matter for holistic learning.",
      icon: Cross
    }
  ];

  const clubs = [
    {
      title: "Girls Guide",
      description: "The Girls' Guide empowers young girls with life skills, confidence, and a strong sense of responsibility. Through teamwork, outdoor activities, and service projects, members learn to lead with compassion and uphold values such as honesty, respect, and resilience — all while building lasting friendships and memories.",
      icon: Heart,
      image: girlsGuide
    },
    {
      title: "Cadet",
      description: "The Cadet Corps instills discipline, leadership, and patriotism in students through structured training and teamwork. Cadets take part in drills, physical fitness, and civic education, preparing them to become responsible, confident, and community-minded individuals with a heart to serve.",
      icon: Shield,
      image: cadet
    },
    {
      title: "Scripture Union",
      description: "Scripture Union is a vibrant fellowship where students grow spiritually through Bible study, prayer, worship, and peer-led discussions. SU provides a safe and uplifting space for young people to deepen their faith, develop godly character, and support each other in their walk with Christ.",
      icon: Cross,
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teaching Methods */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Teaching & Assessment Methods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our student-centered approaches ensure effective learning and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((method) => (
              <div key={method.title} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white mb-4">
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enrichment Programs */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Clubs and Enrichment Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Supporting academic growth and personal development beyond the classroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <div key={club.title} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white">
                    <club.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{club.title}</h3>
                  <p className="text-gray-600">{club.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 