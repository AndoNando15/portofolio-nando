import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import sertifikatDaffodilsGrading from '/Sertifikat/sertifikat-daffodils-grading.png';

const SubSertifikat7 = () => {
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
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Grading</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Level Reference</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">English Program</span>
            </div>
          </div>

          <img src={sertifikatDaffodilsGrading} alt="Sertifikat Daffodils Grading" className="w-full h-full object-cover rounded-lg mb-4 shadow-sm" />

          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-[#4682B4] mb-4">Deskripsi Sertifikat</h3>
            <p className="text-lg text-gray-700 text-justify">
              This grading document from The Daffodils English Course provides a clear overview of achievement levels and class progression in English learning. It explains the equivalence of grades and describes the learning focus for each
              level of study.
              <br />
              <br />
              This reference helped me better understand my English learning pathway and encouraged me to continue improving my speaking, listening, pronunciation, and communication skills step by step.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubSertifikat7;
