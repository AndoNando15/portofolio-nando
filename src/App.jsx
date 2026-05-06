import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFound from './Pages/NotFound';
import ProyekAll from './Pages/ProyekAll';
import SertifikatAll from './Pages/SertifikatAll';
import ProjectDetail from './Pages/ProjectDetail';
import CertificateDetail from './Pages/CertificateDetail';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Bagian Proyek */}
        <Route path="/proyek" element={<ProyekAll />} />
        <Route path="/proyek/:id" element={<ProjectDetail />} />

        {/* Bagian Sertifikat */}
        <Route path="/sertifikat" element={<SertifikatAll />} />
        <Route path="/sertifikat/:id" element={<CertificateDetail />} />

        {/* Halaman Tidak Ditemukan */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
