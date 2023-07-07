import React from 'react'
import './WorldBtn.scss'

const WorldBtn = ({item}) => {
  // console.log(item)
  return (
    <div className='webgl_world_WorldBtn' onClick={item?.clickFtn} onDoubleClick={item?.dblclickFtn}>
      <div className="webgl_world_WorldBtn_icons">
        {item?.icons}
      </div>
    </div>
  )
}

export default WorldBtn