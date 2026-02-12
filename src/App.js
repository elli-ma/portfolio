import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  let startLanguage = localStorage.getItem("language") ?? 'en';
  const [language, setLanguage] = useState(startLanguage);

  const changeLanguage = (language) => {
    const next = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem("language", next);
    setLanguage(next);
  };

  // Migrate old localStorage format
  const legacyColor = localStorage.getItem("color");
  if (legacyColor) {
    localStorage.setItem("theme", legacyColor === 'rgb(54, 30, 45)' ? 'dark' : 'light');
    localStorage.removeItem("color");
  }

  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem("theme", isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-blue dark:bg-brand-navy dark:text-brand-cream transition-colors duration-300 font-body">
      <Nav toggleTheme={toggleTheme} changeLanguage={changeLanguage} isDark={isDark} language={language} />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
