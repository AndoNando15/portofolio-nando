import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import halamanJadwal from '/images/Proyek/algoritma-genetika/HALAMAN-LOGIN.png';

const Proyek = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F0F8FF] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title and Divider */}
        <div className="flex flex-wrap justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 sm:mb-0">
            <span className="border-l-4 pl-4 border-[#4682B4] mr-3">Portofolio Saya</span>
          </h2>

          {/* Button for desktop */}
          <div className="hidden sm:flex justify-end">
            <button onClick={() => navigate('/proyek')} className="cursor-pointer inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200">
              Lihat Semua Proyek
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src={halamanJadwal} alt="Proyek 1" className="w-full h-36 object-cover rounded-lg mb-4" />
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">UI/UX Design</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">PHP</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Laravel</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">GA</span>
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">Algoritma Genetika - Penjadwalan Website</h3>

            <button onClick={() => navigate('/subproyek1')} className="absolute bottom-4 right-4 bg-[#4682B4] text-white p-1 rounded-full hover:bg-[#356699] transition duration-200 cursor-pointer">
              <FaArrowRight className="text-2xl" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/Proyek/game-edukasi/001-halaman-loading.png" alt="Proyek 2" className="w-full h-36 object-cover rounded-lg mb-4" />
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Unity</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">C#</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">2D</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">UI/UX</span>
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">PUZZLE - Game Edukasi Mencocokan Posisi Gambar</h3>

            <button onClick={() => navigate('/subproyek8')} className="absolute bottom-4 right-4 bg-[#4682B4] text-white p-1 rounded-full hover:bg-[#356699] transition duration-200 cursor-pointer">
              <FaArrowRight className="text-2xl" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/Proyek/app-mamin/halaman-login.png" alt="Proyek 3" className="w-full h-36 object-cover rounded-lg mb-4" />
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Web App</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Dashboard</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Dataset</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Makan & Minum</span>
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">APP Mamin</h3>

            <button onClick={() => navigate('/subproyek10')} className="absolute bottom-4 right-4 bg-[#4682B4] text-white p-1 rounded-full hover:bg-[#356699] transition duration-200 cursor-pointer">
              <FaArrowRight className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Button for mobile */}
        <div className="flex justify-center mt-6 sm:hidden w-full">
          <button onClick={() => navigate('/proyek')} className="inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200 w-full justify-center">
            Lihat Semua Proyek
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proyek;
