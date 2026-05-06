import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectTemplate from '../components/ProjectTemplate';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/not-found" />;
  }

  return (
    <ProjectTemplate 
      title={project.title}
      tags={project.tags}
      items={project.items}
    />
  );
};

export default ProjectDetail;
