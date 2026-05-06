import React, { useState } from 'react';
import tentangsayaImage from '/images/Konten/2-FOTO-TENTANG-SAYA.svg';
import downloadCV from '/File/CV_Herlando_Prayitno.pdf';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const TentangSaya = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="tentang-saya" className="py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl group-hover:bg-white/30 transition-colors"></div>
              <img
                src={tentangsayaImage}
                alt="Tentang Saya"
                className="relative z-10 w-64 md:w-[400px] h-auto object-cover transform hover:scale-105 transition-transform duration-500 drop-shadow-md"
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-1 bg-white/30 rounded-full"></span>
              <span className="text-lg font-bold tracking-widest uppercase opacity-80">{t.title}</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              {t.question}
            </h3>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed text-justify">
              {t.description}
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-1.5 rounded-full md:px-8 md:py-4 md:rounded-2xl bg-white text-primary font-bold text-[12px] md:text-lg shadow-sm hover:bg-primary-light hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {t.cv_btn}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-5xl rounded-3xl shadow-md overflow-hidden animate-zoom-in">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-text-dark">{t.cv_title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 bg-gray-50">
              <iframe
                src={downloadCV}
                title="CV Herlando Prayitno"
                className="w-full h-[65vh] rounded-2xl border bg-white shadow-inner"
              />

              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-end">
                <a
                  href={downloadCV}
                  download="CV_Herlando_Prayitno.pdf"
                  className="px-4 py-2 text-xs md:px-6 md:py-3 md:text-base bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition shadow-md text-center"
                >
                  {t.cv_download}
                </a>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs md:px-6 md:py-3 md:text-base border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-white transition cursor-pointer"
                >
                  {t.cv_close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TentangSaya;
