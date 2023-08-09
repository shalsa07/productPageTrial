import React, { useEffect, useRef, useState } from 'react'
import './ImageContainer.scss'

const ImageContainer = ({path}) => {
  const refImage=useRef()
  const [hasntLoaded,setHasntLoaded]=useState(true)

  const handleImageLoaded=()=>{
    setHasntLoaded(false)
    // console.log('image loaded')
  }

  return (
    // (true ?
    //   <img ref={refImage} onLoad={handleImageLoaded} className='images' src={path}/>
    //   :
    //   )
      <>
        <img ref={refImage} style={{display:hasntLoaded ? 'none' : 'inline'}} onLoad={handleImageLoaded} className='images' src={path}/>
        {hasntLoaded && <div className="image_skeleton"/>}
      </>
  )
}

export default ImageContainer