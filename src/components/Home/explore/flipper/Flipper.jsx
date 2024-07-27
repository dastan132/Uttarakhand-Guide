import { useState } from 'react'
import cn from 'classnames'
import './flipper.css'

function Flipper({ card }) {
  const [showBack, setShowBack] = useState(false)

  function handleClick() {
    if (card.variant === 'click') {
      setShowBack(!showBack)
    }
  }
  return (
    <>
      <div className='flip-card-outer' onClick={handleClick}>
        <div
          className={cn('flip-card-inner', {
            showBack,
            'hover-trigger': card.variant === 'hover',
          })}
        >
          <div className='card front'>
            <p>
              <img
                src={card.src}
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '8px',
                }}
                alt='#'
              />
            </p>
          </div>

          <div className='card back'>
            <p
              style={{
                width: '300px',
                height: '300px',
              }}
            >
              {card.back}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flipper
