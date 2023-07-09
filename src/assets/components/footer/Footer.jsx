import React from 'react'
import './Footer.scss'
import Logo from '../logo/Logo'

const date=new Date().getFullYear()

const Footer = () => {
  return (
    <div className='footer'>
        <Logo/>
        <span>copyright, {date}</span>
    </div>
  )
}

export default Footer