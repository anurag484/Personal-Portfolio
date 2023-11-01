import React, { useState } from "react";
import {
  AiOutlineBook,
  AiOutlineHome,
  AiOutlineUser,
  AiFillMessage,
  AiFillProject,
} from "react-icons/ai";
import "./navbar2.css";
const Navbar2 = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#Home"
        onClick={() => setActiveNav("#Home")}
        className={activeNav === "#Home" ? "active" : ""}
        title="Home"
      >
        <AiOutlineHome /> <span>Home</span>{" "}
      </a>
      <a
        href="#Experience"
        title="Experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook /> <span>Experience</span>{" "}
      </a>
      <a
        href="#Projects"
        title="Projects"
        onClick={() => setActiveNav("#Projects")}
        className={activeNav === "#Projects" ? "active" : ""}
      >
        <AiFillProject /> <span>Project</span>{" "}
      </a>
      <a
        href="#About "
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        title="About"
      >
        <AiOutlineUser /> <span>About</span>{" "}
      </a>
      <a
        href="#Contact"
        title="contact"
        onClick={() => setActiveNav("#message")}
        className={activeNav === "#message" ? "active" : ""}
      >
        <AiFillMessage /> <span>Contact</span>{" "}
      </a>
    </nav>
  );
};

export default Navbar2;
