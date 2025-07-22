import React from 'react';
import { ExternalLink, Github, Calendar, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useProjectFilter } from '../hooks/useFilter';

interface ProjectsProps {
    theme: 'developer' | 'security';
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
    const { filter, setFilter, filteredProjects } = useProjectFilter(projects);

    const themeColors = {
        developer: 'text-blue-600 border-blue-600',
        security: 'text-red-600 border-red-600',
        AI: 'text-emerald-600 border-emerald-600',
    };

    const buttonColors = {
        developer: 'bg-blue-600 hover:bg-blue-700',
        security: 'bg-red-600 hover:bg-red-700',
        AI: 'bg-emerald-600 hover:bg-emerald-700',
    };

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'development', label: 'Development' },
        { key: 'security', label: 'Security' },
        { key: 'AI', label: 'AI' },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 theme-security:text-white theme-developer:text-gray-900">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto theme-security:text-gray-300 theme-developer:text-gray-600">
                        A showcase of my recent work in development and cybersecurity
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filterOption) => (
                        <button
                            key={filterOption.key}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            onClick={() => setFilter(filterOption.key as any)}
                            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                                filter === filterOption.key
                                    ? `${themeColors[theme]} bg-opacity-10`
                                    : 'text-gray-600 border-gray-300 hover:border-gray-400 theme-security:text-gray-400 theme-security:border-gray-600'
                            }`}>
                            <Filter className="w-4 h-4 inline mr-2" />
                            {filterOption.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 theme-security:bg-slate-700 theme-developer:bg-white">
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            project.category === 'development'
                                                ? 'bg-indigo-100 text-indigo-800'
                                                : project.category === 'security'
                                                ? 'bg-rose-100 text-rose-800'
                                                : project.category === 'AI'
                                                ? 'bg-emerald-100 text-emerald-800'
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 theme-security:text-white theme-developer:text-gray-900">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 theme-security:text-gray-300 theme-developer:text-gray-600">{project.description}</p>

                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 theme-security:text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(project.completedDate).toLocaleDateString()}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm theme-security:bg-slate-600 theme-security:text-gray-300 theme-developer:bg-gray-100 theme-developer:text-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${buttonColors[theme]} text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105`}>
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-300 hover:border-gray-400 hover:scale-105 theme-security:border-slate-500 theme-security:text-gray-300">
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
