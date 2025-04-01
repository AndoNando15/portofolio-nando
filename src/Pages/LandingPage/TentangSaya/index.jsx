import React from 'react';
import tentangsayaImage from '/images/Konten/2-FOTO-TENTANG-SAYA.svg';
import downloadCV from '/File/CV-HERLANDO-PRAYITNO.pdf';

const TentangSaya = () => {
  return (
    <div className="w-full bg-[#4682b4] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Gambar */}
        <div className="mb-6 md:mb-0  w-full flex justify-center">
          <img src={tentangsayaImage} alt="Tentang Saya" className="w-48 md:w-100  h-auto object-cover " />
        </div>

        {/* Deskripsi */}
        <div className="text-white text-center md:text-left md:ml-8 w-full ">
          <p className="border-l-4 text-lg font-semibold mb-5 text-left  pl-4">Tentang Saya</p>
          <h3 className="text-3xl font-semibold mb-4">Siapa Herlando Prayitno?</h3>
          <p className="text-lg mb-6 text-justify">
            Lulusan S1 Teknik Informatika Universitas Muhammadiyah Gresik dengan keahlian dalam pengembangan perangkat lunak, analisis data, dan manajemen proyek. Memiliki pengalaman dalam merancang dan mengembangkan perangkat lunak yang
            sesuai dengan kebutuhan pengguna, dengan fokus pada kualitas dan fungsionalitas. Berkomitmen untuk terus belajar dan berkontribusi di bidang IT, khususnya dalam software engineering.
          </p>

          <a
            href={downloadCV} // Ganti dengan lokasi file Anda
            download="CV_Herlando Prayitno.pdf" // Nama file yang akan diunduh
            className="inline-block bg-[#85C8FF] text-black py-3 px-8 rounded-full hover:bg-[#6aa6d7] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Unduh CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default TentangSaya;
