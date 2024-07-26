import React, { useState } from 'react'
import Article from '../../../container/artical/Artical.jsx'
import {
  auli,
  badrinath,
  kedarnath,
  rishikesh,
  tungnath,
  chandrashila,
  mussoorie,
  nainital,
} from './import.js'
import './place.css'
import Model from '../../../container/Model/Model.jsx'

function Places() {
  const [showModel, setShowModel] = useState(null)

  const handleToggleModel = (value) => {
    setShowModel(value)
  }

  return (
    <div className='hotel section__padding' id='hotel'>
      <div className='hotel-heading'>
        <h1 className='gradient__text'>
          Places to visit in Uttarkhand <br /> Some important about the
          distination.
        </h1>
      </div>
      <div className='hotel-container'>
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(auli)}
        >
          <Article imgUrl={auli} date='Sep 26, 2021' text='Aoli' />
        </div>
        {showModel === auli && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img src={auli} alt='#' />
              <text className='about_places'>
                <h3>
                  Auli is a picturesque hill station in the Chamoli district of
                  Uttarakhand, India. It is famous for its stunning views of the
                  Himalayan peaks, including Nanda Devi, Kamet, Mana Parvat, and
                  Dunagiri. Auli is primarily known as a ski destination,
                  offering some of the best skiing slopes in India, with a high
                  altitude ensuring good snow conditions from late November to
                  March. The Auli Ski Resort is one of the highest ski resorts
                  in the world and hosts the National Championships of Skiing.
                  Apart from skiing, Auli is also a great place for trekking,
                  with several trekking routes offering breathtaking views of
                  the Himalayas.
                </h3>
              </text>
            </div>
          </Model>
        )}
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(badrinath)}
        >
          <Article imgUrl={badrinath} date='Sep 26, 2021' text='Badrinath' />
        </div>
        {showModel === badrinath && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img className='popup_img' src={badrinath} alt='1' />
              <text className='about_places'>
                <h3>
                  Badrinath is a sacred town located in the Chamoli district of
                  Uttarakhand, India. It is one of the four Char Dham pilgrimage
                  sites and is dedicated to Lord Vishnu. The town is situated
                  along the banks of the Alaknanda River, at an elevation of
                  about 3,100 meters (10,170 feet) above sea level. Badrinath is
                  surrounded by the majestic Himalayan peaks, making it a
                  breathtakingly beautiful and spiritually significant
                  destination for Hindus. The main attraction in Badrinath is
                  the Badrinath Temple, which is one of the holiest temples
                  dedicated to Lord Vishnu. The temple is believed to have been
                  established by Adi Shankaracharya in the 8th century. The
                  architecture of the temple is impressive, with a tall
                  structure and a colorful facade. The temple is open to
                  devotees only for six months every year, from late April to
                  early November, due to extreme weather conditions in the
                  region. Apart from the temple, Badrinath is also known for its
                  natural beauty and serene surroundings. The town is surrounded
                  by snow-capped mountains, lush greenery, and pristine rivers,
                  making it a perfect place for meditation and spiritual
                  retreats. Visitors to Badrinath can also enjoy trekking,
                  camping, and other adventure activities in the surrounding
                  areas.
                </h3>
              </text>
            </div>
          </Model>
        )}
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(kedarnath)}
        >
          <Article imgUrl={kedarnath} date='Sep 26, 2021' text='Kedarnath' />
        </div>
        {showModel === kedarnath && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img src={kedarnath} className='popup_img' alt='1' />
              <text className='about_places'>
                <h3>
                  Kedarnath is a sacred town located in the Rudraprayag district
                  of Uttarakhand, India. It is one of the Char Dham pilgrimage
                  sites and is dedicated to Lord Shiva. The town is situated at
                  an altitude of about 3,583 meters (11,755 feet) above sea
                  level, near the Mandakini River. Kedarnath is known for its
                  ancient Kedarnath Temple, which is one of the 12 Jyotirlingas
                  (sacred shrines of Lord Shiva) in India. The Kedarnath Temple
                  is believed to have been built by Adi Shankaracharya in the
                  8th century. The temple is located amidst the snow-capped
                  peaks of the Himalayas and is surrounded by stunning natural
                  beauty. Due to its high altitude, Kedarnath experiences harsh
                  weather conditions, and the temple is only accessible to
                  devotees from late April to early November. During the winter
                  months, the temple is closed, and the deity is worshipped at
                  Ukhimath, about 40 kilometers away. Apart from the temple,
                  Kedarnath is also known for its scenic beauty and is a popular
                  destination for trekking and adventure enthusiasts. The town
                  is surrounded by snow-clad mountains, lush meadows, and
                  crystal-clear rivers, making it a paradise for nature lovers.
                  The trek to Kedarnath is considered challenging but rewarding,
                  offering stunning views of the Himalayan peaks and a sense of
                  spirituality and peace.
                </h3>
              </text>
            </div>
          </Model>
        )}
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(rishikesh)}
        >
          <Article imgUrl={rishikesh} date='Sep 26, 2021' text='Rishikesh' />
        </div>
        {showModel === rishikesh && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img src={rishikesh} className='popup_img' alt='1' />
              <text className='about_places'>
                <h3>
                  Rishikesh is a vibrant town located in the Dehradun district
                  of Uttarakhand, India. Situated in the foothills of the
                  Himalayas along the banks of the Ganges River, Rishikesh is
                  renowned as a center for studying yoga and meditation. It is
                  often referred to as the "Yoga Capital of the World." The town
                  is also a gateway to the Char Dham pilgrimage sites of
                  Badrinath, Kedarnath, Gangotri, and Yamunotri. Rishikesh is a
                  place of spiritual significance, with numerous ashrams and
                  yoga centers offering courses and retreats for practitioners
                  of all levels. The famous Beatles Ashram, where the Beatles
                  stayed in the 1960s and composed much of the White Album, is
                  also located here.
                </h3>
              </text>
            </div>
          </Model>
        )}
      </div>
      <div className='hotel-container'>
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(tungnath)}
        >
          <Article imgUrl={tungnath} date='Sep 26, 2021' text='Tungnath' />
        </div>
        {showModel === tungnath && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img src={tungnath} alt='#' />
              <text className='about_places'>
                <h3>
                  Tungnath is one of the highest Shiva temples in the world and
                  is the highest of the five Panch Kedar temples located in the
                  Rudraprayag district, in the Indian state of Uttarakhand. The
                  Tungnath (literal meaning: Lord of the peaks) mountains form
                  the Mandakini and Alaknanda river valleys. It is located at an
                  altitude of 3,690 m (12,106 ft), and just below the peak of
                  Chandrashila. It has a rich legend linked to the Pandavas,
                  heroes of the Mahabharata epic
                </h3>
              </text>
            </div>
          </Model>
        )}
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(chandrashila)}
        >
          <Article
            imgUrl={chandrashila}
            date='Sep 26, 2021'
            text='Chandrashila'
          />
        </div>
        {showModel === chandrashila && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img className='popup_img' src={chandrashila} alt='1' />
              <text className='about_places'>
                <h3>
                  Chandrashila is the summit above Tungnath temple in India. It
                  literally means "Moon Rock". It is located at a height of
                  about 3,690 metres (12,110 ft) above sea level. This peak
                  provides views of the Himalayas, including Nandadevi, Trisul,
                  Kedar Peak, Bandarpunch and Chaukhamba peaks. There are
                  various legends associated with this place. According to one
                  such legend, this is where Lord Rama meditated after defeating
                  the demon-king Ravana. Another legend says that the moon-god
                  Chandra spent time here in penance.
                </h3>
              </text>
            </div>
          </Model>
        )}
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(mussoorie)}
        >
          <Article imgUrl={mussoorie} date='Sep 26, 2021' text='Mussoorie' />
        </div>
        {showModel === mussoorie && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img src={mussoorie} className='popup_img' alt='1' />
              <text className='about_places'>
                <h3>
                  Mussoorie is a hill station and a municipal board, near
                  Dehradun city in the Dehradun district of the Indian state
                  Uttarakhand. It is about 35 kilometres (22 mi) from the state
                  capital of Dehradun and 290 km (180 mi) north of the national
                  capital of New Delhi. The hill station is in the foothills of
                  the Garhwal Himalayan range. The adjoining town of Landour,
                  which includes a military cantonment, is considered part of
                  "greater Mussoorie", as are the townships Barlowganj and
                  Jharipan
                </h3>
              </text>
            </div>
          </Model>
        )}
        <div
          className='hotel-container_groupA'
          onClick={() => handleToggleModel(nainital)}
        >
          <Article imgUrl={nainital} date='Sep 26, 2021' text='Nainital' />
        </div>
        {showModel === nainital && (
          <Model onClose={() => handleToggleModel(null)}>
            <div>
              <img src={nainital} className='popup_img' alt='1' />
              <text className='about_places'>
                <h3>
                  Nainital is a town and headquarters of Nainital district of
                  Kumaon division, Uttarakhand, India. It is the judicial
                  capital of Uttarakhand, the High Court of the state being
                  located there and is the headquarters of an eponymous
                  district. It also houses the Governor of Uttarakhand,who
                  resides in the Raj Bhavan. Nainital was the summer capital of
                  the United Provinces.
                </h3>
              </text>
            </div>
          </Model>
        )}
      </div>
    </div>
  )
}

export default Places
