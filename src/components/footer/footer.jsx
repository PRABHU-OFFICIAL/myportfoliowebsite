import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsGithub } from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Code@Litu</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/prabhu.litu"><FaFacebookF /></a>
        <a href="https://www.instagram.com/i_am_freak_treat/"><FiInstagram /></a>
        <a href="https://twitter.com/PrabhuLitu_2003"><IoLogoTwitter /></a>
        <a href="https://github.com/PRABHU-OFFICIAL"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Website By Prabhu . All rights reserved</small>
      </div>

    </footer>
  )
}

export default footer