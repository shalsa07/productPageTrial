import React from 'react'
import Title1 from '../../title1/Title1'
import Text1 from '../../text1/Text1'
import { useSnapshot } from 'valtio'
import state from '../../../stateManagement/store'
import './WorldTitle.scss'

const titles={
    title:'vision 3d'
}
const text={
    title:'text'
}

const WorldTitle = () => {
    const snap=useSnapshot(state)
  return (
    <div className='webgl_world_Container_Title'>
        <Title1 item={titles}/>
        <Text1 item={text}/>
    </div>
  )
}

export default WorldTitle