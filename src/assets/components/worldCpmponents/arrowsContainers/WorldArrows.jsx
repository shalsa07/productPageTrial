import React from 'react'
import './WorldArrows.scss'

//Arrows
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import WorldBtn from '../worldBtn/WorldBtn';

const leftArrow={
    icons:<ArrowCircleLeftIcon className='icons'/>
}

const rightArrow={
    icons:<ArrowCircleRightIcon className='icons'/>
}

const WorldArrows = () => {
  return (
    <div className='webgl_world_Arrows'>
        <div className="webgl_world_btn_wrap">
            {/* <ArrowCircleLeftIcon className='icons'/> */}
            <WorldBtn item={leftArrow}/>
        </div>
        <div className="webgl_world_btn_wrap">
            {/* <ArrowCircleRightIcon className='icons'/> */}
            <WorldBtn item={rightArrow}/>
        </div>
    </div>
  )
}

export default WorldArrows