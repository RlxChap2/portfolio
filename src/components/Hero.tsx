import React from 'react';
import { Download, MapPin, Flag } from 'lucide-react';

interface HeroProps {
    theme: 'developer' | 'security';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
    const themeColors = {
        developer: 'from-blue-600 via-purple-600 to-indigo-600',
        security: 'from-red-600 via-orange-600 to-slate-700',
    };

    const buttonColors = {
        developer: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
        security: 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700',
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${themeColors[theme]} opacity-5`} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="mb-6">
                            <h1 className="text-6xl lg:text-8xl font-bold text-gray-800 mb-4 theme-security:text-white">
                                <span className="block">Mohammed</span>
                                <span className={`block bg-gradient-to-r ${themeColors[theme]} bg-clip-text text-transparent animate-pulse`}>
                                    Mahmoud
                                </span>
                            </h1>
                        </div>

                        <h2 className="text-3xl lg:text-4xl text-gray-600 mb-6 theme-security:text-gray-300 font-light">
                            {theme === 'security' ? 'Cybersecurity Professional' : 'Full Stack Developer'}
                        </h2>

                        <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed theme-security:text-gray-400">
                            {theme === 'security'
                                ? 'Specializing in penetration testing, network security, and incident response. Protecting digital assets across the MENA region with advanced security methodologies and threat intelligence.'
                                : 'Passionate about creating scalable web applications and solving complex problems with modern technologies. Building innovative solutions for the digital transformation of Egypt and beyond.'}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <button
                                className={`${buttonColors[theme]} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 text-lg`}>
                                <Download className="w-6 h-6" />
                                Download Resume
                            </button>
                            <a
                                href="#contact"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-gray-400 hover:scale-105 hover:shadow-lg theme-security:border-slate-600 theme-security:text-gray-300 theme-security:hover:border-slate-500 text-lg">
                                Get In Touch
                            </a>
                        </div>

                        <div className="flex items-center gap-6 text-gray-600 justify-center lg:justify-start theme-security:text-gray-400">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span className="text-lg">Cairo, Egypt</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Flag className="w-5 h-5" />
                                <span className="text-lg">🇪🇬</span>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Animated rings */}
                            <div
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${themeColors[theme]} blur-3xl opacity-20 scale-110 animate-pulse`}
                            />
                            <div
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${themeColors[theme]} blur-2xl opacity-30 scale-105 animate-ping`}
                            />

                            <img
                                src="/portfolio/profile.png"
                                alt="Mohammed Mahmoud"
                                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white theme-security:border-slate-700 hover:scale-105 transition-transform duration-500"
                            />

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-80" />
                            <div
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-80"
                                style={{ animationDelay: '0.5s' }}
                            />
                            <div
                                className="absolute top-1/2 -left-8 w-4 h-4 bg-red-500 rounded-full animate-bounce opacity-80"
                                style={{ animationDelay: '1s' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
