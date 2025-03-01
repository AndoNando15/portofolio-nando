import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPaintBrush, FaMicrosoft, FaLaptopCode } from 'react-icons/fa';

const Kemampuan = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F0F8FF] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-10">
          {/* Title and Divider */}
          <h2 className="text-3xl font-semibold flex items-center mb-4 sm:mb-0">
            <span className="border-l-4 pl-4 border-[#4682B4] mr-3">Kemampuan</span>
          </h2>

          {/* Button for desktop */}
          <div className="hidden sm:flex justify-end w-auto">
            <a onClick={() => navigate('/kemampuan')} className="inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200 cursor-pointer">
              Lihat Semua Kemampuan
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Microsoft Office */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <div className="text-6xl text-[#4682B4] mx-auto mb-4">
              <FaMicrosoft />
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">Microsoft Office</h3>
            <p className="text-left text-gray-600 mb-4">(Word, Excel, PowerPoint) untuk pengolahan data dan dokumentasi.</p>
          </div>

          {/* Card 2: Desain Grafis */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <div className="text-6xl text-[#4682B4] mx-auto mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">Desain Grafis</h3>
            <p className="text-left text-gray-600 mb-4">Desain grafis: Membuat visual yang menarik dan komunikatif.</p>
          </div>

          {/* Card 3: Web Development */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <div className="text-6xl text-[#4682B4] mx-auto mb-4">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">Web Development</h3>
            <p className="text-left text-gray-600 mb-4">Pengembangan website responsif dengan teknologi terbaru.</p>
          </div>
        </div>

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
