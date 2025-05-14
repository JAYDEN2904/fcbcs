import React from 'react';
import { BookOpen, GraduationCap, Users, School } from 'lucide-react';

export default function AcademicDivisions() {
  const divisions = [
    {
      title: "Nursery & Kindergarten",
      subtitle: "Early Years (Ages 1.5 – 5 Years)",
      description: "In our Early Years program, learning is hands-on, joyful, and centered around play. Children are introduced to foundational concepts in language, numbers, art, and the world around them—developing social skills, motor abilities, and a love for learning.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: School,
      focusAreas: [
        "Phonics & Early Literacy",
        "Numeracy & Logic",
        "Bible Stories & Values",
        "Music, Art, and Movement",
        "Fine & Gross Motor Development",
        "Interactive Play-Based Learning"
      ]
    },
    {
      title: "Primary School",
      subtitle: "Basic 1 – 6 (Ages 6 – 11 Years)",
      description: "Our primary curriculum builds on foundational knowledge with structured instruction in core subjects, while nurturing creativity and confidence. Students are exposed to digital tools, project-based learning, and moral instruction rooted in Christian faith.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: BookOpen,
      subjects: [
        "English Language & Literature",
        "Mathematics",
        "Integrated Science",
        "Computing/ICT",
        "Christian Religious Studies",
        "Creative Arts",
        "Ghanaian Language",
        "French",
        "History & Civics",
        "Physical & Health Education"
      ]
    },
    {
      title: "Junior High School",
      subtitle: "JHS 1 – 3 (Ages 12 – 14 Years)",
      description: "Junior High is a time of transition and deeper learning. We focus on preparing students for the Basic Education Certificate Examination (BECE) while promoting leadership, critical thinking, and responsibility.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: Users,
      features: [
        "Preparation for national assessments (BECE)",
        "Peer mentoring and study groups",
        "Civic education and leadership training",
        "Access to resource centers and ICT labs",
        "Weekly devotions and character-building classes"
      ],
      subjects: [
        "Mathematics",
        "English Language",
        "Integrated Science",
        "Social Studies",
        "Religious & Moral Education",
        "Basic Design & Technology",
        "Information & Communication Technology",
        "Ghanaian Language",
        "French",
        "Career Technology"
      ]
    },
    {
      title: "Senior High School",
      subtitle: "SHS 1 – 3 (Ages 15 – 18 Years)",
      description: "At the SHS level, our students specialize in academic tracks that align with their career goals and passions. We maintain high academic standards, offer rigorous exam preparation, and support university and career readiness.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: GraduationCap,
      tracks: [
        "General Science – Physics, Chemistry, Biology, Elective Mathematics",
        "General Arts – Literature, Government, History, Christian Religious Studies",
        "Business – Accounting, Economics, Business Management, Costing",
        "Home Economics – Food & Nutrition, Management in Living",
        "Visual Arts – Graphic Design, Sculpture, Textiles"
      ],
      features: [
        "WASSCE-focused instruction",
        "Career counseling and mentorship",
        "Leadership roles in clubs and prefectship",
        "Lab experiments and research projects",
        "Mock exams, tutorials, and retreats"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Academic Divisions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive educational programs designed to nurture intellectual curiosity and academic excellence
          </p>
        </div>

        <div className="space-y-24">
          {divisions.map((division, index) => (
            <div
              key={division.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={division.image}
                  alt={division.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                  <division.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{division.title}</h3>
                  <p className="text-lg text-blue-600">{division.subtitle}</p>
                </div>
                <p className="text-gray-600">{division.description}</p>
                
                {division.focusAreas && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus Areas:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {division.focusAreas.map((area) => (
                        <li key={area} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {division.subjects && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {division.subjects.map((subject) => (
                        <li key={subject} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {division.tracks && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Tracks:</h4>
                    <ul className="space-y-2">
                      {division.tracks.map((track) => (
                        <li key={track} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {track}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {division.features && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Special Features:</h4>
                    <ul className="space-y-2">
                      {division.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 