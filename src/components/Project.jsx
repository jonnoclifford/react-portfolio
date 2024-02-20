import React from 'react';

function Project({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img>{project.image}</img>
    </div>
  );
}

export default Project;
