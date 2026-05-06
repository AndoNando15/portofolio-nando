import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatVocabolary from '/Sertifikat/sertifikat-vocabolary.jpg';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat3 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert3;

  return (
    <CertificateTemplate
      title="Peace English Academy"
      tags={['Vocabulary 1', '25 Januari 2022']}
      image={sertifikatVocabolary}
      description={desc}
    />
  );
};

export default SubSertifikat3;
