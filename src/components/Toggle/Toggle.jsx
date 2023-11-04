import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context'
import { useContext } from 'react'
import  './toggle.css'
const Toggle = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  const handleClick=()=>{
    theme.dispatch({type:'toggle'})
  } 
  return (
    <div className="toggle"onClick={handleClick} >
      <Moon style={{color:"black"}}/>
      <Sun style={{color:"rgb(232 230 227)"}}/>
      <div className="t-button" style={darkMode?{left:'2px'}:{right:'2px'}} >
      </div>
    </div>
  )
}

export default Toggle