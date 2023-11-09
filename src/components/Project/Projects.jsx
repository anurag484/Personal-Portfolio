import{ React,useContext} from "react";
import { themeContext } from "../../context";
import {motion} from "framer-motion"
import "./project.css";
import { projectsList } from "../../utils/common-utils";
const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="container" id="Projects">
      <h1 style={{textAlign:"center"}}>My Recents Projects</h1>
      <div className="project_container">
        {projectsList.map(({id,image,title,github,demo}) => (
          <motion.article initial={{scale:0.5}} whileInView={{scale:1}} transition={{duration:0.3}} key={id} className="project_items" style={{border:darkMode?"2px solid var(--color-white)":""}}>
              <img src={image} alt="" className="project_items-image" />
            <motion.h3 initial={{left:"40px"}}>{title}</motion.h3>
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
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
