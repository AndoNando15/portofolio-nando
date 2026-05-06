import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NotFound = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].notfound;

  return (
    <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl md:text-9xl font-extrabold text-primary/20 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-6">{t.title}</h2>
      <button
        onClick={() => navigate('/')}
        className="btn-primary flex items-center gap-2 group cursor-pointer"
      >
        <FaChevronLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
        {t.back_btn}
      </button>
    </div>
  );
};

export default NotFound;
