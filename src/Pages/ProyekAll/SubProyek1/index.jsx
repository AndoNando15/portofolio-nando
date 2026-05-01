import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

const SubProyek1 = () => {
  const cardDescriptions = [
    { title: 'Halaman Login', image: '/images/Proyek/algoritma-genetika/HALAMAN-LOGIN.png' },
    { title: 'Halaman Dashboard', image: '/images/Proyek/algoritma-genetika/HALAMAN-DASHBOARD.png' },
    { title: 'Halaman Data Pengguna', image: '/images/Proyek/algoritma-genetika/HALAMAN-DATA-PENGGUNA.png' },
    { title: 'Halaman Generate', image: '/images/Proyek/algoritma-genetika/HALAMAN-GENERATE.png' },
    { title: 'Halaman Proses 1', image: '/images/Proyek/algoritma-genetika/HALAMAN-PROSES-1.png' },
    { title: 'Halaman Proses 2', image: '/images/Proyek/algoritma-genetika/HALAMAN-PROSES-2.png' },
    { title: 'Halaman Proses 3', image: '/images/Proyek/algoritma-genetika/HALAMAN-PROSES-3.png' },
    { title: 'Halaman Proses 4', image: '/images/Proyek/algoritma-genetika/HALAMAN-PROSES-4.png' },
    { title: 'Halaman Proses 5', image: '/images/Proyek/algoritma-genetika/HALAMAN-PROSES-5.png' },
    { title: 'Halaman Proses 6', image: '/images/Proyek/algoritma-genetika/HALAMAN-PROSES-6.png' },
    { title: 'Halaman Lihat Jadwal Sebelumnya', image: '/images/Proyek/algoritma-genetika/HALAMAN-LIHAT-JADWAL-SEBELUMNYA.png' },
    { title: 'Halaman Lihat Jadwal Terbaru', image: '/images/Proyek/algoritma-genetika/HALAMAN-LIHAT-JADWAL-TERBARU-REVISI.png' },
  ];

  return (
    <ProjectTemplate 
      title="Algoritma Genetika - Penjadwalan" 
      tags={['UI/UX Design', 'PHP', 'Laravel', 'GA', 'BOOTSTRAP 5']} 
      items={cardDescriptions} 
    />
  );
};

export default SubProyek1;
