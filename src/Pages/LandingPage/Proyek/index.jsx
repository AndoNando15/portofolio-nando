import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import ikon next
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
          <div className="hidden sm:flex justify-end w-auto">
            <a onClick={() => navigate('/proyek')} className="cursor-pointer inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200">
              Lihat Semua Proyek
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src={halamanJadwal} alt="Proyek 1" className="w-full h-36 object-cover rounded-lg mb-4" />
            {/* Tag Teknologi */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">UI/UX Design</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">PHP</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Laravel</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">GA</span>
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">Algoritma Genetika - Penjadwalan Website</h3>

            {/* Ikon Next di Kanan Bawah (Bulat) */}
            <a onClick={() => navigate('/subproyek1')} className="absolute bottom-4 right-4 bg-[#4682B4] text-white p-1 rounded-full hover:bg-[#356699] transition duration-200 cursor-pointer">
              <FaArrowRight className="text-2xl" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/Proyek/peminjaman-ruangan/001-halaman-login.png" alt="Proyek 2" className="w-full h-36 object-cover rounded-lg mb-4" />
            {/* Tag Teknologi */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">UI/UX Design</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">PHP</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Laravel</span>
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">Peminjaman Ruangan Website</h3>

            {/* Ikon Next di Kanan Bawah (Bulat) */}
            <a onClick={() => navigate('/subproyek2')} className="absolute cursor-pointer bottom-4 right-4 bg-[#4682B4] text-white p-1 rounded-full hover:bg-[#356699] transition duration-200">
              <FaArrowRight className="text-2xl" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src="images/Proyek/spk-pemilihan-partai/001-halaman-partai.png" alt="Proyek 3" className="w-full h-36 object-cover rounded-lg mb-4" />
            {/* Tag Teknologi */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">UI/UX Design</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">PHP</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Laravel</span>
              <span className="text-xs bg-blue-100 text-blue-600 py-1 px-3 rounded-full">SPK</span>
            </div>
            <h3 className="text-xl font-semibold text-left mb-2">SPK - Pemilihan Partai Website</h3>

            {/* Ikon Next di Kanan Bawah (Bulat) */}
            <a href="/subproyek3" className="absolute bottom-4 right-4 bg-[#4682B4] text-white p-1 rounded-full hover:bg-[#356699] transition duration-200">
              <FaArrowRight className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Button for mobile */}
        <div className="flex justify-center mt-6 sm:hidden w-full">
          <a
            onClick={() => navigate('/proyek')}
            className="inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200 w-full sm:w-auto justify-center sm:justify-start"
          >
            Lihat Semua Proyek
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proyek;
