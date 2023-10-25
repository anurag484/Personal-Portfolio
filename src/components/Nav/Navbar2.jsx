import React, { useState } from 'react'
import {AiOutlineBook, AiOutlineHome, AiOutlineUser,AiFillMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import './navbar2.css'
const Navbar2 = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
   <nav>
    <a href="#" className={activeNav==='#'?'active':''} onClick={()=>setActiveNav('#')}><AiOutlineHome/>Home</a>
    <a href="#about " onClick={()=>setActiveNav('#about') } className={activeNav==='#about'?'active':''}  ><AiOutlineUser/>About</a>
    <a href="#experience" title='Experence' onClick={()=>setActiveNav('#experience') } className={activeNav==='#experience'?'active':''}  ><AiOutlineBook/> Experience</a>
    <a href="#services" onClick={()=>setActiveNav('#services') } className={activeNav==='#services'?'active':''}  ><RiServiceLine/>Services</a>
    <a href="#contact" onClick={()=>setActiveNav('#message') } className={activeNav==='#message'?'active':''}  ><AiFillMessage/>Contact</a>
   </nav>
  )
}

export default Navbar2