import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaArrowRight } from 'react-icons/fa';

const ProyekAll = () => {
  const navigate = useNavigate();

  const cardDescriptions = [
    {
      title: 'Algoritma Genetika - Penjadwalan Website',
      image: '/images/Proyek/algoritma-genetika/HALAMAN-LOGIN.png',
      subProyek: '/subproyek1',
      tags: ['UI/UX Design', 'PHP', 'Laravel', 'Algoritma Genetika'],
    },
    {
      title: 'Peminjaman Ruangan Website',
      image: '/images/Proyek/peminjaman-ruangan/001-halaman-login.png',
      subProyek: '/subproyek2',
      tags: ['UI/UX Design', 'PHP', 'Laravel', 'Website'],
    },
    {
      title: 'SPK - Pemilihan Partai Website',
      image: '/images/Proyek/spk-pemilihan-partai/001-halaman-partai.png',
      subProyek: '/subproyek3',
      tags: ['SPK', 'PHP', 'Laravel', 'Website'],
    },
    {
      title: 'UNITY - Aplikasi Quiz Psikologi',
      image: '/images/Proyek/aplikasi-psikolog-quiz/002-halaman-menu.jpg',
      subProyek: '/subproyek4',
      tags: ['Unity', 'C#', 'Quiz', 'UI/UX'],
    },
    {
      title: 'UAS - Aplikasi Uji Kompetensi Keahlian TPTU',
      image: '/images/Proyek/aplikasi-smk-tptu/002-halaman-utama.png',
      subProyek: '/subproyek5',
      tags: ['Desktop App', 'UI/UX', 'Pendidikan', 'TPTU'],
    },
    {
      title: 'KLASIFIKASI - Aplikasi Deteksi Harga Melalui Dokument',
      image: '/images/Proyek/deteksi-warna/003-halaman-dokumentasi.png',
      subProyek: '/subproyek6',
      tags: ['Klasifikasi', 'Dokumentasi', 'Deteksi', 'Aplikasi'],
    },
    {
      title: 'AR - Game Haji Virtual',
      image: '/images/Proyek/game-ar-haji/001-halaman-1.png',
      subProyek: '/subproyek7',
      tags: ['AR', 'Unity', 'Game', 'Edukasi'],
    },
    {
      title: 'PUZZLE - Game Edukasi Mencocokan Posisi Gambar',
      image: '/images/Proyek/game-edukasi/001-halaman-loading.png',
      subProyek: '/subproyek8',
      tags: ['Unity', 'C#', '2D', 'Game Edukasi'],
    },
    {
      title: 'APP Wallet',
      image: '/images/Proyek/app-wallet/halaman-login.png',
      subProyek: '/subproyek9',
      tags: ['Web App', 'Dashboard', 'Dataset', 'Cluster'],
    },
    {
      title: 'APP Mamin',
      image: '/images/Proyek/app-mamin/halaman-login.png',
      subProyek: '/subproyek10',
      tags: ['Web App', 'Dashboard', 'Makan', 'Minum'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen mt-15">
      <Header />

      <section className="bg-[#F0F8FF] py-10 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate('/')} className="inline-flex items-center px-6 py-2 bg-[#356699] text-white rounded-full hover:bg-[#4682B4] transition duration-200 cursor-pointer mb-8">
            Kembali
          </button>

          <div className="text-center mb-6">
            <hr className="border-[#4682B4] border-t-4 w-20 mx-auto mb-4" />
            <h2 className="text-3xl font-semibold text-[#4682B4]">Portofolio Saya</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {cardDescriptions.map((card, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg">
                <img src={card.image} alt={card.title} className="w-full h-36 object-cover rounded-lg mb-4" />

                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-blue-100 text-black py-1 px-3 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-left mb-2">{card.title}</h3>

                <button onClick={() => navigate(card.subProyek)} className="absolute bottom-4 right-4 bg-[#4682B4] text-white p-2 rounded-full hover:bg-[#356699] transition duration-200 cursor-pointer">
                  <FaArrowRight className="text-xl" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProyekAll;
