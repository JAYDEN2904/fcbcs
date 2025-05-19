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
        {/* Director of School Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[650px] rounded-2xl overflow-hidden">
            <img
              src= "../../assets/IMG_2920.jpg"
              alt="Head of School"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Message from the Director of The School
            </h2>
            <blockquote className="text-lg text-gray-600 italic">
              "It gives me immense joy and pleasure to be with children. The happiness they share is just phenomenal. Their endless energy is contagious. I am blessed to be with them 
              each passing year and watching them move from one stage of basic learning to the other.
            </blockquote>
            <blockquote className="text-lg text-gray-600 italic">
              Learning is enjoyable and effortless for children but as adults we try to laboriously push information into their minds. Therefore, it is important to give them the education that suits their way of learning.
              At Faith Community Baptist Complex of Schools, we seek to incolcate into our children a kind of education that blends with spiritual and moral discipline. We constantly strive to create positive and stimulated learning environment in helping children 
              build their own mental strength. We provide them ample opportunities for work, play, to explore the world around them and also to fully develop their individual creatives.
            </blockquote>
            <blockquote className="text-lg text-gray-600 italic">
              Thanks to parents and guardians for entrusting their children into our capable hands. We appreciate their love, interest, enthusiasm, and contribution towrds their children's welfare."
            </blockquote>
            <div className="pt-4">
              <p className="font-semibold text-gray-900">Mrs. Kate Hand Oduro Osafo</p>
              <p className="text-gray-600">Director, FCBCS</p>
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white mb-4">
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