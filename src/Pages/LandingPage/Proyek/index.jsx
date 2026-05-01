import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import halamanJadwal from '/images/Proyek/algoritma-genetika/HALAMAN-LOGIN.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const Proyek = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projectList = [
    {
      id: 'subproyek1',
      title: 'Algoritma Genetika - Penjadwalan Website',
      image: halamanJadwal,
      tags: ['UI/UX Design', 'PHP', 'Laravel', 'GA']
    },
    {
      id: 'subproyek8',
      title: 'PUZZLE - Game Edukasi Mencocokan Posisi Gambar',
      image: '/images/Proyek/game-edukasi/001-halaman-loading.png',
      tags: ['Unity', 'C#', '2D', 'UI/UX']
    },
    {
      id: 'subproyek10',
      title: 'APP Mamin',
      image: '/images/Proyek/app-mamin/halaman-login.png',
      tags: ['Web App', 'Dashboard', 'Makan & Minum']
    }
  ];

  return (
    <section id="proyek" className="py-20">
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
                ? "Showcasing some of my best work across web development and design."
                : "Menampilkan beberapa karya terbaik saya di berbagai pengembangan web dan desain."}
            </p>
          </div>

          <button 
            onClick={() => navigate('/proyek')} 
            className="btn-outline flex items-center gap-2 group cursor-pointer"
          >
            {t.all_btn}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-6 line-clamp-2">
                  {project.title}
                </h3>

                <button 
                  onClick={() => navigate(`/${project.id}`)}
                  className="mt-auto w-12 h-12 flex items-center justify-center bg-gray-100 text-text-dark rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300 self-end"
                >
                  <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyek;
