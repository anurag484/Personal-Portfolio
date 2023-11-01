import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import  './toggle.css'
const Toggle = () => {
  return (
    <div className="toggle" >
      <Moon/>
      <Sun/>
      <div className="t-button" style={{right:'2px'}} >
      </div>
    </div>
  )
}

export default Toggle