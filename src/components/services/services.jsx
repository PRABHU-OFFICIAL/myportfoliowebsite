import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Can Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn from scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build for every popular platforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>learn to write efficient lines of code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>get updated with latest Technologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use Figma, Adobe and other Liscenced products</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn for free</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Loose time schedule, Start anytime😊</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Android Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn from scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Get started with basic app dev</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>learn to write efficient lines of code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn to use High-Tech platforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Get started with Java for Android</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn to deploy your app in PlayStore</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn for free</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Loose time schedule, Start anytime😊</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn from scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build fully responsive websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>learn to write efficient lines of code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use React and other latest Technologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn Neumorphic Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use Web-3.O for development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use next Gen Tailwind CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn for free</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Loose time schedule, Start anytime😊</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services