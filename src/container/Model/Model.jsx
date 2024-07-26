import React from 'react'
import './Model.css'

const Model = ({ children, onClose }) => {


  return (
    <div className='model'>
      <div className='model-content'>
        {children}
        <button onClick={onClose} className='button'>Close</button>

      </div>
    </div>
  )
}

export default Model
