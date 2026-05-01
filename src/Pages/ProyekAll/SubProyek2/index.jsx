import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

const SubProyek2 = () => {
  const cardDescriptions = [
    { title: 'HALAMAN LOGIN', image: '/images/Proyek/peminjaman-ruangan/001-halaman-login.png' },
    { title: 'HALAMAN PENDAFTAR BARU', image: '/images/Proyek/peminjaman-ruangan/002-halaman-pendaftar-baru.png' },
    { title: 'HALAMAN DATA PETUGAS', image: '/images/Proyek/peminjaman-ruangan/003-halaman-data-petugas.png' },
    { title: 'HALAMAN DATA PENGGUNA', image: '/images/Proyek/peminjaman-ruangan/004-halaman-data-pengguna.png' },
    { title: 'HALAMAN PERMINTAAN PINJAM', image: '/images/Proyek/peminjaman-ruangan/005-halaman-permintaan-pinjam.png' },
    { title: 'HALAMAN DATA ALAT', image: '/images/Proyek/peminjaman-ruangan/006-halaman-data-alat.png' },
    { title: 'HALAMAN RUANGAN', image: '/images/Proyek/peminjaman-ruangan/007-halaman-ruangan.png' },
    { title: 'HALAMAN DATA PEMINJAMAN', image: '/images/Proyek/peminjaman-ruangan/008-halaman-data-peminjaman.png' },
    { title: 'HALAMAN HISTORI PEMINJAMAN', image: '/images/Proyek/peminjaman-ruangan/009-halaman-histori-peminjaman.png' },
    { title: 'HALAMAN USER', image: '/images/Proyek/peminjaman-ruangan/010-halaman-user.png' },
    { title: 'HALAMAN USER 2', image: '/images/Proyek/peminjaman-ruangan/011-halaman-user-2.png' },
  ];

  return (
    <ProjectTemplate 
      title="Peminjaman Ruangan Website" 
      tags={['UI/UX Design', 'PHP', 'Laravel', 'BOOTSTRAP 5']} 
      items={cardDescriptions} 
    />
  );
};

export default SubProyek2;
