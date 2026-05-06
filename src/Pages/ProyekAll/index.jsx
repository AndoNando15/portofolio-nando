import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaArrowRight, FaChevronLeft } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { projectsData } from '../../data/projectsData';

const ProyekAll = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')} 
            className="group flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all cursor-pointer text-xs md:text-base"
          >
            <FaChevronLeft className="text-sm" />
            {t.back_btn}
          </button>

          {/* Title Header */}
          <div className="space-y-4 mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
              {t.title}
            </h1>
            <p className="text-gray-500 max-w-2xl">
              {t.subtitle_all}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((card) => (
              <div 
                key={card.id}
                onClick={() => navigate(`/proyek/${card.id}`)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img src={card.image || (card.items && card.items[0] && card.items[0].image)} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {card.title}
                  </h3>

                  <div className="mt-auto flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.view_project}
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProyekAll;
