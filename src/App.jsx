import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFound from './Pages/NotFound';
import ProyekAll from './Pages/ProyekAll';
import SertifikatAll from './Pages/SertifikatAll';
import SubProyek1 from './Pages/ProyekAll/SubProyek1';
import SubProyek2 from './Pages/ProyekAll/SubProyek2';
import SubProyek3 from './Pages/ProyekAll/SubProyek3';
import SubProyek4 from './Pages/ProyekAll/SubProyek4';
import SubProyek5 from './Pages/ProyekAll/SubProyek5';
import SubProyek6 from './Pages/ProyekAll/SubProyek6';
import SubProyek7 from './Pages/ProyekAll/SubProyek7';
import SubProyek8 from './Pages/ProyekAll/SubProyek8';
import SubSertifikat1 from './Pages/SertifikatAll/SubSertifikat1';
import SubSertifikat2 from './Pages/SertifikatAll/SubSertifikat2';
import SubSertifikat3 from './Pages/SertifikatAll/SubSertifikat3';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Halaman utama */}
      //Bagian Proyek
      <Route path="/proyek" element={<ProyekAll />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek1" element={<SubProyek1 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek2" element={<SubProyek2 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek3" element={<SubProyek3 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek4" element={<SubProyek4 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek5" element={<SubProyek5 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek6" element={<SubProyek6 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek7" element={<SubProyek7 />} /> {/* Halaman kemampuan */}
      <Route path="/subproyek8" element={<SubProyek8 />} /> {/* Halaman kemampuan */}
      //Bagian Sertifikat
      <Route path="/sertifikat" element={<SertifikatAll />} /> {/* Halaman kemampuan */}
      <Route path="/subsertifikat1" element={<SubSertifikat1 />} /> {/* Halaman kemampuan */}
      <Route path="/subsertifikat2" element={<SubSertifikat2 />} /> {/* Halaman kemampuan */}
      <Route path="/subsertifikat3" element={<SubSertifikat3 />} /> {/* Halaman kemampuan */}
      <Route path="*" element={<NotFound />} /> {/* Halaman 404 */}
    </Routes>
  );
};

export default App;
