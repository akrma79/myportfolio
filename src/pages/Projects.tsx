import React from 'react';
import { ExternalLink, Github, Globe, Utensils, Bot, Award, CheckCircle, Clock, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Globe className="text-blue-400" size={32} />,
      title: "Personal Portfolio with AI Chatbot",
      description: "A fully responsive developer portfolio website designed to showcase skills, projects, and technical growth. Integrated IBM Watson Assistant to automate visitor support and capture user queries with interactive UI components and accessibility optimization.",
      technologies: ["HTML", "CSS", "JavaScript", "IBM Watson Assistant", "Netlify"],
      highlights: [
        "Interactive UI components",
        "Mobile responsive design", 
        "Accessibility optimization",
        "Real deployment experience",
        "AI-powered visitor support",
        "Custom dialog flows"
      ],
      status: "Completed",
      statusIcon: <CheckCircle className="text-green-400" size={16} />,
      color: "from-blue-500 to-cyan-500",
      liveUrl: "http://akama.in/",
      featured: true
    },
    {
      icon: <Utensils className="text-green-400" size={32} />,
      title: "Nutriguide (Personalized Diet Planner)",
      description: "A personalized diet planning and calorie tracking application that recommends meals based on user goals. Features real-time calorie tracking, food database search, macro nutrient calculations, and relational database design.",
      technologies: ["Python", "MySQL", "HTML", "CSS", "JavaScript"],
      highlights: [
        "Real-time calorie tracking",
        "Food database search",
        "Macro nutrient calculations", 
        "Personalized meal recommendations",
        "Relational database design",
        "User-friendly interface"
      ],
      status: "Under Refinement",
      statusIcon: <Clock className="text-blue-400" size={16} />,
      color: "from-green-500 to-teal-500",
      featured: true
    }
  ];

  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={24} />,
      title: "Software Internship",
      description: "Completed 10-week intensive internship at Scaler Young Innovators",
      year: "2025"
    },
    {
      icon: <Award className="text-blue-400" size={24} />,
      title: "AI Certifications",
      description: "IBM AI Chatbot & LinkedIn Learning Generative AI certifications",
      year: "2024"
    },
    {
      icon: <Award className="text-green-400" size={24} />,
      title: "Leadership Experience",
      description: "Team Lead for ISRO Model Project at BIT Mesra Science Exhibition",
      year: "2024"
    }
  ];

  const projectStats = [
    { label: "Projects Completed", value: "2+", color: "text-blue-400" },
    { label: "Technologies Used", value: "10+", color: "text-green-400" },
    { label: "Lines of Code", value: "5000+", color: "text-purple-400" },
    { label: "GitHub Commits", value: "100+", color: "text-yellow-400" }
  ];

  return (
    <section className="py-20 bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects & Achievements
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world projects that demonstrate my technical skills and passion for building innovative solutions
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-700/50 border border-gray-600 rounded-lg p-6">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gray-700 border border-gray-600 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 ${project.featured ? 'ring-2 ring-blue-500/30' : ''}`}>
                {project.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-center">
                    <div className="flex items-center justify-center text-white text-sm font-medium">
                      <Star className="mr-2" size={16} />
                      Featured Project
                    </div>
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    {project.icon}
                    <span className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {project.statusIcon}
                      <span className="ml-1">{project.status}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        View Live
                      </a>
                    )}
                    <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
                      <Github size={16} className="mr-1" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-700/50 border border-gray-600 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Professional Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-gray-800/50 border border-gray-600 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                <span className="text-xs text-gray-500">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="bg-gray-700/50 border border-gray-600 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Currently Learning</h2>
          <p className="text-center text-gray-400 mb-6">Always improving and learning new technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-medium">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium">
              Advanced JavaScript
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-full text-sm font-medium">
              AI Application Development
            </span>
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full text-sm font-medium">
              System Design Basics
            </span>
            <span className="px-4 py-2 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full text-sm font-medium">
              React Framework
            </span>
            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-sm font-medium">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;