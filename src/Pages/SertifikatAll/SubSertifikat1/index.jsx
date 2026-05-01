import React from 'react';
import CertificateTemplate from '../../../components/CertificateTemplate';
import sertifikatLomba from '/Sertifikat/sertifikat-lomba_code_championship_juara_3.png';

const SubSertifikat1 = () => {
  const description = `Proud to share that I won 3rd place in the "Lomba Code Championship" during the Musyawarah Wilayah ke-V Permikomnas wilayah IX Jawa Timur on December 22, 2023!

This achievement is a testament to the hard work and determination I’ve put into coding, and I’m truly grateful for the opportunity to compete alongside brilliant minds in the field of informatics. A big thank you to the organizers and all participants for making this event memorable. Looking forward to more challenges and opportunities to grow in the tech community!`;

  return (
    <CertificateTemplate
      title="CODE CHAMPIONSHIP : Musywil Jawa Timur 2023"
      tags={['Juara 3', '22 Desember 2023']}
      image={sertifikatLomba}
      description={description}
    />
  );
};

export default SubSertifikat1;
