import React from 'react'
import './BtnLike.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const BtnLike = () => {
  return (
    <div className='like_Container'>
      <div className="like_icon">
        <FavoriteBorderIcon className='icons'/> 
      </div>
      <span className='like_text'>like</span>
    </div>
  )
}

export default BtnLike