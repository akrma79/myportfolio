import React from 'react';
import { Target, Code2, Zap, BookOpen, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "Problem Solver",
      description: "Building practical AI and web applications that address real-world challenges"
    },
    {
      icon: <Code2 className="text-green-400" size={24} />,
      title: "Technical Excellence",
      description: "Strong foundation in programming, AI development, and software engineering practices"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Innovation Focus",
      description: "Passionate about emerging technologies, AI applications, and continuous learning"
    },
    {
      icon: <BookOpen className="text-green-400" size={24} />,
      title: "Industry Ready",
      description: "Completed software internship and actively seeking opportunities to apply skills"
    }
  ];

  const education = [
    {
      institution: "Malla Reddy University",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      period: "Aug 2025 – Aug 2029",
      status: "1st Year",
      location: "Hyderabad, India"
    },
    {
      institution: "DAV Nandraj Public School",
      degree: "Senior Secondary Education – Mathematics & Computer Science",
      period: "2023 – 2025",
      status: "Completed",
      location: "India"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Professional Summary
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am a motivated B.Tech Computer Science student with a strong foundation in programming and 
              emerging technologies. I am passionate about software development, artificial intelligence, 
              and continuous learning.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I enjoy building practical applications such as AI chatbots and personalized systems that 
              improve user experience and solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I am currently expanding my knowledge in Machine Learning and advanced web technologies while 
              seeking opportunities to apply my skills in real projects.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium">
                B.Tech CSE Student
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-medium">
                AI Developer
              </span>
              <span className="px-4 py-2 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full text-sm font-medium">
                Software Intern
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-gray-700/50 border border-gray-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-700/50 border border-gray-600 p-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-500/20 rounded-full border border-blue-500/30 mr-4">
                      <GraduationCap className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-blue-400 font-medium">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm">{edu.status}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <span className="mr-4">{edu.period}</span>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {edu.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="bg-gray-700/50 border border-gray-600 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Strengths & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Strengths</h3>
              <div className="space-y-2">
                {['Learning Mindset', 'Analytical Thinking', 'Problem Solving', 'Collaboration', 'Effective Communication', 'Adaptability'].map((strength, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Interests</h3>
              <div className="space-y-2">
                {['Software Development', 'Artificial Intelligence', 'Machine Learning', 'Web Development', 'Database Systems', 'Open Source Contribution'].map((interest, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;