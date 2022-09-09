import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from '../header/headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>  
        <h1>Prabhu</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>      
    </header>
  )
}

export default header