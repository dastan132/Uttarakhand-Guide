import React from 'react'
import './explore.css'
import Flipper from './flipper/Flipper'
import './explore.css'
import {
  mussoorie1,
  nanithal1,
  mountian,
  lake,
  mussoorie,
  pooja,
  collage,
  yoga,
} from './import.js'

function Explore() {
  const cards = [
    {
      id: '1',
      variant: 'hover',
      src: mussoorie1,
      alt: 'image',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: '2',
      variant: 'hover',
      src: nanithal1,
      alt: 'image2',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: '3',
      variant: 'hover',
      src: mountian,
      alt: 'image3',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: '4',
      variant: 'hover',
      src: lake,
      alt: 'image4',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: '5',
      variant: 'hover',
      src: yoga,
      alt: 'image5',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: '6',
      variant: 'hover',
      src: mussoorie,
      alt: 'image6',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: '7',
      variant: 'hover',
      src: collage,
      alt: 'image7',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: '8',
      variant: 'hover',
      src: pooja,
      alt: 'image8',
      back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]
  return (
    <>
      <div className='explore section__padding' id='explore'>
        <div className='explore-content'>
          <h1 className='gradient__text'>Explore Uttarakhand</h1>
          <div className='container'>
            <div className='container_row'>
              {cards.map((card) => (
                <Flipper key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
