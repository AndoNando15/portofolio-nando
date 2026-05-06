import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatMahirBahasa from '/Sertifikat/sertifikat-mahir-bahasa-speaking-two.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat5 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert5;

  return (
    <CertificateTemplate
      title="Mahir Bahasa"
      tags={['Speaking Two', 'Intermediate', '25 August 2025']}
      image={sertifikatMahirBahasa}
      description={desc}
    />
  );
};

export default SubSertifikat5;
