import React from 'react';
import { FaArrowRight, FaPaintBrush, FaMicrosoft, FaLaptopCode, FaVideo, FaTrello, FaCode, FaFigma, FaGithub, FaDatabase, FaJava, FaLanguage } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Kemampuan = () => {
  // Data for skills
  const skills = [
    { icon: <FaMicrosoft />, title: 'Microsoft Office (Word, Excel, PowerPoint, Access, dan lainnya)' },
    { icon: <FaPaintBrush />, title: 'Adobe Photoshop' },
    { icon: <FaPaintBrush />, title: 'Corel Draw' },
    { icon: <FaVideo />, title: 'Adobe Premiere Pro' },
    { icon: <FaVideo />, title: 'CapCut' },
    { icon: <FaFigma />, title: 'Figma' },
    { icon: <FaTrello />, title: 'Trello' },
    { icon: <FaTrello />, title: 'Notion' },
    { icon: <FaCode />, title: 'Visual Studio Code' },
    { icon: <FaLaptopCode />, title: 'Postman' },
    { icon: <FaGithub />, title: 'GitHub' },
    { icon: <FaLaptopCode />, title: 'Unity' },
    { icon: <FaLaptopCode />, title: 'NetBeans' },
    { icon: <FaCode />, title: 'PHP (Laravel)' },
    { icon: <FaCode />, title: 'HTML, CSS, JavaScript' },
    { icon: <FaCode />, title: 'React' },
    { icon: <FaLaptopCode />, title: 'MIT App Inventor' },
    { icon: <FaDatabase />, title: 'MySQL / Database Management' },
    { icon: <FaLaptopCode />, title: 'REST API Development' },
    { icon: <FaGithub />, title: 'Git and GitHub' },
    { icon: <FaJava />, title: 'Java' },
    { icon: <FaCode />, title: 'C#' },
    { icon: <FaLanguage />, title: 'English' },
    { icon: <FaLanguage />, title: 'Mandarin' },
  ];

  return (
    <section className="bg-[#F0F8FF] py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-10">
          {/* Title and Divider */}
          <h2 className="text-3xl font-semibold flex items-center mb-4 sm:mb-0">
            <span className="border-l-4 pl-4 border-[#4682B4] mr-3">Kemampuan</span>
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className="relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-200">
                <div className="text-5xl text-[#4682B4] mx-auto mb-4 flex justify-center items-center" style={{ minHeight: '80px' }}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{skill.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button for mobile */}
        {/* <div className="flex justify-center mt-6 sm:hidden w-full">
          <a href="#" className="inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200 w-full sm:w-auto justify-center sm:justify-start">
            Lihat Semua Kemampuan
            <FaArrowRight className="ml-2" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Kemampuan;
