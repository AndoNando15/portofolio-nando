import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaArrowRight, FaChevronLeft } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const ProyekAll = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].projects;

  const cardDescriptions = [
    {
      title: 'Algoritma Genetika - Penjadwalan Website',
      image: '/images/Proyek/algoritma-genetika/HALAMAN-LOGIN.png',
      subProyek: '/subproyek1',
      tags: ['UI/UX Design', 'PHP', 'Laravel', 'GA'],
    },
    {
      title: 'Peminjaman Ruangan Website',
      image: '/images/Proyek/peminjaman-ruangan/001-halaman-login.png',
      subProyek: '/subproyek2',
      tags: ['UI/UX Design', 'PHP', 'Laravel', 'Web'],
    },
    {
      title: 'SPK - Pemilihan Partai Website',
      image: '/images/Proyek/spk-pemilihan-partai/001-halaman-partai.png',
      subProyek: '/subproyek3',
      tags: ['SPK', 'PHP', 'Laravel', 'Web'],
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
      tags: ['Desktop', 'UI/UX', 'Education', 'TPTU'],
    },
    {
      title: 'KLASIFIKASI - Aplikasi Deteksi Harga Melalui Dokument',
      image: '/images/Proyek/deteksi-warna/003-halaman-dokumentasi.png',
      subProyek: '/subproyek6',
      tags: ['Classification', 'Docs', 'Detection', 'App'],
    },
    {
      title: 'AR - Game Haji Virtual',
      image: '/images/Proyek/game-ar-haji/001-halaman-1.png',
      subProyek: '/subproyek7',
      tags: ['AR', 'Unity', 'Game', 'Education'],
    },
    {
      title: 'PUZZLE - Game Edukasi Mencocokan Posisi Gambar',
      image: '/images/Proyek/game-edukasi/001-halaman-loading.png',
      subProyek: '/subproyek8',
      tags: ['Unity', 'C#', '2D', 'Game'],
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
      tags: ['Web App', 'Dashboard', 'F&B'],
    },
    {
      title: 'Sistem Pembayaran SPP',
      image: '/images/Proyek/spp/halaman-login.png',
      subProyek: '/subproyek11',
      tags: ['Web App', 'Admin', 'Teacher', 'Payment'],
    },
    {
      title: 'Hybrid Monte Carlo',
      image: '/images/Proyek/hybrid-montecarlo/halaman-dashboard.png',
      subProyek: '/subproyek12',
      tags: ['Web App', 'Monte Carlo', 'Smoothing', 'Analysis'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')} 
            className="group flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all cursor-pointer"
          >
            <FaChevronLeft className="text-sm" />
            {t.back_btn}
          </button>

          {/* Title Header */}
          <div className="space-y-4 mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
              {t.title}
            </h1>
            <p className="text-gray-500 max-w-2xl">
              {language === 'en' 
                ? "Explore my comprehensive journey through software engineering, from complex web systems to interactive AR/VR experiences."
                : "Jelajahi perjalanan komprehensif saya melalui software engineering, mulai dari sistem web yang kompleks hingga pengalaman AR/VR interaktif."}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cardDescriptions.map((card, index) => (
              <div 
                key={index}
                onClick={() => navigate(card.subProyek)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {card.title}
                  </h3>

                  <div className="mt-auto flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'en' ? 'View Project' : 'Lihat Proyek'}
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProyekAll;
