import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'security' 
        ? 'bg-slate-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <ThemeToggle />
      <Header theme={theme} />
      <Hero theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Certificates theme={theme} />
      <Experience theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;