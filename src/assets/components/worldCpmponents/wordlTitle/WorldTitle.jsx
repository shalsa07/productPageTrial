import React, { useEffect } from 'react'
import Title1 from '../../title1/Title1'
import Text1 from '../../text1/Text1'
import { useSnapshot } from 'valtio'
import state from '../../../stateManagement/store'
import './WorldTitle.scss'

const WorldTitle = () => {
  const snap=useSnapshot(state)

  const title={
      title:'vision 3d'
  }
  useEffect(()=>{
    // modeTitle.title=snap.worldTitle
    title.title=snap.worldTitle
  },[snap.titleText,snap.worldTitle])

  // console.log(snap.title)

  return (
    <div className='webgl_world_Container_Title'>
        <h1 className='webgl_world_Container_main'>{title.title}</h1>
        <span className='webgl_world_Container_3dmode'>{snap.worldMode}</span>
        <span className='webgl_world_Container_text'>{snap.title}</span>
    </div>
  )
}

export default WorldTitle