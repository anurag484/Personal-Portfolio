import React from 'react'
import {FiInstagram,FiFacebook,FiTwitter} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <footer className=''>
      <a href="#" className='footer_logo'>Sameer Khan</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">testimonials</a></li>
        <li><a href="#">contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FiFacebook/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Sameer Khan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer