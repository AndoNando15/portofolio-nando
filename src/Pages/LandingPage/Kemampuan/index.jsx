import React from 'react';
import { FaPaintBrush, FaMicrosoft, FaLaptopCode, FaVideo, FaTrello, FaCode, FaFigma, FaGithub, FaDatabase, FaJava, FaLanguage } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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
    <section id="kemampuan" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark flex items-center gap-3">
              <span className="w-10 h-1 bg-primary rounded-full"></span>
              {t.title}
            </h2>
            <p className="text-gray-600 max-w-md">
              {t.subtitle}
            </p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="glass p-8 rounded-2xl h-full flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-md hover:-translate-y-2">
                <div className="text-5xl text-primary group-hover:text-white mb-6 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <div className="w-8 h-1 bg-primary/20 group-hover:bg-white/30 rounded-full mt-auto"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Kemampuan;
