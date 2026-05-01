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

  const certificates = [
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
      id: 'subsertifikat3',
      title: 'Peace English Academy',
      image: sertifikatVocabolary,
      tags: ['Vocab 1', 'Jan 2022'],
      desc: language === 'en'
        ? 'Completed Vocabulary 1 course with "B" grade at Peace English Academy.'
        : 'Menyelesaikan kursus VOCABULARY 1 dengan nilai "B" di Peace English Academy.'
    },
    {
      id: 'subsertifikat4',
      title: 'AETS Score Report',
      image: sertifikatAETS,
      tags: ['Score: 457', 'Apr 2026'],
      desc: language === 'en'
        ? 'English proficiency test result covering Listening, Structure, and Reading.'
        : 'Hasil tes kemahiran bahasa Inggris meliputi Listening, Structure, dan Reading.'
    },
    {
      id: 'subsertifikat5',
      title: 'Mahir Bahasa',
      image: sertifikatMahirBahasa,
      tags: ['Speaking Two', 'Aug 2025'],
      desc: language === 'en'
        ? 'Achieved Speaking Two Intermediate program completion certificate.'
        : 'Meraih sertifikat penyelesaian program Speaking Two Intermediate.'
    },
    {
      id: 'subsertifikat6',
      title: 'Mr. Pepsi Upgrade - Impromptu Program',
      image: sertifikatMrPepsi,
      tags: ['Intermediate', 'Dec 2025'],
      desc: language === 'en'
        ? 'Certified for spontaneous and confident communication in the Impromptu program.'
        : 'Bersertifikat untuk komunikasi spontan dan percaya diri dalam program Impromptu.'
    },
    {
      id: 'subsertifikat7',
      title: 'The Daffodils',
      image: sertifikatDaffodilsGrading,
      tags: ['Grading', 'English'],
      desc: language === 'en'
        ? 'Level progression and learning path in English speaking development.'
        : 'Progres level dan jalur pembelajaran dalam pengembangan berbicara bahasa Inggris.'
    },
    {
      id: 'subsertifikat8',
      title: 'The Daffodils - Speak First',
      image: sertifikatDaffodilsSpeakFirst,
      tags: ['Good', 'Aug 2025'],
      desc: language === 'en'
        ? 'Built a strong foundation in English speaking through the Speak First program.'
        : 'Membangun fondasi yang kuat dalam berbicara bahasa Inggris melalui program Speak First.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4">
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
              {language === 'en' 
                ? "Academic and professional certifications validating my expertise and commitment to continuous learning."
                : "Sertifikasi akademik dan profesional yang memvalidasi keahlian dan komitmen saya untuk terus belajar."}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => navigate(`/${cert.id}`)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
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
