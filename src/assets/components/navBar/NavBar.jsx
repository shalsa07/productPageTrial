import React from 'react'
import './NavBar.scss'
import UserDetails from '../userDetails/UserDetails'
import Logo from '../logo/Logo'
import SearchLanguage from '../searchLanguage/SearchLanguage'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="navBar_wrapper">
        <SearchLanguage/>
        {/* <Logo/> */}
        <div className="useDetails_wrapper"><UserDetails/></div>
      </div>
    </div>
  )
}

export default NavBar