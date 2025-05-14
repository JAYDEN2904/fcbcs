import React from 'react';
import { BookOpen, Users, Award, Code, Mic, Palette, Cross } from 'lucide-react';

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
      title: "Science & Math Club",
      description: "Explore scientific concepts and mathematical problem-solving",
      icon: Code,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Debating & Public Speaking",
      description: "Enhance communication and critical thinking",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Art & Music",
      description: "Express creativity through various art forms",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Scripture Union",
      description: "Deepen faith through Bible study and fellowship",
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
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
                  <div className="absolute bottom-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
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