import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import { FaGithub} from 'react-icons/fa'
import { BsInstagram} from 'react-icons/bs'

function headerSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default headerSocials