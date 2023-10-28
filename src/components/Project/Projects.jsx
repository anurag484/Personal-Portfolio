import React from "react";
import "./project.css";
import { projectsList } from "../../utils/common-utils";
import projectImg from "../../assets/img/hi.png"
const Projects = () => {
  return (
    <div className="container" id>
      <h1 style={{textAlign:"center"}}>My Recents Projects</h1>
      <div className="project_container">
        {projectsList.map(({id,image,title,github,demo}) => (
          <article key={id} className="project_items">
              <img src={projectImg} alt="" className="project_items-image" />
            <h3>{title}</h3>
            <div className="project_item_CTA">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary "
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
