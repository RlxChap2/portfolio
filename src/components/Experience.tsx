import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceProps {
  theme: 'developer' | 'security';
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const themeColors = {
    developer: 'border-blue-500',
    security: 'border-red-500'
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 theme-security:text-white theme-developer:text-gray-900">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto theme-security:text-gray-300 theme-developer:text-gray-600">
            Career journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 theme-security:bg-slate-600 hidden md:block`} />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${themeColors[theme]} bg-white theme-security:bg-slate-700 hidden md:block`} />
                
                <div className="md:ml-16">
                  <div className="bg-white rounded-xl p-8 shadow-lg theme-security:bg-slate-700 theme-developer:bg-white">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 theme-security:text-white theme-developer:text-gray-900">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-gray-700 mb-2 theme-security:text-gray-300 theme-developer:text-gray-700">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-500 theme-security:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(exp.startDate).toLocaleDateString()} - {' '}
                            {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {exp.description.map((desc, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            theme === 'developer' ? 'bg-blue-500' : 'bg-red-500'
                          } mt-2 flex-shrink-0`} />
                          <p className="text-gray-700 theme-security:text-gray-300 theme-developer:text-gray-700">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm theme-security:bg-slate-600 theme-security:text-gray-300 theme-developer:bg-gray-100 theme-developer:text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
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