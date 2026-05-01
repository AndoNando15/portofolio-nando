import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HalamanUtama from './HalamanUtama';
import Kemampuan from './Kemampuan';
import KontakKami from './KontakKami';
import Proyek from './Proyek';
import Sertifikat from './Sertifikat';
import TentangSaya from './TentangSaya';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HalamanUtama />
        <Kemampuan />
        <TentangSaya />
        <Proyek />
        <Sertifikat />
        <KontakKami />
      </main>
      <Footer />
    </div>
  );
};
export default LandingPage;
