import React, { useState } from 'react';
import tentangsayaImage from '/images/Konten/2-FOTO-TENTANG-SAYA.svg';
import downloadCV from '/File/CV-HERLANDO-PRAYITNO-v2.pdf';

const TentangSaya = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#4682b4] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Gambar */}
        <div className="mb-6 md:mb-0 w-full flex justify-center">
          <img src={tentangsayaImage} alt="Tentang Saya" className="w-48 md:w-100 h-auto object-cover" />
        </div>

        {/* Deskripsi */}
        <div className="text-white text-center md:text-left md:ml-8 w-full">
          <p className="border-l-4 text-lg font-semibold mb-5 text-left pl-4">Tentang Saya</p>

          <h3 className="text-3xl font-semibold mb-4">Siapa Herlando Prayitno?</h3>

          <p className="text-lg mb-6 text-justify">
            Lulusan Teknik Informatika yang tertarik pada pengembangan perangkat lunak dan sistem. Memiliki pengalaman dalam membangun aplikasi sesuai kebutuhan pengguna, serta terus belajar dan berkembang di bidang software engineering.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#85C8FF] text-[#0f172a] text-sm md:text-base font-semibold shadow-md hover:bg-[#6aa6d7] hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Lihat CV
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Preview CV Herlando Prayitno</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-black text-2xl leading-none cursor-pointer">
                &times;
              </button>
            </div>

            {/* Isi Modal */}
            <div className="p-4 md:p-6">
              <iframe src={downloadCV} title="CV Herlando Prayitno" className="w-full h-[70vh] rounded-lg border" />

              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-end">
                <a href={downloadCV} download="CV_Herlando_Prayitno.pdf" className="bg-[#4682B4] text-white py-2 px-5 rounded-lg hover:bg-[#356699] transition text-center">
                  Unduh CV
                </a>

                <button onClick={() => setIsModalOpen(false)} className="border border-gray-400 text-gray-700 py-2 px-5 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TentangSaya;
