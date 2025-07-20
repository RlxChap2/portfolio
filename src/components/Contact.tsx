import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Flag } from 'lucide-react';

interface ContactProps {
  theme: 'developer' | 'security';
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const buttonColors = {
    developer: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
    security: 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700'
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohammed.mahmoud@email.com',
      href: 'mailto:mohammed.mahmoud@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 100 123 4567',
      href: 'tel:+201001234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt 🇪🇬',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 theme-security:from-slate-900 theme-security:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 theme-security:text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto theme-security:text-gray-300">
            Ready to collaborate on your next project or discuss opportunities across Egypt and the MENA region
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 theme-security:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 theme-security:bg-slate-800 group"
                >
                  <div className={`p-4 rounded-full ${
                    theme === 'developer' 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200' 
                      : 'bg-gradient-to-r from-red-100 to-orange-100 group-hover:from-red-200 group-hover:to-orange-200'
                  } transition-all duration-300`}>
                    <info.icon className={`w-8 h-8 ${
                      theme === 'developer' ? 'text-blue-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm theme-security:text-gray-400 mb-1">
                      {info.label}
                    </p>
                    <p className="text-gray-900 font-semibold text-lg theme-security:text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-8 bg-white rounded-2xl shadow-lg theme-security:bg-slate-800">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4 theme-security:text-white">
                Let's Work Together
              </h4>
              <p className="text-gray-600 theme-security:text-gray-300 text-lg leading-relaxed">
                Whether you're looking for a {theme === 'security' ? 'cybersecurity professional' : 'full-stack developer'} 
                or want to discuss a potential collaboration, I'd love to hear from you. Based in Cairo, Egypt, 
                I work with clients across the MENA region and globally.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl theme-security:bg-slate-800">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 theme-security:text-white">
                Send a Message
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3 theme-security:text-gray-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 theme-security:bg-slate-700 theme-security:border-slate-600 theme-security:text-white text-lg"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3 theme-security:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 theme-security:bg-slate-700 theme-security:border-slate-600 theme-security:text-white text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-3 theme-security:text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 theme-security:bg-slate-700 theme-security:border-slate-600 theme-security:text-white text-lg"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3 theme-security:text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none theme-security:bg-slate-700 theme-security:border-slate-600 theme-security:text-white text-lg"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full ${buttonColors[theme]} text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};