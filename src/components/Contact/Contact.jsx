import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import emailjs from 'emailjs-com'

import { useRef } from 'react'


import "./contact.css"
const Contact = () => {
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
      <h1 style={{textAlign:"center"}}>Contact Me</h1>
      <div className="container contact_container">
        <div className="contact_options">
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
            <a href="https://api.whatsapp.com/send?phone=9412803911&text=Hi, Sameer I am " target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} class="form" onSubmit={sendEmail} >
            <div class="formfield-container">
              <input class="formfield" type="text" name="name" id="Name" placeholder="Enter your name" />
              
              <input class="formfield" type="email" name="email" id="email" placeholder="Enter your email address" />
              
              <input class="formfield" type="text" name="subject" id="subject" placeholder="Enter your subject" />
              
              <textarea name="message" id="message" cols="30" rows="10" class="formfield formfield-textarea"
              placeholder="Enter your message"></textarea>
              
            </div>

            <div>
            <button type="submit" class="btn btn-primary" id="submit">
                Send Message<i class="submit-icon fa-solid fa-paper-plane"></i>
              </button>
            </div>

          </form>
      </div>
    </div>
  )
}

export default Contact