import {React,useContext} from "react";
import { BsGear, BsPatchCheckFill } from "react-icons/bs";
import {
  experienceDataFrontend,
  experienceDataBackend,
  experienceOtherData,
} from "../../utils/common-utils";
import "./experience.css";
import { themeContext } from "../../context";
import { useState } from "react";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const levelHandle = (data) => {
    if (data == 1) {
      return "Advance";
    } else if (data == 2) {
      return "Intermediate";
    } else if ((data = 3)) {
      return "Beginner";
    } else {
      return "Familiar";
    }
  };
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };
  const boxStyle = {
    
    backgroundColor: isHover ? '' : '',
    color: isHover ? 'green' : '',
 };
  return (
    <div className="container" id="Experience" style={{background:darkMode?"var(--color-black)":""}}>
      <h1 style={{ textAlign: "center" }}>My Experience</h1>
      <div className="experience-container " onMouseEnter={handleMouseEnter} style={boxStyle}>
        <div className="experience-left " style={{boxStyle,background:darkMode?"black":"",color:darkMode?"var(--color-white)":"",border:darkMode?"2px solid var(--color-white)":""}}>
          <h3>Frontend Development</h3>
          <div className="experience-content" onMouseEnter={handleMouseEnter} >
            {experienceDataFrontend.map((data) => (
              <article className="experience-details">
                <img src={data.image} />
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">
                    {levelHandle(data.level)}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience-backend"  style={{boxStyle,background:darkMode?"black":"",color:darkMode?"var(--color-white)":"",border:darkMode?"2px solid var(--color-white)":""}} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <h3>Backend Development</h3>
          <div className="experience-content" >
            {experienceDataBackend.map((data) => (
              <article className="experience-details">
                <img src={data.image} />
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">
                    {levelHandle(data.level)}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="other-section">
        <h2 style={{ textAlign: "center" }}>Tools and Others</h2>
        <div className="other-section-child">
          {experienceOtherData.map((data) => (
            <div className="">
              <img
                src={data.image}
                alt=""
              />
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
