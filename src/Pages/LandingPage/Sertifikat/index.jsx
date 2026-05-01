import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png';
import sertifikatMrPepsi from '/Sertifikat/sertifikat-mr-pepsi-impromptu.png';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const Sertifikat = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].certificates;

  const certList = [
    {
      id: 'subsertifikat1',
      title: 'CODE CHAMPIONSHIP : Musywil Jawa Timur 2023',
      image: sertifikatLomba,
      tags: ['Juara 3', 'Dec 2023'],
      desc: language === 'en' 
        ? 'Won 3rd place in the "Code Championship" during Musywil ke-V Permikomnas IX East Java.'
        : 'Meraih Juara 3 dalam "Lomba Code Championship" selama Musywil ke-V Permikomnas wilayah IX Jawa Timur.'
    },
    {
      id: 'subsertifikat2',
      title: 'Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)',
      image: sertifikatMagang,
      tags: ['Internship', '2024'],
      desc: language === 'en'
        ? 'Received Internship Certificate for Web Revamp project from TBN Indonesia.'
        : 'Menerima Sertifikat Magang untuk proyek Revamp Website dari TBN Indonesia.'
    },
    {
      id: 'subsertifikat6',
      title: 'Mr. Pepsi Upgrade - Impromptu Program',
      image: sertifikatMrPepsi,
      tags: ['Intermediate', '2025'],
      desc: language === 'en'
        ? 'Certified for spontaneous and confident communication in the Impromptu program.'
        : 'Bersertifikat untuk komunikasi spontan dan percaya diri dalam program Impromptu.'
    }
  ];

  return (
    <section id="sertifikat" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark flex items-center justify-center md:justify-start gap-3">
              <span className="w-10 h-1 bg-primary rounded-full"></span>
              {t.title}
            </h2>
            <p className="text-gray-600 max-w-md">
              {language === 'en' 
                ? "Academic and professional certifications validating my skills and achievements."
                : "Sertifikasi akademik dan profesional yang memvalidasi keterampilan dan pencapaian saya."}
            </p>
          </div>

          <button 
            onClick={() => navigate('/sertifikat')} 
            className="btn-outline flex items-center gap-2 group cursor-pointer"
          >
            {t.all_btn}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certList.map((cert) => (
            <div 
              key={cert.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-3 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                  {cert.desc}
                </p>

                <button 
                  onClick={() => navigate(`/${cert.id}`)}
                  className="mt-auto text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                >
                  {t.more}
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sertifikat;
