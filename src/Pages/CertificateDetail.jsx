import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CertificateTemplate from '../components/CertificateTemplate';
import { certificatesData } from '../data/certificatesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const CertificateDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const cert = certificatesData.find(c => c.id === id);

  if (!cert) {
    return <Navigate to="/not-found" />;
  }

  const desc = translations[language].cert_details[cert.descKey];

  return (
    <CertificateTemplate 
      title={cert.title}
      tags={cert.tags}
      image={cert.image}
      description={desc}
    />
  );
};

export default CertificateDetail;
