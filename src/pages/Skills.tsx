import React from 'react';
import { Code, Database, Bot, Wrench, Award, BookOpen, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={28} />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      icon: <Code className="text-green-400" size={28} />,
      title: "Web Technologies", 
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "React (Learning)", level: 60 }
      ]
    },
    {
      icon: <Bot className="text-purple-400" size={28} />,
      title: "AI & Emerging Technologies",
      skills: [
        { name: "Artificial Intelligence", level: 75 },
        { name: "Generative AI", level: 80 },
        { name: "Prompt Engineering", level: 85 },
        { name: "Machine Learning", level: 70 }
      ]
    },
    {
      icon: <Wrench className="text-orange-400" size={28} />,
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "MySQL Workbench", level: 80 },
        { name: "IBM Watson Assistant", level: 85 },
        { name: "Netlify", level: 75 }
      ]
    },
    {
      icon: <Database className="text-teal-400" size={28} />,
      title: "Core Competencies",
      skills: [
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 75 },
        { name: "Database Management", level: 85 },
        { name: "Problem Solving", level: 90 }
      ]
    },
    {
      icon: <Award className="text-yellow-400" size={28} />,
      title: "Professional Skills",
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Technical Communication", level: 85 },
        { name: "Agile Methodologies", level: 70 }
      ]
    }
  ];

  const currentlyLearning = [
    "Machine Learning",
    "Advanced JavaScript",
    "AI Application Development",
    "System Design Basics",
    "React Framework",
    "Node.js"
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical expertise developed through academic learning, hands-on projects, 
            and professional internship experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full border border-green-500/30">
                <Zap className="text-green-400" size={28} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Currently Learning</h2>
            <p className="text-gray-400">Always improving and learning new technologies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currentlyLearning.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="px-4 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                  <span className="text-green-300 font-medium text-sm">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">English</h3>
              <p className="text-gray-400">Professional Working Proficiency</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Hindi</h3>
              <p className="text-gray-400">Native Proficiency</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;