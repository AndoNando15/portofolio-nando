import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';
import { projectsData } from '../../../data/projectsData';

const Proyek = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].projects;

  // Show specific projects on Landing Page
  const featuredIds = ['algoritma-genetika', 'puzzle-game-edukasi', 'aplikasi-ukk-tptu'];
  const projectList = projectsData.filter(p => featuredIds.includes(p.id))
    .sort((a, b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id));

  return (
    <section id="proyek" className="py-20">
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
              onClick={() => navigate(`/proyek/${project.id}`)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image || (project.items && project.items[0] && project.items[0].image)} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <div className="mt-auto pt-4 flex items-center gap-2 text-primary font-bold text-sm">
                  {t.view_project}
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => navigate('/proyek')} 
            className="btn-outline flex items-center justify-center gap-2 group cursor-pointer w-full md:w-auto"
          >
            {t.all_btn}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proyek;
