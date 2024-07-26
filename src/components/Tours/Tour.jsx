import React from 'react'
import Artical from '../../container/artical/Artical.jsx'
import { hotel02 } from './import.js'
import './tour.css'

const Tour = () => (
  <div className='hotel section__padding' id='hotel'>
    <div className='hotel-heading'>
      <h1 className='gradient__text'>
        Packages and Guids, <br /> That you desire for your destination.
      </h1>
    </div>
    <h1 className='gradient__text'>Auli</h1>
    <br />
    <div className='hotel-container'>
      <div className='hotel-container_groupB'>
        <Artical
          imgUrl={hotel02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
         <Artical
          imgUrl={hotel02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Artical
          imgUrl={hotel02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div>
    </div>
    <br />
    <h1 className='gradient__text'>Auli</h1>
    <br />
    <div className='hotel-container'>
      <div className='hotel-container_groupB'>
        <Artical
          imgUrl={hotel02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
         <Artical
          imgUrl={hotel02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Artical
          imgUrl={hotel02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div>
    </div>
  </div>
)

export default Tour
