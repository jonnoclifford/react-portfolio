import React from 'react';
import Project from './Project';

function ProjectGallery() {
  // Assuming projects is an array of project data
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' }
  ];

  return (
    <div>
      <h2>Project Gallery</h2>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;
