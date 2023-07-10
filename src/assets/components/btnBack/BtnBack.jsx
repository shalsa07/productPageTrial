import React from 'react'
import './BtnBack.scss'
import WorldBtn from '../worldCpmponents/worldBtn/WorldBtn'

//back
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import state from '../../stateManagement/store';


const backBtn={
  icons:<KeyboardBackspaceIcon className='icons'/>,name:'back',clickFtn:()=>{
    state.popup=false
    // console.log('click')
  },dblclickFtn:()=>{

  }
}

const BtnBack = () => {
  return (
    <div className='webgl_world_Container_Back'>
        <div className="webgl_world_btn_wrap">
            <WorldBtn item={backBtn}/>
        </div>
    </div>
  )
}

export default BtnBack