import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png';
import sertifikatVocabolary from '/Sertifikat/sertifikat-vocabolary.jpg';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';

const Sertifikat = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#4682b4] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-10">
          {/* Title and Divider */}
          <h2 className="text-3xl font-semibold flex items-center mb-4 sm:mb-0">
            <span className="border-l-4 pl-4 text-white border-white mr-3">Sertifikat Saya</span>
          </h2>

          {/* Button for desktop */}
          <div className="hidden sm:flex justify-end w-auto">
            <a onClick={() => navigate('/sertifikat')} className="inline-flex items-center px-6 py-2 bg-[#85C8FF] text-black rounded-full border border-[#4682B4] hover:bg-[#6aa6d7] transition duration-200 cursor-pointer">
              Lihat Semua Sertifikat
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src={sertifikatLomba} alt="Sertifikat 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-left mb-2">CODE CHAMPIONSHIP : Musywil Jawa Timur 2023</h3>
            <div className="mb-2">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Juara 3</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">22 Desember 2023</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 text-justify">Proud to share that I won 3rd place in the "Lomba Code Championship" during the Musyawarah Wilayah ke-V Permikomnas wilayah IX Jawa Timur on December 22, 2023!</p>
            <a onClick={() => navigate('/subsertifikat1')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
              Selengkapnya <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src={sertifikatMagang} alt="Sertifikat 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-left mb-2">Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)</h3>
            <div className="mb-2">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Revamp Website</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">IMM</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">April - July 2024</span>
            </div>

            <p className="text-sm text-gray-600 mb-4 text-justify">I’m proud to receive the Internship Certificate from Yayasan Transformasi Bhakti Negeri (TBN Indonesia) for the period of April 29th - June 29th, 2024.</p>
            <a onClick={() => navigate('/subsertifikat2')} className="text-blue-600 cursor-pointer hover:underline flex items-center">
              Selengkapnya <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <img src={sertifikatVocabolary} alt="Sertifikat 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-left mb-2">
              Peace English Academy<span className="text-white">Text Kosong / Enter</span>
            </h3>
            <div className="mb-2">
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Vocabulary 1</span>
              <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Priode 25 Januari 2022</span>
            </div>

            <p className="text-sm text-gray-600 mb-4 text-justify">
              I’m thrilled to have completed the exam and received a certificate for finishing the VOCABULARY 1 course at Peace English Academy with a "B" grade (Very Good) on January 25th, 2022!
            </p>
            <a onClick={() => navigate('/subsertifikat3')} className="text-blue-600 cursor-pointer hover:underline flex items-center">
              Selengkapnya <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Button for mobile */}
        <div className="flex justify-center mt-6 sm:hidden w-full">
          <a
            onClick={() => navigate('/sertifikat')}
            className="inline-flex items-center px-6 py-2 bg-[#4682B4] text-white rounded-full border border-[#4682B4] hover:bg-[#356699] transition duration-200 w-full sm:w-auto justify-center sm:justify-start"
          >
            Lihat Semua Sertifikat
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sertifikat;
