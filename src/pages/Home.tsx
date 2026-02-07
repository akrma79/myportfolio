import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Code, Brain, Target } from 'lucide-react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-full border border-blue-500/30">
              <Code className="text-blue-400" size={24} />
            </div>
            <div className="p-3 bg-purple-500/20 rounded-full border border-purple-500/30">
              <Brain className="text-purple-400" size={24} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Akrama Nadim
            </span>
          </h1>
          
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              B.Tech CSE Student | AI & Software Developer
            </h2>
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
              "I build AI-powered and web-based solutions that solve real-world problems."
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Focused on Artificial Intelligence, problem solving, and building practical applications.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 mb-4">
              <Target className="mr-2" size={16} />
              Actively seeking internships and real-world tech experience
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/projects"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-400">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-gray-400">AI Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">1</div>
              <div className="text-gray-400">Software Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;