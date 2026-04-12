import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png';
import sertifikatMrPepsi from '/Sertifikat/sertifikat-mr-pepsi-impromptu.png';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';

const Sertifikat = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#4682b4] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold flex items-center mb-4 sm:mb-0">
            <span className="border-l-4 pl-4 text-white border-white mr-3">Sertifikat Saya</span>
          </h2>

          {/* Button for desktop */}
          <div className="hidden sm:flex justify-end">
            <button onClick={() => navigate('/sertifikat')} className="inline-flex items-center gap-2 px-6 py-2 bg-[#85C8FF] text-black rounded-full border border-[#4682B4] hover:bg-[#6aa6d7] transition duration-200 cursor-pointer">
              Lihat Semua Sertifikat
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
            <img src={sertifikatLomba} alt="Sertifikat 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-left mb-2">CODE CHAMPIONSHIP : Musywil Jawa Timur 2023</h3>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Juara 3</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">22 Desember 2023</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 text-justify flex-grow">Proud to share that I won 3rd place in the "Lomba Code Championship" during the Musyawarah Wilayah ke-V Permikomnas wilayah IX Jawa Timur on December 22, 2023!</p>
            <button onClick={() => navigate('/subsertifikat1')} className="text-blue-600 hover:underline flex items-center cursor-pointer mt-auto">
              Selengkapnya <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
            <img src={sertifikatMagang} alt="Sertifikat 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-left mb-2">Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)</h3>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Revamp Website</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">IMM</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">April - July 2024</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 text-justify flex-grow">I’m proud to receive the Internship Certificate from Yayasan Transformasi Bhakti Negeri (TBN Indonesia) for the period of April 29th - June 29th, 2024.</p>
            <button onClick={() => navigate('/subsertifikat2')} className="text-blue-600 hover:underline flex items-center cursor-pointer mt-auto">
              Selengkapnya <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
            <img src={sertifikatMrPepsi} alt="Sertifikat 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-left mb-2">Mr. Pepsi Upgrade</h3>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Impromptu</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Intermediate</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">25 December 2025</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 text-justify flex-grow">This certificate reflects my ability to communicate ideas spontaneously and confidently through the Impromptu program.</p>
            <button onClick={() => navigate('/subsertifikat6')} className="text-blue-600 hover:underline flex items-center cursor-pointer mt-auto">
              Selengkapnya <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Button for mobile */}
        <div className="flex justify-center mt-6 sm:hidden w-full">
          <button
            onClick={() => navigate('/sertifikat')}
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-[#4682B4] font-medium rounded-full border border-white shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer"
          >
            Lihat Semua Sertifikat
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sertifikat;
