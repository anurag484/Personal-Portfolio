import {React,useContext} from 'react'
import { themeContext } from "../../context";

import {motion}  from "framer-motion"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
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
            <h5>sameerkhann9412@gmail.com</h5>
            <a href="mailto:sameerkhann9412@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineFacebook className='contact_option-icon'/>
            <h4>Messenger</h4>
            <a href="https://m.me/sameer" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=9412803911&text=Hi, Sameer I Want to hire you, you are interested to join our team " target='_blank'>Send a message</a>
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112827.72286443967!2d78.00627559254278!3d27.906074741674395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699441408090!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact