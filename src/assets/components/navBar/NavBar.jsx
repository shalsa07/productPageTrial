import React from 'react'
import './NavBar.scss'
import UserDetails from '../userDetails/UserDetails'
import Logo from '../logo/Logo'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="navBar_wrapper">
        <Logo/>
        <div><UserDetails/></div>
      </div>
    </div>
  )
}

export default NavBar