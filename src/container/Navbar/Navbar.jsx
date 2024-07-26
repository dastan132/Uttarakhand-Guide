import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Route, Routes, Link } from 'react-router-dom'
// import Initial from '../../assets/Initial.png'
import bird from '../../assets/7.svg'
import Hotels from '../../components/Hotels/Hotels'
import Tour from '../../components/Tours/Tour'
import Home from '../../components/Home/Home'

const Menu = () => (
  <>
    <p>
      <Link to='/'>Home</Link>
    </p>
    <p>
      <Link to='/hotels'>Hotels</Link>
    </p>
    <p>
      <Link to='/tour'>Tour</Link>
    </p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-links_logo'>
            <img src={bird} alt='logo' />
          </div>
          <div className='navbar-links_container'>
            <Menu />
          </div>
        </div>

        <div className='navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='navbar-menu_container scale-up-center'>
              <div className='navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/tour' element={<Tour />} />
      </Routes>
    </>
  )
}

export default Navbar
