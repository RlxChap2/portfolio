import { useState, useEffect } from 'react';
import { Theme } from '../types';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved as Theme) || 'developer';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    
    // Apply theme classes to document
    const root = document.documentElement;
    root.classList.remove('theme-developer', 'theme-security');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'developer' ? 'security' : 'developer');
  };

  return { theme, setTheme, toggleTheme };
};