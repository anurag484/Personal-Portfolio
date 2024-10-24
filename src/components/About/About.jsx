import {React,useContext} from "react";
import { themeContext } from "../../context";
import HtmlImg from "../../assets/img/htmlpng.png";
import cssImg from "../../assets/img/csspng.png";
import jsImg from "../../assets/img/jspng.png";
import reactImg from "../../assets/img/reactpng.png";
import tailwindImg from "../../assets/img/tailwindpng.png";
import bootstrap from "../../assets/img/bootstrappng.png";
import skillpng from "../../assets/img/skills.png";
import reduxImg from "../../assets/img/reduxpng.png";
import nodePng from "../../assets/img/nodejspng.png";
import mongoPng from "../../assets/img/mongodbpng.png";
import mysqlPng from "../../assets/img/mysqlpng.png";
import expressPng from "../../assets/img/expresspng.png";
import phpPng from "../../assets/img/phppng.png";
import javaPng from "../../assets/img/javapng.png";
import Nextjs from "../../assets/img/nextjs.png"
import ReduxImg from "../../assets/img/redux.png"
import {motion} from "framer-motion"

import "./about.css";
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 0.9, typeof: "spring" };

  return (
    <div className="container about" id="About">
      <h1 style={{color:darkMode?"var(--color-primary-variant)":"", textAlign: "center" }}>About Me</h1>
      <div  class="skills-container ">
        <motion.div initial={{translateX:"-20%"}} whileInView={{translateX:"0%"}} transition={transition} class="skill-container-left">
          <h2 style={{color:darkMode?"var(--color-primary-variant)":""}} class="skill-heading">
            <span class="caps">M</span>e and
            <br />
            MyTech Stack
          </h2>
          <div class="skill-subHeading">
            <p>
            Hello! I’m Anurag, a passionate Frontend Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js). With a keen eye for detail and a love for crafting seamless user experiences, I enjoy turning complex problems into simple, beautiful solutions. My journey in web development has equipped me with the skills to build responsive, high-performance applications that delight users and meet business needs.
            </p>
            <p>
            Recently, I’ve ventured into the exciting world of machine learning, where I’m exploring how to integrate intelligent features into my applications. This new focus allows me to leverage data to enhance user experiences, automate processes, and provide insightful analytics. I believe that the intersection of web development and machine learning opens up endless possibilities, and I’m eager to continue expanding my knowledge and expertise in this field.
            </p>
            <p>
            When I’m not coding, you can find me working on personal projects, or staying updated with the latest tech trends. I’m always on the lookout for opportunities to collaborate and create innovative solutions that push the boundaries of technology.
            </p>
          </div>
        </motion.div>
        <motion.div initial={{translateX:"20%"}} whileInView={{translateX:"0%"}} transition={transition} className="skill-container-right">
          <div className="con" style={{borderColor:darkMode?"var(--color-white)":""}} >
            <div className="icon">
              <div className="imgBox">
                <img src={HtmlImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={cssImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={reactImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={tailwindImg} alt="" />
              </div>
              <div className="imgBox" >
                <img src={bootstrap} alt="" />
              </div>
              <div className="imgBox" >
                <img src={jsImg} alt="" />
              </div>
              <div className="imgBox" >
                <img src={Nextjs} alt="" />
              </div>
              <div className="imgBox" >
                <img src={reduxImg} alt="" />
              </div>
              <div className="imgBox" >
                <img src={skillpng} alt="" />
              </div>
            </div>
            <div className="content">
              <div className="icon2">
                <div className="imgBox1">
                  <img src={nodePng} alt="" />
                </div>
                <div className="imgBox1" >
                  <img src={mysqlPng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={mongoPng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={expressPng} alt="" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
