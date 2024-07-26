import React from 'react'
import './artical.css'


const Artical = ({ imgUrl, date, text }) => {
  // const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div className='hotel-container_article'>
        <div className='hotel-container_article-image'>
          <img src={imgUrl} alt='hotel_image' />
        </div>
        <div className='hotel-container_article-content'>
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artical
