import React from 'react'
import './ImagePopup.scss'

const ImagePopup = ({path}) => {
  return (
    <img className='images_popup' src={path}/>
  )
}

export default ImagePopup