import React from 'react'
import './project.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Face Detector App Using Firebase ML-KIT',
    github: 'https://github.com/PRABHU-OFFICIAL/Face-Detector-App-using-FireBase-ML-Kit',
    demo: 'link'
  },
  {
    id: 2,
    image: Img2,
    title: 'Covid 19 Tracker App',
    github: 'https://github.com/PRABHU-OFFICIAL/Covid_19_Tracker_App',
    demo: 'link'
  },
  {
    id: 3,
    image: Img3,
    title: 'Buy Me Now - Ecommerce App',
    github: 'https://github.com/PRABHU-OFFICIAL/BUYMENOW',
    demo: 'link'
  },
  {
    id: 4,
    image: Img4,
    title: 'News App Using News API',
    github: 'https://github.com/PRABHU-OFFICIAL/NewsApp',
    demo: 'link'
  },
  {
    id: 5,
    image: Img5,
    title: 'Python Personal Assistant',
    github: 'https://github.com/PRABHU-OFFICIAL/Python-Personal-Assistant',
    demo: 'link'
  },
  {
    id: 6,
    image: Img6,
    title: 'Animated Login Form',
    github: 'https://github.com/PRABHU-OFFICIAL/Simple-Animated-Login-Form',
    demo: 'link'
  }
]

const project = () => {
  return (
    <section id='project'>
      <h5>My Recent work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='project__item'>
                <div className="project__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="project__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default project