import React from 'react'
import './BackBtn.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//back
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import state from '../../../stateManagement/store';

const backBtn={
  icons:<KeyboardBackspaceIcon className='icons'/>,name:'back',clickFtn:()=>{
    state.showWorldOptions=true
    state.showLevelsOptions=false
    state.showColoursOptions=false
    state.showRoomsOptions=false
    state.showRoofLevel=true
    // console.log('click')
  },dblclickFtn:()=>{
    state._3dModelState=false
    state.showAR360Options=false
    state.ArMode=false
    state.showWorldOptions=false
    state.maxDist=.5
    state.minDist=.1
    // state.maxPolarAngle=110,
    // state.minPolarAngle=60,
    state.camTarget=[0,0,-1]
    state.camPosition=[15,5,20]
    // console.log('click')
  }
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