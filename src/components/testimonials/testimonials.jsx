import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper'
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar1,
    name: 'Tina Snow',
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ab eveniet ullam iusto vero quia in, iure ex neque atque! Placeat molestias eligendi provident fugiat quis? Consequatur aspernatur cupiditate eos illo optio eius, veniam repellendus Laude."
  },
  {
    avatar: Avatar2,
    name: 'Shatta Wale',
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ab eveniet ullam iusto vero quia in, iure ex neque atque! Placeat molestias eligendi provident fugiat quis? Consequatur aspernatur cupiditate eos illo optio eius, veniam repellendus Laude."
  },
  {
    avatar: Avatar3,
    name: 'Kwme Despite',
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ab eveniet ullam iusto vero quia in, iure ex neque atque! Placeat molestias eligendi provident fugiat quis? Consequatur aspernatur cupiditate eos illo optio eius, veniam repellendus Laude."
  },
  {
    avatar: Avatar4,
    name: 'Nana Ama McBrown',
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ab eveniet ullam iusto vero quia in, iure ex neque atque! Placeat molestias eligendi provident fugiat quis? Consequatur aspernatur cupiditate eos illo optio eius, veniam repellendus Laude."
  },
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable : true}}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="ProfileImage-1" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials