import React from 'react'
import './home.css'
import {
  auli,
  badrinath,
  kedarnath,
  rishikesh,
  BGImage,
} from '../Home/place/import'
import Carousel from '../../container/Carousel/Carousel'
import Places from './place/Places'
import Explore from './explore/Explore'

const images = [auli, badrinath, kedarnath, rishikesh, BGImage]

const Home = () => {
  return (
    <>
      <div className='header section__padding' id='home'>
        <div className='header-content'>
          <h1 className='gradient__text'>
            Let us be your guide as we explore the rich culture, vibrant
            traditions, and warm hospitality of Uttarakhand.
          </h1>
        </div>
        <div className='header-image'>
          <Carousel images={images} />
        </div>
      </div>
      <Places />
     
      <Explore />
    </>
  )
}

export default Home
