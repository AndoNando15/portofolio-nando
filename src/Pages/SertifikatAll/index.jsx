import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaArrowRight, FaChevronLeft } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png';
import sertifikatVocabolary from '/Sertifikat/sertifikat-vocabolary.jpg';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';
import sertifikatAETS from '/Sertifikat/sertifikat-aets-score-report.png';
import sertifikatMahirBahasa from '/Sertifikat/sertifikat-mahir-bahasa-speaking-two.png';
import sertifikatMrPepsi from '/Sertifikat/sertifikat-mr-pepsi-impromptu.png';
import sertifikatDaffodilsGrading from '/Sertifikat/sertifikat-daffodils-grading.png';
import sertifikatDaffodilsSpeakFirst from '/Sertifikat/sertifikat-daffodils-speak-first.png';

const SertifikatAll = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].certificates;
  const cd = translations[language].cert_all_cards;

  const certificates = [
    {
      id: 'subsertifikat1',
      title: 'CODE CHAMPIONSHIP : Musywil Jawa Timur 2023',
      image: sertifikatLomba,
      tags: ['Juara 3', 'Dec 2023'],
      desc: cd.cert1_desc
    },
    {
      id: 'subsertifikat2',
      title: 'Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)',
      image: sertifikatMagang,
      tags: ['Internship', '2024'],
      desc: cd.cert2_desc
    },
    {
      id: 'subsertifikat3',
      title: 'Peace English Academy',
      image: sertifikatVocabolary,
      tags: ['Vocab 1', 'Jan 2022'],
      desc: cd.cert3_desc
    },
    {
      id: 'subsertifikat4',
      title: 'AETS Score Report',
      image: sertifikatAETS,
      tags: ['Score: 457', 'Apr 2026'],
      desc: cd.cert4_desc
    },
    {
      id: 'subsertifikat5',
      title: 'Mahir Bahasa',
      image: sertifikatMahirBahasa,
      tags: ['Speaking Two', 'Aug 2025'],
      desc: cd.cert5_desc
    },
    {
      id: 'subsertifikat6',
      title: 'Mr. Pepsi Upgrade - Impromptu Program',
      image: sertifikatMrPepsi,
      tags: ['Intermediate', 'Dec 2025'],
      desc: cd.cert6_desc
    },
    {
      id: 'subsertifikat7',
      title: 'The Daffodils',
      image: sertifikatDaffodilsGrading,
      tags: ['Grading', 'English'],
      desc: cd.cert7_desc
    },
    {
      id: 'subsertifikat8',
      title: 'The Daffodils - Speak First',
      image: sertifikatDaffodilsSpeakFirst,
      tags: ['Good', 'Aug 2025'],
      desc: cd.cert8_desc
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')} 
            className="group flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all cursor-pointer"
          >
            <FaChevronLeft className="text-sm" />
            {translations[language].projects.back_btn}
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

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => navigate(`/${cert.id}`)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cert.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[9px] font-bold uppercase bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-text-dark mb-3 line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-gray-500 mb-6 line-clamp-3">
                    {cert.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.more}
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

export default SertifikatAll;
