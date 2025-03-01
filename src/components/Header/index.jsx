import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 md:px-45 left-0 w-full bg-[#F0F8FF] z-50">
      <div className="container mx-auto flex justify-between items-center shadow-sm bg-[#4682B4] text-white p-2 rounded-lg mt-5">
        {/* Logo dan Nama */}
        <div className="flex items-center gap-2">
          <h5 className="text-lg font-semibold">Nando Innovatech</h5>
        </div>

        {/* Hamburger Button */}
        <button className="text-white text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation untuk Desktop */}
        <nav className="hidden md:flex gap-4">
          <a href="/" className="hover:underline">
            Halaman Utama
          </a>
          <a href="kemampuan" className="hover:underline">
            Kemampuan
          </a>
          <a href="/" className="hover:underline">
            Tentang Saya
          </a>
          <a href="proyek" className="hover:underline">
            Proyek
          </a>
          <a href="sertifikat" className="hover:underline">
            Sertifikat
          </a>
        </nav>

        {/* Kontak Kami */}
        <div className="hidden md:block bg-[#F0F8FF] px-4 cursor-pointer py-2 rounded-lg text-black">
          <h5>Kontak Kami</h5>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="w-full bg-[#4682B4] p-4 rounded-xl shadow-lg z-50 px-4">
          <div className="grid grid-cols-2 gap-4">
            <a href="/" className="bg-[#F0F8FF] text-black py-2 px-3 rounded-md text-center">
              Halaman Utama
            </a>
            <a href="/proyek" className="bg-[#F0F8FF] text-black py-2 px-3 rounded-md text-center">
              Proyek
            </a>
            <a href="/" className="bg-[#F0F8FF] text-black py-2 px-3 rounded-md text-center">
              Kemampuan
            </a>
            <a href="/sertifikat" className="bg-[#F0F8FF] text-black py-2 px-3 rounded-md text-center">
              Sertifikat
            </a>
            <a href="/" className="bg-[#F0F8FF] text-black py-2 px-3 rounded-md text-center">
              Tentang Saya
            </a>
            <a href="#" className="bg-[#85C8FF] text-black py-2 px-3 rounded-md text-center">
              Kontak Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
