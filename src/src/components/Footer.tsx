import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Akrama Nadim
            </h3>
            <p className="text-gray-400 leading-relaxed">
              B.Tech Computer Science student passionate about building innovative AI-powered 
              solutions and web applications that solve real-world problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/experience" className="text-gray-400 hover:text-white transition-colors">Experience</Link></li>
              <li><Link to="/skills" className="text-gray-400 hover:text-white transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-4">
              Open to internships, collaborations, and innovative project opportunities.
            </p>
            <a
              href="mailto:akramanadim79@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Email to get in touch"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>and</span>
              <Code className="text-blue-400" size={16} />
              <span>fueled by</span>
              <Coffee className="text-yellow-600" size={16} />
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Akrama Nadim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;