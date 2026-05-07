import React from 'react';
import { FaFilePdf, FaExternalLinkAlt, FaYoutube, FaBook } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';
import { publicationsData } from '../../../data/publicationsData';

const Publikasi = () => {
  const { language } = useLanguage();
  const t = translations[language].publications;

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'journal':
        return <FaBook className="text-primary" />;
      case 'podcast':
        return <FaYoutube className="text-red-500" />;
      case 'community service / journal':
        return <FaBook className="text-primary" />;
      default:
        return <FaExternalLinkAlt className="text-primary" />;
    }
  };

  return (
    <section id="publikasi" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark flex items-center justify-center md:justify-start gap-3">
              <span className="w-10 h-1 bg-primary rounded-full"></span>
              {t.title}
            </h2>
            <p className="text-gray-600 max-w-md">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {publicationsData.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              {/* Icon Container - Smaller on Mobile */}
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-xl md:text-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {getIcon(item.type)}
              </div>

              {/* Text Content */}
              <div className="flex-grow min-w-0">
                <div className="flex flex-wrap gap-2 mb-1.5">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base md:text-lg font-bold text-text-dark group-hover:text-primary transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Action Buttons - Right Aligned on Desktop */}
              <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 mt-2 md:mt-0 md:ml-auto shrink-0">
                {item.pdf && (
                  <a 
                    href={item.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-primary-dark transition-colors flex-grow md:flex-grow-0"
                  >
                    <FaFilePdf />
                    {t.view_pdf}
                  </a>
                )}
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold border border-primary text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-primary/5 transition-colors flex-grow md:flex-grow-0"
                  >
                    {item.type === 'Podcast' ? <FaYoutube /> : <FaExternalLinkAlt />}
                    {item.type === 'Podcast' ? t.view_video : t.view_link}
                  </a>
                )}
                {item.links && item.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold border border-primary text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-primary/5 transition-colors flex-grow md:flex-grow-0"
                  >
                    <FaExternalLinkAlt />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publikasi;
