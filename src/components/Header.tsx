import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
    theme: 'developer' | 'security';
}

export const Header: React.FC<HeaderProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Certifications', href: '#certificates' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-lg theme-security:bg-slate-900/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent theme-security:from-red-600 theme-security:to-orange-600">
                        Mohammed Mahmoud
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium hover:scale-105 theme-security:text-gray-300 theme-security:hover:text-white">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://github.com/RlxChap2"
                            className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 theme-security:text-gray-400 theme-security:hover:text-white">
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/mohammedmahmoud"
                            className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 theme-security:text-gray-400 theme-security:hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:mmah02778@gmail.com"
                            className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 theme-security:text-gray-400 theme-security:hover:text-white">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 theme-security:text-gray-300 hover:scale-110 transition-transform">
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t theme-security:border-slate-700 bg-white/95 backdrop-blur-md theme-security:bg-slate-900/95 rounded-b-2xl">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium theme-security:text-gray-300 theme-security:hover:text-white px-4 py-2 rounded-lg hover:bg-gray-100 theme-security:hover:bg-slate-800">
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t theme-security:border-slate-700">
                            <a
                                href="https://github.com/RlxChap2"
                                className="text-gray-600 hover:text-gray-900 theme-security:text-gray-400 theme-security:hover:text-white hover:scale-110 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/mohammedmahmoud"
                                className="text-gray-600 hover:text-gray-900 theme-security:text-gray-400 theme-security:hover:text-white hover:scale-110 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:mmah02778@gmail.com"
                                className="text-gray-600 hover:text-gray-900 theme-security:text-gray-400 theme-security:hover:text-white hover:scale-110 transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
