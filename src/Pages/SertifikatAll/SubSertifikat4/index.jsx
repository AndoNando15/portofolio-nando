import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatAETS from '/Sertifikat/sertifikat-aets-score-report.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const SubSertifikat4 = () => {
  const { language } = useLanguage();
  const desc = translations[language].cert_details.cert4;

  return (
    <CertificateTemplate
      title="AETS Score Report"
      tags={['AETS', 'Overall Score 457', 'April 11, 2026']}
      image={sertifikatAETS}
      description={desc}
    />
  );
};

export default SubSertifikat4;
