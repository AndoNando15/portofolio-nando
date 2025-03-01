import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HalamanUtama from '../LandingPage/HalamanUtama';
import Kemampuan from './Kemampuan';
import KontakKami from './KontakKami';
import Proyek from './Proyek';
import Sertifikat from './Sertifikat';
import TentangSaya from './TentangSaya';

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen mt-15">
        <Header />
        <HalamanUtama />
        <Kemampuan />
        <TentangSaya />
        <Proyek />
        <Sertifikat />
        <KontakKami />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
