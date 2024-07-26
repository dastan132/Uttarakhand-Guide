import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './app.css'
import Navbar from './container/Navbar/Navbar'
import Brand from './container/brand/Brand.jsx'
import Footer from './container/footer/Footer.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <div className='gradient__bg'>
            <Navbar />
          </div>
          <Brand />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
