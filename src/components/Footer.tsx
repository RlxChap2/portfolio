import React from 'react';
import { Github, Linkedin, Mail, Heart, Flag } from 'lucide-react';

interface FooterProps {
    theme: 'developer' | 'security';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-slate-900 text-white py-12 theme-security:from-slate-900 theme-security:to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent theme-security:from-red-400 theme-security:to-orange-400">
                            Mohammed Mahmoud
                        </h3>
                        <p className="text-gray-400 text-lg">{theme === 'security' ? 'Cybersecurity Professional' : 'Full Stack Developer'}</p>
                        <div className="flex items-center gap-2 mt-2 text-gray-400">
                            <Flag className="w-4 h-4" />
                            <span>Cairo, Egypt 🇪🇬</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/RlxChap2"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 p-3 rounded-full hover:bg-gray-800"
                            aria-label="GitHub">
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/mohammedmahmoud"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 p-3 rounded-full hover:bg-gray-800"
                            aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:mmah02778@gmail.com"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 p-3 rounded-full hover:bg-gray-800"
                            aria-label="Email">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2 text-lg">
                            Made with <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                            in Egypt © {currentYear}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        This portfolio showcases professional work and achievements from Cairo, Egypt. Available for projects across the MENA region
                        and globally.
                    </p>
                </div>
            </div>
        </footer>
    );
};
