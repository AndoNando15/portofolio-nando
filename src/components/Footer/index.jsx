import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="w-full bg-text-dark text-white py-6 mt-auto">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl text-center space-y-2">
        <h2 className="text-lg font-bold tracking-tight">Nando Innovatech</h2>
        <p className="text-xs text-gray-400">
          Copyright © 2025 <span className="text-white font-bold">Nando</span>. {t.rights}
        </p>
        <p className="text-[10px] text-gray-600 italic">
          {t.developed_by}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
