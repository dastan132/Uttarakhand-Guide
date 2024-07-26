import React from 'react'
import {
  telegram,

  whatsapp,
  facebook,
  instagram,
  twitter,
} from './ImageImport'
import './brand.css'

const Brand = () => {
  return (
    <div className='brand section__padding'>
      <div>
        <img src={telegram} alt='google' />
      </div>
      <div>
        <img src={whatsapp} alt='slack' />
      </div>
      <div>
        <img src={twitter} alt='atlassian' />
      </div>
      <div>
        <img src={facebook} alt='dropbox' />
      </div>
      <div>
        <img src={instagram} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand
