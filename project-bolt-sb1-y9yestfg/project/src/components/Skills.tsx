import React from 'react';
import { Code, Database, Palette, Bot, Lightbulb, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={28} />,
      title: "Programming",
      skills: ["Python", "HTML/CSS", "JavaScript", "MySQL"]
    },
    {
      icon: <Bot className="text-purple-400" size={28} />,
      title: "AI & ML",
      skills: ["Machine Learning", "Chatbot Development", "Prompt Engineering", "AI Tools"]
    },
    {
      icon: <Palette className="text-pink-400" size={28} />,
      title: "Design",
      skills: ["UI/UX Design", "Figma", "User Experience", "Visual Design"]
    },
    {
      icon: <Database className="text-green-400" size={28} />,
      title: "Backend",
      skills: ["MySQL Database", "Python Backend", "Data Management", "System Design"]
    },
    {
      icon: <Briefcase className="text-orange-400" size={28} />,
      title: "Professional",
      skills: ["Freelancing", "Project Management", "Tech Roadmaps", "Client Communication"]
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={28} />,
      title: "Learning",
      skills: ["Self-Directed Learning", "Problem Solving", "Research Skills", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse skill set built through hands-on projects, self-directed learning, 
            and practical application of modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
            <span className="text-gray-300 font-medium">
              🚀 Currently exploring: React, Node.js, and Advanced ML Techniques
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;