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
import SubProyek9 from './Pages/ProyekAll/SubProyek9';
import SubProyek10 from './Pages/ProyekAll/SubProyek10';
import SubSertifikat1 from './Pages/SertifikatAll/SubSertifikat1';
import SubSertifikat2 from './Pages/SertifikatAll/SubSertifikat2';
import SubSertifikat3 from './Pages/SertifikatAll/SubSertifikat3';
import SubSertifikat4 from './Pages/SertifikatAll/SubSertifikat4';
import SubSertifikat5 from './Pages/SertifikatAll/SubSertifikat5';
import SubSertifikat6 from './Pages/SertifikatAll/SubSertifikat6';
import SubSertifikat7 from './Pages/SertifikatAll/SubSertifikat7';
import SubSertifikat8 from './Pages/SertifikatAll/SubSertifikat8';
import SubProyek11 from './Pages/ProyekAll/SubProyek11';
import SubProyek12 from './Pages/ProyekAll/SubProyek12';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Bagian Proyek */}
      <Route path="/proyek" element={<ProyekAll />} />
      <Route path="/subproyek1" element={<SubProyek1 />} />
      <Route path="/subproyek2" element={<SubProyek2 />} />
      <Route path="/subproyek3" element={<SubProyek3 />} />
      <Route path="/subproyek4" element={<SubProyek4 />} />
      <Route path="/subproyek5" element={<SubProyek5 />} />
      <Route path="/subproyek6" element={<SubProyek6 />} />
      <Route path="/subproyek7" element={<SubProyek7 />} />
      <Route path="/subproyek8" element={<SubProyek8 />} />
      <Route path="/subproyek9" element={<SubProyek9 />} />
      <Route path="/subproyek10" element={<SubProyek10 />} />
      <Route path="/subproyek11" element={<SubProyek11 />} />
      <Route path="/subproyek12" element={<SubProyek12 />} />

      {/* Bagian Sertifikat */}
      <Route path="/sertifikat" element={<SertifikatAll />} />
      <Route path="/subsertifikat1" element={<SubSertifikat1 />} />
      <Route path="/subsertifikat2" element={<SubSertifikat2 />} />
      <Route path="/subsertifikat3" element={<SubSertifikat3 />} />
      <Route path="/subsertifikat4" element={<SubSertifikat4 />} />
      <Route path="/subsertifikat5" element={<SubSertifikat5 />} />
      <Route path="/subsertifikat6" element={<SubSertifikat6 />} />
      <Route path="/subsertifikat7" element={<SubSertifikat7 />} />
      <Route path="/subsertifikat8" element={<SubSertifikat8 />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
