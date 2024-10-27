import {React,useContext} from 'react'
import { themeContext } from "../../context";

const CTA = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='ctn'>
        <a style={{color:darkMode?"var(--color-primary-variant)":"",border:darkMode?"2px solid var(--color-primary-variant)":""}} href={"https://drive.google.com/file/d/1SB-Cm6LXPbgM1HiY1Bgd8LlG054k2hBh/view?usp=sharing "} download="AnuragRuwaliResume" className='btn' target='_blank' >Download CV</a>
        {/* <a style={{background:darkMode?"var(--color-primary-variant)":"",border:darkMode?"2px solid var(--color-primary-variant)":""}} href="#contact" className='btn btn-primary'>Let's Talk</a> */}
    </div>
  )
}

export default CTA
