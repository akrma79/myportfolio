import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "akrama.nadim@example.com",
      href: "mailto:akrama.nadim@example.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MessageCircle className="text-purple-400" size={24} />,
      title: "Let's Connect",
      value: "Available for freelance projects",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? I'm open to freelance opportunities, 
            internships, and tech discussions. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:shadow-blue-500/10 transition-all">
                  <div className="mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{method.title}</h4>
                    <a href={method.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-blue-500/20 hover:text-blue-400 text-gray-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-blue-500/20 hover:text-blue-400 text-gray-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:akrama.nadim@example.com" className="p-3 bg-gray-700 rounded-full hover:bg-blue-500/20 hover:text-blue-400 text-gray-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;