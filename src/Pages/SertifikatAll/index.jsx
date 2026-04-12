import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaArrowRight } from 'react-icons/fa';
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png';
import sertifikatVocabolary from '/Sertifikat/sertifikat-vocabolary.jpg';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';
import sertifikatAETS from '/Sertifikat/sertifikat-aets-score-report.png';
import sertifikatMahirBahasa from '/Sertifikat/sertifikat-mahir-bahasa-speaking-two.png';
import sertifikatMrPepsi from '/Sertifikat/sertifikat-mr-pepsi-impromptu.png';
import sertifikatDaffodilsGrading from '/Sertifikat/sertifikat-daffodils-grading.png';
import sertifikatDaffodilsSpeakFirst from '/Sertifikat/sertifikat-daffodils-speak-first.png';

const SertifikatAll = () => {
  const navigate = useNavigate();

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
            <h2 className="text-3xl font-semibold text-[#4682B4]">Sertifikat Saya</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Card 1 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatLomba} alt="Sertifikat 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">CODE CHAMPIONSHIP : Musywil Jawa Timur 2023</h3>
              <div className="text-sm text-gray-600 mb-2">Juara 3 - 22 Desember 2023</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">Proud to share that I won 3rd place in the "Lomba Code Championship" during the Musyawarah Wilayah ke-V Permikomnas wilayah IX Jawa Timur on December 22, 2023!</p>
              <button onClick={() => navigate('/subsertifikat1')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatMagang} alt="Sertifikat 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)</h3>
              <div className="text-sm text-gray-600 mb-2">Revamp Website - IMM - April - July 2024</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">I’m proud to receive the Internship Certificate from Yayasan Transformasi Bhakti Negeri (TBN Indonesia) for the period of April 29th - June 29th, 2024.</p>
              <button onClick={() => navigate('/subsertifikat2')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatVocabolary} alt="Sertifikat 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">Peace English Academy</h3>
              <div className="text-sm text-gray-600 mb-2">Vocabulary 1 - Priode 25 Januari 2022</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">
                I’m thrilled to have completed the exam and received a certificate for finishing the VOCABULARY 1 course at Peace English Academy with a "B" grade (Very Good) on January 25th, 2022!
              </p>
              <button onClick={() => navigate('/subsertifikat3')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Card 4 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatAETS} alt="Sertifikat 4" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">AETS Score Report</h3>
              <div className="text-sm text-gray-600 mb-2">AETS - Overall Score 457 - April 11, 2026</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">This certificate shows my English proficiency test result covering Listening, Structure, and Reading skills with an overall score of 457.</p>
              <button onClick={() => navigate('/subsertifikat4')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Card 5 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatMahirBahasa} alt="Sertifikat 5" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">Mahir Bahasa</h3>
              <div className="text-sm text-gray-600 mb-2">Speaking Two Intermediate - 25 August 2025</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">This certificate represents my achievement in completing the Speaking Two Intermediate program and improving my spoken English skills.</p>
              <button onClick={() => navigate('/subsertifikat5')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Card 6 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatMrPepsi} alt="Sertifikat 6" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">Mr. Pepsi Upgrade</h3>
              <div className="text-sm text-gray-600 mb-2">Impromptu Intermediate - 25 December 2025</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">This certificate reflects my ability to communicate ideas spontaneously and confidently through the Impromptu program.</p>
              <button onClick={() => navigate('/subsertifikat6')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Card 7 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatDaffodilsGrading} alt="Sertifikat 7" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">The Daffodils</h3>
              <div className="text-sm text-gray-600 mb-2">Grading - Level Reference - English Program</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">This grading reference shows the level progression and learning path in English speaking and communication development.</p>
              <button onClick={() => navigate('/subsertifikat7')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Card 8 */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img src={sertifikatDaffodilsSpeakFirst} alt="Sertifikat 8" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-left mb-2">The Daffodils</h3>
              <div className="text-sm text-gray-600 mb-2">Speak First - Good - 29 August 2025</div>
              <p className="text-sm text-gray-600 mb-4 text-justify">This certificate marks my achievement in completing the Speak First program and building a stronger foundation in English speaking.</p>
              <button onClick={() => navigate('/subsertifikat8')} className="text-blue-600 hover:underline flex items-center cursor-pointer">
                Selengkapnya <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SertifikatAll;
