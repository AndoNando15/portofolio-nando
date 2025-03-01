import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaArrowRight } from 'react-icons/fa'; // Import untuk ikon
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png';
import sertifikatVocabolary from '/Sertifikat/sertifikat-vocabolary.jpg';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';

const SertifikatAll = () => {
  const navigate = useNavigate(); // Hook dari react-router-dom untuk navigasi

  return (
    <>
      <div className="flex flex-col min-h-screen mt-15">
        <Header />

        {/* Sertifikat Section */}
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
              <h2 className="text-3xl font-semibold text-[#4682B4]">Sertifikat Saya</h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Card 1 */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <img src={sertifikatLomba} alt="Sertifikat 1" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-left mb-2">CODE CHAMPIONSHIP : Musywil Jawa Timur 2023</h3>
                <div className="text-sm text-gray-600 mb-2">Juara 3 - 22 Desember 2023</div>
                <p className="text-sm text-gray-600 mb-4">Proud to share that I won 3rd place in the "Lomba Code Championship" during the Musyawarah Wilayah ke-V Permikomnas wilayah IX Jawa Timur on December 22, 2023!</p>
                <a href="/subsertifikat1" className="text-blue-600 hover:underline flex items-center cursor-pointer">
                  Selengkapnya <FaArrowRight className="ml-2" />
                </a>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <img src={sertifikatMagang} alt="Sertifikat 2" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-left mb-2">Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)</h3>
                <div className="text-sm text-gray-600 mb-2">Revamp Website - IMM - April - July 2024</div>
                <p className="text-sm text-gray-600 mb-4">I’m proud to receive the Internship Certificate from Yayasan Transformasi Bhakti Negeri (TBN Indonesia) for the period of April 29th - June 29th, 2024.</p>
                <a href="/subsertifikat2" className="text-blue-600 hover:underline flex items-center">
                  Selengkapnya <FaArrowRight className="ml-2" />
                </a>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <img src={sertifikatVocabolary} alt="Sertifikat 3" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-left mb-2">
                  Peace English Academy<span className="text-white">Text Kosong / Enter</span>
                </h3>
                <div className="text-sm text-gray-600 mb-2">Vocabulary 1 - Priode 25 Januari 2022</div>
                <p className="text-sm text-gray-600 mb-4">
                  I’m thrilled to have completed the exam and received a certificate for finishing the VOCABULARY 1 course at Peace English Academy with a "B" grade (Very Good) on January 25th, 2022!{' '}
                </p>
                <a href="/subsertifikat3" className="text-blue-600 hover:underline flex items-center">
                  Selengkapnya <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default SertifikatAll;
