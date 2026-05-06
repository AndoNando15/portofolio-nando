import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.home, path: '/' },
    { name: t.skills, path: '/#kemampuan' },
    { name: t.about, path: '/#tentang-saya' },
    { name: t.projects, path: '/proyek' },
    { name: t.certificates, path: '/sertifikat' },
  ];

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      if (location.pathname === '/') {
        const element = document.getElementById(path.substring(2));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path.substring(1));
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
        <div className={`flex justify-between items-center p-2 md:p-3 rounded-2xl transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'bg-primary text-white shadow-md'}`}>
          {/* Logo */}
          <div className="flex items-center gap-2 pl-2">
            <h1 className={`text-lg sm:text-xl font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>Nando Innovatech</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium hover:opacity-70 transition-all cursor-pointer ${scrolled ? 'text-text-dark' : 'text-white'}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                scrolled ? 'border-primary/20 text-primary hover:bg-primary/10' : 'border-white/30 text-white hover:bg-white/20'
              }`}
            >
              <FaGlobe className="text-[10px] sm:text-xs" />
              {language.toUpperCase()}
            </button>

            {/* Contact Button (Desktop) */}
            <button
              onClick={() => handleNavClick('/#kontak-kami')}
              className={`hidden md:block px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                scrolled ? 'bg-primary text-white hover:bg-primary-dark shadow-md' : 'bg-white text-primary hover:bg-primary-light hover:text-white'
              }`}
            >
              {t.contact}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className={`xl:hidden p-2 rounded-xl transition-all ${scrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/20'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`xl:hidden absolute left-4 right-4 mt-2 p-4 rounded-2xl glass shadow-md transition-all duration-300 origin-top ${
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="w-full text-left px-4 py-3 rounded-xl text-text-dark font-medium hover:bg-primary/10 transition-all"
              >
                {item.name}
              </button>
            ))}
            <hr className="my-2 border-primary/10" />
            <button
              onClick={() => handleNavClick('/#kontak-kami')}
              className="w-full px-4 py-3 rounded-xl bg-primary text-white font-bold text-center shadow-md"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
