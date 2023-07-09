import React from 'react'
import './ImageContainer.scss'

const ImageContainer = ({path}) => {
  return (
    <img className='images' src={path}/>
  )
}

export default ImageContainer