import React from 'react';
import { ExternalLink, Github, Smartphone, Plane, Bot, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Smartphone className="text-blue-400" size={32} />,
      title: "Mobile Price Prediction System",
      description: "Built a machine learning model to predict mobile phone prices based on specifications using Python and various ML algorithms. Achieved high accuracy through feature engineering and model optimization.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
      status: "Completed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Plane className="text-green-400" size={32} />,
      title: "Flight Management System",
      description: "Developed a comprehensive flight management system with booking, scheduling, and passenger management features using Python and MySQL database for data persistence.",
      technologies: ["Python", "MySQL", "Database Design", "System Architecture"],
      status: "Completed",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Bot className="text-purple-400" size={32} />,
      title: "AI-Powered Chatbots",
      description: "Created intelligent chatbots for business websites with natural language processing capabilities. Focused on user engagement and automated customer support solutions.",
      technologies: ["AI/ML", "NLP", "Chatbot Development", "Prompt Engineering"],
      status: "Ongoing",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={24} />,
      title: "Self-Directed Learning",
      description: "Completed multiple 30-day tech roadmaps for skill development"
    },
    {
      icon: <Award className="text-blue-400" size={24} />,
      title: "Freelancing Ready",
      description: "Developed understanding of freelancing workflows and client management"
    },
    {
      icon: <Award className="text-green-400" size={24} />,
      title: "Project-Based Learning",
      description: "Built real-world applications to strengthen technical skills"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world projects that demonstrate my technical skills and passion for building innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 border border-gray-600 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} className="mr-1" />
                    View Details
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
                    <Github size={16} className="mr-1" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-700/50 border border-gray-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;