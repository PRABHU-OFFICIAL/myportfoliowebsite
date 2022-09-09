import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__me-image">
          <img src={Me}  alt="About Image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Hey!, It's me Prabhu , I am an Open Source Full Stack Developer, currently I am a B-Tech student.
            You can check my contributions to the Open Source Community in GITHUB and even my Projects.
            You can connect with me by the links given at the Home Page and can collaborate your projects with me .
            Happy Coding 😊.
          </p>

          <a href="#contact" className='btn btn-primary'>Come Aside</a>

        </div>
      </div>
    </section>
  )
}

export default about