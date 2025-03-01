import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// Make sure the image is in the public folder or assets folder, and reference it correctly
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png'; // Example path if it's inside src/assets folder

const SubSertifikat2 = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div className="flex flex-col min-h-screen mt-15 bg-[#F0F8FF]">
      <Header />

      {/* Sertifikat Section */}
      <section className="py-10 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate('/sertifikat')} // Fungsi untuk kembali ke halaman sebelumnya
            className="inline-flex items-center px-6 py-2 bg-[#356699] text-white rounded-full hover:bg-[#4682B4] transition duration-200 cursor-pointer mb-8"
          >
            Kembali
          </button>
          {/* Title and Divider */}
          <div className="text-center mb-6">
            <hr className="border-[#4682B4] border-t-4 w-20 mx-auto mb-4" /> {/* Garis horizontal */}
            <h2 className="text-3xl font-semibold text-[#4682B4]">Sertifikat</h2>
          </div>
          {/* Sertifikat Details */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-[#4682B4] mb-2">Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)</h2>
            <div className="flex justify-center gap-4 mb-6">
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Revamp Website</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">IMM </span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Vocabulary 1 - Priode 25 Januari 2022</span>
            </div>
          </div>
          {/* Sertifikat Image */}

          <img src={sertifikatMagang} alt="Sertifikat 2" className="w-full h-full object-cover rounded-lg mb-4 shadow-sm" />

          {/* Sertifikat Deskripsi */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-[#4682B4] mb-4">Deskripsi Sertifikat</h3>
            <p className="text-lg text-gray-700 text-justify">
              Proud to share that I won 3rd place in the "Lomba Code Championship" during the Musyawarah Wilayah ke-V Permikomnas wilayah IX Jawa Timur on December 22, 2023!
              <br />
              <br />
              This achievement is a testament to the hard work and determination I’ve put into coding, and I’m truly grateful for the opportunity to compete alongside brilliant minds in the field of informatics. A big thank you to the
              organizers and all participants for making this event memorable. Looking forward to more challenges and opportunities to grow in the tech community!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SubSertifikat2;
