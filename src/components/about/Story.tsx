import React from 'react';
import { Heart, Target, Lightbulb, Shield, Users, Star } from 'lucide-react';

export default function Story() {
  const coreValues = [
    {
      title: "Faith",
      description: "We are rooted in Christian doctrine and trust in God's guidance in all we do.",
      icon: Heart
    },
    {
      title: "Excellence",
      description: "We pursue the highest standards in academics, character, and conduct.",
      icon: Star
    },
    {
      title: "Integrity",
      description: "We teach and model honesty, accountability, and moral uprightness.",
      icon: Shield
    },
    {
      title: "Service",
      description: "We train our students to serve their communities and live a life of purpose.",
      icon: Target
    },
    {
      title: "Community",
      description: "We foster unity, inclusiveness, and mutual respect among all stakeholders.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Welcome to Faith Community Baptist Complex of Schools
            </h2>
            <p className="text-lg text-gray-600">
              At Faith Community Baptist Complex of Schools, we don't just teach—we nurture hearts, 
              inspire minds, and raise God-fearing leaders who are prepared to excel academically 
              and impact the world with integrity.
            </p>
            <p className="text-lg text-gray-600">
              Founded with a mission to provide holistic, Christ-centered education, FCBCS has become 
              a beacon of academic excellence and moral discipline in our community. Our commitment 
              is not just to educate but to develop the whole child—spiritually, intellectually, 
              socially, and emotionally.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src= "../../assets/IMG_2838.jpg"
              alt="School Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a leading Christian educational institution known for academic distinction, 
              godly character, and transformational leadership.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide a high-quality, Christ-centered education that empowers students with 
              the knowledge, values, and skills they need to succeed in life and fulfill their 
              God-given potential.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at FCBCS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E53935] text-white mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 