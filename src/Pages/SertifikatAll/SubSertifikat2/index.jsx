import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatMagang from '/Sertifikat/sertifikat-magang.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat2 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert2;

  return (
    <CertificateTemplate
      title="Yayasan Transformasi Bhakti Negeri (TBN INDONESIA)"
      tags={['Revamp Website', 'IMM', '2024']}
      image={sertifikatMagang}
      description={desc}
    />
  );
};

export default SubSertifikat2;
