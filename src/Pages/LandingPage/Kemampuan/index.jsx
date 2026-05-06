import React from 'react';
import { FaPaintBrush, FaMicrosoft, FaLaptopCode, FaVideo, FaTrello, FaCode, FaFigma, FaGithub, FaDatabase, FaJava, FaLanguage } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const Kemampuan = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skills = [
    { icon: <FaMicrosoft />, title: 'Microsoft Office (Word, Excel, PowerPoint, Access)' },
    { icon: <FaPaintBrush />, title: 'Adobe Photoshop' },
    { icon: <FaPaintBrush />, title: 'Corel Draw' },
    { icon: <FaVideo />, title: 'Adobe Premiere Pro' },
    { icon: <FaVideo />, title: 'CapCut' },
    { icon: <FaFigma />, title: 'Figma' },
    { icon: <FaTrello />, title: 'Trello / Notion' },
    { icon: <FaCode />, title: 'Visual Studio Code / Postman' },
    { icon: <FaGithub />, title: 'Git & GitHub' },
    { icon: <FaLaptopCode />, title: 'Unity / NetBeans' },
    { icon: <FaCode />, title: 'PHP (Laravel)' },
    { icon: <FaCode />, title: 'HTML, CSS, JavaScript' },
    { icon: <FaCode />, title: 'React' },
    { icon: <FaDatabase />, title: 'MySQL / Database Management' },
    { icon: <FaLaptopCode />, title: 'REST API Development' },
    { icon: <FaJava />, title: 'Java / C#' },
    { icon: <FaLanguage />, title: 'English / Mandarin' },
  ];

  return (
    <section id="kemampuan" className="py-12 md:py-16 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              {t.title}
            </h2>
            <p className="text-sm text-gray-600 max-w-md">
              {t.subtitle}
            </p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={16}
          slidesPerView={2}
          loop={true}
          speed={5000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
            1536: { slidesPerView: 6 },
          }}
          className="pb-4 swiper-linear"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="glass p-5 md:p-6 rounded-2xl h-full flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-md hover:-translate-y-1">
                <div className="text-3xl md:text-4xl text-primary group-hover:text-white mb-4 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold mb-1 leading-tight">{skill.title}</h3>
                <div className="w-6 h-0.5 bg-primary/20 group-hover:bg-white/30 rounded-full mt-auto"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Kemampuan;
