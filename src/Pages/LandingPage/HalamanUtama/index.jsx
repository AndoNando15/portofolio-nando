import React from 'react';
import { FaPlay, FaWhatsapp } from 'react-icons/fa';
import bannerImage1 from '/images/Konten/3-foto-banner.webp';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const HalamanUtama = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="halaman-utama" className="pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold animate-fade-in">
              {t.greeting} 👋
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark leading-tight">
              {t.intro} <span className="text-primary relative inline-block">
                Herlando Prayitno
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/10 -z-10 rounded-full"></span>
              </span>
              <br />
              <span className="text-3xl md:text-5xl opacity-90">{t.role}</span>
              <br />
              <span className="text-2xl md:text-4xl opacity-80">{t.from} <span className="text-primary font-extrabold">{t.city}</span></span>
            </h1>

            {/* Mobile Image (Visible only on mobile) */}
            <div className="lg:hidden w-full flex justify-center py-4">
              <div className="relative z-10 animate-float">
                <img 
                  src={bannerImage1} 
                  alt="Profile" 
                  className="w-64 md:w-80 h-auto drop-shadow-md" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              {t.desc}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2 group cursor-pointer"
              >
                {t.cta_portfolio}
                <FaPlay className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => window.open('https://wa.me/6285785455575?text=Halo%20Nando,%20I%20am%20interested%20in%20your%20services.', '_blank')}
                className="btn-outline flex items-center gap-2 group cursor-pointer"
              >
                <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                {t.cta_hire}
              </button>
            </div>
          </div>

          {/* Right Content (Desktop Image - Hidden on mobile) */}
          <div className="hidden lg:flex w-full lg:w-1/2 relative justify-center lg:justify-end">
            <div className="relative z-10 animate-float">
              <img 
                src={bannerImage1} 
                alt="Profile" 
                className="w-72 md:w-[450px] lg:w-[550px] h-auto drop-shadow-md hover:scale-105 transition-transform duration-500" 
              />
              {/* Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalamanUtama;
