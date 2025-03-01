import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaMicrosoft, FaTrello, FaCode } from 'react-icons/fa'; // Mengimpor ikon yang sesuai
import { FaPaintBrush, FaVideo } from 'react-icons/fa'; // Mengimpor ikon untuk Adobe Photoshop, Corel Draw, Capcut, dan lainnya

const KemampuanAll = () => {
  const navigate = useNavigate(); // Hook dari react-router-dom untuk navigasi
  return (
    <>
      <div className="flex flex-col mt-15 min-h-screen">
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
            <div className="text-center mb-10">
              <hr className="border-[#4682B4] border-t-4 w-20 mx-auto mb-4" /> {/* Garis horizontal */}
              <h2 className="text-3xl font-semibold text-[#4682B4]">Kemampuan</h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Card 1: Microsoft Office */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaMicrosoft />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Microsoft Office</h3>
                <p className="text-left text-gray-600 mb-4">(Word, Excel, PowerPoint) untuk pengolahan data dan dokumentasi.</p>
              </div>

              {/* Card 2: Adobe Photoshop */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaPaintBrush />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Adobe Photoshop</h3>
                <p className="text-left text-gray-600 mb-4">Adobe Photoshop untuk desain grafis dan pengolahan gambar.</p>
              </div>

              {/* Card 3: Corel Draw */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaPaintBrush />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Corel Draw</h3>
                <p className="text-left text-gray-600 mb-4">Corel Draw untuk pembuatan desain vektor dan ilustrasi.</p>
              </div>

              {/* Card 4: Adobe Premiere Pro */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaVideo />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Adobe Premiere Pro</h3>
                <p className="text-left text-gray-600 mb-4">Adobe Premiere Pro untuk editing video dan pasca-produksi.</p>
              </div>

              {/* Card 5: Capcut */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaVideo />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Capcut</h3>
                <p className="text-left text-gray-600 mb-4">Capcut untuk editing video yang mudah dan cepat di perangkat mobile.</p>
              </div>

              {/* Card 6: Figma */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaTrello />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Figma</h3>
                <p className="text-left text-gray-600 mb-4">Figma untuk desain antarmuka pengguna dan prototyping secara kolaboratif.</p>
              </div>

              {/* Card 7: Trello */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaTrello />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Trello</h3>
                <p className="text-left text-gray-600 mb-4">Trello untuk manajemen proyek dan kolaborasi tim.</p>
              </div>

              {/* Card 8: Notion */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaTrello />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Notion</h3>
                <p className="text-left text-gray-600 mb-4">Notion untuk dokumentasi, catatan, dan manajemen tugas.</p>
              </div>

              {/* Card 9: Visual Studio Code */}
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl text-[#4682B4] mx-auto mb-4">
                  <FaCode />
                </div>
                <h3 className="text-xl font-semibold text-left mb-2">Visual Studio Code</h3>
                <p className="text-left text-gray-600 mb-4">Visual Studio Code untuk pengembangan perangkat lunak dan pemrograman.</p>
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

export default KemampuanAll;
