import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Github, Linkedin, Phone } from 'lucide-react';
import { useFormValidation } from '../hooks/useFormValidation';
import { useApiCall } from '../hooks/useApiCall';
import { ErrorMessage } from './ErrorMessage';
import { ValidationSchema } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validationSchema: ValidationSchema = {
    name: { required: true, minLength: 2, maxLength: 50 },
    email: { required: true, email: true },
    subject: { required: true, minLength: 5, maxLength: 100 },
    message: { required: true, minLength: 10, maxLength: 1000 }
  };

  const { validateForm, getFieldError, clearFieldError } = useFormValidation(validationSchema);

  const submitForm = async (data: typeof formData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate occasional failures for demo
    if (Math.random() < 0.3) {
      throw new Error('Failed to send message. Please try again.');
    }
    
    return { success: true, message: 'Message sent successfully!' };
  };

  const { loading, error, execute: submitMessage, retry } = useApiCall(submitForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm(formData)) {
      submitMessage(formData).then((result) => {
        if (result?.success) {
          setFormData({ name: '', email: '', subject: '', message: '' });
          // Show success message (you could add a toast notification here)
        }
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field error when user starts typing
    clearFieldError(name);
  };

  return (
    <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
      {error && (
        <div className="mb-6">
          <ErrorMessage 
            error={error} 
            onRetry={retry}
            variant="toast"
          />
        </div>
      )}
            
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-700 border text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                getFieldError('name') ? 'border-red-500' : 'border-gray-600'
              }`}
              required
            />
            {getFieldError('name') && (
              <p className="mt-1 text-sm text-red-400">{getFieldError('name')?.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-700 border text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                getFieldError('email') ? 'border-red-500' : 'border-gray-600'
              }`}
              required
            />
            {getFieldError('email') && (
              <p className="mt-1 text-sm text-red-400">{getFieldError('email')?.message}</p>
            )}
          </div>
        </div>
              
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-700 border text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              getFieldError('subject') ? 'border-red-500' : 'border-gray-600'
            }`}
            required
          />
          {getFieldError('subject') && (
            <p className="mt-1 text-sm text-red-400">{getFieldError('subject')?.message}</p>
          )}
        </div>
              
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-700 border text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
              getFieldError('message') ? 'border-red-500' : 'border-gray-600'
            }`}
            required
          ></textarea>
          {getFieldError('message') && (
            <p className="mt-1 text-sm text-red-400">{getFieldError('message')?.message}</p>
          )}
        </div>
              
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? 'Sending...' : 'Send Message'}
          <Send className="ml-2" size={18} />
        </button>
      </form>
    </div>

export default Contact
  );
};

export default Contact;