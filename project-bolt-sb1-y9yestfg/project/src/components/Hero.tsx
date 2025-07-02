import React from 'react';
import { ArrowRight, Download, Code, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
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
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Akrama Nadim
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aspiring Computer Science Engineer passionate about{' '}
            <span className="text-blue-400 font-semibold">AI Development</span>,{' '}
            <span className="text-purple-400 font-semibold">Machine Learning</span>, and{' '}
            <span className="text-teal-400 font-semibold">Building Digital Products</span>
          </p>
          
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-gray-300 mb-4">
              🎓 Class 12 Graduate (PCM + CS) → Pursuing B.Tech CSE
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;