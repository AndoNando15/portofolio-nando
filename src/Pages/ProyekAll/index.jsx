import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaArrowRight } from 'react-icons/fa'; // Import untuk ikon

const ProyekAll = () => {
  const navigate = useNavigate(); // Hook dari react-router-dom untuk navigasi

  const cardDescriptions = [
    { title: 'Algoritma Genetika - Penjadwalan Website', image: '/images/Proyek/algoritma-genetika/HALAMAN-LOGIN.png', subProyek: '/subproyek1' },
    { title: 'Peminjaman Ruangan Website', image: '/images/Proyek/peminjaman-ruangan/001-halaman-login.png', subProyek: '/subproyek2' },
    { title: 'SPK - Pemilihan Partai Website', image: '/images/Proyek/spk-pemilihan-partai/001-halaman-partai.png', subProyek: '/subproyek3' },
    { title: 'UNITY - Aplikasi Quiz Psikologi', image: 'images/Proyek/aplikasi-psikolog-quiz/002-halaman-menu.jpg', subProyek: '/subproyek4' },
    { title: 'UAS - Aplikasi Uji Kompetensi Keahlian TPTU', image: 'images/Proyek/aplikasi-smk-tptu/002-halaman-utama.png', subProyek: '/subproyek5' },
    { title: 'KLASIFIKASI - Aplikasi Deteksi Harga Melalui Dokument', image: 'images/Proyek/deteksi-warna/003-halaman-dokumentasi.png', subProyek: '/subproyek6' },
    { title: 'AR - Game Haji Virtual', image: 'images/Proyek/game-ar-haji/001-halaman-1.png', subProyek: '/subproyek7' },
    { title: 'PUZZLE - Game Edukasi Mencocokan Posisi Gambar', image: 'images/Proyek/game-edukasi/001-halaman-loading.png', subProyek: '/subproyek8' },
    // Add more cards as needed
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen mt-15">
        <Header />

        {/* Kemampuan Section */}
        <section className="bg-[#F0F8FF] py-10 px-4 md:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Tombol Kembali */}
            <button
              onClick={() => navigate('/')} // Fungsi untuk kembali ke halaman sebelumnya
              className="inline-flex items-center px-6 py-2 bg-[#356699] text-white rounded-full hover:bg-[#4682B4] transition duration-200 cursor-pointer mb-8"
            >
              Kembali
            </button>

            {/* Title and Divider */}
            <div className="text-center mb-6">
              <hr className="border-[#4682B4] border-t-4 w-20 mx-auto mb-4" /> {/* Garis horizontal */}
              <h2 className="text-3xl font-semibold text-[#4682B4]">Portofolio Saya</h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {cardDescriptions.map((card, index) => (
                <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg">
                  <img src={card.image} alt={card.title} className="w-full h-36 object-cover rounded-lg mb-4" />
                  {/* Tag Teknologi */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">UI/UX Design</span>
                    <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">PHP</span>
                    <span className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">Laravel</span>
                    <span className="text-xs bg-blue-100 text-blue-600 py-1 px-3 rounded-full">SPK</span>
                  </div>
                  <h3 className="text-xl font-semibold text-left mb-2">{card.title}</h3>

                  {/* Ikon Next di Kanan Bawah (Bulat) */}
                  <a onClick={() => navigate(card.subProyek)} className="absolute cursor-pointer bottom-4 right-4 bg-[#4682B4] text-white p-1 rounded-full hover:bg-[#356699] transition duration-200">
                    <FaArrowRight className="text-2xl" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ProyekAll;
