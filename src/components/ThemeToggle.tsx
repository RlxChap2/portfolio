import React from 'react';
import { Shield, Code } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 theme-security:bg-slate-800 theme-developer:bg-white"
      aria-label="Toggle theme"
    >
      {theme === 'developer' ? (
        <Shield className="w-6 h-6 text-red-500" />
      ) : (
        <Code className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};