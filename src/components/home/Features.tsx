import React from 'react';
import { BookOpen, Heart, Users, Trophy, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Faith-Based Excellence",
      description: "Our education is rooted in Christian values, nurturing both academic excellence and spiritual growth. We create an environment where students can develop their faith while achieving their full potential.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
    },
    {
      title: "Holistic Development",
      description: "We focus on developing the whole child—intellectually, spiritually, emotionally, and socially. Our comprehensive approach ensures students grow into well-rounded individuals.",
      icon: Sparkles,
      image: "/IMG_2851.jpg"
    },
    {
      title: "Expert Educators",
      description: "Our dedicated team of qualified teachers brings passion and expertise to every classroom. They don't just teach—they mentor, inspire, and guide students towards success.",
      icon: Users,
      image: "../../assets/IMG_2834.jpg"
    },
    {
      title: "Rich Curriculum",
      description: "Our curriculum balances academic rigor with creative expression and critical thinking. Students engage in diverse learning experiences that prepare them for future success.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80"
    },
    {
      title: "Proven Success",
      description: "Our students consistently excel in national examinations and beyond. We take pride in their achievements and the strong foundation we provide for their future endeavors.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose FCBCS?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our school unique and why families trust us with their children's education
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 