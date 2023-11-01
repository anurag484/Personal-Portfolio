import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  experienceDataFrontend,
  experienceDataBackend,
  experienceOtherData,
} from "../../utils/common-utils";
import "./experience.css";
const Experience = () => {
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
  return (
    <div className="container" id="Experience">
      <h1 style={{ textAlign: "center" }}>My Experience</h1>
      <div className="experience-container ">
        <div className="experience-left">
          <h3>Frontend Development</h3>
          <div className="experience-content">
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
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
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
