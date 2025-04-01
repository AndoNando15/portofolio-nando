import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Ikon play dari react-icons
import bannerImage1 from '/images/Konten/3-foto-banner.png';

const HalamanUtama = () => {
  return (
    <section>
      <div className="flex items-center justify-center  px-4 md:px-20 py-0 md:py-10 bg-[#F0F8FF]">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-[#F0F8FF] rounded-lg overflow-hidden">
          {/* Bagian Kiri */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start text-center md:text-left p-4 mt-6 md:mt-20">
            <h5 className="text-xs md:text-sm font-semibold bg-gray-200 px-2 py-1 rounded-md w-max">Hallo Semuanya</h5>

            <h1 className="text-lg md:text-5xl font-semibold mt-3 leading-snug max-w-xs md:max-w-xl">
              Saya <span className="text-[#4682B4] font-bold">Herlando Prayitno</span> <br />
              Software Engineering <br />
              Asal <span className="text-[#4682B4] font-bold">Gresik.</span>
            </h1>

            <p className="text-gray-600 mt-3 max-w-xs md:max-w-lg text-sm md:text-base">Saya Fresh Graduate Teknik Informatika Universitas Muhammadiyah Gresik tahun 2025</p>

            {/* Tombol */}
            <div className="flex flex-wrap md:flex-nowrap gap-1 md:gap-4 mt-3 justify-center md:justify-start w-auto">
              <button className="flex items-center justify-center bg-[#4682B4] text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-sm font-medium shadow-md hover:bg-[#356699] transition min-w-max cursor-pointer">
                Lihat Portofolio Saya
                <FaPlay className="ml-2 text-[7px] md:text-sm" />
              </button>

              <button
                onClick={() => window.open('https://wa.me/6285785455575?text=Halo%20Saya%20tertarik%20untuk%20melihat%20portofolio%20dan%20mendiskusikan%20peluang%20kerja.', '_blank')}
                className="border-2 border-black px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-sm font-medium shadow-md hover:bg-gray-200 transition min-w-max cursor-pointer"
              >
                Rekrut Saya
              </button>
            </div>
          </div>

          {/* Bagian Kanan */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <img src={bannerImage1} alt="Profile" className="w-90 md:w-150 h-auto" />
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default HalamanUtama;
