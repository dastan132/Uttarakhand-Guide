import React from 'react'
import Artical from '../../container/artical/Artical.jsx'
import { hotel02, hotel03 } from './import.js'
import './hotels.css'

const Hotels = () => (
  <div className='hotel section__padding' id='hotel'>
    <div className='hotel-heading'>
      <h1 className='gradient__text'>
         <br /> We are hotelging about it.
      </h1>
    </div>
    <br />
    <h1>Auli</h1>
    <br />
    <div className='hotel-container'>
      <div className='hotel-container_groupB'>
        <Artical
          imgUrl={hotel02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Artical
          imgUrl={hotel03}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
         <Artical
          imgUrl={hotel03}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Artical
          imgUrl={hotel03}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div>
    </div>
    <br />
    <h1>dklfhn</h1>
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
          imgUrl={hotel03}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
        <Artical
          imgUrl={hotel03}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div>
    </div>
  </div>
)

export default Hotels
