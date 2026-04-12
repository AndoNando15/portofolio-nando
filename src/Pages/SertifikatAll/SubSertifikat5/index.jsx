import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import sertifikatMahirBahasa from '/Sertifikat/sertifikat-mahir-bahasa-speaking-two.png';

const SubSertifikat5 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen mt-15 bg-[#F0F8FF]">
      <Header />

      <section className="py-10 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate('/sertifikat')} className="inline-flex items-center px-6 py-2 bg-[#356699] text-white rounded-full hover:bg-[#4682B4] transition duration-200 cursor-pointer mb-8">
            Kembali
          </button>

          <div className="text-center mb-6">
            <hr className="border-[#4682B4] border-t-4 w-20 mx-auto mb-4" />
            <h2 className="text-3xl font-semibold text-[#4682B4]">Sertifikat</h2>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-[#4682B4] mb-2">Mahir Bahasa</h2>
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Speaking Two</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Intermediate</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">25 August 2025</span>
            </div>
          </div>

          <img src={sertifikatMahirBahasa} alt="Sertifikat Mahir Bahasa" className="w-full h-full object-cover rounded-lg mb-4 shadow-sm" />

          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-[#4682B4] mb-4">Deskripsi Sertifikat</h3>
            <p className="text-lg text-gray-700 text-justify">
              I am proud to have completed the Speaking Two Intermediate program at Mahir Bahasa Kampung Inggris Pare. This certificate reflects my progress in speaking, pronunciation, vocabulary, and grammar through an intensive offline
              learning program.
              <br />
              <br />
              This experience helped me become more confident in spoken English and encouraged me to keep improving my communication skills in both academic and real-life situations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubSertifikat5;
