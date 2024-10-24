import {React,useContext} from 'react'
import { themeContext } from "../../context";

import {motion}  from "framer-motion"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai';
import emailjs from 'emailjs-com'

import { useRef } from 'react'


import "./contact.css"
const Contact = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_8e1zsmr', 'template_at9onar', form.current, 'wMLbyjADhqSucxFuX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
    <div className='container' id='Contact'>
      <h1 style={{textAlign:"center",color:darkMode?"var(--color-primary-variant)":""}}>Contact Me</h1>
      <div className="container contact_container">
        <motion.div initial={{translateX:"-30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}}  className="contact_options"style={{background:darkMode?"var(--color-primary-variant)":""}}>
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h5>anuragruwali484@gmail.com</h5>
            <a href="mailto:anuragruwali484@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
           <AiOutlineLinkedin className='contact_option-icon'/> {/* LinkedIn icon */}
           <h4>LinkedIn</h4>
           <a href="https://www.linkedin.com/in/anurag-ruwali-8b5439222/" target='_blank' rel='noreferrer'> 
           Connect with me on LinkedIn
           </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/919027811797?text=Hi, Anurag I Want to hire you, you are interested to join our team " target='_blank'>Send a message</a>
          </article>
        </motion.div>
        <form  ref={form} class="form" onSubmit={sendEmail} >
            <div class="formfield-container">
              <motion.input initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}}   class="formfield" type="text" name="name" id="Name" placeholder="Enter your name" />
              
              <motion.input initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} class="formfield" type="email" name="email" id="email" placeholder="Enter your email address" />
              
              <motion.input initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} class="formfield" type="text" name="subject" id="subject" placeholder="Enter your subject" />
              
              <motion.textarea initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} name="message" id="message" cols="30" rows="10" class="formfield formfield-textarea"
              placeholder="Enter your message"></motion.textarea>
              
            </div>

            <div>
            <motion.button initial={{translateX:"60%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} type="submit" class="btn btn-primary" id="submit"style={{background:darkMode?"var(--color-primary-variant)":"",border:darkMode?"2px solid var(--color-primary-variant)":""}}>
                Send Message<i class="submit-icon fa-solid fa-paper-plane"></i>
              </motion.button>
            </div>

          </form>
      </div>
      <div className="map">
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55709.54299771221!2d79.527936!3d29.228071099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729453264397!5m2!1sen!2sin" 
  width="600" 
  height="450" 
  style={{ border: 0 }} // Changed this line
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

     </div>
    </div>
  )
}

export default Contact