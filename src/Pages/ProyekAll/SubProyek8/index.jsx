import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// Update to add images for each card
const SubProyek1 = () => {
  const navigate = useNavigate();

  const [modalImage, setModalImage] = useState(null); // State to handle modal image

  // Daftar keterangan untuk card
  const cardDescriptions = [
    { title: 'Halaman Loading', image: '/images/Proyek/game-edukasi/001-halaman-loading.png' },
    { title: 'Halaman Menu Awal', image: '/images/Proyek/game-edukasi/002-halaman-menu-awal.png' },
    { title: 'Halaman In-Game', image: '/images/Proyek/game-edukasi/003-halaman-ingame.png' },
    { title: 'Halaman Pilihan Terakhir', image: '/images/Proyek/game-edukasi/004-halaman-pilihan-terakhir.png' },
    { title: 'Halaman Kunci Level 10', image: '/images/Proyek/game-edukasi/005-halaman-kunci-level-10.png' },
    { title: 'Halaman Iklan Open Key 10', image: '/images/Proyek/game-edukasi/006-halaman-iklan-open-key-10.png' },
    { title: 'Halaman Full', image: '/images/Proyek/game-edukasi/007-halaman-full.png' },
    { title: 'Halaman Tamat', image: '/images/Proyek/game-edukasi/008-halaman-tamat.png' },
    { title: 'Halaman Open Level', image: '/images/Proyek/game-edukasi/009-halaman-open-level.png' },
    { title: 'Halaman Level 2', image: '/images/Proyek/game-edukasi/010-halaman-level-2.png' },
    { title: 'Halaman Ingame 2', image: '/images/Proyek/game-edukasi/011-halaman-ingame-2.png' },
    { title: 'Halaman Ingame 2-2', image: '/images/Proyek/game-edukasi/012-halaman-ingame2-2.png' },
  ];

  const openModal = (image) => {
    setModalImage(image); // Open modal with the selected image
  };

  const closeModal = () => {
    setModalImage(null); // Close modal
  };

  return (
    <div className="flex flex-col min-h-screen mt-15 bg-[#F0F8FF]">
      <Header />

      {/* Kemampuan Section */}
      <section className="py-10 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate('/proyek')} // Fungsi untuk kembali ke halaman sebelumnya
            className="inline-flex items-center px-6 py-2 bg-[#356699] text-white rounded-full hover:bg-[#4682B4] transition duration-200 cursor-pointer mb-8"
          >
            Kembali
          </button>

          {/* Title and Divider */}
          <div className="text-center mb-6">
            <hr className="border-[#4682B4] border-t-4 w-20 mx-auto mb-4" /> {/* Garis horizontal */}
            <h2 className="text-3xl font-semibold text-[#4682B4]">Proyek</h2>
          </div>

          {/* Judul Proyek */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-[#4682B4] mb-2">PUZZLE - Game Edukasi Mencocokan Posisi Gambar</h2>
            <div className="flex justify-center gap-4 mb-6">
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Unity</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">C#</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">2D</span>

              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">UI/UX</span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {cardDescriptions.map((description, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:z-20 cursor-pointer"
                onClick={() => openModal(description.image)} // Open modal when clicked
              >
                <h6 className="text-xl font-semibold text-left mb-2">{description.title}</h6>
                <img src={description.image} alt={description.title} className="w-full h-36 object-cover rounded-lg mb-4" />
                {/* Text that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-200">Lihat Gambar</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal for Larger Image */}
      {modalImage && (
        <div className="fixed top-0 left-0 w-full h-full cursor-pointer bg-black bg-opacity-50 flex flex-col items-center justify-center z-50" onClick={closeModal}>
          <div className="relative bg-white p-4 rounded-lg max-w-5xl ">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">
              &times;
            </button>
            <img src={modalImage} alt="Larger View" className="max-w-full max-h-[100vh] object-contain" />
          </div>
          <div className=" mt-12 text-white text-xl">Klik dimanapun untuk keluar</div>
        </div>
      )}
    </div>
  );
};

export default SubProyek1;
