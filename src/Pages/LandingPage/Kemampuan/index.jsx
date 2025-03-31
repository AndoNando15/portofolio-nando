import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPaintBrush, FaMicrosoft, FaLaptopCode, FaVideo, FaTrello, FaCode, FaFigma } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS

const Kemampuan = () => {
  const navigate = useNavigate();

  // Data for skills
  const skills = [
    { icon: <FaMicrosoft />, title: 'Microsoft Office' },
    { icon: <FaPaintBrush />, title: 'Adobe Photoshop' },
    { icon: <FaPaintBrush />, title: 'Corel Draw' },
    { icon: <FaVideo />, title: 'Adobe Premiere Pro' },
    { icon: <FaVideo />, title: 'Capcut' },
    { icon: <FaFigma />, title: 'Figma' },
    { icon: <FaTrello />, title: 'Trello' },
    { icon: <FaTrello />, title: 'Notion' },
    { icon: <FaCode />, title: 'Visual Studio Code' },
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
          spaceBetween={20} // Spacing antar item
          slidesPerView={3} // Menampilkan 3 slide pada perangkat besar
          loop={true} // Membuat carousel looping
          autoplay={{ delay: 3000 }} // Mengatur delay 3 detik untuk peralihan otomatis
          breakpoints={{
            320: {
              slidesPerView: 1, // Menampilkan 1 slide pada layar ponsel
              spaceBetween: 10, // Spacing antar slide di ponsel
            },
            640: {
              slidesPerView: 2, // Menampilkan 2 slide pada layar tablet
              spaceBetween: 15, // Spacing antar slide pada tablet
            },
            1024: {
              slidesPerView: 3, // Menampilkan 3 slide pada layar desktop
              spaceBetween: 20, // Spacing antar slide pada desktop
            },
          }}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className="relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-200">
                {/* Centered icon with appropriate size */}
                <div className="text-5xl text-[#4682B4] mx-auto mb-4 flex justify-center items-center" style={{ minHeight: '80px' }}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{skill.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button for mobile */}
        <div className="flex justify-center mt-6 sm:hidden w-full">
          <a href="#" className="inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200 w-full sm:w-auto justify-center sm:justify-start">
            Lihat Semua Kemampuan
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Kemampuan;
