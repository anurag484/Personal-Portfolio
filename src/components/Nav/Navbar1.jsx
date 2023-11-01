import React from "react";
import {ImCool} from 'react-icons/im'
import "./navbar1.css";
import Toggle from "../Toggle/Toggle";
const Navbar1 = () => {
  return (
    <div className="container" id="Navbar">
      <div className="nav-name"> <ImCool/>Sameer Khan</div>
      < Toggle />
    </div>
  );
};

export default Navbar1;
