import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lituplayer@gmail.com</h5>
            <a href="mailto:lituplayer@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8117017978</h5>
            <a href="https://api.whatsapp.com/send?phone=8117017978" target='_blank'>Send a Message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default contact