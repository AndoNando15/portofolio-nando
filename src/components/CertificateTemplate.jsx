import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const CertificateTemplate = ({ title, tags, image, description }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].certificates;

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/sertifikat')} 
            className="group flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all cursor-pointer"
          >
            <FaChevronLeft className="text-sm" />
            {translations[language].projects.back_btn}
          </button>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-3xl md:text-5xl font-extrabold text-text-dark tracking-tight">
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

            {/* Image */}
            <div className="glass p-2 rounded-3xl shadow-md overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full rounded-2xl shadow-inner border border-white/20" 
              />
            </div>

            {/* Description */}
            <div className="glass p-8 md:p-12 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-text-dark flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                {t.cert_desc_label}
              </h3>
              <div className="text-gray-600 leading-relaxed space-y-4 whitespace-pre-line text-lg">
                {description}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificateTemplate;
