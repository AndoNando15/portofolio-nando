import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

const KontakKami = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F0F8FF] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-10">
          {/* Title and Divider */}
          <h2 className="text-3xl font-semibold flex items-center mb-4 sm:mb-0">
            <span className="border-l-4 pl-4 text-[#4682B4] border-[#4682B4] mr-3">Mari Terhubung</span>
          </h2>
        </div>

        {/* Kontak Kami Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left Side - Description and Information */}
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-[#4682B4] text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg mr-4">n</div>
              <div className="text-lg font-semibold text-[#4682B4]">Nando Innovatech</div>
            </div>
            <div className="text-sm text-gray-600 mb-4 text-justify">
              Lulusan Teknik Informatika yang tertarik pada pengembangan perangkat lunak dan sistem. Memiliki pengalaman dalam membangun aplikasi sesuai kebutuhan pengguna, serta terus belajar dan berkembang di bidang software engineering.
            </div>

            {/* Halaman Links */}
            <div className="mb-4">
              <div className="text-sm font-semibold text-[#4682B4] mb-2">Halaman</div>
              <ul>
                <li onClick={() => navigate('/')} className="text-gray-700 cursor-pointer hover:text-[#4682B4] transition">
                  Halaman Utama
                </li>
                <li onClick={() => navigate('/')} className="text-gray-700 cursor-pointer hover:text-[#4682B4] transition">
                  Kemampuan
                </li>
                <li onClick={() => navigate('/')} className="text-gray-700 cursor-pointer hover:text-[#4682B4] transition">
                  Tentang Saya
                </li>
                <li onClick={() => navigate('/proyek')} className="text-gray-700 cursor-pointer hover:text-[#4682B4] transition">
                  Proyek
                </li>
                <li onClick={() => navigate('/sertifikat')} className="text-gray-700 cursor-pointer hover:text-[#4682B4] transition">
                  Sertifikat
                </li>
              </ul>
            </div>

            {/* Kontak Details */}
            <div>
              <div className="text-sm font-semibold text-[#4682B4] mb-2">Kontak</div>
              <ul>
                <li className="flex items-center text-gray-700 mb-2">
                  <FaPhoneAlt className="mr-2 text-[#4682B4]" /> +62 857-8545-5575
                </li>
                <li className="flex items-center text-gray-700 mb-2">
                  <FaEnvelope className="mr-2 text-[#4682B4]" /> andonando158@gmail.com
                </li>
                <li className="flex items-center text-gray-700">
                  <FaInstagram className="mr-2 text-[#4682B4]" /> @andonando_15
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form Input */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-sm font-semibold text-[#4682B4] mb-2">Dapatkan Informasi Lainnya</div>
            <textarea placeholder="Tulis pesan Anda" className="w-full px-4 py-2 mb-4 border border-[#4682B4] rounded-md focus:outline-none min-h-[120px]" />
            <button
              onClick={() => {
                const message = document.querySelector('textarea').value;
                const finalMessage = `Halo, saya ingin mendapatkan informasi lainnya.\n\n${message}`;
                window.open(`https://wa.me/6285785455575?text=${encodeURIComponent(finalMessage)}`, '_blank');
              }}
              className="w-full px-6 py-2 bg-[#4682B4] text-white rounded-full hover:bg-[#356699] transition duration-200 cursor-pointer"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontakKami;
