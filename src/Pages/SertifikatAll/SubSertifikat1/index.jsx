import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat1 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert1;

  return (
    <CertificateTemplate
      title="CODE CHAMPIONSHIP : Musywil Jawa Timur 2023"
      tags={['Juara 3', '22 Desember 2023']}
      image={sertifikatLomba}
      description={desc}
    />
  );
};

export default SubSertifikat1;
