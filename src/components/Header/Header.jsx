import React from "react";
import { TypeAnimation } from "react-type-animation";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import myImg from "../../assets/img/mypic.png";
import glassesemoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import CTA from "./CTA";
import "./header.css";

const Header = () => {
  return (
    <div className=" container header">
      <div className="header-left">
        <div className="name">
          <h1>
            Hi! <b> Sameer</b>
          </h1>
          <b>I am a 
            {" "}
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                500,
                "Frontent Developer",
                500,
                "Backend Developer",
                500,
                "Software Engineer",
              ]}
              style={{color:"#4e45de"}}
              repeat={Infinity}
            />
            </b>
          <span>
            I’m a software developer and here is my portfolio website.
            <br /> Here you’ll learn about my journey as a Website Developer.
          </span>
        </div>
        <CTA />
        <div className="i-icons">
          <AiOutlineGithub style={{fontSize:"6rem",color:"var(--color-primary)"}}/>
          <AiOutlineInstagram style={{fontSize:"6rem",color:"var(--color-primary)"}}/>
          <AiOutlineLinkedin style={{fontSize:"6rem",color:"var(--color-primary)"}}/>
        </div>
      </div>
      <div className="header-right">
        <img src={myImg} alt="" />
         <img src={glassesemoji} alt=""/>
        <div style={{ top: "-4%", left: "68%" }} className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=96&id=108784&format=png"} title1="MERN Stack" title2={"Developer"} />
        </div>
        <div style={{ top: "18rem", left: "0rem" }} className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=160&id=gEUAVzkSqR4R&format=png"} title1="Web " title2={"Developer"} />
        </div>
        <div style={{ top: "-4%", right: "68%" }} className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=160&id=Vra58PN2KmI5&format=png"} title1="Frontend" title2={"Developer"} />
        </div>
        <div style={{ top: "18rem", right: "0rem" }} className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=96&id=hsPbhkOH4FMe&format=png"} title1="Backend Stack" title2={"Developer"} />
        </div>
        <div className="blur" style={{ background: "regb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem ",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
