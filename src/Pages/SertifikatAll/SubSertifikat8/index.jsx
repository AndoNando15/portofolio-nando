import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatDaffodilsSpeakFirst from '/Sertifikat/sertifikat-daffodils-speak-first.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat8 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert8;

  return (
    <CertificateTemplate
      title="The Daffodils - Speak First"
      tags={['Speak First', 'Good', '29 August 2025']}
      image={sertifikatDaffodilsSpeakFirst}
      description={desc}
    />
  );
};

export default SubSertifikat8;
