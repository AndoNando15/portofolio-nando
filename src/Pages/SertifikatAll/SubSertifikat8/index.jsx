import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import sertifikatDaffodilsSpeakFirst from '/Sertifikat/sertifikat-daffodils-speak-first.png';

const SubSertifikat8 = () => {
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
            <h2 className="text-3xl font-semibold text-[#4682B4] mb-2">The Daffodils</h2>
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Speak First</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Good</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">29 August 2025</span>
            </div>
          </div>

          <img src={sertifikatDaffodilsSpeakFirst} alt="Sertifikat Daffodils Speak First" className="w-full h-full object-cover rounded-lg mb-4 shadow-sm" />

          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-[#4682B4] mb-4">Deskripsi Sertifikat</h3>
            <p className="text-lg text-gray-700 text-justify">
              I am pleased to have completed the Speak First program at The Daffodils English Course and achieved a good result. This certificate reflects my early progress in building English speaking confidence and improving my basic
              communication ability.
              <br />
              <br />
              This learning experience became an important foundation for my English development and motivated me to continue practicing, learning, and growing in both speaking and overall language proficiency.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubSertifikat8;
