import React from 'react';
import { Target, Heart, Zap, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "Goal-Oriented",
      description: "Focused on building real-world tech skills and preparing for a successful CSE career"
    },
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: "Passionate Learner",
      description: "Self-motivated to master new technologies through structured 30-day roadmaps"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Innovation-Driven",
      description: "Building AI-powered solutions and exploring modern frameworks & tools"
    },
    {
      icon: <BookOpen className="text-green-400" size={24} />,
      title: "Continuous Growth",
      description: "Always learning, practicing, and building projects to strengthen technical expertise"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Turning Curiosity into Code
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Akrama Nadim, a recent Class 12 graduate with a passion for technology that goes beyond textbooks. 
              With a background in PCM and Computer Science, I'm now preparing to dive deeper into the world of 
              Computer Science Engineering.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              What sets me apart is my hands-on approach to learning. Instead of just studying theory, I build 
              real projects, explore AI chatbot development, and practice freelancing workflows. I believe in 
              learning by doing, and I'm constantly challenging myself with new technologies and frameworks.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My goal is to become a skilled full-stack developer and AI specialist who can build products 
              that make a real difference. I'm particularly interested in the intersection of machine learning, 
              web development, and user experience design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium">
                Future CSE Student
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-medium">
                AI Enthusiast
              </span>
              <span className="px-4 py-2 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full text-sm font-medium">
                Freelancer-Ready
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-gray-700/50 border border-gray-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;