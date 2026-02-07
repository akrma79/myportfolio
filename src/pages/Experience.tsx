import React from 'react';
import { Briefcase, Users, Code, Trophy, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <Briefcase className="text-blue-400" size={24} />,
      title: "Software Development Intern",
      company: "Scaler Young Innovators (YIIC 3rd Edition)",
      duration: "2025",
      type: "Remote",
      description: "Completed a 10-week intensive internship focused on real-world problem-solving and innovation challenges.",
      highlights: [
        "Worked on real-world coding challenges",
        "Practiced agile methodologies", 
        "Collaborated on technical problem solving",
        "Strengthened algorithmic thinking and development skills"
      ]
    }
  ];

  const leadership = [
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "Team Lead — ISRO Model Project",
      organization: "BIT Mesra Science Exhibition",
      project: "Vikram Lander & Pragyan Rover Model Design",
      year: "2024",
      achievements: [
        "Led design of Vikram Lander & Pragyan Rover model",
        "Demonstrated engineering creativity",
        "Managed team coordination", 
        "Delivered successful science exhibition presentation"
      ]
    }
  ];

  const certifications = [
    {
      title: "Build Your First AI Chatbot",
      issuer: "IBM",
      year: "2024",
      type: "AI Development"
    },
    {
      title: "Introduction to Prompt Engineering for Generative AI",
      issuer: "LinkedIn Learning",
      year: "2024",
      type: "AI/ML"
    },
    {
      title: "Generative AI Skills for Creative Content: Opportunities, Issues & Ethics",
      issuer: "LinkedIn Learning",
      year: "2024",
      type: "AI Ethics"
    },
    {
      title: "AI Productivity Hacks to Reimagine Your Workday & Career",
      issuer: "LinkedIn Learning",
      year: "2024",
      type: "AI Productivity"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Leadership
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Professional Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-full border border-blue-500/30">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">{exp.duration}</span>
                      <p className="text-gray-400 text-sm mt-1">{exp.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Leadership & Activities</h2>
          {leadership.map((lead, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                  {lead.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{lead.title}</h3>
                      <p className="text-yellow-400 font-medium">{lead.organization}</p>
                      <p className="text-gray-400">{lead.project}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">{lead.year}</span>
                  </div>
                  <ul className="space-y-2">
                    {lead.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Certifications</h2>
            <p className="text-gray-400">Continuous learner in AI and software development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-700/50 border border-gray-600 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                    <Award className="text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{cert.title}</h3>
                    <p className="text-blue-400 text-sm font-medium">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs">{cert.type}</span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar size={12} className="mr-1" />
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;