import React from 'react';
import { skills } from '../data/portfolioData';

interface SkillsProps {
    theme: 'developer' | 'security';
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
    const categories = {
        frontend: 'Frontend',
        backend: 'Backend',
        security: 'Security',
        tools: 'Tools & Cloud',
        soft: 'Soft Skills',
    };

    const getSkillsByCategory = (category: string) => {
        return skills.filter((skill) => skill.category === category);
    };

    const themeColors = {
        developer: 'from-blue-500 to-purple-500',
        security: 'from-red-500 to-slate-600',
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 theme-security:bg-slate-800 theme-developer:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 theme-security:text-white theme-developer:text-gray-900">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto theme-security:text-gray-300 theme-developer:text-gray-600">
                        Proficient in a wide range of technologies and methodologies
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(categories).map(([key, label]) => {
                        const categorySkills = getSkillsByCategory(key);
                        if (categorySkills.length === 0) return null;

                        return (
                            <div key={key} className="bg-white rounded-xl p-6 shadow-lg theme-security:bg-slate-700 theme-developer:bg-white">
                                <h3 className="text-xl font-semibold mb-6 text-gray-900 theme-security:text-white theme-developer:text-gray-900">
                                    {label}
                                </h3>
                                <div className="space-y-4">
                                    {categorySkills.map((skill) => (
                                        <div key={skill.name} className="group">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-700 font-medium theme-security:text-gray-300 theme-developer:text-gray-700">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-gray-500 theme-security:text-gray-400 theme-developer:text-gray-500">
                                                    {skill.proficiency}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 theme-security:bg-slate-600 theme-developer:bg-gray-200">
                                                <div
                                                    className={`h-2 rounded-full bg-gradient-to-r ${themeColors[theme]} transition-all duration-1000 ease-out group-hover:scale-105`}
                                                    style={{ width: `${skill.proficiency}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
