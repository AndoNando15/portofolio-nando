import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const SubProyek11 = () => {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

  const cardDescriptions = [
    { title: 'Halaman Login', image: '/images/Proyek/spp/halaman-login.png' },
    { title: 'Halaman Data Admin', image: '/images/Proyek/spp/halaman-dataadmin.png' },
    { title: 'Halaman Data Guru', image: '/images/Proyek/spp/halaman-dataguru.png' },
    { title: 'Halaman Data Siswa', image: '/images/Proyek/spp/halaman-datasiswa.png' },
    { title: 'Halaman Daftar Kelas', image: '/images/Proyek/spp/halaman-daftarkelas.png' },
    { title: 'Halaman Pencarian', image: '/images/Proyek/spp/halaman-pencarian.png' },
    { title: 'Halaman Pembayaran Siswa', image: '/images/Proyek/spp/halaman-pembayaransiswa.png' },
    { title: 'Halaman Riwayat', image: '/images/Proyek/spp/halaman-riwayat.png' },
    { title: 'Halaman Tagihan Siswa', image: '/images/Proyek/spp/halaman-tagihansiswa.png' },
    { title: 'Halaman Riwayat dan Keterangan', image: '/images/Proyek/spp/halaman-riwayatdanketerangan.png' },
  ];

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen mt-15 bg-[#F0F8FF]">
      <Header />

      <section className="py-10 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate('/proyek')} className="inline-flex items-center px-6 py-2 bg-[#356699] text-white rounded-full hover:bg-[#4682B4] transition duration-200 cursor-pointer mb-8">
            Kembali
          </button>

          <div className="text-center mb-6">
            <hr className="border-[#4682B4] border-t-4 w-20 mx-auto mb-4" />
            <h2 className="text-3xl font-semibold text-[#4682B4]">Proyek</h2>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-[#4682B4] mb-2">Sistem Pembayaran SPP</h2>
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Web App</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Admin</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Guru</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Siswa</span>
              <span className="bg-[#356699] text-white text-xs px-4 py-2 rounded-full">Pembayaran</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {cardDescriptions.map((description, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:z-20 cursor-pointer" onClick={() => openModal(description.image)}>
                <h6 className="text-xl font-semibold text-left mb-2">{description.title}</h6>
                <img src={description.image} alt={description.title} className="w-full h-36 object-cover rounded-lg mb-4" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">Lihat Gambar</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {modalImage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 py-6" onClick={closeModal}>
          <div className="relative bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="sticky top-0 ml-auto block text-black text-2xl cursor-pointer z-10">
              &times;
            </button>

            <img src={modalImage} alt="Larger View" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubProyek11;
