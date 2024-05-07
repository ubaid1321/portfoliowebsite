import React from "react";
import project from "./Data/projects.json";

const Projects = () => {
  return (
    <div classNameName="container projects my-3" id="projects"
    data-aos="flip-right"
            data-aos-duration="1000">
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {project.map((data) => (
          <>
            <div key={data.id} className="my-3  col-md-4 col-lg-3 mx-3">
              <div className="card bg-dark text-light" style={{width: "18rem" ,border:"1px solid yellow",boxShadow:"5px 5px 10px 0 rgba(101,175,10,0.5)"}}>
                <div className="img d-flex justify-content-center align-items-center" >

                <img src={data.imageSrc} className="card-img-top" alt="..." style={{width:"250px",height:"200px",border:"2px solid yellow",borderRadius:"10px"}} />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">
                    {data.description}
                  </p>
                  <a href={data.demo} className="btn btn-primary my-3">
                   Demo
                  </a>
                  <a href={data.source} className="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
