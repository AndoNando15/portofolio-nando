import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatDaffodilsGrading from '/Sertifikat/sertifikat-daffodils-grading.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat7 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert7;

  return (
    <CertificateTemplate
      title="The Daffodils"
      tags={['Grading', 'Level Reference', 'English Program']}
      image={sertifikatDaffodilsGrading}
      description={desc}
    />
  );
};

export default SubSertifikat7;
