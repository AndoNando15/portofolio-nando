import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

const SubProyek9 = () => {
  const projectItems = [
    {
      title: 'Halaman Utama',
      image: '/images/Proyek/pepsi-class/1.png'
    }
  ];

  return (
    <ProjectTemplate 
      title="Pepsi Class"
      tags={['Website', 'Company Profile', 'Education']}
      items={projectItems}
    />
  );
};

export default SubProyek9;
