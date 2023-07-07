import React from 'react'
import './BackBtn.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//back
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const backBtn={
    icons:<KeyboardBackspaceIcon className='icons'/>
}

const BackBtn = () => {
  return (
    <div className='webgl_world_Container_Back'>
        <div className="webgl_world_btn_wrap">
            <WorldBtn item={backBtn}/>
        </div>
    </div>
  )
}

export default BackBtn