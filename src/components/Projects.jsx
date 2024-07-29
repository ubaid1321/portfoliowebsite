import React from 'react';
import './Projects.css';
import { projects } from '../../data'; 

const Projects = () => {
  return (
    <section className='projects'>
      <div className="section_wrapper projects_container">
        <div className="section_header center">
          <h2 className="primary_title">Projects</h2>
        </div>
        <div className="projects_grid">
          {projects.map((project) => (
            <div className="project_card" key={project.id}>
              <div className="project_image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project_content">
                <h3 className="project_title">{project.title}</h3>
                <p className="text_muted description">{project.data.description}</p>
                <button className="btn btn_primary" onClick={() => window.open(project.data.demoLink, "_blank")}>View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;