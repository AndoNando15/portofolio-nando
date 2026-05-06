import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatMrPepsi from '/Sertifikat/sertifikat-mr-pepsi-impromptu.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat6 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert6;

  return (
    <CertificateTemplate
      title="Mr. Pepsi Upgrade - Impromptu Program"
      tags={['Impromptu', 'Intermediate', '25 December 2025']}
      image={sertifikatMrPepsi}
      description={desc}
    />
  );
};

export default SubSertifikat6;
