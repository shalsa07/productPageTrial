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
    state.showRoof=true
    state.maxDist=50
    state.minDist=20
    state.camTarget=[0,0,0]
    state.camPosition=[20,10,25]
    state.roomCord=[-6.79,0,14]
    // console.log('click')
  },dblclickFtn:()=>{
    state.showArrows=true
    state._3dModelState=false
    state.showAR360Options=false
    state.ArMode=false
    state.showWorldOptions=false
    state.maxDist=.05
    state.minDist=.01
    // state.maxPolarAngle=110,
    // state.minPolarAngle=60,
    state.camTarget=[1,0,-1]
    state.camPosition=[0,0,0]
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