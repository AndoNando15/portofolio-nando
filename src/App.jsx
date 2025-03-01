import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import KemampuanAll from './Pages/KemampuanAll';
import NotFound from './Pages/NotFound';
import ProyekAll from './Pages/ProyekAll';
import SertifikatAll from './Pages/SertifikatAll';
import SubProyek1 from './Pages/ProyekAll/SubProyek1';
import SubProyek2 from './Pages/ProyekAll/SubProyek2';
import SubSertifikat1 from './Pages/SertifikatAll/SubSertifikat1';
import SubSertifikat2 from './Pages/SertifikatAll/SubSertifikat2';
import SubSertifikat3 from './Pages/SertifikatAll/SubSertifikat3';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Halaman utama */}
      <Route path="/kemampuan" element={<KemampuanAll />} /> {/* Halaman kemampuan */}
      <Route path="/proyek" element={<ProyekAll />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek1" element={<SubProyek1 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek2" element={<SubProyek2 />} /> {/* Halaman kemampuan */}
      <Route path="/sertifikat" element={<SertifikatAll />} /> {/* Halaman kemampuan */}
      <Route path="/subsertifikat1" element={<SubSertifikat1 />} /> {/* Halaman kemampuan */}
      <Route path="/subsertifikat2" element={<SubSertifikat2 />} /> {/* Halaman kemampuan */}
      <Route path="/subsertifikat3" element={<SubSertifikat3 />} /> {/* Halaman kemampuan */}
      <Route path="*" element={<NotFound />} /> {/* Halaman 404 */}
    </Routes>
  );
};

export default App;
