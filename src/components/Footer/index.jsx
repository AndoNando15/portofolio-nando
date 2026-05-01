import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="w-full bg-text-dark text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Nando Innovatech</h2>
            <p className="text-gray-400 max-w-xs text-sm">
              {t.description}
            </p>
          </div>

          {/* Copyright & Info */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-gray-400">
              Copyright © 2025 <span className="text-white font-bold">Nando</span>. {t.rights}
            </p>
            <div className="flex justify-center md:justify-end gap-4 text-xs font-bold text-gray-500">
              <a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">User Terms</a>
              <span className="opacity-20">|</span>
              <a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Developer Attribution */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600 italic">
            {t.developed_by}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
