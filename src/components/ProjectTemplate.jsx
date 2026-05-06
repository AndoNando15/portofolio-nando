import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaSearchPlus, FaTimes } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ProjectTemplate = ({ title, tags, items }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/proyek')} 
            className="group flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all cursor-pointer text-xs md:text-base"
          >
            <FaChevronLeft className="text-sm" />
            {t.back_btn}
          </button>

          {/* Project Header */}
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-text-dark tracking-tight max-w-4xl mx-auto">
              {title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col"
                onClick={() => setModalImage(item.image)}
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-dark mb-4 group-hover:text-primary transition-colors lowercase capitalize line-clamp-2 min-h-[3.5rem]">
                    {item.title}
                  </h3>
                </div>
                
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <FaSearchPlus className="text-3xl" />
                      <span className="font-bold text-sm uppercase tracking-widest">{t.view_img}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Premium Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="absolute inset-0 bg-text-dark/95 backdrop-blur-sm"></div>
          
          <button 
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110] cursor-pointer"
            onClick={() => setModalImage(null)}
          >
            <FaTimes size={24} />
          </button>

          <div 
            className="relative z-10 w-full max-w-6xl max-h-[85vh] overflow-y-auto overflow-x-hidden flex justify-center items-start animate-zoom-in rounded-2xl bg-white/5 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={modalImage} 
              alt="Preview" 
              className="w-full h-auto object-cover rounded-xl shadow-md" 
            />
          </div>
          
          <p className="relative z-10 mt-6 text-gray-400 font-medium uppercase tracking-widest text-xs">
            {t.click_close}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
